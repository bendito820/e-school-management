import { NextRequest, NextResponse } from "next/server";
import DBconnection from "@/app/config/db";
import Classe from "@/app/models/Classe";
import Group from "@/app/models/Group";

export async function POST(request) {
  const body = await request.json();
  await DBconnection();
  console.log(body);

  try {
    const newGroup = await Group.create(body);
    return NextResponse.json(newGroup, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
}
