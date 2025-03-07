import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "School Management System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Theme>
          <NavBar />
          <div className="flex gap-5">
            <SideBar />
            <main className="p-5 flex-1">{children}</main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
