"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCard = pathname === "/card";

  if (isCard) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
