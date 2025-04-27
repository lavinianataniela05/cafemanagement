import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as z from "zod";
import bcrypt from "bcryptjs"; // Import bcryptjs for hashing

const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  number: z.string().min(1, "Number is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, number, password } = userSchema.parse(body);

    // step 1: check if email already exists
    const existingUserByEmail = await prisma.customer.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 400 }
      );
    }

    // step 2: hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // step 3: create user with hashed password
    const newUser = await prisma.customer.create({
      data: {
        nama: username,
        email: email,
        noTelp: number,
        password: hashedPassword, // Store the hashed password
      },
    });

    return NextResponse.json(
      {
        user: newUser,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Log the full error details for debugging
    console.error("Error during user creation:", error);

    // Provide the error details in the response for easier debugging
    return NextResponse.json(
      {
        user: null,
        message: "Something went wrong",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}
