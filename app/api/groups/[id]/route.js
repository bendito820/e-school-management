import { NextRequest, NextResponse } from "next/server";
import DBconnection from "@/app/config/db";
import Group from "@/app/models/Group";
import Student from "@/app/models/Student";

export async function PATCH(request) {
  await DBconnection();
  const { groupId, studentId } = await request.json();

  // Find the group
  const group = await Group.findById(groupId);

  // Check If it exists
  if (!group)
    return NextResponse.json(
      { message: `there is no group With id of ${groupId}` },
      { status: 404 }
    );

  // find Student and Check if it exists
  const student = await Student.findById(studentId);

  if (!student)
    return NextResponse.json(
      { message: `there is no student With id of ${studentId}` },
      { status: 404 }
    );

  // find If current student is alreay In the group
  let currentStudent = group.students.find(
    (id) => id.toString() === student._id.toString()
  );
  if (currentStudent)
    return NextResponse.json({ message: `student is already in the group` });

  // Add Student In the group
  group.students.push(studentId);

  await group.save();

  return NextResponse.json({ success: true }, { status: 200 });
}
