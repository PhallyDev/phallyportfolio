import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code,
  CodeXml,
  Menu,
  X,
  Send,
  Smartphone,
  Music,
  UserRound,
} from 'lucide-react'

const TELEGRAM_USERNAME = 'Laphally'
const TELEGRAM_URL = TELEGRAM_USERNAME
  ? `https://t.me/${TELEGRAM_USERNAME.replace(/^@/, '').replace(/^https?:\/\/t\.me\//, '')}`
  : null

const projects = [
  {
    title: 'Mini POS System',
    type: 'Flutter Mobile Application',
    description: 'A mobile point-of-sale application for managing products, quantities, and sales.',
    tech: ['Flutter', 'Dart', 'GetX', 'Supabase'],
    github: 'https://github.com/Phally-jr/mini_pos_system',
    icon: Smartphone,
    color: 'from-indigo-500/20 via-blue-500/10 to-transparent',
  },
  {
    title: 'Music School Management System',
    type: 'C++ Desktop Application',
    description: 'A management system developed in C++ for organizing and managing music school information.',
    tech: ['C++'],
    github: 'https://github.com/PhallyDev/CRUD.git',
    icon: Music,
    color: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
  },
]

const skillGroups = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['Flutter', 'Dart', 'GetX'],
  },
  {
    title: 'Backend & APIs',
    icon: Code,
    skills: ['REST API integration', 'Supabase', 'DartFrog', 'MongoDB ','SQL server'],
  },
  {
    title: 'Web Development',
    icon: Code,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Tools & Workflow',
    icon: CodeXml,
    skills: ['Git', 'GitHub',Netlify,Figma],
  },
]

function TelegramLink({ className, children }) {
  if (!TELEGRAM_URL) {
    return (
      <button
        type="button"
        disabled
        className={`${className} cursor-not-allowed opacity-60`}
        aria-disabled="true"
        title="Add your Telegram username to enable this link."
      >
        {children}
      </button>
    )
  }

  return (
    <a
      href={TELEGRAM_URL}
      className={className}
    >
      {children}
    </a>
  )
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-9">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Home', '#home'],
    ['Projects', '#projects'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080d1d]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold">
          <Code className="text-indigo-400" size={25} />
          Phally<span className="text-indigo-400">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-300 transition-colors hover:text-indigo-300"
            >
              {label}
            </a>
          ))}
        </div>

        <TelegramLink
          className="hidden items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-200 transition hover:border-indigo-300/60 hover:bg-indigo-500/20 sm:inline-flex"
        >
          <Send size={15} /> Telegram
        </TelegramLink>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-white/10 px-5 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-300 hover:text-indigo-400"
            >
              {label}
            </a>
          ))}
          <TelegramLink className="mt-2 inline-flex items-center gap-2 py-3 font-medium text-indigo-300">
            <Send size={16} /> Message on Telegram
          </TelegramLink>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true)

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div className="order-last relative z-10 lg:order-first">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Computer Science Student
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm Phally<span className="text-indigo-400">.</span>
          </h1>
          <h2 className="mt-5 text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
            Flutter Mobile Developer
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
            I enjoy building useful mobile applications with Flutter and Dart.
            I'm growing my skills in APIs, databases, and web development as I
            work toward full-stack development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-indigo-950/40 transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              View My Projects <ArrowRight size={17} />
            </a>
            <TelegramLink className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold transition hover:border-indigo-400 hover:text-indigo-300">
              Get in Touch <Send size={16} />
            </TelegramLink>
          </div>
          {!TELEGRAM_URL && (
            <p className="mt-3 text-xs text-slate-500">
              Add your Telegram username in the portfolio configuration to enable direct contact.
            </p>
          )}
          <a
            href="https://github.com/Phally-jr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-indigo-300"
          >
            <CodeXml size={18} /> github.com/Phally-jr <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="order-first mx-auto w-full max-w-xs lg:order-last lg:max-w-sm">
          <div className="rounded-[2rem] bg-gradient-to-br from-indigo-400/60 via-indigo-500/20 to-violet-400/40 p-px shadow-2xl shadow-indigo-950/40">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#10182c]">
              {photoAvailable ? (
                <img
                  src="/images/profile.jpg"
                  alt="Phally"
                  className="h-full w-full object-cover"
                  onError={() => setPhotoAvailable(false)}
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-indigo-500/15 via-[#10182c] to-violet-500/10 p-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-indigo-300/25 bg-indigo-400/10 text-indigo-200">
                    <UserRound size={46} strokeWidth={1.25} />
                  </div>
                  <p className="text-sm leading-6 text-slate-400">
                    Add your photo at
                    <span className="mt-1 block font-medium text-slate-300">
                      public/images/profile.jpg
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="border-y border-white/[0.07] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          description="A couple of projects where I've put what I'm learning into practice."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0c1326] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-950/20"
              >
                <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_68%)]" />
                  <div aria-hidden="true" className="absolute h-36 w-36 rounded-full border border-white/[0.06] transition-transform duration-500 group-hover:scale-110" />
                  <Icon size={56} strokeWidth={1.25} className="relative text-indigo-200/90 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                    {project.type}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-indigo-400/15 bg-indigo-400/[0.08] px-3 py-1.5 text-xs font-medium text-indigo-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/[0.07] pt-4 text-sm">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-medium text-slate-300 transition-colors hover:text-indigo-300"
                      >
                        <CodeXml size={17} /> View source code <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 text-slate-500" aria-disabled="true">
                        <CodeXml size={17} /> GitHub repository unavailable
                      </span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <SectionTitle eyebrow="About Me" title="Learning by building" />
          <p className="text-base leading-8 text-slate-400">
            I'm a Computer Science student interested in mobile and full-stack
            development. I enjoy turning ideas into practical projects, learning
            by doing, and steadily improving my Flutter, API, and web development
            skills.
          </p>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="border-y border-white/[0.07] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Technologies"
          title="My Tech Stack"
          description="Technologies I've worked with and am learning through projects and practice."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-[#0c1326] p-5">
              <Icon size={24} className="mb-4 text-indigo-400" />
              <h3 className="font-semibold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl border border-indigo-400/15 bg-gradient-to-br from-indigo-500/[0.08] via-[#0c1326] to-violet-500/[0.06] px-6 py-10 text-center sm:px-10 sm:py-14">
          <SectionTitle
            eyebrow="Get in Touch"
            title="Let's connect"
            description="Have an internship opportunity, a project idea, or just want to talk tech? Reach out."
          />
          <div className="flex flex-wrap justify-center gap-3">
            <TelegramLink className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 transition hover:-translate-y-0.5 hover:bg-indigo-500">
              <Send size={17} /> Message me on Telegram
            </TelegramLink>
            <a
              href="https://github.com/Phally-jr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-400/50 hover:text-indigo-200"
            >
              <CodeXml size={17} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
          {!TELEGRAM_URL && (
            <p className="mt-4 text-xs text-slate-500">
              Telegram is not configured yet. Add your username to TELEGRAM_USERNAME in src/App.jsx.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-slate-500 sm:flex-row lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-bold text-slate-200">
          <Code size={21} className="text-indigo-400" /> Phally
        </a>
        <p>© {new Date().getFullYear()} Phally. Built with React &amp; Tailwind CSS.</p>
        <a href="#home" className="flex items-center gap-2 hover:text-indigo-300">
          Back to top <ArrowDown size={15} className="rotate-180" />
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#080d1d] text-slate-100">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
