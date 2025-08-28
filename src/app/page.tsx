
import CtaBanner from "./home/CtaBanner";
import FeaturesRow from "./home/FeaturesRow";
import Hero from "./home/Hero";
import HowItWorks from "./home/HowItWorks";
import OurWork from "./home/OurWork";
import QuoteForm from "./home/QuoteForm";
import Services from "./home/Services";
import StatsStrip from "./home/StatsStrip";
import Testimonials from "./home/Testimonials";


export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-slate-900">
      <Hero />
      <FeaturesRow />
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
      <OurWork/>
      <Services />
      <HowItWorks />
      <StatsStrip />
      <Testimonials />
      <CtaBanner />
      
    </div>
  );
}
