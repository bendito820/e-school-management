// "use client";
import GoBackButton from "@/app/components/GoBackButton";
import {
  Box,
  Card,
  Flex,
  Heading,
  Table,
  Text
} from "@radix-ui/themes";

import { Link as AppLink } from "@/app/components";
import DBConnection from "@/app/config/db";
import Group from "@/app/models/Group";
import Student from "@/app/models/Student";
import AddStudentButton from "./AddStudentButton";

const GroupIdPage = async ({ params }) => {
  await DBConnection();

  const group = await Group.findById(params.groupId).populate("students");
  const students = await Student.find({ groupId: params.groupId });
  const allStudents = await Student.find();

  const data = { students: allStudents };

  return (
    <Box>
      <Flex justify={"between"} className="mb-3">
        <GoBackButton />
      </Flex>

      <Card className="max-w-xl">
        <Heading>{group.name}</Heading>
        <Text>
          {new Intl.DateTimeFormat().format(new Date(group.createdAt))}
        </Text>
        <Box>
          <Text>{group.description}</Text>
        </Box>
      </Card>

      <AddStudentButton groupId={group._id} students={data} />

      <Table.Root variant="surface" className="mt-5">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Alunos</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Contacto
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Data de Criação
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {group?.students.map((student) => (
            <Table.Row key={student._id}>
              <Table.Cell>
                <AppLink href={`/courses/courseId/${student.id}`}>
                  {student.name}
                </AppLink>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {student.email}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {new Intl.DateTimeFormat().format(student.createdAt)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default GroupIdPage;
