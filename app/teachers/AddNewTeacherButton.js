"use client";

import React, { useState } from "react";
import { Dialog, Flex, Text, Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddNewTeacherButton = () => {
  const [name, setName] = useState("");
  const [email, setDescription] = useState("");
  const router = useRouter();

  const saveClasse = async () => {
    const data = {
      name: name,
      email: email,
    };

    try {
      await axios.post("/api/teachers", data);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger color="green">
        <Button>Adicionar Professor</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Novo Aluno</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Adicionar novo Professor.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome Completo
            </Text>
            <TextField.Input
              defaultValue={name}
              placeholder="Nome do aluno"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              email
            </Text>
            <TextField.Input
              defaultValue={email}
              placeholder="email"
              onChange={(e) => setDescription(e.target.value)}
            />
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

export default AddNewTeacherButton;
