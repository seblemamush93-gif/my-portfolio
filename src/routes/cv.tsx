import { createFileRoute } from "@tanstack/react-router";
import { Save, MapPin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { email, github, portraitImages, skills, pageHead } from "@/lib/portfolio";

export const Route = createFileRoute("/cv")({
  head: () =>
    pageHead(
      "CV",
      "View and save Seble Mamush's curriculum vitae, education, technical skills, projects, and volunteering experience.",
    ),
  component: CV,
});

const cvProjects = [
  {
    name: "AccessVision AI (Planned project)",
    stack: ["Python", "OpenCV", "TensorFlow", "Text-To-Speech"],
    text: "Planned AI-powered assistive application that will analyze real-time video scenes and recognize objects to convert visual data into descriptive voice updates for visually impaired users.",
  },
  {
    name: "SignBridge AI (Planned project)",
    stack: ["Python", "MediaPipe", "OpenCV", "Deep Learning"],
    text: "Planned machine-learning translation system that will convert sign language gestures into real-time text and speech to bridge communication gaps.",
  },
  {
    name: "Food Delivery Application",
    stack: ["React", "Vite", "Node.js", "PostgreSQL"],
    text: "Built a full-stack food delivery application with menu browsing, cart management, user authentication, multiple payment methods, order status tracking, and live chat with the delivery rider.",
  },
  {
    name: "Chat Application",
    stack: ["Java", "Java Swing", "Socket Programming", "MySQL (XAMPP)"],
    text: "Built a real-time desktop chat application using Java Swing and socket programming, with a MySQL database through XAMPP.",
  },
  {
    name: "Student Registration System",
    stack: ["HTML", "CSS", "Java", "XAMPP"],
    text: "Developed a student registration system using HTML, CSS, and Java on XAMPP for registering students and keeping their information organized.",
  },
  {
    name: "House Price Prediction System",
    stack: ["Python", "Pandas", "Scikit-Learn"],
    text: "Implemented regression models to analyze real estate features and accurately predict housing values.",
  },
  {
    name: "Student Grade Management System",
    stack: ["Java", "PHP", "MySQL", "Swing"],
    text: "Designed a desktop/web hybrid system for managing student records, automated grade calculations, and generating academic reports.",
  },
  {
    name: "Java Smart Calculator",
    stack: ["Java", "Swing GUI"],
    text: "Created a desktop calculator with advanced expression evaluation and custom single-digit backspace undo logic.",
  },
];

type CvFormat = { url: string; filename: string; description: string; mime: string; ext: string };

const CV_PDF: CvFormat = {
  url: "/Seble-Mamush-CV.pdf",
  filename: "Seble-Mamush-CV.pdf",
  description: "PDF document",
  mime: "application/pdf",
  ext: ".pdf",
};

function triggerDownload(file: CvFormat) {
  const link = document.createElement("a");
  link.href = file.url;
  link.download = file.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function saveCv(file: CvFormat) {
  // Chrome / Edge: let the visitor choose where to save the file.
  const picker = (window as any).showSaveFilePicker;
  if (typeof picker === "function") {
    try {
      const response = await fetch(file.url);
      const blob = await response.blob();
      const handle = await picker({
        suggestedName: file.filename,
        types: [{ description: file.description, accept: { [file.mime]: [file.ext] } }],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (error) {
      if ((error as DOMException)?.name === "AbortError") return; // cancelled
    }
  }
  // Other browsers: normal download.
  triggerDownload(file);
}

function CV() {
  return (
    <div className="page-container cv-page">
      <div className="section-heading no-print">
        <div>
          <span className="eyebrow">EXPERIENCE &amp; EDUCATION</span>
          <h1>
            My curriculum vitae<span className="text-primary">.</span>
          </h1>
        </div>
        <Button onClick={() => saveCv(CV_PDF)}>
          <Save /> Save as PDF
        </Button>
      </div>

      <article className="cv-document">
        <header className="cv-header">
          <div className="cv-photo-wrap">
            <img className="cv-photo" src={portraitImages.cv} alt="Seble Mamush portrait" />
          </div>
          <div className="cv-headline">
            <h2>Seble Mamush</h2>
            <p>Software Engineering Student &middot; AI &amp; Application Developer</p>
            <div className="cv-contacts">
              <span className="cv-badge">
                <MapPin /> Ethiopia
              </span>
              <a className="cv-badge" href={`mailto:${email}`}>
                <Mail />
                {email}
              </a>
              <a className="cv-badge" href={github} target="_blank" rel="noreferrer">
                <Github />
                seblemamush93-gif
              </a>
            </div>
          </div>
        </header>

        <section>
          <h3>PROFESSIONAL SUMMARY</h3>
          <p>
            Motivated and passionate fourth-year Software Engineering student with a strong
            foundation in AI systems, mobile app development, and full-stack software development.
            Proven track record of building computer vision applications, machine learning models,
            and cross-platform mobile apps. Seeking a Software Engineering / AI Internship
            opportunity to contribute to innovative real-world projects, solve complex challenges,
            and grow through collaboration and professional mentorship.
          </p>
        </section>

        <section>
          <h3>EDUCATION</h3>
          <div className="cv-entry">
            <div>
              <h4>Mekdela Amba University</h4>
              <p>B.Sc. in Software Engineering</p>
              <p>
                Key highlights: Strong academic standing, active participant in university tech
                workshops and community outreach initiatives.
              </p>
            </div>
            <span>
              2021 &ndash; Present
              <br />
              Expected graduation: 2026
            </span>
          </div>
        </section>

        <section>
          <h3>TECHNICAL SKILLS</h3>
          {skills.map(([category, ...items]) => (
            <p key={category}>
              <strong>{category}: </strong>
              {items.join(", ")}
            </p>
          ))}
        </section>

        <section>
          <h3>FEATURED PROJECTS</h3>
          {cvProjects.map((p) => (
            <div className="cv-project" key={p.name}>
              <h4>{p.name}</h4>
              <p>{p.text}</p>
              <span>{p.stack.join(" | ")}</span>
            </div>
          ))}
        </section>

        <section>
          <h3>LEADERSHIP &amp; COMMUNITY INVOLVEMENT</h3>
          <h4>Volunteer Technology Trainer &mdash; University Community Outreach</h4>
          <p>
            Taught core programming fundamentals and digital literacy skills to primary and high
            school students.
          </p>
        </section>

        <section>
          <h3>CORE COMPETENCIES &amp; SOFT SKILLS</h3>
          <p>Analytical Thinking &amp; Problem Solving</p>
          <p>Software Debugging &amp; Performance Optimization</p>
          <p>Team Collaboration &amp; Agile Communication</p>
          <p>Fast Learner &amp; Adaptable to New Tech Stacks</p>
        </section>

        <section>
          <h3>CERTIFICATIONS &amp; ACHIEVEMENTS</h3>
          <p>Java Programming Certification (Udacity &amp; Online Learning Platforms)</p>
          <p>
            Active Contributor to University Software Development Workshops &amp; Tech Initiatives
          </p>
        </section>
      </article>
    </div>
  );
}
