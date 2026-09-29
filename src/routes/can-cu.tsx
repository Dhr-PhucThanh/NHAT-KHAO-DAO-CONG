import { createFileRoute } from "@tanstack/react-router";
import { CRITERIA } from "@/lib/criteria";

export const Route = createFileRoute("/can-cu")({ component: Canon });

const GIAI_DOAN = [
  {
    han: "鍊形成氣，鍊氣成神，鍊神合道。",
    dich: "Luyện hình thành khí, luyện khí thành thần, luyện thần hợp đạo.",
    nguon: "Chung Lã Truyền Đạo Tập",
  },
  {
    han: "自下田入上田，自上田復下田。",
    dich: "Từ hạ điền vào thượng điền, từ thượng điền trở lại hạ điền.",
    nguon: "Chung Lã · Luận hoàn đan",
  },
  {
    han: "醍醐灌頂，甘露灑心。此乃真景象也，非譬喻也。",
    dich: "Đề hồ quán đỉnh, Cam Lộ rưới tâm. Đây là cảnh thật, không phải thí dụ.",
    nguon: "Tính Mệnh Khuê Chỉ",
  },
  {
    han: "咽津納氣是人行……鼎內若無真種子，猶將水火煮空鐺。",
    dich: "Nuốt tân nạp khí là việc người thường. Đỉnh không hạt giống thật khác gì đun chảo không.",
    nguon: "Ngộ Chân Thiên",
  },
];

function Canon() {
  return (
    <main className="space-y-8">
      <header>
        <h2 className="font-display text-xl font-semibold">Căn cứ cổ tịch</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
          Mười mục nhật khảo bám nguyên văn. Dùng để đối chiếu công pháp, không dùng để tự phong
          quả vị. Cảnh (hiện tượng) khác chứng (đan kết).
        </p>
      </header>

      <section className="space-y-3">
        <h3 className="font-medium">Định vị giai đoạn</h3>
        {GIAI_DOAN.map((g) => (
          <blockquote key={g.han} className="rounded-md border border-line bg-surface p-4">
            <p className="font-han text-[0.95rem] leading-relaxed text-pine">{g.han}</p>
            <p className="mt-2 text-sm italic text-muted">{g.dich}</p>
            <p className="mt-1 text-xs text-subtle">{g.nguon}</p>
          </blockquote>
        ))}
      </section>

      <section className="space-y-3">
        <h3 className="font-medium">Mười mục và câu chữ</h3>
        {CRITERIA.map((c) => (
          <article key={c.id} className="rounded-md border border-line bg-surface p-4">
            <p className="text-xs text-subtle">Mục {c.so}</p>
            <h4 className="font-display text-lg font-semibold">{c.ten}</h4>
            <p className="mt-1 text-sm">{c.hoi}</p>
            <p className="mt-3 font-han text-pine">{c.han}</p>
            <p className="mt-1 text-sm italic text-muted">{c.dich}</p>
            <p className="mt-1 text-xs text-subtle">{c.nguon}</p>
            <p className="mt-3 text-sm text-warn">{c.canhBao}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
