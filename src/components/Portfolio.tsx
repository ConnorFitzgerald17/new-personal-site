"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";

const work = [
  {
    title: "Bayline Digital",
    type: "Independent practice",
    description:
      "A web design and automation studio helping growing businesses look established, convert more visitors, and follow up without the manual scramble.",
    scope: ["Strategy", "Web design", "Development", "Automation"],
    href: "https://www.baylinedigital.com/",
  },
  {
    title: "AutoBlogWriter",
    type: "SaaS product",
    description:
      "An AI-powered publishing pipeline for React and Next.js applications that generates, formats, links, and publishes production-ready content.",
    scope: ["Product", "AI workflows", "SDK", "SEO automation"],
    href: "https://autoblogwriter.app/",
  },
  {
    title: "PermiPro",
    type: "GovTech platform",
    description:
      "Permit management software for municipalities, combining document analysis, application workflows, payments, permissions, and audit trails.",
    scope: ["Full stack", "AI analysis", "Workflows", "Compliance"],
    href: "https://www.permipro.io/en",
  },
  {
    title: "Coachly CRM",
    type: "Vertical SaaS",
    description:
      "An all-in-one operating system for independent coaches, covering leads, clients, sessions, invoices, analytics, and Google integrations.",
    scope: ["Next.js", "TypeScript", "MongoDB", "OAuth"],
    href: "https://coachlycrm.com",
  },
  {
    title: "Ottawa Burger Spot",
    type: "Editorial platform",
    description:
      "An independent local guide where two reviewers use one repeatable scorecard to rank Ottawa’s burgers, fries, service, and atmosphere.",
    scope: ["Editorial design", "Content system", "Local search", "Next.js"],
    href: "https://www.ottawaburgerspot.com/",
  },
  {
    title: "AI Dev Roundup",
    type: "Developer publication",
    description:
      "A concise weekly briefing that filters fast-moving AI news, tools, and production-ready resources for working developers.",
    scope: ["Curation", "SendGrid", "n8n", "Automation"],
    href: "https://www.aidevroundup.com/",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Accessibility"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "OAuth", "AWS S3"],
  },
  {
    label: "Product",
    skills: ["Product strategy", "UI systems", "Conversion", "Analytics", "A/B testing", "SEO"],
  },
  {
    label: "Automation",
    skills: ["AI workflows", "n8n", "Email systems", "Integrations", "Content pipelines", "Internal tools"],
  },
];

export function Portfolio() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const updateProgress = () => {
      const available = root.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? window.scrollY / available : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <main className="resume" id="top">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <header className="resume-nav">
        <a href="#top" className="monogram" aria-label="Connor Fitzgerald, home">CF</a>
        <p>Portfolio / Résumé</p>
        <nav aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
        </nav>
        <p className="resume-nav__edition">Selected work · 2026</p>
      </header>

      <section className="resume-hero" aria-labelledby="name">
        <div className="resume-hero__label hero-animate">
          <span>Full-stack developer</span>
          <span>Ontario, Canada</span>
        </div>

        <h1 id="name" aria-label="Connor Fitzgerald">
          <span className="name-line name-line--first">Connor</span>
          <span className="name-line name-line--last">Fitzgerald<span className="name-dot">.</span></span>
        </h1>

        <div className="resume-hero__foot hero-animate">
          <p>
            I design and build useful web products—from the first rough idea
            through interface, infrastructure, launch, and iteration.
          </p>
          <a href="#profile" className="down-link">
            Read résumé <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="profile-block" id="profile" aria-labelledby="profile-title">
        <aside className="section-aside" data-reveal>
          <p className="section-number">01</p>
          <p>Professional profile</p>
        </aside>
        <div className="profile-copy" data-reveal>
          <p className="profile-copy__lead" id="profile-title">
            Product-minded developer with a bias toward clear interfaces,
            dependable systems, and shipping the whole thing.
          </p>
          <div className="profile-copy__columns">
            <p>
              I work across product strategy, frontend, backend, integrations,
              and automation. That range lets me take ownership of a problem
              instead of handing it off at every layer.
            </p>
            <p>
              My work spans SaaS, municipal software, developer tools, local
              editorial products, and conversion-focused business websites.
              The common thread is practical software that earns its place.
            </p>
          </div>
          <div className="profile-facts">
            <div><span>Focus</span><strong>Full-stack product development</strong></div>
            <div><span>Approach</span><strong>Strategy → design → code → growth</strong></div>
            <div><span>Interests</span><strong>AI, automation, games & useful tools</strong></div>
          </div>
        </div>
      </section>

      <section className="work-block" id="work" aria-labelledby="work-title">
        <div className="work-heading" data-reveal>
          <aside className="section-aside">
            <p className="section-number">02</p>
            <p>Selected work</p>
          </aside>
          <div>
            <h2 id="work-title">Projects &amp;<br /><em>practice.</em></h2>
            <p>A selection of live products, platforms, publications, and client-facing work.</p>
          </div>
        </div>

        <div className="work-list">
          {work.map((item, index) => (
            <article className="work-row" data-reveal key={item.title}>
              <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Visit ${item.title}`}>
                <span className="work-row__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="work-row__title">
                  <p>{item.type}</p>
                  <h3>{item.title}</h3>
                </div>
                <p className="work-row__description">{item.description}</p>
                <ul className="work-row__scope" aria-label={`${item.title} focus areas`}>
                  {item.scope.map((value) => <li key={value}>{value}</li>)}
                </ul>
                <span className="work-row__arrow"><ArrowUpRight aria-hidden="true" /></span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-block" id="skills" aria-labelledby="skills-title">
        <aside className="section-aside section-aside--inverse" data-reveal>
          <p className="section-number">03</p>
          <p>Capabilities</p>
        </aside>
        <div className="skills-content">
          <div className="skills-intro" data-reveal>
            <h2 id="skills-title">Comfortable across<br />the <em>stack.</em></h2>
            <p>
              The goal is never to use every tool. It is to choose a sensible
              set, build cleanly, and leave the product easier to evolve.
            </p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <article className="skill-group" data-reveal key={group.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.label}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="resume-footer" id="contact">
        <div className="resume-footer__top" data-reveal>
          <aside className="section-aside section-aside--inverse">
            <p className="section-number">04</p>
            <p>Contact</p>
          </aside>
          <p className="resume-footer__prompt">Have a role, product, or difficult problem in mind?</p>
        </div>
        <a
          className="resume-footer__cta"
          href="https://www.linkedin.com/in/connor-fitz/"
          target="_blank"
          rel="noreferrer"
          data-reveal
        >
          Let&apos;s talk<span>↗</span>
        </a>
        <div className="resume-footer__bottom">
          <p>Connor Fitzgerald · © {new Date().getFullYear()}</p>
          <div>
            <a href="https://github.com/connorfitzgerald17" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/connor-fitz/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
