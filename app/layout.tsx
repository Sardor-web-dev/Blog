import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import NavMenu from "@/components/NavMenu";

export const metadata: Metadata = {
  title: "Superblog",
  description: "The best blogging platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 font-sans text-gray-900">
        <SessionProvider session={session}>
          <NavMenu />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
