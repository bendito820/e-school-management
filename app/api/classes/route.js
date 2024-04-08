import { NextRequest, NextResponse } from "next/server";
import DBconnection from "@/app/config/db";
import Classe from "@/app/models/Classe";

export async function POST(request) {
  const body = await request.json();
  await DBconnection();
  console.log(body);

  try {
    const newClasse = await Classe.create(body);
    return NextResponse.json(newClasse, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
}
