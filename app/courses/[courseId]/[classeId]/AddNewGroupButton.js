"use client";

import React, { useState } from "react";
import { Dialog, Flex, Text, Button, TextField } from "@radix-ui/themes";
// import Classe from "@/app/models/Classe";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddNewGroupButton = ({ classeId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const saveClasse = async () => {
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

  return (
    <Dialog.Root>
      <Dialog.Trigger color="green">
        <Button>Nova Turma</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Nova Turma</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Adicionar nova Turma.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome
            </Text>
            <TextField.Input
              defaultValue={name}
              placeholder="Nome do Curso"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextField.Input
              defaultValue={description}
              placeholder="Descrição"
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

export default AddNewGroupButton;
