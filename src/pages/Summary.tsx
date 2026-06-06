import { Link } from "react-router-dom";
import { Sprout, Brain, Star, BarChart3, ArrowLeft, Terminal } from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

const skills = [
  { name: "Quản lý tệp & thư mục", level: "Tốt" },
  { name: "Tìm kiếm & đánh giá thông tin", level: "Khá" },
  { name: "Viết prompt & ứng dụng AI", level: "Tốt" },
  { name: "Hợp tác trực tuyến", level: "Tốt" },
  { name: "Sáng tạo nội dung số", level: "Khá" },
  { name: "An toàn & liêm chính học thuật", level: "Tốt" },
];

export default function Summary() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <Aurora />
        <div className="container-x">
          <Reveal>
            <span className="chip"><Terminal className="h-3.5 w-3.5" /> /tong-ket</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink sm:text-6xl">
              Tổng kết <span className="gradient-text">hành trình</span>
            </h1>
            <p className="mt-4 max-w-2xl text-ink-soft">
              Trải nghiệm, kiến thức và những điều mình tâm đắc sau khi hoàn thành 6 dự án.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-6">
            <Reveal>
              <Card icon={Sprout} title="Trải nghiệm & cảm nhận">
                <div className="space-y-3 border-l-2 border-brand-500/50 pl-5 text-sm leading-relaxed text-ink-soft">
                  <p>
                    Quá trình làm Portfolio là một hành trình thật sự thú vị. Ban đầu mình nghĩ
                    "AI và công nghệ số" chỉ là biết dùng máy tính, nhưng càng đi qua từng bài, mình càng
                    nhận ra đây là cả một <b className="text-ink">tư duy làm việc trong môi trường số</b>.
                  </p>
                  <p>
                    Điều mình thích nhất là khám phá sức mạnh của AI khi biết cách "ra lệnh" đúng,
                    và tự tay tạo ra những sản phẩm số của riêng mình. Thử thách lớn nhất là rèn
                    thói quen <b className="text-ink">kiểm chứng nguồn</b> và trình bày minh bạch.
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={Brain} title="Kiến thức & kỹ năng quan trọng nhất">
                <div className="grid gap-3 sm:grid-cols-2">
                  {projects.map((p) => {
                    const Icon = getIcon(p.icon);
                    return (
                      <div key={p.id} className="flex items-start gap-3 rounded-lg border border-line bg-white/[0.02] p-3.5">
                        <span className="grid h-8 w-8 flex-none place-items-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-neon">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="text-sm leading-snug text-ink-soft">
                          <b className="text-ink">{p.title}</b>
                          <span className="mt-0.5 block text-xs text-ink-muted">{p.short}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={Star} title="Điểm tâm đắc & thách thức">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
                    <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald-400">// tâm đắc</p>
                    <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
                      <li>Tự xây dựng được một <b className="text-ink">sản phẩm số hoàn chỉnh</b> — chính là website này.</li>
                      <li>Biết viết prompt hiệu quả, biến AI thành "trợ lý học tập".</li>
                      <li>Hiểu sâu hơn về liêm chính học thuật.</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-brand-500/30 bg-brand-500/5 p-4">
                    <p className="mb-2 font-mono text-xs uppercase tracking-wider text-brand-300">// thách thức</p>
                    <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
                      <li>Phân biệt nguồn tin đáng tin cậy giữa "biển" thông tin.</li>
                      <li>Cân bằng giữa tận dụng AI và giữ tính trung thực.</li>
                      <li>Sắp xếp thời gian để hoàn thiện cả sáu nhiệm vụ.</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={BarChart3} title="Tự đánh giá bản thân">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between gap-2 rounded-lg border border-line bg-white/[0.02] px-4 py-2.5"
                    >
                      <span className="text-sm text-ink-soft">{s.name}</span>
                      <span
                        className={`rounded font-mono text-[11px] font-bold uppercase ${
                          s.level === "Tốt"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-brand-500/15 text-brand-300"
                        } px-2 py-0.5`}
                      >
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 rounded-lg border border-neon/30 bg-white/[0.03] p-4 text-sm leading-relaxed text-ink-soft">
                  <b className="text-neon">// định hướng tiếp theo:</b> mình sẽ tiếp tục rèn kỹ năng
                  đánh giá nguồn và sáng tạo nội dung số, đồng thời ứng dụng AI và công nghệ số vào việc học
                  ngành Y Khoa — tra cứu tài liệu, phác đồ điều trị và hỗ trợ nghiên cứu một cách hiệu
                  quả, có trách nhiệm.
                </p>
              </Card>
            </Reveal>

            <div className="pt-4 text-center">
              <Link to="/du-an" className="btn-primary">
                <ArrowLeft className="h-4 w-4" /> Xem lại 6 dự án
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-surface p-6 sm:p-7">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-neon">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="font-display text-lg font-bold text-ink">{title}</h2>
      </div>
      {children}
    </div>
  );
}
