// "use cache": ano calculado no build, evita valor instável no prerender (Next 16)
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

const projects = [
  {
    name: "Vitrine Shop",
    description:
      "E-commerce de moda com carrinho, busca e checkout simulado, focado em performance e acessibilidade.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "Painel Métrica",
    description:
      "Dashboard de analytics com gráficos interativos, filtros por período e tema claro/escuro.",
    stack: ["React", "TypeScript", "Recharts"],
  },
  {
    name: "Landing Nimbus",
    description:
      "Landing page de produto para um SaaS de produtividade, com animações leves e SEO técnico.",
    stack: ["Next.js", "Tailwind", "SEO"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "Acessibilidade",
];

const navLinks = [
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#contato", label: "Contato" },
];

export default async function Home() {
  const year = await getYear();
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6">
      <header className="flex items-center justify-between py-8">
        <a href="#" className="text-sm font-semibold tracking-tight">
          AR
        </a>
        <nav>
          <ul className="flex gap-5 text-sm text-neutral-500">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-neutral-900">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <section className="py-20 sm:py-28">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Ana Ribeiro
          </h1>
          <p className="mt-4 text-lg text-neutral-500 sm:text-xl">
            Desenvolvedora Front-end
          </p>
          <p className="mt-6 max-w-xl text-neutral-600">
            Crio interfaces rápidas, acessíveis e bem detalhadas — do wireframe
            ao pixel, com React e TypeScript.
          </p>
          <div className="mt-8 flex gap-4 text-sm font-medium">
            <a href="#" className="underline underline-offset-4">
              GitHub
            </a>
            <a href="#" className="underline underline-offset-4">
              LinkedIn
            </a>
          </div>
        </section>

        <section id="projetos" className="py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            Projetos
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-6"
              >
                <h3 className="font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="text-sm text-neutral-600">{project.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs text-neutral-500">
                  {project.stack.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-auto text-sm font-medium underline underline-offset-4"
                >
                  Ver projeto
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            Skills
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-neutral-200 px-3 py-1.5 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="contato" className="py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            Contato
          </h2>
          <p className="mt-6 max-w-xl text-neutral-600">
            Aberta a oportunidades e conversas sobre front-end. Chame no e-mail
            ou no LinkedIn.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:ana.ribeiro@example.com"
              className="font-medium underline underline-offset-4"
            >
              ana.ribeiro@example.com
            </a>
            <a
              href="#"
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8 text-sm text-neutral-500">
        © {year} Ana Ribeiro
      </footer>
    </div>
  );
}
