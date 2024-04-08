import { Box, Separator, Table } from "@radix-ui/themes";
import { Link as AppLink } from "../components";
import DBconnection from "../config/db";
import Course from "../models/Course";
import AddNewCourseButton from "./AddNewCourseButton";

const CoursesPage = async () => {
  await DBconnection();
  const courses = await Course.find();

  return (
    <section>
      <AddNewCourseButton />

      <Separator my="3" size="4" />

      <Box className="mt-5">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Curso</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Descrição
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Data de Criação
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {courses.map((course) => (
              <Table.Row key={course.id}>
                <Table.Cell>
                  <AppLink href={`/courses/${course.id}`}>
                    {course.name}
                  </AppLink>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {course.description}
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {new Intl.DateTimeFormat().format(new Date(course.createdAt))}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </section>
  );
};

export default CoursesPage;
