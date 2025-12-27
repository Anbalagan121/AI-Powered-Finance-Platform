import CreateAccountDrawer from "@/components/CreateAccountDrawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="px-5">
            {/* Account Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CreateAccountDrawer>
                    <Card className="cursor-pointer border-dashed hover:shadow-md transition-shadow">
                        <CardContent className="flex flex-col items-center justify-center py-10">
                            <Plus className="h-10 w-10 mb-2 text-muted-foreground" />
                            <p className="text-sm font-medium">Add New Account</p>
                        </CardContent>
                    </Card>
                </CreateAccountDrawer>
            </div>
        </div>
    );
}
