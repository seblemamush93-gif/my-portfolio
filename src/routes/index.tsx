import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Code2,
  Smartphone,
  BrainCircuit,
  Terminal,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects, pageHead, portraitImages } from "@/lib/portfolio";

const portrait = {
  url: portraitImages.hero,
};

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Seble Mamush · Software Engineering Student",
      "Software engineering student and AI developer building thoughtful web, mobile, and intelligent applications. Explore Seble Mamush’s portfolio, projects, and CV.",
    ),
  component: Index,
});
function Index() {
  return (
    <>
      <section className="home-hero">
        <img
          className="hero-art"
          src={portrait.url}
          alt="Seble Mamush portrait"
          width={721}
          height={1280}
          fetchPriority="high"
        />
        <div className="hero-veil" />
        <div className="hero-content">
          <span className="eyebrow availability">
            <span className="status-dot" /> AVAILABLE FOR INTERNSHIPS & COLLABORATIONS
          </span>
          <p className="hero-intro">
            Hello, I’m Seble <span className="wave">✳</span>
          </p>
          <h1>
            Seble Mamush<span className="text-primary">.</span>
          </h1>
          <p className="hero-role">
            Software engineering student.
            <br />
            <em>AI & application developer.</em>
          </p>
          <p className="hero-description">
            Turning ideas into thoughtful digital experiences.
            <br />I build web, mobile, and AI-powered applications
            <br />
            with purpose, precision, and a little curiosity.
          </p>
          <div className="hero-buttons">
            <Button asChild>
              <Link to="/projects">
                Explore my work <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/cv">
                View my CV <ArrowDownRight />
              </Link>
            </Button>
          </div>
          <div className="hero-location">
            <MapPin size={13} /> Based in Ethiopia <span>·</span> Building for the world
          </div>
        </div>
      </section>
      <section className="expertise-strip">
        <span>THINGS I LOVE BUILDING</span>
        <div className="expertise-items">
          <div>
            <Code2 />
            Full-stack development
          </div>
          <div>
            <Smartphone />
            Mobile applications
          </div>
          <div>
            <BrainCircuit />
            AI & machine learning
          </div>
          <div>
            <Terminal />
            Thoughtful solutions
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A FEW THINGS I’VE BUILT</span>
            <h2>
              Selected projects<span>.</span>
            </h2>
          </div>
          <Link to="/projects">
            View all projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="project-grid">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
        </div>
      </section>
      <section className="home-about">
        <div>
          <span className="eyebrow">MORE THAN JUST CODE</span>
          <h2>
            A problem solver.
            <br />A lifelong learner.
          </h2>
        </div>
        <div>
          <p>
            I’m a fourth-year Software Engineering student at Mekdela Amba University, exploring the
            space where technology meets real human needs. From accessible AI to mobile
            applications, I build to make a difference.
          </p>
          <Link to="/about">
            Get to know me <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="home-cta">
        <h2>Have something in mind?</h2>
        <Button variant="outline" asChild>
          <Link to="/contact">
            Let’s build it together <ArrowUpRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
