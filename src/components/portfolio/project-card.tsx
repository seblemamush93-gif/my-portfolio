import { useState } from "react";
import { ArrowUpRight, Check, GraduationCap, Calculator, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { type Project } from "@/lib/portfolio";
import "./project-card.css";

import accessvision from "@/assets/images/accessvision.jpg";
import signbridge from "@/assets/images/signbridge.jpg";
import food from "@/assets/images/food-app.jpg";
import house from "@/assets/images/data-project.jpg";

const imagery: Record<string, string> = { accessvision, signbridge, food, house };

function ChatArt() {
  return (
    <svg
      className="visual-svg"
      viewBox="0 0 1024 768"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Chat application preview"
    >
      <defs>
        <linearGradient id="chatbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6f6ef" />
          <stop offset="1" stopColor="#bfe5d4" />
        </linearGradient>
        <linearGradient id="chatscreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f4faf7" />
        </linearGradient>
        <filter id="chatshadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#0b4f3b" floodOpacity="0.28" />
        </filter>
      </defs>
      <rect width="1024" height="768" fill="url(#chatbg)" />
      <circle cx="120" cy="650" r="150" fill="#ffffff" opacity="0.28" />
      <circle cx="930" cy="110" r="110" fill="#ffffff" opacity="0.3" />
      <circle cx="860" cy="700" r="70" fill="#0f7b5f" opacity="0.12" />

      <path
        d="M430 140 C 520 40, 720 40, 795 246"
        fill="none"
        stroke="#0f7b5f"
        strokeWidth="4"
        strokeDasharray="10 12"
        strokeLinecap="round"
      />
      <circle cx="430" cy="140" r="9" fill="#0f7b5f" />
      <circle cx="795" cy="246" r="9" fill="#0f7b5f" />
      <rect x="566" y="46" width="116" height="38" rx="19" fill="#0f7b5f" />
      <text x="624" y="72" fontSize="17" fontWeight="700" fill="#ffffff" textAnchor="middle">
        socket
      </text>

      <rect x="56" y="84" width="104" height="56" rx="28" fill="#ffffff" opacity="0.96" />
      <circle cx="92" cy="112" r="6" fill="#0f7b5f" />
      <circle cx="108" cy="112" r="6" fill="#4fbf9a" />
      <circle cx="124" cy="112" r="6" fill="#9ad9c3" />

      <g filter="url(#chatshadow)">
        <rect x="120" y="150" width="600" height="390" rx="26" fill="#1f2937" />
      </g>
      <rect x="138" y="168" width="564" height="354" rx="12" fill="url(#chatscreen)" />
      <path d="M72 560 H768 L742 584 Q738 590 730 590 H110 Q102 590 98 584 Z" fill="#cfd8dc" />
      <rect x="360" y="560" width="120" height="12" rx="6" fill="#b4bec4" />

      <rect x="138" y="168" width="564" height="54" rx="12" fill="#0f7b5f" />
      <rect x="138" y="196" width="564" height="26" fill="#0f7b5f" />
      <circle cx="166" cy="195" r="14" fill="#ffffff" opacity="0.92" />
      <text x="190" y="202" fontSize="20" fontWeight="700" fill="#ffffff">
        Chat room
      </text>

      <rect x="138" y="222" width="150" height="300" fill="#f1f6f4" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="172" cy={264 + 64 * i} r="18" fill={["#0f7b5f", "#0a66c2", "#d97706"][i]} />
          <rect x="200" y={252 + 64 * i} width="78" height="10" rx="5" fill="#cfd8d3" />
          <rect x="200" y={270 + 64 * i} width="54" height="8" rx="4" fill="#e1e7e4" />
        </g>
      ))}

      <rect x="312" y="246" width="190" height="44" rx="22" fill="#eef1f4" />
      <text x="334" y="274" fontSize="17" fill="#2b3138">
        Hello there!
      </text>
      <rect x="470" y="304" width="210" height="44" rx="22" fill="#0f7b5f" />
      <text x="492" y="332" fontSize="17" fill="#ffffff">
        Hi! How are you?
      </text>
      <rect x="312" y="362" width="250" height="44" rx="22" fill="#eef1f4" />
      <text x="334" y="390" fontSize="17" fill="#2b3138">
        Connected to the server
      </text>
      <rect x="420" y="420" width="260" height="44" rx="22" fill="#0f7b5f" />
      <text x="442" y="448" fontSize="17" fill="#ffffff">
        Messages arrive instantly
      </text>
      <rect x="312" y="478" width="300" height="34" rx="17" fill="#f1f3f5" />
      <text x="330" y="500" fontSize="14" fill="#8a9099">
        Type a message...
      </text>
      <circle cx="650" cy="495" r="18" fill="#0f7b5f" />
      <path
        d="M642 495 H658 M651 487 L659 495 L651 503"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <g filter="url(#chatshadow)">
        <rect x="690" y="250" width="230" height="440" rx="38" fill="#111827" />
      </g>
      <rect x="702" y="266" width="206" height="408" rx="28" fill="#ffffff" />
      <rect x="770" y="276" width="70" height="14" rx="7" fill="#111827" />
      <rect x="702" y="302" width="206" height="46" fill="#0f7b5f" />
      <text x="724" y="332" fontSize="18" fontWeight="700" fill="#ffffff">
        Chat
      </text>
      <rect x="718" y="372" width="130" height="38" rx="19" fill="#eef1f4" />
      <text x="738" y="397" fontSize="15" fill="#2b3138">
        Hi!
      </text>
      <rect x="770" y="424" width="122" height="38" rx="19" fill="#0f7b5f" />
      <text x="790" y="449" fontSize="15" fill="#ffffff">
        Hello
      </text>
      <rect x="718" y="476" width="164" height="38" rx="19" fill="#eef1f4" />
      <text x="738" y="501" fontSize="15" fill="#2b3138">
        Online now
      </text>
      <rect x="800" y="528" width="92" height="38" rx="19" fill="#0f7b5f" />
      <text x="820" y="553" fontSize="15" fill="#ffffff">
        Sent
      </text>
      <rect x="718" y="618" width="136" height="34" rx="17" fill="#f1f3f5" />
      <circle cx="880" cy="635" r="16" fill="#0f7b5f" />
    </svg>
  );
}

function RegistrationArt() {
  const fields = [
    ["Full name", "Abebe Bikila"],
    ["Student ID", "STU/0123/21"],
    ["Department", "Software Engineering"],
    ["Email", "abebe@example.com"],
  ];
  return (
    <svg
      className="visual-svg"
      viewBox="0 0 1024 768"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Student registration preview"
    >
      <defs>
        <linearGradient id="regbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1e0" />
          <stop offset="1" stopColor="#f9d3a8" />
        </linearGradient>
        <filter id="regshadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#9a4d05" floodOpacity="0.26" />
        </filter>
      </defs>
      <rect width="1024" height="768" fill="url(#regbg)" />
      <circle cx="130" cy="650" r="160" fill="#ffffff" opacity="0.3" />
      <circle cx="920" cy="110" r="120" fill="#ffffff" opacity="0.3" />
      <circle cx="70" cy="140" r="10" fill="#d97706" opacity="0.5" />
      <circle cx="960" cy="440" r="12" fill="#16a34a" opacity="0.45" />
      <circle cx="610" cy="60" r="8" fill="#0a66c2" opacity="0.4" />
      <circle cx="540" cy="716" r="9" fill="#d6382f" opacity="0.4" />

      <g filter="url(#regshadow)">
        <rect x="160" y="110" width="440" height="560" rx="28" fill="#ffffff" />
      </g>
      <rect x="300" y="86" width="160" height="50" rx="16" fill="#b45309" />
      <circle cx="380" cy="100" r="8" fill="#fff3e0" />
      <text x="196" y="190" fontSize="28" fontWeight="800" fill="#3b2a14">
        Student Registration
      </text>
      <rect x="196" y="204" width="84" height="6" rx="3" fill="#d97706" />
      {fields.map(([label, value], i) => (
        <g key={label}>
          <text x="196" y={250 + 88 * i} fontSize="15" fontWeight="600" fill="#7a6a58">
            {label}
          </text>
          <rect
            x="196"
            y={260 + 88 * i}
            width="368"
            height="46"
            rx="12"
            fill="#fffaf4"
            stroke="#f0d9bd"
          />
          <text x="216" y={290 + 88 * i} fontSize="18" fill="#3b2a14">
            {value}
          </text>
        </g>
      ))}
      <rect x="196" y="594" width="368" height="56" rx="14" fill="#d97706" />
      <text x="380" y="629" fontSize="21" fontWeight="700" fill="#ffffff" textAnchor="middle">
        Register
      </text>

      <g transform="rotate(7 760 390)" filter="url(#regshadow)">
        <rect x="600" y="290" width="300" height="190" rx="22" fill="#ffffff" />
        <rect x="600" y="290" width="300" height="56" rx="22" fill="#d97706" />
        <rect x="600" y="322" width="300" height="24" fill="#d97706" />
        <text x="624" y="326" fontSize="18" fontWeight="800" fill="#ffffff" letterSpacing="2">
          STUDENT ID
        </text>
        <circle cx="660" cy="404" r="34" fill="#fde3c3" />
        <circle cx="660" cy="396" r="12" fill="#d97706" />
        <path d="M636 434 Q660 408 684 434 Z" fill="#d97706" />
        <rect x="716" y="382" width="140" height="12" rx="6" fill="#3b2a14" opacity="0.8" />
        <rect x="716" y="406" width="110" height="10" rx="5" fill="#c9b79f" />
        <rect x="716" y="426" width="130" height="10" rx="5" fill="#e3d6c4" />
      </g>

      <polygon points="700,150 800,110 900,150 800,190" fill="#3b2a14" />
      <path d="M740 172 V214 Q800 246 860 214 V172 L800 196 Z" fill="#5b3b16" />
      <line
        x1="900"
        y1="150"
        x2="900"
        y2="212"
        stroke="#d97706"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="900" cy="220" r="9" fill="#d97706" />

      <circle cx="610" cy="560" r="38" fill="#16a34a" stroke="#ffffff" strokeWidth="6" />
      <path
        d="M594 561 L606 573 L628 548"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <g transform="rotate(-35 790 610)">
        <rect x="690" y="597" width="190" height="26" rx="4" fill="#f59e0b" />
        <polygon points="690,597 650,610 690,623" fill="#fde3c3" />
        <polygon points="650,610 664,605 664,615" fill="#3b2a14" />
        <rect x="868" y="597" width="20" height="26" rx="4" fill="#ef4444" />
      </g>
    </svg>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  const image = imagery[project.id];
  return (
    <div className={`project-visual visual-${project.id}`}>
      {image ? (
        <img src={image} alt={`${project.name} preview`} width={1024} height={768} loading="lazy" />
      ) : project.id === "chat" ? (
        <ChatArt />
      ) : project.id === "registration" ? (
        <RegistrationArt />
      ) : (
        <div className="software-art">
          {project.id === "grades" ? (
            <>
              <GraduationCap size={48} />
              <div className="grade-sheet">
                <div className="grade-heading">Academic overview</div>
                {["Programming", "Mathematics", "Software design"].map((name, i) => (
                  <div key={name}>
                    <span>{name}</span>
                    <strong>{["A", "A\u2212", "B+"][i]}</strong>
                  </div>
                ))}
                <div className="grade-summary">Student Grade Management</div>
              </div>
            </>
          ) : (
            <>
              <Calculator size={42} />
              <div className="calculator-art">
                <div className="calculator-display">
                  128 + 64<strong>192</strong>
                </div>
                <div className="calculator-keys">
                  {[
                    "C",
                    "\u232b",
                    "%",
                    "\u00f7",
                    "7",
                    "8",
                    "9",
                    "\u00d7",
                    "4",
                    "5",
                    "6",
                    "\u2212",
                    "1",
                    "2",
                    "3",
                    "+",
                    "0",
                    ".",
                    "=",
                    "\u21b5",
                  ].map((key) => (
                    <span key={key}>{key}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
      <span className="concept-label">{project.planned ? "PROJECT CONCEPT" : "PROJECT"}</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className={`project-card project-${project.id}`}>
        <Button
          variant="ghost"
          className="project-image-button"
          onClick={() => setOpen(true)}
          aria-label={`View ${project.name}`}
        >
          <ProjectVisual project={project} />
        </Button>
        <div className="project-copy">
          <div className="project-meta">
            <span>{project.category}</span>
            <span>{project.planned ? "FEATURED \u00b7 FUTURE PROJECT" : "COMPLETED PROJECT"}</span>
          </div>
          <div className="project-title-row">
            <h3>{project.name}</h3>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(true)}
              aria-label={`Details for ${project.name}`}
              title="Project details"
            >
              <ArrowUpRight />
            </Button>
          </div>
          <p className={project.planned ? "project-state is-planned" : "project-state is-done"}>
            <span className="project-state-dot" />
            {project.planned ? "Planned project" : "Completed project"}
          </p>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          <div className="stack-tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-actions">
            <Button variant="ghost" className="project-detail-link" onClick={() => setOpen(true)}>
              Explore project <ArrowUpRight size={16} />
            </Button>
            {project.repo && (
              <a className="github-button" href={project.repo} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub repository <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </article>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={`project-dialog project-${project.id}`}>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
          <ProjectVisual project={project} />
          <h4>Key features</h4>
          <ul className="feature-list">
            {project.features.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
          <div className="stack-tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          {project.repo ? (
            <a className="github-button" href={project.repo} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub repository <ArrowUpRight size={16} />
            </a>
          ) : (
            <p className="link-note">
              {project.planned
                ? "Planned project. Repository coming soon."
                : "Repository link coming soon."}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
