import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

export default function Projects() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <Aurora />
        <div className="container-x">
          <Reveal>
            <span className="chip"><Terminal className="h-3.5 w-3.5" /> /du-an</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink sm:text-6xl">
              Tập hợp <span className="gradient-text">6 dự án</span>
            </h1>
            <p className="mt-4 max-w-2xl text-ink-soft">
              Mỗi dự án trình bày đầy đủ: mục tiêu, yêu cầu đề bài, minh chứng đã nộp và phần
              trích nguồn AI minh bạch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* List */}
      <section className="pb-16">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 2) * 0.08}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="card-surface group relative flex h-full flex-col overflow-hidden p-7 transition-all hover:-translate-y-1 hover:border-brand-500/50"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-electric opacity-0 transition-opacity group-hover:opacity-100" />
                    {/* số mờ khổng lồ */}
                    <span className="pointer-events-none absolute -right-3 -top-6 font-display text-[7rem] font-bold leading-none text-white/[0.035]">
                      0{p.id}
                    </span>
                    <div className="relative flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-neon">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-brand-400">
                        {p.task}
                      </span>
                    </div>
                    <h3 className="relative mt-4 font-display text-xl font-bold text-ink">{p.title}</h3>
                    <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.short}</p>
                    <div className="relative mt-4 flex flex-wrap gap-1.5">
                      {p.tools.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-300 transition-all group-hover:gap-2.5">
                      Xem chi tiết <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
