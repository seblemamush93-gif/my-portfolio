import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, Code2, GraduationCap } from "lucide-react";
import { Portrait } from "@/components/portfolio/shell";
import { Button } from "@/components/ui/button";
import { skills, pageHead } from "@/lib/portfolio";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About",
      "Meet Seble Mamush, a software engineering student, developer, and volunteer technology trainer in Ethiopia.",
    ),
  component: About,
});
const skillLevels: Record<string, number> = {
  Languages: 90,
  "Frameworks & mobile": 85,
  "AI & machine learning": 80,
  "Databases & backend": 85,
  "Developer tools": 90,
};

function About() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <span className="eyebrow">A LITTLE ABOUT ME</span>
        <h1>
          Curiosity drives me.
          <br />
          <span className="muted-heading">Code is how I explore.</span>
        </h1>
      </div>
      <section className="about-layout">
        <div className="about-portrait">
          <Portrait large />
          <span className="portrait-caption">SEBLE MAMUSH · ETHIOPIA</span>
        </div>
        <div className="about-copy">
          <h2>
            Hi, I’m Seble<span className="text-primary">.</span>
          </h2>
          <p>
            I am a 4th-year Software Engineering student passionate about developing clean,
            efficient, and data-driven web and mobile applications. My technical background spans
            full-stack web development, mobile app development (Flutter), desktop software (Java
            GUI), and Machine Learning fundamentals (Python & Price Prediction Models).
          </p>
          <p>
            With practical experience building real-world projects—ranging from food delivery
            applications to student grade management systems—I thrive on solving complex problems
            through code.
          </p>
          <p>
            Beyond software engineering, I am an active tech volunteer and trainer who loves sharing
            programming knowledge with youth. I am eager to apply my technical and analytical skills
            to innovative engineering teams.
          </p>
          <Button asChild>
            <Link to="/cv">
              Explore my CV <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="values-row">
        <div>
          <GraduationCap />
          <h3>Learning with purpose</h3>
          <p>
            B.Sc. Software Engineering
            <br />
            Mekdela Amba University · 2021–2026
          </p>
        </div>
        <div>
          <Code2 />
          <h3>Building for people</h3>
          <p>
            Accessible AI, thoughtful interfaces,
            <br />
            and practical everyday solutions.
          </p>
        </div>
        <div>
          <Heart />
          <h3>Sharing what I know</h3>
          <p>
            Volunteer coding and digital skills trainer
            <br />
            for primary and high school students.
          </p>
        </div>
      </section>
      <section className="skills-section">
        <span className="eyebrow">MY TOOLKIT</span>
        <h2>
          Skills & technologies<span className="text-primary">.</span>
        </h2>
        <p className="toolkit-label">Skill levels &middot; self-assessed</p>
        <div className="skills-table">
          {skills.map(([category, ...items], index) => (
            <div className={`skill-row skill-tone-${index}`} key={category}>
              <div className="skill-category">
                <h3>{category}</h3>
                <span>{skillLevels[category ?? ""] ?? 85}%</span>
                <progress
                  aria-label={`${category} skill level`}
                  value={skillLevels[category ?? ""] ?? 85}
                  max={100}
                />
              </div>
              <div className="stack-tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
