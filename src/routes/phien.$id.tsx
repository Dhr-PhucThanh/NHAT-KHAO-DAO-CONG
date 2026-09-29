import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";
import { CRITERIA, SCORE_LABELS } from "@/lib/criteria";
import { deleteSession, loadSessions, quyCan } from "@/lib/journal";

export const Route = createFileRoute("/phien/$id")({ component: Detail });

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function Detail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const sessions = useSyncExternalStore(subscribe, loadSessions, () => []);
  const s = sessions.find((x) => x.id === id);

  if (!s) {
    return (
      <p className="text-muted">
        Không tìm thấy phiếu.{" "}
        <Link to="/lich-su" className="text-pine underline">
          Về lịch sử
        </Link>
      </p>
    );
  }

  return (
    <main className="space-y-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted tabular-nums">{s.date}</p>
          <h2 className="font-display text-xl font-semibold">Phiếu {s.durationMin} phút</h2>
          <p className="mt-1 text-sm text-pine">Chỉ số quy căn {quyCan(s).toFixed(1)} / 4</p>
        </div>
        <button
          type="button"
          className="h-10 rounded-md border border-warn/40 px-3 text-sm text-warn"
          onClick={() => {
            deleteSession(id);
            void navigate({ to: "/lich-su" });
          }}
        >
          Xóa
        </button>
      </div>
      {s.tong ? (
        <p className="rounded-md border border-line bg-surface p-4 text-sm leading-relaxed">{s.tong}</p>
      ) : null}
      <ol className="space-y-3">
        {CRITERIA.map((c) => (
          <li key={c.id} className="rounded-md border border-line bg-surface p-4">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-medium">
                {c.so}. {c.ten}
              </h3>
              <span className="text-sm text-pine">{SCORE_LABELS[s.scores[c.id] ?? 0]}</span>
            </div>
            {s.notes[c.id] ? (
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.notes[c.id]}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </main>
  );
}
