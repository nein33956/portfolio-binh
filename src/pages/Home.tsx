import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FolderKanban,
  ShieldCheck,
  Target,
  Rocket,
  CheckCircle2,
  Calendar,
  Sparkles,
  Terminal,
} from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects, SITE } from "../data/projects";
import { getIcon } from "../lib/icons";

const stats = [
  { big: "6", lbl: "Dự án thực hành", icon: FolderKanban },
  { big: "100%", lbl: "Bài đã nộp", icon: CheckCircle2 },
  { big: "12+", lbl: "Công cụ & AI", icon: Sparkles },
  { big: "2026", lbl: "Năm hoàn thành", icon: Calendar },
];

const goals = [
  { body: "Nắm vững AI và công nghệ số nền tảng phục vụ học tập & nghiên cứu y khoa: quản lý dữ liệu, tra cứu thông tin đáng tin cậy, khai thác AI hiệu quả và có đạo đức." },
  { body: "Trở thành người làm y khoa làm chủ công nghệ: ứng dụng AI hỗ trợ học tập/chẩn đoán, bảo đảm an toàn dữ liệu bệnh nhân và liêm chính học thuật." },
];

const portfolioGoals = [
  "Chứng minh các kỹ năng số đã học qua 6 dự án thực hành cụ thể.",
  "Lưu trữ sản phẩm cá nhân có hệ thống, dễ truy cập & chia sẻ.",
  "Ghi lại quá trình tự học và sự tiến bộ về AI và công nghệ số.",
  "Phản ánh tư duy học thuật: minh bạch nguồn, dùng AI có trách nhiệm.",
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <Aurora />
        <div
          className="absolute inset-0 -z-10 bg-grid-faint"
          style={{ backgroundSize: "46px 46px", maskImage: "radial-gradient(80% 60% at 50% 20%, black, transparent)" }}
        />
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="chip"><Terminal className="h-3.5 w-3.5" /> portfolio · môn AI và công nghệ số</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-ink sm:text-7xl"
          >
            Mình là <br />
            <span className="gradient-text">{SITE.fullName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Sinh viên <b className="text-brand-300">{SITE.major}</b> với niềm đam mê công nghệ.
            Đây là hồ sơ AI và công nghệ số của mình — nơi mình làm chủ dữ liệu, thông tin và AI một
            cách hiệu quả, có trách nhiệm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.19 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link to="/du-an" className="btn-primary">
              Xem 6 dự án <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/tong-ket" className="btn-outline">Tổng kết hành trình</Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-7 font-mono text-xs text-ink-muted"
          >
            <span className="text-neon">&gt;</span> {SITE.major} · digital-first · AI có trách nhiệm
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.lbl}
                className="card-surface relative flex items-center gap-3 overflow-hidden p-5 transition-colors hover:border-brand-500/40"
              >
                <span className="absolute inset-y-0 left-0 w-0.5 bg-electric" />
                <s.icon className="h-7 w-7 flex-none text-neon" />
                <div>
                  <div className="font-display text-2xl font-bold leading-none text-ink">{s.big}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                    {s.lbl}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GIỚI THIỆU — spec card ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <SectionHead kicker="// về mình" title="Hồ sơ cá nhân" />
          </Reveal>
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            {/* profile.json */}
            <Reveal>
              <div className="card-surface overflow-hidden">
                <div className="flex items-center gap-2 border-b border-line px-5 py-3 font-mono text-xs text-ink-muted">
                  <span className="h-3 w-3 rounded-full bg-rose-500/70" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                  <span className="ml-2">profile.json</span>
                </div>
                <div className="space-y-2.5 p-5 font-mono text-sm">
                  <Row k="name" v={SITE.fullName} />
                  <Row k="major" v={SITE.major} />
                  <Row k="school" v={SITE.school} />
                  <Row k="focus" v={SITE.hobbies} />
                  <Row k="status" v="active" neon />
                </div>
              </div>
            </Reveal>

            {/* Bio + goals */}
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-ink-soft">
                Mình là {SITE.fullName}, sinh viên {SITE.major}. Với mình, môn AI và Công nghệ số là cơ
                hội để rèn một tư duy làm việc trong môi trường số: bài bản, hiệu quả và có trách
                nhiệm.
              </p>
              <div className="mt-6 space-y-4">
                <div className="card-surface p-5">
                  <div className="flex items-center gap-2 font-bold text-brand-300">
                    <Target className="h-4 w-4" /> Mục tiêu học tập
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{goals[0].body}</p>
                </div>
                <div className="card-surface p-5">
                  <div className="flex items-center gap-2 font-bold text-brand-300">
                    <Rocket className="h-4 w-4" /> Định hướng phát triển
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{goals[1].body}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MỤC TIÊU PORTFOLIO ===== */}
      <section className="py-16">
        <div className="container-x">
          <div className="card-surface relative overflow-hidden p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-600/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="kicker">// mục tiêu portfolio</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                  Vì sao mình xây <span className="gradient-text">Portfolio</span> này?
                </h2>
                <p className="mt-4 text-ink-soft">
                  Đây là nơi mình tổng hợp, hệ thống hóa kết quả học tập và chứng minh sự trưởng
                  thành về AI và công nghệ số trong suốt môn học.
                </p>
              </div>
              <ul className="space-y-2.5">
                {portfolioGoals.map((g, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <li className="flex items-start gap-3 rounded-lg border border-line bg-white/[0.02] p-4 transition-colors hover:border-brand-500/40">
                      <span className="grid h-7 w-7 flex-none place-items-center rounded-md border border-brand-500/30 bg-brand-500/10 font-mono text-xs font-bold text-neon">
                        0{i + 1}
                      </span>
                      <span className="pt-0.5 text-sm text-ink-soft">{g}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREVIEW DỰ ÁN ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <SectionHead kicker="// dự án nổi bật" title="6 năng lực · 6 dự án" />
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 2) * 0.08}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="card-surface group flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5 hover:border-brand-500/50"
                  >
                    <span className="font-mono text-xl font-bold text-line transition-colors group-hover:text-neon">
                      0{p.id}
                    </span>
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-neon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-brand-400">
                        {p.task}
                      </span>
                      <h3 className="font-display text-base font-bold leading-tight text-ink">
                        {p.title}
                      </h3>
                      <p className="line-clamp-1 text-xs text-ink-muted">{p.short}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-none text-ink-muted transition-all group-hover:translate-x-1 group-hover:text-neon" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/du-an" className="btn-primary">
              <FolderKanban className="h-4 w-4" /> Xem tất cả dự án
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA liêm chính ===== */}
      <section className="pb-12 pt-4">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-brand-500/30 bg-surface p-8 sm:p-10">
              <div className="absolute inset-0 -z-10 bg-grid-faint" style={{ backgroundSize: "40px 40px", opacity: 0.4 }} />
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <span className="grid h-16 w-16 flex-none place-items-center rounded-xl bg-electric text-white shadow-neon">
                  <ShieldCheck className="h-8 w-8" />
                </span>
                <div>
                  <span className="kicker">// commitment.txt</span>
                  <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                    Cam kết <span className="gradient-text">liêm chính học thuật</span>
                  </h2>
                  <p className="mt-2 max-w-2xl text-ink-soft">
                    Toàn bộ Portfolio được thực hiện trung thực. Mọi nội dung tham khảo và công cụ
                    AI đều được ghi nguồn rõ ràng ở từng dự án.
                  </p>
                  <p className="mt-3 font-mono text-sm text-neon">— {SITE.fullName}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Row({ k, v, neon }: { k: string; v: string; neon?: boolean }) {
  return (
    <div className="flex gap-3">
      <span className="w-16 flex-none text-ink-muted">{k}</span>
      <span className="text-ink-muted">:</span>
      <span className={neon ? "text-neon" : "text-ink"}>"{v}"</span>
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <span className="kicker">{kicker}</span>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      <div className="rule mt-4 w-24" />
    </div>
  );
}
