"use client";

import { useState } from "react";
import {
  FolderOpen,
  Search,
  GitBranch,
  Settings,
  Code,
  User,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function IDELayout() {
  const [activeTab, setActiveTab] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsFolderOpen, setProjectsFolderOpen] = useState(false);

  const sidebarItems = [
    { id: "explorer", icon: FolderOpen, label: "EXPLORER" },
    { id: "search", icon: Search, label: "SEARCH" },
    { id: "git", icon: GitBranch, label: "SOURCE CONTROL" },
    { id: "extensions", icon: Settings, label: "EXTENSIONS" },
  ];

  const tabs = [{ id: "about", label: "about.tsx", icon: User }];

  const projects = [
    {
      id: "coachly-crm",
      title: "Coachly CRM",
      description: `A specialized Customer Relationship Management platform designed to empower independent coaches and consultants by streamlining their entire business workflow.
        <br />
        <br />
        Key features include:
        <ul className="list-disc font-mono text-sm">
          <li className="list-disc!">Comprehensive Client & Lead Management: Organize client profiles, track session history, manage leads through a pipeline, and monitor conversion rates</li>
          <li className="list-disc">Integrated Session Management: Efficiently schedule, manage, and document coaching sessions with detailed notes</li>
          <li className="list-disc">Workflow Automation: Utilize smart templates for sessions, invoices, and documents, alongside an automated follow-up system for consistent client communication</li>
          <li className="list-disc">Financial Tools: Generate professional invoices, track payment statuses, and convert completed sessions into invoices</li>
          <li className="list-disc">Performance Analytics: Gain insights into business growth with a dashboard tracking revenue, client acquisition, and session frequency</li>
          <li className="list-disc">Seamless Google Integrations: Connect with Google Calendar, Gmail, and Google Meet for unified scheduling, communication, and video calls</li>
        </ul>
        <br />
        Built to help coaches move beyond disparate tools with a focused, all-in-one solution to manage and grow their practice efficiently.`,
      framework: [
        "Node.js",
        "Express",
        "React",
        "Next.js",
        "TypeScript",
        "MongoDB",
        "AWS S3",
        "OAuth",
        "A/B Testing",
        "Google Ads",
        "Google Analytics",
      ],
      status: "active",
      link: "https://coachlycrm.com",
    },
    {
      id: "og-image-kit",
      title: "OG Image Kit",
      description: `A dedicated desktop-only tool designed to simplify the creation of compelling Open Graph images for social media platforms such as Twitter, Facebook, and LinkedIn. This application empowers users to quickly generate visually striking shareable content without needing design expertise.
        <br />
        <br />
        Key features include:
        <ul className="list-disc font-mono text-sm">
          <li className="list-disc">Diverse Template Library: A wide range of professional templates (e.g., Default, Split, Full Image, Quote) to suit various content types and styles</li>
          <li className="list-disc">Extensive Customization: Full control over content (Title, Description, Tagline), typography (font, size, alignment), and logo integration (size, position)</li>
          <li className="list-disc">Flexible Image & Background Options: Easily upload main images (PNG/JPG up to 5MB), customize text and background colors, and apply various background patterns</li>
          <li className="list-disc">Brand Kit Functionality: Save and apply consistent brand elements, including logos and color palettes, for unified visual branding</li>
          <li className="list-disc">Platform-Specific Sizing: Quickly generate images optimized for popular social media platforms like Twitter, Facebook, LinkedIn, and YouTube</li>
          <li className="list-disc">High-Resolution Output: Download images at full resolution (1200×630px) for crisp display across all platforms</li>
        </ul>
        <br />
        OG Image Kit significantly streamlines the process of creating engaging social media previews, helping users enhance their online presence and content visibility. I'm currently working on extending its functionality to be fully responsive for mobile and tablet devices, ensuring a seamless experience across all screen sizes.`,
      framework: [
        "Next.js",
        "TypeScript",
        "AI/ML",
        "Tailwind CSS",
        "Shadcn UI",
        "React",
      ],
      status: "active",
      link: "https://www.ogimagekit.com/",
    },
    {
      id: "ai-dev-roundup",
      title: "AI Dev Roundup",
      description: `A specialized weekly AI briefing tailored for busy developers to stay at the forefront of the rapidly evolving AI landscape without information overload.
        <br />
        <br />
        Key features include:
        <ul className="list-disc font-mono text-sm">
          <li className="list-disc">Curated AI News & Trends: Essential updates on AI news and emerging trends, filtered for developer relevance</li>
          <li className="list-disc">Production-Ready Resources: Highlights valuable AI development tools, libraries, and frameworks ready for practical application</li>
          <li className="list-disc">Concise & Efficient Delivery: Focused five-minute read delivered directly to your inbox every Tuesday</li>
          <li className="list-disc">Developer-Centric Content: Curated by developers, for developers, ensuring practical, relevant, and actionable insights</li>
        </ul>
        <br />
        Serves as a vital resource for staying informed on critical AI advancements, enabling developers to integrate cutting-edge AI tools and knowledge into their work with minimal time investment.`,
      framework: [
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "TypeScript",
        "Node.js",
        "SendGrid",
        "n8n Automation",
      ],
      status: "active",
      link: "https://www.aidevroundup.com/",
    },
  ];

  const allTabs = [
    ...tabs,
    ...projects.map((project) => ({
      id: project.id,
      label: `${project.title}.tsx`,
      icon: Code,
      type: "project" as const,
    })),
  ];

  const openProject = (projectId: string) => {
    setActiveTab(projectId);
  };

  return (
    <div className="h-screen bg-[#1e1e1e] text-[#cccccc] flex flex-col">
      {/* Top Bar */}
      <div className="h-12 md:h-8 bg-[#2d2d30] flex items-center justify-between px-4 border-b border-[#3e3e42]">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
        </div>
        <div className="text-sm hidden sm:block">
          Connor Fitzgerald - Portfolio
        </div>
        <div className="text-xs sm:hidden">Connor Fitzgerald</div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-[#cccccc] hover:bg-[#3e3e42]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute right-0 top-0 h-full w-64 bg-[#252526] border-l border-[#3e3e42] p-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-medium text-[#cccccc]">Menu</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#cccccc] hover:bg-[#3e3e42]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs text-[#cccccc] mb-2">NAVIGATION</h4>
                <div className="space-y-1">
                  {/* Regular files */}
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`flex items-center space-x-2 px-3 py-2 rounded cursor-pointer text-sm ${
                        activeTab === tab.id
                          ? "bg-[#37373d]"
                          : "hover:bg-[#2a2d2e]"
                      }`}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </div>
                  ))}

                  {/* Projects folder */}
                  <div className="space-y-1">
                    <div
                      className="flex items-center space-x-2 px-3 py-2 rounded cursor-pointer text-sm hover:bg-[#2a2d2e]"
                      onClick={() => setProjectsFolderOpen(!projectsFolderOpen)}
                    >
                      <ChevronRight
                        className={`w-4 h-4 text-[#cccccc] transition-transform ${
                          projectsFolderOpen ? "rotate-90" : ""
                        }`}
                      />
                      <FolderOpen className="w-4 h-4" />
                      <span>projects/</span>
                    </div>

                    {/* Project files - only show when folder is open */}
                    {projectsFolderOpen && (
                      <div className="ml-4 space-y-1">
                        {projects.map((project) => (
                          <div
                            key={project.id}
                            className={`flex items-center space-x-2 px-3 py-2 rounded cursor-pointer text-sm ${
                              activeTab === project.id
                                ? "bg-[#37373d]"
                                : "hover:bg-[#2a2d2e]"
                            }`}
                            onClick={() => {
                              openProject(project.id);
                              setMobileMenuOpen(false);
                            }}
                          >
                            <Code className="w-4 h-4" />
                            <span>{project.title}.tsx</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs text-[#cccccc] mb-2">TOOLS</h4>
                <div className="space-y-1">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-2 px-3 py-2 rounded cursor-pointer text-sm hover:bg-[#2a2d2e]"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Desktop Sidebar */}
        {sidebarOpen && (
          <div className="hidden md:flex w-16 bg-[#252526] flex-col items-center py-4 border-r border-[#3e3e42]">
            {sidebarItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className="w-12 h-12 mb-2 text-[#cccccc] hover:bg-[#3e3e42]"
              >
                <item.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        )}

        {/* Desktop Explorer Panel */}
        {sidebarOpen && (
          <div className="hidden md:block w-64 bg-[#252526] border-r border-[#3e3e42]">
            <div className="p-4 border-b border-[#3e3e42]">
              <h3 className="text-sm font-medium text-[#cccccc]">EXPLORER</h3>
            </div>
            <div className="p-2">
              <div className="text-sm text-[#cccccc] mb-2">PORTFOLIO</div>
              <div className="space-y-1">
                {/* Regular files */}
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`flex items-center space-x-2 px-2 py-1 rounded cursor-pointer text-sm ${
                      activeTab === tab.id
                        ? "bg-[#37373d]"
                        : "hover:bg-[#2a2d2e]"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                ))}

                {/* Projects folder */}
                <div className="space-y-1">
                  <div
                    className="flex items-center space-x-2 px-2 py-1 rounded cursor-pointer text-sm hover:bg-[#2a2d2e]"
                    onClick={() => setProjectsFolderOpen(!projectsFolderOpen)}
                  >
                    <ChevronRight
                      className={`w-4 h-4 text-[#cccccc] transition-transform ${
                        projectsFolderOpen ? "rotate-90" : ""
                      }`}
                    />
                    <FolderOpen className="w-4 h-4" />
                    <span>projects/</span>
                  </div>

                  {/* Project files - only show when folder is open */}
                  {projectsFolderOpen && (
                    <div className="ml-4 space-y-1">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className={`flex items-center space-x-2 px-2 py-1 rounded cursor-pointer text-sm ${
                            activeTab === project.id
                              ? "bg-[#37373d]"
                              : "hover:bg-[#2a2d2e]"
                          }`}
                          onClick={() => openProject(project.id)}
                        >
                          <Code className="w-4 h-4" />
                          <span>{project.title}.tsx</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Desktop Tab Bar */}
          <div className="hidden md:flex h-10 bg-[#2d2d30] items-center border-b border-[#3e3e42] min-w-0">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 px-2 text-[#cccccc] hover:bg-[#3e3e42] border-r border-[#3e3e42] flex-shrink-0"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </Button>
            <div className="flex overflow-x-auto min-w-0 flex-1">
              {allTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex items-center space-x-2 px-4 py-2 cursor-pointer border-r border-[#3e3e42] flex-shrink-0 ${
                    activeTab === tab.id ? "bg-[#1e1e1e]" : "hover:bg-[#2a2d2e]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm whitespace-nowrap">{tab.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Tab Bar */}
          <div className="md:hidden bg-[#2d2d30] border-b border-[#3e3e42] overflow-x-auto">
            <div className="flex min-w-max">
              {allTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex items-center space-x-2 px-4 py-3 cursor-pointer border-r border-[#3e3e42] flex-shrink-0 ${
                    activeTab === tab.id ? "bg-[#1e1e1e]" : "hover:bg-[#2a2d2e]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm whitespace-nowrap">{tab.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 bg-[#1e1e1e] p-4 md:p-6 overflow-auto min-w-0">
            {activeTab === "about" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto sm:mx-0 md:mx-4">
                    <span className="text-white font-bold text-xl tracking-wider">
                      CF
                    </span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h1 className="text-xl md:text-2xl font-bold text-white">
                      Connor Fitzgerald
                    </h1>
                    <p className="text-[#cccccc]">
                      Full Stack Developer & Video Game Enthusiast
                    </p>
                  </div>
                </div>
                <div className="bg-[#252526] p-4 rounded border border-[#3e3e42]">
                  <p className="text-[#cccccc] leading-relaxed">
                    As a dedicated web application developer, I focus on
                    building impactful digital solutions that solve real-world
                    challenges.
                    <br />
                    <br />
                    My passion lies in creating efficient web apps and
                    specialized developer tools that empower users and optimize
                    business operations. I love diving deep into a problem,
                    architecting intuitive systems, and seeing them come to
                    life. I&apos;m committed to best practices in development
                    and fostering environments where innovative ideas flourish.
                    <br />
                    <br />
                    When I&apos;m not coding, I&apos;m usually lost in a game,
                    which is typically Old School Runescape or Counter Strike.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
                  <a
                    href="https://github.com/connorfitzgerald17"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#cccccc] border-[#3e3e42]"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/connor-fitz/"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#cccccc] border-[#3e3e42]"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                  <a
                    href="https://x.com/ConnorFitzDev"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#cccccc] border-[#3e3e42]"
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                  </a>
                </div>
              </div>
            )}

            {/* Project tabs content */}
            {projects.map(
              (project) =>
                activeTab === project.id && (
                  <div key={project.id} className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Code className="w-5 h-5 text-[#cccccc]" />
                      <h2 className="text-xl font-bold text-white">
                        {project.title}.tsx
                      </h2>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group touch-manipulation"
                    >
                      <div className="bg-[#252526] p-4 rounded border border-[#3e3e42] hover:bg-[#2a2d2e] hover:border-[#007acc] active:bg-[#2a2d2e] active:border-[#007acc] transition-colors cursor-pointer">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                              Description
                              <span className="ml-2 text-[#007acc] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                ↗ Open Project
                              </span>
                            </h3>
                            <p
                              className="text-[#cccccc] leading-relaxed"
                              dangerouslySetInnerHTML={{
                                __html: project.description,
                              }}
                            ></p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              Framework
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.framework.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-[#37373d] text-[#cccccc] text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              Status
                            </h3>
                            <Badge
                              variant={
                                project.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                              className={
                                project.status === "active"
                                  ? "bg-green-600"
                                  : "bg-[#37373d]"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-8 md:h-6 bg-[#007acc] flex items-center justify-between px-4 text-white text-xs">
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="hidden sm:inline">Ready</span>
          <span>TypeScript</span>
          <span className="hidden md:inline">UTF-8</span>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="hidden sm:inline">Ln 1, Col 1</span>
          <span className="hidden md:inline">Spaces: 2</span>
        </div>
      </div>
    </div>
  );
}
