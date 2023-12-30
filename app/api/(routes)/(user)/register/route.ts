import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, username, email, password } = data;

    // Check if a user with the given email exists
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return new NextResponse("You already have an account with this email", {
        status: 400,
      });
    }

    // If user doesn't exist, create a new user
    const newUser = await prisma.user.create({
      data: {
        name: name,
        username: username,
        email: email,
        password: password,
      },
    });

    return NextResponse.json({ user: newUser, success: true });
  } catch (error) {
    console.error("Error occurred:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
