import { seedTransactions } from "../../(main)/dashboard/actions/seed";

export async function GET() {
    const result = await seedTransactions();
    return Response.json(result);
}
