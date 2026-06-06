import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";
import { SITE } from "../data/projects";

const links = [
  { to: "/", label: "Giới thiệu" },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface/40">
      <div className="container-x py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-electric text-white shadow-neon">
                <Code2 className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-bold text-ink">
                Portfolio<span className="gradient-text">_ACS</span>
              </span>
            </div>
            <p className="mt-4 font-mono text-xs leading-relaxed text-ink-muted">
              // hành trình rèn luyện AI và công nghệ số của sinh viên ngành Y Khoa — 6 dự án thực hành,
              ứng dụng công nghệ &amp; AI một cách hiệu quả và có trách nhiệm.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-neon">// điều hướng</h4>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-soft transition-colors hover:text-neon">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 font-mono text-xs text-ink-muted">
          © {SITE.year} {SITE.fullName} · {SITE.major}
        </div>
      </div>
    </footer>
  );
}
