"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  Flex,
  Text,
  Button,
  TextField,
  Card,
  Box,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

import Student from "@/app/models/Student";

const AddStudentButton = ({ groupId, students }) => {
  const [name, setName] = useState("");
  // display them on the screen

  const saveClasse = async () => {
    return;
    const data = {
      name: name,
      description: description,
      classeId: classeId,
    };

    try {
      await axios.post("/api/groups", data);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const addStudentToGroup = async (studentId) => {
    const data = {
      groupId,
      studentId,
    };
    try {
      await axios.patch(`/api/groups/${groupId}`, data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Adicionar Aluno</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Adicionar estudante</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Adicionar novo estudante.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome do Aluno
            </Text>
            <TextField.Input
              defaultValue={name}
              placeholder="Pesquisar Aluno"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Alunos/Estudantes
            </Text>

            {students?.students?.map((student) => (
              <Card className="my-1" key={student._id}>
                <Box>
                  <Button
                    onClick={() => addStudentToGroup(student._id)}
                    variant="ghost"
                  >
                    +
                  </Button>
                </Box>
                <Box>
                  <Text>{student.name}</Text>
                  <div>
                    <Text>{student.email}</Text>
                  </div>
                </Box>
              </Card>
            ))}

            <></>
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={saveClasse}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddStudentButton;
