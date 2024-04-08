import { Box, Separator, Table } from "@radix-ui/themes";
import { Link as AppLink } from "../components";
import DBconnection from "../config/db";
import Student from "../models/Student";
import AddNewStudentButton from "./AddNewStudentButton";

const StudentsPage = async () => {
  await DBconnection();
  const students = await Student.find();

  return (
    <section>
      <AddNewStudentButton />

      <Separator my="3" size="4" />

      <Box className="mt-5">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Email
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Data de Criação
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {students.map((student) => (
              <Table.Row key={student.id}>
                <Table.Cell>
                  <AppLink href={`/courses/${student.id}`}>
                    {student.name}
                  </AppLink>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {student.email}
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {new Intl.DateTimeFormat().format(
                    new Date(student.createdAt)
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </section>
  );
};

export default StudentsPage;
