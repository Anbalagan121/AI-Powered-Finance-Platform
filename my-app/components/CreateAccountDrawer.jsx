"use client";

import { useState } from "react";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
} from "@/components/ui/drawer";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "../app/lib/schema";

export default function CreateAccountDrawer({ children }) {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            name: "",
            type: "CURRENT",
            balance: "",
            isDefault: false,
        },
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        reset();
        setOpen(false);
    };

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {children}
            </DrawerTrigger>

            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Create New Account</DrawerTitle>
                    <DrawerDescription>
                        <div className="px-4 py-4">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Account Name
                                    </label>

                                    <input
                                        id="name"
                                        placeholder="e.g., Main Checking"
                                        className="border rounded-md px-3 py-2"
                                        {...register("name")}
                                    />

                                    {errors.name && (
                                        <p className="text-sm text-red-500">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-2 rounded-md"
                                >
                                    Create Account
                                </button>

                            </form>
                        </div>
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
}
