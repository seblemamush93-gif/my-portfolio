import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects, pageHead } from "@/lib/portfolio";
export const Route = createFileRoute("/projects")({
  head: () =>
    pageHead(
      "Projects",
      "Explore Seble Mamush’s projects in accessible AI, machine learning, mobile development, and Java software.",
    ),
  component: Projects,
});
function Projects() {
  const [filter, setFilter] = useState("All projects");
  const filtered = projects.filter((p) => filter === "All projects" || p.category === filter);
  return (
    <div className="page-container">
      <div className="page-heading">
        <span className="eyebrow">IDEAS, TURNED INTO REALITY</span>
        <h1>
          My work<span className="text-primary">.</span>
          <br />
          <span className="muted-heading">Built with intention.</span>
        </h1>
        <p>
          A selection of projects across AI, web, mobile, and desktop.
          <br />
          Each one, a new problem to solve and a chance to grow.
        </p>
      </div>
      <div className="project-filters" aria-label="Filter projects">
        {["All projects", "AI & ML", "Web & Mobile", "Desktop"].map((item) => (
          <Button
            key={item}
            variant={filter === item ? "default" : "ghost"}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
            {item === "All projects" && <span className="filter-count">6</span>}
          </Button>
        ))}
        <span className="project-count">
          {filtered.length} projects <ArrowDownRight size={18} />
        </span>
      </div>
      <div className="project-grid project-list">
        {filtered.map((p) => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
