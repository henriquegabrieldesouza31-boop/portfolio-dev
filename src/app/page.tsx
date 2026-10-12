import Image from "next/image";

// "use cache": ano calculado no build, evita valor instável no prerender (Next 16)
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

const GITHUB = "https://github.com/henriquedesoza";

type Project = {
  name: string;
  description: string;
  stack: string[];
  demo: string;
  image: string;
  /** omitted when the repo is private */
  repo?: string;
};

const projects: Project[] = [
  {
    name: "Kōgen — Omakase",
    description:
      "Site de restaurante japonês premium, bilíngue PT/EN. Página única com rolagem, menu com âncoras e reserva de mesa. O mais completo dos meus projetos.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://kogen-three.vercel.app",
    image: "/proj-kogen.jpg",
  },
  {
    name: "Landing Finora",
    description:
      "Landing page de lançamento para app de finanças pessoais. Tema dark, hero com CTA, 3 features e seção de preços com 3 planos.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: `${GITHUB}/landing-financeiro`,
    demo: "https://landing-financeiro.vercel.app",
    image: "/proj-finora.png",
  },
  {
    name: "Site Clínica",
    description:
      "Site institucional de clínica odontológica. Tema claro, serviços, depoimentos e formulário de contato com validação.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: `${GITHUB}/site-clinica`,
    demo: "https://site-clinica-topaz.vercel.app",
    image: "/proj-clinica.png",
  },
  {
    name: "Portfólio Dev",
    description:
      "Este site. Portfólio pessoal de dev front-end construído com Next.js e Tailwind CSS, publicado no Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: `${GITHUB}/portfolio-dev`,
    demo: "https://portfolio-dev-rouge-six.vercel.app",
    image: "/henrique.png",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "Vercel",
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
        <a href={GITHUB} className="text-sm font-semibold tracking-tight">
          HS
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
        <section className="py-16 sm:py-24">
          <Image
            src="/henrique.png"
            alt="Foto de Henrique Gabriel de Souza"
            width={460}
            height={460}
            priority
            className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
          />
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Henrique Gabriel de Souza
          </h1>
          <p className="mt-4 text-lg text-neutral-500 sm:text-xl">
            Estudante, Freelancer, criador full-end
          </p>
          <p className="mt-6 max-w-xl text-neutral-600">
            Construo interfaces e aplicações com React e TypeScript. Aberto a
            freelas e a oportunidades — vem dar uma olhada nos projetos ou chama
            no GitHub.
          </p>
          <div className="mt-8 flex gap-4 text-sm font-medium">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={`${GITHUB}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Repositórios
            </a>
          </div>
        </section>

        <section id="projetos" className="py-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            Projetos
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-6"
              >
                <Image
                  src={project.image}
                  alt={`Prévia do projeto ${project.name}`}
                  width={460}
                  height={460}
                  className="w-full rounded-lg border border-neutral-200 object-cover"
                />
                <h3 className="font-semibold tracking-tight">{project.name}</h3>
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
                <div className="mt-auto flex gap-3 pt-2 text-sm font-medium">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    Ver ao vivo
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 underline underline-offset-4"
                    >
                      Código
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
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

        <section id="contato" className="py-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            Contato
          </h2>
          <p className="mt-6 max-w-xl text-neutral-600">
            Aberto a freelas e a oportunidades. A melhor forma de falar comigo é
            pelo GitHub — é lá que estou sempre.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
            >
              henriquedesoza
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8 text-sm text-neutral-500">
        © {year} Henrique Gabriel de Souza
      </footer>
    </div>
  );
}
