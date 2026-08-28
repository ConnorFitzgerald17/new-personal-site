"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

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
    title: "Iron Path",
    type: "Open-source gaming companion",
    description:
      "A living progress journal for Old School RuneScape iron accounts, with a Java RuneLite plugin connecting quests, item grinds, banked XP, and collection milestones to live account data.",
    scope: ["Next.js", "Java", "RuneLite plugin", "Data sync"],
    href: "https://www.ironpathosrs.com/",
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

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="ticker__group" aria-hidden={hidden || undefined}>
      {skillGroups.flatMap((group) =>
        group.skills.map((skill) => (
          <span className="ticker__item" key={`${group.label}-${skill}`}>
            {skill}
            <span className="ticker__star" aria-hidden="true">✦</span>
          </span>
        )),
      )}
    </div>
  );
}

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
    <>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <header className="site-nav">
        <div className="shell site-nav__inner">
          <a href="#top" className="monogram" aria-label="Connor Fitzgerald, home">
            CF<span className="dot-accent">.</span>
          </a>
          <nav className="site-nav__links" aria-label="Primary navigation">
            <a href="#profile">Profile</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="name">
          <p className="hero__kicker rise rise--1">
            Connor Fitzgerald
            <span aria-hidden="true">·</span>
            <span>Full-stack developer</span>
            <span aria-hidden="true">·</span>
            <span>Ontario, Canada</span>
          </p>

          <h1 className="hero__title rise rise--2" id="name">
            I design and build <em>useful web products.</em>
          </h1>

          <p className="hero__intro rise rise--3">
            From the first rough idea through interface, infrastructure,
            launch, and iteration.
          </p>

          <div className="hero__actions rise rise--4">
            <a className="btn btn--solid" href="#work">
              Selected work <ArrowDown aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker__track">
            <TickerGroup />
            <TickerGroup hidden />
          </div>
        </div>

        <section className="section shell" id="profile" aria-labelledby="profile-title">
          <div data-reveal>
            <p className="section__index">
              <span>(01)</span>
              <small>Professional profile</small>
            </p>
          </div>
          <div className="profile">
            <p className="profile__lead" id="profile-title" data-reveal>
              Product-minded developer with a bias toward clear interfaces,
              dependable systems, and <em>shipping the whole thing.</em>
            </p>
            <div className="profile__aside" data-reveal>
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
          </div>
          <div className="facts" data-reveal>
            <div className="fact">
              <span>Focus</span>
              <strong>Full-stack product development</strong>
            </div>
            <div className="fact">
              <span>Approach</span>
              <strong>Strategy → design → code → growth</strong>
            </div>
            <div className="fact">
              <span>Interests</span>
              <strong>AI, automation, games &amp; useful tools</strong>
            </div>
          </div>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section__head" data-reveal>
            <div>
              <p className="section__index">
                <span>(02)</span>
                <small>Selected work</small>
              </p>
              <h2 className="section__title" id="work-title">
                Projects &amp; <em>practice.</em>
              </h2>
            </div>
            <p className="section__note">
              A selection of live products, platforms, publications, and
              client-facing work.
            </p>
          </div>

          <div className="work-list">
            {work.map((item, index) => (
              <a
                className="work-row"
                data-reveal
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${item.title}`}
              >
                <span className="work-row__index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="work-row__type">{item.type}</p>
                  <h3>{item.title}</h3>
                  <p className="work-row__desc">{item.description}</p>
                  <p className="work-row__scope">{item.scope.join(" / ")}</p>
                </div>
                <span className="work-row__arrow"><ArrowUpRight aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="section shell" id="skills" aria-labelledby="skills-title">
          <div className="section__head" data-reveal>
            <div>
              <p className="section__index">
                <span>(03)</span>
                <small>Capabilities</small>
              </p>
              <h2 className="section__title" id="skills-title">
                Comfortable across the <em>stack.</em>
              </h2>
            </div>
            <p className="section__note">
              The goal is never to use every tool. It is to choose a sensible
              set, build cleanly, and leave the product easier to evolve.
            </p>
          </div>

          <div className="skill-list">
            {skillGroups.map((group, index) => (
              <article className="skill-row" data-reveal key={group.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.label}</h3>
                <ul className="tags" aria-label={`${group.label} skills`}>
                  {group.skills.map((skill) => (
                    <li className="tag" key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer shell" id="contact">
        <p className="section__index" data-reveal>
          <span>(04)</span>
          <small>Contact</small>
        </p>
        <p className="footer__prompt" data-reveal>
          Have a role, product, or difficult problem in mind?
        </p>
        <a
          className="footer__cta"
          href="https://www.linkedin.com/in/connor-fitz/"
          target="_blank"
          rel="noreferrer"
          data-reveal
        >
          Let&apos;s talk
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="footer__bottom">
          <p>Connor Fitzgerald · © {new Date().getFullYear()}</p>
          <div className="footer__social">
            <a href="https://github.com/connorfitzgerald17" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/connor-fitz/" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
          <a className="footer__top" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
