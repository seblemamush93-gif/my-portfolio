import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Mail, MapPin, Copy, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { email, github, pageHead } from "@/lib/portfolio";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact",
      "Get in touch with Seble Mamush about software engineering internships, collaborations, and new ideas.",
    ),
  component: Contact,
});

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_KEY as string | undefined;

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const helper = document.createElement("textarea");
        helper.value = email;
        helper.setAttribute("readonly", "true");
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        document.execCommand("copy");
        document.body.removeChild(helper);
      }

      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("botcheck")) {
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!accessKey) {
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\n${message}`)}`;
      const mailLink = document.createElement("a");
      mailLink.href = mailtoUrl;
      mailLink.style.display = "none";
      document.body.appendChild(mailLink);
      mailLink.click();
      document.body.removeChild(mailLink);
      form.reset();
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email: senderEmail,
          message,
          subject: `Portfolio message from ${name}`,
          from_name: "Portfolio website",
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const notes: Record<Status, string> = {
    idle: "Messages are sent privately to my inbox. You can also contact me directly by email.",
    sending: "Sending your message...",
    sent: "Thank you! Your message was sent. I will reply by email soon.",
    mailto: "Your email app has been requested. Send your message there to complete your inquiry.",
    error: "Something went wrong. Please try again, or email me directly.",
  };

  return (
    <div className="page-container">
      <div className="page-heading">
        <span className="eyebrow">
          <span className="status-dot" /> OPEN TO OPPORTUNITIES
        </span>
        <h1>
          Great things start
          <br />
          with a <span className="text-primary">hello.</span>
        </h1>
        <p>
          An internship, a collaboration, or just an interesting idea?
          <br />
          I&rsquo;d love to hear from you.
        </p>
      </div>

      <section className="contact-layout">
        <div>
          <h2>Let&rsquo;s connect.</h2>

          <div className="contact-item">
            <span className="contact-icon contact-icon-mail">
              <Mail />
            </span>
            <div>
              <span>GMAIL</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <Button
              className="copy-action"
              variant="ghost"
              size="icon"
              aria-label="Copy email address"
              title="Copy email address"
              onClick={handleCopyEmail}
            >
              {copied ? <Check /> : <Copy />}
            </Button>
          </div>

          {copyError && <p role="alert">Please select and copy the email address above.</p>}

          <a className="contact-item" href={github} target="_blank" rel="noreferrer">
            <span className="contact-icon contact-icon-github">
              <Github />
            </span>
            <div>
              <span>GITHUB</span>
              <p>seblemamush93-gif</p>
            </div>
            <ArrowUpRight />
          </a>

          <div className="contact-item">
            <span className="contact-icon contact-icon-map">
              <MapPin />
            </span>
            <div>
              <span>BASED IN</span>
              <p>Ethiopia &middot; Open to remote collaboration</p>
            </div>
          </div>

          <div className="contact-note">
            <span className="status-dot" /> Open to internships &amp; meaningful projects
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>
            Say hello<span className="text-primary">.</span>
          </h2>
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />
          <div className="form-row">
            <label>
              Your name
              <input name="name" placeholder="Your full name" required maxLength={100} />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                maxLength={200}
              />
            </label>
          </div>

          <label>
            What&rsquo;s on your mind?
            <textarea
              name="message"
              placeholder="Tell me about your idea or opportunity..."
              required
              rows={6}
              maxLength={4000}
            />
          </label>

          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"} <ArrowUpRight />
          </Button>
          {status === "sent" ? (
            <div className="form-success" role="status" aria-live="polite">
              <CheckCircle2 />
              <div>
                <strong>Message sent successfully</strong>
                <span>Thank you! I will reply to your email soon.</span>
              </div>
            </div>
          ) : (
            <p className="form-note" aria-live="polite">
              {notes[status]}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
