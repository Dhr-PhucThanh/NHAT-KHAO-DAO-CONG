import { createFileRoute, Link } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import { SCORE_LABELS } from "@/lib/criteria";
import { average, loadSessions, quyCan } from "@/lib/journal";

export const Route = createFileRoute("/lich-su")({ component: HistoryPage });

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function HistoryPage() {
  const sessions = useSyncExternalStore(subscribe, loadSessions, () => []);

  if (!sessions.length) {
    return (
      <main className="rounded-lg border border-dashed border-line bg-surface px-5 py-16 text-center">
        <p className="font-display text-lg">Chưa có phiếu nào</p>
        <p className="mt-2 text-sm text-muted">Sau buổi ngồi, vào Phiếu mới và chấm 10 mục.</p>
        <Link
          to="/"
          className="mt-6 inline-flex h-11 items-center rounded-md bg-pine px-5 text-sm font-medium text-pine-fg"
        >
          Mở phiếu mới
        </Link>
      </main>
    );
  }

  return (
    <main className="space-y-3">
      <h2 className="font-display text-xl font-semibold">Lịch sử ngồi</h2>
      <ul className="space-y-2">
        {sessions.map((s) => {
          const avg = average(s);
          const qc = quyCan(s);
          const ha = s.scores["ha-dan"] ?? 0;
          return (
            <li key={s.id}>
              <Link
                to="/phien/$id"
                params={{ id: s.id }}
                className="flex items-center justify-between gap-3 rounded-md border border-line bg-surface px-4 py-3 hover:border-pine/40"
              >
                <div>
                  <p className="font-medium tabular-nums">{s.date}</p>
                  <p className="text-sm text-muted">
                    {s.durationMin} phút · hạ đan {SCORE_LABELS[ha]}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-subtle">Quy căn</p>
                  <p className="font-display text-xl tabular-nums text-pine">{qc.toFixed(1)}</p>
                  <p className="text-xs text-muted">TB {avg.toFixed(1)}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
