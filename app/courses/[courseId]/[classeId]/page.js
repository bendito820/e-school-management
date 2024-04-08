// "use client";
import GoBackButton from "@/app/components/GoBackButton";
import {
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Table,
  Text,
} from "@radix-ui/themes";

import { Link as AppLink } from "@/app/components";
import DBConnection from "@/app/config/db";
import Classe from "@/app/models/Classe";
import Group from "@/app/models/Group";
import AddNewGroupButton from "./AddNewGroupButton";

const ClasseIdPage = async ({ params }) => {
  await DBConnection();
  const classe = await Classe.findById(params.classeId);
  const groups = await Group.find({ classeId: params.classeId });
  return (
    <Box>
      <Flex justify={"between"} className="mb-3">
        <GoBackButton />
      </Flex>

      <Card className="max-w-xl">
        <Heading>{classe.name}</Heading>
        <Text>
          {new Intl.DateTimeFormat().format(new Date(classe.createdAt))}
        </Text>
        <Box>
          <Text>{classe.description}</Text>
        </Box>
      </Card>

      <Separator my="3" size="4" />

      <AddNewGroupButton classeId={params.classeId} />

      <Table.Root variant="surface" className="mt-5">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Classes</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell ">
              Descriçao
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Data de Criação
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {groups.map((classe) => (
            <Table.Row key={classe.id}>
              <Table.Cell>
                <AppLink href={`/courses/courseId/classId/${classe.id}`}>
                  {classe?.name}
                </AppLink>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {classe?.description}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {new Intl.DateTimeFormat().format(new Date(classe.createdAt))}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <div></div>
    </Box>
  );
};

export default ClasseIdPage;
