import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import QuoteForm from "@/components/QuoteForm";
import BookAppointment from "@/components/BookAppointment";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatbotPlaceholder from "@/components/ChatbotPlaceholder";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <QuoteForm />
        <BookAppointment />
        <Testimonials />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ChatbotPlaceholder />
    </>
  );
}
