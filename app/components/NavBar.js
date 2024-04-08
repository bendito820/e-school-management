"use client";

import { IoSchoolSharp } from "react-icons/io5";
import { Box, Tabs, Flex } from "@radix-ui/themes";
import Link from "next/link";

const NavBar = () => {
  return (
    <Flex
      align={"center"}
      justify={"between"}
      className="px-2 h-12 md:px-10 mb-5 border-b"
    >
      <Link href={"/"}>
        <IoSchoolSharp color="purple" size={38} />
      </Link>

      <Tabs.Root className="block">
        <Tabs.List>
          <Tabs.Trigger value="documents">
            <Link href={"/students"}>Alunos</Link>
          </Tabs.Trigger>
          <Tabs.Trigger value="account">
            <Link href={"/teachers"}>Professores</Link>
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </Flex>
  );
};

export default NavBar;
