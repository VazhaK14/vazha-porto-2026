import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";

export function ProfileModule() {
  return (
    <main>
      <Hero />
      <div className=" px-6 md:px-12">
        <Profile />
        <Experience />
        <Projects />
        <ContactMe />
      </div>
    </main>
  );
}
