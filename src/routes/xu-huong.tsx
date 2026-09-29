import { createFileRoute } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import { CRITERIA } from "@/lib/criteria";
import { loadSessions, quyCan } from "@/lib/journal";

export const Route = createFileRoute("/xu-huong")({ component: Trends });

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function Trends() {
  const sessions = useSyncExternalStore(subscribe, loadSessions, () => []).slice().reverse();

  if (sessions.length < 1) {
    return <p className="text-muted">Cần ít nhất một phiếu đã lưu.</p>;
  }

  const latest = sessions[sessions.length - 1];
  const avgBy = (id: string) => {
    const vals = sessions.map((s) => Number(s.scores[id] ?? 0)).filter((v) => v > 0);
    if (!vals.length) return 0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  };

  return (
    <main className="space-y-6">
      <header>
        <h2 className="font-display text-xl font-semibold">Xu hướng</h2>
        <p className="mt-1 text-sm text-muted">
          {sessions.length} buổi. Cổ tịch xem bốn cột then chốt hơn quang cảm.
        </p>
      </header>

      <section className="rounded-lg border border-line bg-surface p-5">
        <p className="text-xs text-subtle">Quy căn theo thời gian</p>
        <div className="mt-4 flex h-32 items-end gap-1">
          {sessions.map((s) => {
            const v = quyCan(s);
            const h = Math.max(6, (v / 4) * 100);
            return (
              <div key={s.id} className="flex h-full flex-1 flex-col justify-end">
                <div
                  className="w-full rounded-sm bg-pine"
                  style={{ height: `${h}%` }}
                  title={`${s.date}: ${v.toFixed(1)}`}
                />
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-sm text-muted">
          Phiếu mới nhất: {quyCan(latest).toFixed(1)} / 4
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="font-medium">Trung bình từng mục</h3>
        {CRITERIA.map((c) => {
          const a = avgBy(c.id);
          return (
            <div key={c.id}>
              <div className="mb-1 flex justify-between text-sm">
                <span>{c.ten}</span>
                <span className="tabular-nums text-muted">{a.toFixed(1)}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-line">
                <div className="h-full bg-pine" style={{ width: `${(a / 4) * 100}%` }} />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
