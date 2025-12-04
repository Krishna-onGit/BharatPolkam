import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ParallaxSection } from "./components/ParallaxSection";
import { AnimatedSection } from "./components/AnimatedSection";
import { PortfolioCard } from "./components/PortfolioCard";
import { SectionTitle } from "./components/SectionTitle";
import { motion } from "motion/react";

// Import all images from Figma
import imgImage38 from "figma:asset/84568252777cba889e4d91c23d7a6b438b519d74.png";
import imgImage7 from "figma:asset/b656f9b61b5dcba260451dad77bfda3d1f93ac18.png";
import imgImage9 from "figma:asset/5ecca780af5bb94db6806979c5ce2309fdf7b2d3.png";
import imgImage35 from "figma:asset/71d0e2d16778bfbd16edd98bc93bd8698a4b3dfb.png";
import imgImage25 from "figma:asset/8419c90a2ca283f7961030208e763efd33eaa73c.png";
import imgImage22 from "figma:asset/bf80dbe088e70f9ab721f134f3ae4b9560722341.png";
import imgImage13 from "figma:asset/71a4da47af443ba754e92eef261c18fd93b22c3b.png";
import imgImage15 from "figma:asset/49b46dafa38adcc7f89fd6aa11dbaec75f9ab18c.png";
import imgImage16 from "figma:asset/1027167598b798da9e3f76ddcda3bafcd7652368.png";
import imgImage14 from "figma:asset/25d476347a4ee4600a008162c0336102fcab4105.png";
import imgImage18 from "figma:asset/add77818516752023846d7fa94306958206ce445.png";
import imgImage24 from "figma:asset/8e649e49be51e80b45fdc2be8bd19294a2140f14.png";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Creative / Assistant Director Section */}
      <ParallaxSection
        id="direction"
        className="py-24 px-8 md:px-[120px]"
        speed={0.3}
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle title="Creative / Assistant Director" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PortfolioCard
              image={imgImage38}
              className="h-[513px]"
            />
            <PortfolioCard
              image={imgImage7}
              caption="From concept to final cut — directing short films, branded stories, and ad narratives."
              className="h-[513px]"
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Available for Direction - Acting - Casting Band */}
      <ParallaxSection className="py-24 px-8 md:px-[120px]" speed={0.4}>
        <div className="max-w-[1200px] mx-auto">
          <div className="relative h-[400px] md:h-[600px] rounded-[18px] overflow-hidden shadow-[0px_0px_30px_0px_rgba(120,120,120,0.1)]">
            <img
              src={imgImage9}
              alt="Available for Direction - Acting - Casting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80" />
            <div className="absolute inset-0 flex flex-col items-center justify-between p-6 md:p-12">
              <div className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-black/10 to-white/10 rounded-[24px] border border-white/20 backdrop-blur-md">
                <p className="font-['PP_Neue_Montreal:Book',sans-serif] text-xl md:text-[32px] text-white text-center">
                  Available for Direction - Acting - Casting
                </p>
              </div>
              <div className="max-w-4xl text-center">
                <p className="font-['PP_Neue_Montreal:Book',sans-serif] text-base md:text-[22px] text-white tracking-[-0.44px] mb-2">
                  On-set energy, candid moments, and the people behind the scenes. Every interaction builds a story.
                </p>
                <p className="font-['PP_Neue_Montreal:Book',sans-serif] text-base md:text-[22px] text-white tracking-[-0.44px]">
                  Where real conversations meet performance — capturing genuine moments from productions, sets, and storyrooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* On Screen Section */}
      <ParallaxSection
        id="performance"
        className="py-24 px-8 md:px-[120px]"
        speed={0.35}
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle title="On Screen" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PortfolioCard
              image={imgImage35}
              caption="Versatility and presence from subtle to striking — roles across film, series, ads, and music videos."
              className="h-[644px]"
            />
            <div className="flex flex-col gap-6">
              <PortfolioCard
                image={imgImage25}
                caption="Performance is instinct — shaped by character and camera."
                className="h-[310px]"
              />
              <PortfolioCard
                image={imgImage22}
                caption="A screen presence shaped by stillness, expression, and narrative flow."
                className="h-[310px]"
              />
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Casting / Production Management Section */}
      <ParallaxSection
        id="production"
        className="py-24 px-8 md:px-[120px]"
        speed={0.3}
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle title="Casting / Production management" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* First row */}
            <div className="md:col-span-7">
              <PortfolioCard
                image={imgImage13}
                className="h-[514px]"
              />
            </div>
            <div className="md:col-span-5">
              <PortfolioCard
                image={imgImage15}
                caption="Assembling the right faces. Building the right crew. Shaping every detail behind the scenes."
                className="h-[514px]"
              />
            </div>

            {/* Second row */}
            <div className="md:col-span-3">
              <PortfolioCard
                image={imgImage16}
                caption="Creative logistics — organizing teams, talent, and set workflows."
                className="h-[514px]"
              />
            </div>
            <div className="md:col-span-9">
              <PortfolioCard
                image={imgImage14}
                className="h-[514px]"
              />
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Final CTA Section */}
      <ParallaxSection className="py-24 px-8 md:px-[120px]" speed={0.25}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main heading for mobile */}
            <div className="md:hidden col-span-1 text-center mb-6">
              <h2 className="font-['Inter:Light',sans-serif] text-[40px] md:text-[56px] text-white leading-tight mb-6">
                Let's Work,<br />
                I'm In,<br />
                Let's Create
              </h2>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 rounded-full text-white font-['PP_Museum:Regular',sans-serif] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              >
                Contact Now
              </button>
            </div>

            <div className="md:col-span-6">
              <div className="relative h-[400px] md:h-[630px] rounded-[18px] overflow-hidden shadow-[0px_0px_30px_0px_rgba(120,120,120,0.1)] group">
                <img
                  src={imgImage18}
                  alt="Let's Work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-['Inter:Light',sans-serif] text-base md:text-[22px] text-white tracking-[-0.44px]">
                    Stills that reflect presence, texture, and natural style. Capturing moments off-set and off-guard.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="relative h-[400px] md:h-[630px] rounded-[18px] overflow-hidden shadow-[0px_0px_30px_0px_rgba(120,120,120,0.1)]">
                <img
                  src={imgImage24}
                  alt="I'm In"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-['Inter:Light',sans-serif] text-base md:text-[22px] text-white tracking-[-0.44px]">
                    Mood-led fashion shots. Exploring identity, styling, and cinematic energy through lens and lighting.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating CTA Text - Desktop only */}
            <div className="hidden md:flex md:col-span-3 items-center">
              <div className="text-center md:text-left">
                <h2 className="font-['Inter:Light',sans-serif] text-[56px] text-white leading-tight mb-8">
                  Let's Work,<br />
                  I'm In,<br />
                  Let's Create
                </h2>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 rounded-full text-white font-['PP_Museum:Regular',sans-serif] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Footer / About Section */}
      <section
        id="about"
        className="py-24 px-8 md:px-[120px] bg-black"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#111111] rounded-[18px] p-6 md:p-12 shadow-[0px_0px_30px_0px_rgba(120,120,120,0.1)] relative">
            {/* Vertical text on left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block">
              <p className="font-['PP_Neue_Montreal:Book',sans-serif] text-white text-2xl tracking-[0.2em] -rotate-90 whitespace-nowrap origin-center">
                KNOW ABOUT BHARAT
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Mobile title */}
              <h2 className="lg:hidden font-['PP_Neue_Montreal:Book',sans-serif] text-white text-3xl tracking-wider text-center mb-8">
                KNOW ABOUT BHARAT
              </h2>

              {/* Bio */}
              <p className="font-['Inter:Light',sans-serif] text-base md:text-[22px] text-white leading-relaxed md:leading-[37px]">
                I'm a Mumbai-based model and aspiring actor, passionate about visual storytelling and on-screen performance. My work focuses on capturing emotion, subtlety, and mood — whether in portrait sessions, editorial campaigns, or narrative film frames. I love experimenting with characters, expressions, and atmospheric lighting, constantly exploring new ways to reflect personality and presence.
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-4 md:gap-6 text-base md:text-[22px] text-white font-['Inter:Regular',sans-serif] tracking-[-0.44px]">
                <p>Age: 20–25</p>
                <p>Height: 5'9" – 6'0"</p>
                <p>Mumbai, India</p>
              </div>

              {/* Contact Info */}
              <div id="contact" className="space-y-4">
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-[22px] text-white tracking-[-0.44px]">
                  Let's Work Together
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6 text-base md:text-[22px] text-white font-['Inter:Regular',sans-serif] tracking-[-0.44px]">
                  <p>Email: yourmail@example.com</p>
                  <p>Phone: +91 99999 99999</p>
                </div>
              </div>

              {/* Footer text */}
              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-['Inter:Light',sans-serif] text-base md:text-[22px] text-white tracking-[-0.44px] text-center md:text-left">
                  © 2025 Bharat Polkam
                </p>
                <p className="font-['Inter:Light',sans-serif] text-base md:text-[22px] text-white tracking-[-0.44px] text-center md:text-right">
                  Designed with intention. Shot with emotion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}