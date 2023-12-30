import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";
import JWT from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { email, password } = data;

    console.log("hello")
    // Validation
    if (!email || !password) {
      return new NextResponse("Email and password are required", {
        status: 400,
      });
    }

    // Check if a user with the given email exists
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user || password !== user.password) {
      return new NextResponse("Invalid email or password", {
        status: 404,
      });
    }

    const jwtSecret = process.env.JWT_SECRET;


    if (!jwtSecret) {
      // Handle the case where JWT secret is not defined
      return new NextResponse("JWT secret is not defined", { status: 500 });
    }

    const token = await JWT.sign({ _id: user.id }, jwtSecret, {
      expiresIn: "1d",
    });

    return NextResponse.json({ user: user, success: true,token:token });

  } catch (error) {
    console.error("Error occurred:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
