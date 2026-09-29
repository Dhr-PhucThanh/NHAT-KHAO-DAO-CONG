import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CriterionCard } from "@/components/criterion-card";
import { CRITERIA, type Score } from "@/lib/criteria";
import {
  emptyNotes,
  emptyScores,
  quyCan,
  upsertSession,
  type Session,
} from "@/lib/journal";

export const Route = createFileRoute("/")({ component: Home });

function blankDraft(): Session {
  return {
    id: "draft",
    createdAt: "",
    date: "",
    durationMin: 30,
    scores: emptyScores(),
    notes: emptyNotes(),
    tong: "",
  };
}

function Home() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<Session>(blankDraft);

  useEffect(() => {
    const now = new Date();
    setDraft((d) => ({
      ...d,
      id: `${now.getTime().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: now.toISOString(),
      date: d.date || now.toISOString().slice(0, 10),
    }));
  }, []);

  const qc = useMemo(() => quyCan(draft), [draft]);

  function save() {
    const now = new Date();
    upsertSession({
      ...draft,
      id: draft.id === "draft" ? `${now.getTime().toString(36)}` : draft.id,
      createdAt: now.toISOString(),
      date: draft.date || now.toISOString().slice(0, 10),
    });
    void navigate({ to: "/lich-su" });
  }

  return (
    <main className="space-y-5">
      <section className="rounded-lg border border-line bg-surface p-5">
        <p className="font-han text-sm text-pine">每坐一考 · mỗi ngồi một khảo</p>
        <h2 className="mt-1 font-display text-xl font-semibold">Phiếu nhật khảo</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
          Chấm ngay sau khi xuống tọa. Cảnh khớp cổ tịch không đồng nghĩa đã kết đan. Bốn mục
          then chốt giai đoạn Cam Lộ: nguồn khí, quy hạ đan, địa hộ, vô vi.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <label className="block text-sm">
            <span className="mb-1 block text-xs text-subtle">Ngày</span>
            <input
              type="date"
              value={draft.date}
              onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              className="h-11 w-full rounded-md border border-line bg-bg px-3 text-ink outline-none focus:ring-2 focus:ring-pine/30"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-xs text-subtle">Thời lượng (phút)</span>
            <input
              type="number"
              min={1}
              max={300}
              value={draft.durationMin}
              onChange={(e) =>
                setDraft({ ...draft, durationMin: Number(e.target.value) || 0 })
              }
              className="h-11 w-full rounded-md border border-line bg-bg px-3 text-ink outline-none focus:ring-2 focus:ring-pine/30"
            />
          </label>
          <div className="col-span-2 rounded-md border border-line bg-bg px-3 py-2 sm:col-span-1">
            <p className="text-xs text-subtle">Chỉ số quy căn</p>
            <p className="font-display text-2xl tabular-nums text-pine">{qc.toFixed(1)}</p>
            <p className="text-xs text-muted">Trung bình 4 mục then chốt</p>
          </div>
        </div>
      </section>

      {CRITERIA.map((item) => (
        <CriterionCard
          key={item.id}
          item={item}
          score={draft.scores[item.id] ?? 0}
          note={draft.notes[item.id] ?? ""}
          onScore={(s: Score) =>
            setDraft({ ...draft, scores: { ...draft.scores, [item.id]: s } })
          }
          onNote={(n) => setDraft({ ...draft, notes: { ...draft.notes, [item.id]: n } })}
        />
      ))}

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Tổng cảm buổi ngồi</span>
        <textarea
          value={draft.tong}
          onChange={(e) => setDraft({ ...draft, tong: e.target.value })}
          rows={4}
          className="w-full rounded-md border border-line bg-surface px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pine/30"
          placeholder="Một đoạn ngắn: khí từ đâu, về đâu, có cưỡng ý không."
        />
      </label>

      <button
        type="button"
        onClick={save}
        className="h-12 w-full rounded-md bg-pine text-base font-medium text-pine-fg hover:opacity-90"
      >
        Lưu phiếu này
      </button>
    </main>
  );
}
