import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Mail, Menu, Moon, Sun, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { email, github, portraitImages, telegram, youtube, whatsapp } from "@/lib/portfolio";
import { TelegramIcon, YoutubeIcon, WhatsappIcon } from "@/components/portfolio/social-icons";

const portrait = {
  url: portraitImages.about,
};

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
] as const;
export function PortfolioShell({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);
  function toggleTheme() {
    const value = !dark;
    setDark(value);
    document.documentElement.classList.toggle("dark", value);
    localStorage.setItem("portfolio-theme", value ? "dark" : "light");
  }
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <Link to="/" className="wordmark" aria-label="Seble Mamush home">
          seble<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              activeOptions={{ exact: true }}
              activeProps={{ className: "nav-active" }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Light theme" : "Dark theme"}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button variant="outline" asChild className="header-contact">
            <Link to="/contact">
              Let’s talk <ArrowUpRight />
            </Link>
          </Button>
          <Button
            className="menu-toggle"
            variant="ghost"
            size="icon"
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      {menu && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map(([label, path]) => (
            <Link key={path} to={path} onClick={() => setMenu(false)}>
              {label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>
      )}
      <main>{children}</main>
      <footer className="site-footer">
        <span className="eyebrow">LET’S STAY CONNECTED</span>
        <h2>
          Follow me on social media<span>.</span>
        </h2>
        <div className="social-links">
          <a
            href={telegram}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            title="Telegram"
            className="social-telegram"
          >
            <TelegramIcon size={20} />
          </a>
          <a
            href={youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="social-youtube"
          >
            <YoutubeIcon size={20} />
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="social-whatsapp"
          >
            <WhatsappIcon size={20} />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="social-github"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email Seble"
            title="Email"
            className="social-email"
          >
            <Mail size={20} />
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Seble Mamush · Built with <Heart size={13} /> and curiosity.
        </p>
        <p>Thoughtfully built. Always learning.</p>
      </footer>
    </div>
  );
}
export function Portrait({ large = false }: { large?: boolean }) {
  return (
    <div className={large ? "portrait portrait-large" : "portrait"}>
      <img src={portrait.url} alt="Seble Mamush portrait" width={408} height={941} loading="lazy" />
    </div>
  );
}
