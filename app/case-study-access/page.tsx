import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PasswordGate } from "@/components/password-gate";

export const metadata: Metadata = {
  title: "Protected Work Access | Pia Anderson",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CaseStudyAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <main id="main-content" className="relative flex min-h-screen flex-col">
      <Navigation />
      <PasswordGate nextPath={next} />
      <Footer />
    </main>
  );
}
