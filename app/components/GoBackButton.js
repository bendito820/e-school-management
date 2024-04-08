"use client";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <Button
      color="gray"
      className="flex justify-center items-center flex-row"
      onClick={() => {
        router.back();
        router.refresh();
      }}
    >
      <FaChevronLeft /> <span> Voltar</span>
    </Button>
  );
};

export default GoBackButton;
