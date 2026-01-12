"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export default function AccountCard({ account }) {
    const { name, type, balance, isDefault } = account;

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

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{name}</CardTitle>
                <div className="flex items-center space-x-2">
                    {isDefault && <Badge variant="secondary">Default</Badge>}
                    <Badge variant="outline" className="flex items-center space-x-1">
                        {getTypeIcon(type)}
                        <span>{type}</span>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">${balance.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">
                    Current Balance
                </p>
            </CardContent>
        </Card>
    );
}