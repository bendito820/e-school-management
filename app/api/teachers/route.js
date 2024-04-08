import DBconnection from "@/app/config/db";
import Teacher from "@/app/models/Teacher";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  await DBconnection();

  try {
    const newStudent = await Teacher.create(body);
    return NextResponse.json(newStudent, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
}
