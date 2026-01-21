import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";

export function ProfileModule() {
  return (
    <main>
      <Hero />
      <div className="px-12">
        <Profile />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
