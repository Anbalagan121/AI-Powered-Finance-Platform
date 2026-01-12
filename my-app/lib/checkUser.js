import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return null;
    }

    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (existingUser) return existingUser;

    const email = user.emailAddresses?.[0]?.emailAddress;
    if (!email) return null;

    const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

    return await db.user.create({
      data: {
        clerkUserId: user.id,
        email,
        name,
        imageUrl: user.imageUrl ?? "",
      },
    });
  } catch (error) {
    console.error("checkUser error:", error);
    return null;
  }
};
