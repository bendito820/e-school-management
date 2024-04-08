import { Box, Separator, Table } from "@radix-ui/themes";
import { Link as AppLink } from "../components";
import DBconnection from "../config/db";
import Teacher from "../models/Teacher";
// import AddNewStudentButton from "./AddNewStudentButton";
import AddNewTeacherButton from "./AddNewTeacherButton";

const TeachersPage = async () => {
  await DBconnection();
  const teacher = await Teacher.find();

  return (
    <section>
      <AddNewTeacherButton />

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
            {teacher.map((student) => (
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

export default TeachersPage;
