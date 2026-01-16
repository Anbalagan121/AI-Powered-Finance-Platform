import React from "react";
import { getAccountwithTransactions } from "@/app/(main)/dashboard/actions/accounts";
import { notFound } from "next/navigation";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const AccountsPage = async ({ params }) => {
    const accountData = await getAccountwithTransactions(params.id);
    if (!accountData) {
        notFound();
    }
    const account = accountData;
    return (
        <div className="space-y-8 px-5">
            <div>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize">
                    {account.name}
                </h1>
                <p className="text-muted-foreground">
                    {account.type.charAt(0).toUpperCase() + account.type.slice(1).toLowerCase()} Account
                </p>
                <div className="text-right pb-2">
                    <div className="text-xl sm:text-2xl font-bold">
                        ₹{parseFloat(account.balance).toFixed(2)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {account._count.transactions} Transactions
                    </p>
                </div>
            </div>
            {/* Transactions Table */}
            {account.transactions && account.transactions.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Transactions</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {account.transactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell>
                                        {new Date(transaction.date).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>{transaction.description}</TableCell>
                                    <TableCell className="capitalize">{transaction.category}</TableCell>
                                    <TableCell>
                                        <Badge variant={transaction.type === "INCOME" ? "default" : "secondary"}>
                                            {transaction.type}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className={`text-right ${transaction.type === "INCOME" ? "text-green-600" : "text-red-600"}`}>
                                        {transaction.type === "INCOME" ? "+" : "-"}₹{parseFloat(transaction.amount).toFixed(2)}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{transaction.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default AccountsPage;