"use client";

import { Button } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";
import { IoBookSharp } from "react-icons/io5";

const ButtonList = [
  { label: "Cursos", href: "/courses" },
  // { label: "Classes", href: "/classes" },
];

const SideBar = () => {
  const router = useRouter();
  let currentPath = usePathname();

  return (
    <section
      style={{
        width: 250,
        height: "100%",
        height: "100%",
        marginTop: 12,
        paddingLeft: 0,
      }}
      className="hidden md:block"
    >
      <div className="w-36 flex-col space-y-2">
        {ButtonList.map(({ href, label }) => (
          <Button
            key={href}
            style={{
              width: 250,
            }}
            className={`cursor-pointer `}
            color={currentPath.includes(href) ? "purple" : "gray"}
            variant="soft"
            onClick={() => router.push(href)}
          >
            <IoBookSharp /> {label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
