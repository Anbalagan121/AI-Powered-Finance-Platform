import { seedTransactions, seedWithRetry } from "@actions/seed";

export async function GET() {
    try {
        const result = await seedWithRetry();
        return Response.json(result);
    } catch (error) {
        console.error("Failed to seed after retries:", error);
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
