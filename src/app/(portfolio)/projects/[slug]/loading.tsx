export default function ProjectLoading() {
  return (
    <main
      id="main"
      aria-busy="true"
      className="mx-auto max-w-[1920px] px-5 pb-32 pt-32 sm:pb-96 sm:pt-50"
    >
      <output className="sr-only">Loading project…</output>
      <div
        aria-hidden="true"
        className="mx-auto max-w-175 motion-safe:animate-pulse"
      >
        <div className="h-9 w-2/3 rounded bg-(--subtle-border) sm:h-12" />
        <div className="mt-2 space-y-2">
          <div className="h-3.5 w-full rounded bg-(--subtle-border)" />
          <div className="h-3.5 w-4/5 rounded bg-(--subtle-border)" />
        </div>

        <div className="mt-6">
          {["client", "year", "platform", "timeline"].map((field) => (
            <div
              key={field}
              className="flex min-h-11 items-center justify-between gap-6 border-b border-(--subtle-border) py-3 sm:min-h-12"
            >
              <div className="h-3 w-16 rounded bg-(--subtle-border) sm:h-4" />
              <div className="h-3 w-28 rounded bg-(--subtle-border) sm:h-4" />
            </div>
          ))}
        </div>

        <div className="mt-8 aspect-5/4 w-full rounded-lg bg-(--subtle-border)" />

        <div className="mt-6 space-y-3">
          <div className="h-8 w-3/4 rounded bg-(--subtle-border) sm:h-10" />
          <div className="h-8 w-2/5 rounded bg-(--subtle-border) sm:h-10" />
          <div className="h-4 w-24 rounded bg-(--subtle-border)" />
        </div>
      </div>
    </main>
  );
}
