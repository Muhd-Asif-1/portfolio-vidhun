import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { contact } from "@/lib/contact";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return {
    title: `${project.name} — Vidhun Prasad`,
    description: project.details?.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  const details = project.details;

  return (
    <main
      id="main"
      data-page-path={`/projects/${slug}`}
      className="mx-auto max-w-[1920px] px-5 pb-32 pt-32 sm:pb-96 sm:pt-50"
    >
      <div className="mx-auto max-w-175">
        <header>
          <h1 className="font-serif text-3xl leading-tight tracking-[-0.9px] sm:text-[40px] sm:tracking-[-1.6px]">
            {project.name}
          </h1>
          <p className="about-copy text-[16px] mt-2 text-base leading-5.5">
            {details?.summary || "Project description"}
          </p>
          <dl className="mt-6 text-xs sm:text-[16px] sm:leading-5.5">
            {[
              ["Client", details?.client],
              ["Year", details?.year],
              ["Platform", details?.platform],
              ["Timeline", details?.timeline],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex min-h-11 justify-between gap-6 border-b border-(--subtle-border) py-3"
              >
                <dt className="about-copy">{label}</dt>
                <dd className="min-w-0 wrap-break-word text-right">
                  {value || "—"}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <section
          aria-label={`${project.name} gallery`}
          className="mt-8 grid gap-4 sm:gap-6"
        >
          {details?.images?.length ? (
            details.images.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 740px) 700px, 100vw"
                preload={index === 0}
                className="h-auto w-full rounded-lg"
              />
            ))
          ) : (
            <div
              role="img"
              aria-label="Project gallery placeholder"
              className="flex aspect-5/4 items-center justify-center rounded-lg border border-(--subtle-border) bg-(--surface)"
            >
              <span aria-hidden="true" className="about-copy text-xs">
                Project gallery
              </span>
            </div>
          )}
        </section>

        <section aria-labelledby="project-contact-title" className="mt-6">
          <h2
            id="project-contact-title"
            className="font-serif text-2xl leading-10.5 tracking-[-0.72px] sm:text-[40px] sm:tracking-[-0.96px]"
          >
            Have a project in mind?
            <br />
            <span className="about-copy">Let&apos;s talk.</span>
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="mt-2.5 inline-block rounded py-2 text-[16px] underline-offset-4 hover:underline"
          >
            Book a call <span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>
    </main>
  );
}
