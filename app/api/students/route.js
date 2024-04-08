import { NextRequest, NextResponse } from "next/server";
import DBconnection from "@/app/config/db";
import Classe from "@/app/models/Classe";
import Course from "@/app/models/Course";
import Student from "@/app/models/Student";

export async function POST(request) {
  const body = await request.json();
  await DBconnection();

  try {
    const newStudent = await Student.create(body);
    return NextResponse.json(newStudent, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  await DBconnection();

  const students = await Student.find();

  return NextResponse.json({ students }, { status: 200 });
}
