import { lazy, Suspense } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Shared/hero";

// Lazy load components that are below the fold
const AboutMe = lazy(() => import("../components/Shared/AboutMe"));
const Skills = lazy(() => import("../components/Shared/Skills"));
const Services = lazy(() => import("../components/Shared/Services."));
const Qualification = lazy(() => import("../components/Shared/Qualification"));
const Portfolio = lazy(() => import("../components/Shared/Portfolio"));
const Contact = lazy(() => import("../components/Shared/Contact"));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
  </div>
);

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Qualification />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
