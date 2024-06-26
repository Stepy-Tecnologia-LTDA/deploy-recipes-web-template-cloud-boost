import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faqs } from "@/components/Faqs";
import { Feedbacks } from "@/components/Feedbacks";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { Resources } from "@/components/Resources";
import { USP } from "@/components/USP";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Resources />
      <USP />
      <Feedbacks />
      <Plans />
      <Faqs />
      <About />
      <Contact />
    </>
  );
}
