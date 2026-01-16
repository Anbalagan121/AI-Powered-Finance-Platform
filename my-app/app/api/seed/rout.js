import { seedTransactions } from "@/actions/seed";
export async function Get(){
    const result =await seedTransactions()
    return Response.json(result);
}