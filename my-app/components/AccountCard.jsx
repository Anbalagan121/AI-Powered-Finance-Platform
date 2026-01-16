"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { TrendingUp, DollarSign } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { updateDefaultAccount } from "@/app/(main)/dashboard/actions/update-default";
import { toast } from "sonner";

export default function AccountCard({ account }) {
    const { id, name, type, balance, isDefault } = account;

    const getTypeIcon = (type) => {
        switch (type) {
            case "CURRENT":
                return <DollarSign className="h-4 w-4" />;
            case "SAVINGS":
                return <TrendingUp className="h-4 w-4" />;
            default:
                return <DollarSign className="h-4 w-4" />;
        }
    };
    const{
        loading:updateDefaultLoading,
        fn:updateDefaultFn,
        data:updatedAccount,
        error,
    }=useFetch(updateDefaultAccount);
const handleDefaultChange=async(event)=>{
    event.preventDefault();
if(isDefault){
    toast.warning("You need atleast 1 default account");
    return;

}
await updateDefaultFn(id);
};
useEffect(() => {
    if (updatedAccount?.success) {
        toast.success("Default account updated Successfully");
    }
}, [updatedAccount, updateDefaultLoading]);
useEffect(() => {
    if (error) {
        toast.error(error.message || "Failed to Update default account");
    }
}, [error, updatedAccount, updateDefaultLoading]);
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{name}</CardTitle>
                <Switch checked={isDefault}
                onClick={handleDefaultChange}
                disabled={updateDefaultLoading}
                />
                <div className="flex items-center space-x-2">
                    {isDefault && <Badge variant="secondary">Default</Badge>}
                    <Badge variant="outline" className="flex items-center space-x-1">
                        {getTypeIcon(type)}
                        <span>{type}</span>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">₹{balance.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">
                    Current Balance
                </p>
            </CardContent>
        </Card>
    );
}