import {
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Table,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

// import { useState } from "react";

import { Link as AppLink } from "@/app/components";

import DBconnection from "@/app/config/db";
import Classe from "@/app/models/Classe";
import Course from "@/app/models/Course";

import AddNewClasseButton from "./AddNewClasseButton";

const CourseIdPage = async ({ params }) => {
  await DBconnection();
  const course = await Course.findById(params.courseId);
  const classes = await Classe.find({ courseId: params.courseId });

  return (
    <Box>
      <Flex justify={"between"} className="mb-3">
        <Link
          className="flex justify-center items-center flex-row"
          href={"/courses"}
        >
          <FaChevronLeft /> <span> Voltar</span>
        </Link>
      </Flex>

      <Card className="max-w-xl">
        <Heading>{course.name}</Heading>
        <Text>
          {new Intl.DateTimeFormat().format(new Date(course.createdAt))}
        </Text>
        <Box>
          <Text>{course.description}</Text>
        </Box>
      </Card>

      <Separator my="3" size="4" />

      <AddNewClasseButton courseId={params.courseId} />

      <Table.Root variant="surface" className="mt-5">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Classes</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Descriçao
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Data de Criação
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {classes.map((classe) => (
            <Table.Row key={classe.id}>
              <Table.Cell>
                <AppLink href={`/courses/courseId/${classe.id}`}>
                  {classe.name}
                </AppLink>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {classe.description}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {new Intl.DateTimeFormat().format(classe.createdAt)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <div></div>
    </Box>
  );
};

export default CourseIdPage;
