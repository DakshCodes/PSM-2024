import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { id } = data;
        const shop = await prisma.shops.findUnique({
            where: {
                userId: id,
            },
        });

        return NextResponse.json({ shop });
    } catch (error) {
        console.error("Error occurred:", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
