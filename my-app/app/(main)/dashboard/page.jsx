"use client";

import CreateAccountDrawer from "@/components/CreateAccountDrawer";
import AccountCard from "@/components/AccountCard";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import { getAccounts } from "./actions/dashboard";

export default function DashboardPage() {
    const { data: accountsResponse, loading, error, fn: fetchAccounts } = useFetch(getAccounts);

    const accounts = accountsResponse?.success ? accountsResponse.data : [];

    useEffect(() => {
        fetchAccounts();
    }, []);

    return (
        <div className="px-5">
            {/* Account Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {accounts?.length > 0 && accounts.map((account) => (
                    <AccountCard key={account.id} account={account} />
                ))}
                <CreateAccountDrawer>
                    <Card className="cursor-pointer border-dashed hover:shadow-md transition-shadow">
                        <CardContent className="flex flex-col items-center justify-center py-10">
                            <Plus className="h-10 w-10 mb-2 text-muted-foreground" />
                            <p className="text-sm font-medium">Add New Account</p>
                        </CardContent>
                    </Card>
                </CreateAccountDrawer>
            </div>
            {loading && <p>Loading accounts...</p>}
            {accountsResponse?.success === false && <p className="text-red-500">{accountsResponse.error}</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
