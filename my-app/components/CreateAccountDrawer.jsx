"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "@/app/lib/schema";
import { createAccount } from "@/app/(main)/dashboard/actions/dashboard";
import { toast } from "sonner";

export default function CreateAccountDrawer({ children }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
      balance: 0,
      isDefault: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await createAccount(data);
      if (result.success) {
        toast.success("Account created successfully");
        reset();
        setOpen(false);
      } else {
        toast.error(result.error || "Failed to create account");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Account</DrawerTitle>
        </DrawerHeader>

        <div className="px-4 py-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Account Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Account Name</label>
              <input
                placeholder="e.g. Main Bank"
                className="border rounded-md px-3 py-2"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Account Type */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Account Type</label>
              <select
                className="border rounded-md px-3 py-2"
                {...register("type")}
              >
                <option value="CURRENT">Current</option>
                <option value="SAVINGS">Savings</option>
              </select>
            </div>

            {/* Opening Balance */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Opening Balance</label>
              <input
                type="number"
                className="border rounded-md px-3 py-2"
                {...register("balance")}
              />
              {errors.balance && (
                <p className="text-sm text-red-500">
                  {errors.balance.message}
                </p>
              )}
            </div>

            {/* Default Account */}
            <div className="flex items-center gap-2">
              <input type="checkbox" {...register("isDefault")} />
              <span className="text-sm">Set as default account</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
