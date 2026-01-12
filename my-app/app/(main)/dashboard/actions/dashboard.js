"use server";
import {db} from "@/lib/prisma";
import {auth, currentUser} from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeAccount = (obj) => {
    const serialized = { ...obj };
    if (obj.balance) {
        serialized.balance = obj.balance.toNumber();
    }
    return serialized;
};

const getOrCreateUser = async () => {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    let user = await db.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (user) return user;

    // Create user
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("User not authenticated");

    const email = clerkUser.emailAddresses?.[0]?.emailAddress;
    if (!email) throw new Error("Email not found");

    const name = `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim();

    user = await db.user.create({
        data: {
            clerkUserId: userId,
            email,
            name,
            imageUrl: clerkUser.imageUrl ?? "",
        },
    });

    return user;
};

export async function getAccounts() {
    try {
        const user = await getOrCreateUser();
        const accounts = await db.account.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'desc' }
        });
        const serializedAccounts = accounts.map(serializeAccount);
        return { success: true, data: serializedAccounts };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function createAccount(data) {
    try {
        const user = await getOrCreateUser();
        const balanceFloat = parseFloat(data.balance);
        if (isNaN(balanceFloat)) {
            throw new Error("Invalid balance amount");
        }
        const existingAccounts = await db.account.findMany({
            where: { userId: user.id },
        });
        const shouldBeDefault = existingAccounts.length === 0 ? true : data.isDefault;
        if (shouldBeDefault) {
            await db.account.updateMany({
                where: { userId: user.id, isDefault: true },
                data: { isDefault: false },
            });
        }
        const account = await db.account.create({
            data: {
                ...data,
                balance: balanceFloat,
                userId: user.id,
                isDefault: shouldBeDefault,
            }
        });
        const serializedAccount = serializeAccount(account);
        revalidatePath("/dashboard");
        return { success: true, data: serializedAccount };
    } catch (error) {
        throw new Error(error.message);
    }
}