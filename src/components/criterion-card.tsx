import type { Criterion, Score } from "@/lib/criteria";
import { TRONG_TAM } from "@/lib/criteria";
import { ScorePills } from "./score-pills";

export function CriterionCard({
  item,
  score,
  note,
  onScore,
  onNote,
}: {
  item: Criterion;
  score: Score;
  note: string;
  onScore: (s: Score) => void;
  onNote: (n: string) => void;
}) {
  const trongTam = (TRONG_TAM as readonly string[]).includes(item.id);
  return (
    <article className="rounded-lg border border-line bg-surface p-4 sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-wide text-subtle">
            Mục {item.so}
            {trongTam ? " · then chốt giai đoạn này" : ""}
          </p>
          <h3 className="font-display text-lg font-semibold text-ink">{item.ten}</h3>
        </div>
        <span className="font-han shrink-0 text-sm text-pine">{item.so.toString().padStart(2, "0")}</span>
      </div>
      <p className="mb-3 text-[0.95rem] leading-relaxed text-ink">{item.hoi}</p>
      <ul className="mb-4 space-y-1 text-sm text-muted">
        {item.goiY.map((g) => (
          <li key={g} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-pine/50" />
            {g}
          </li>
        ))}
      </ul>
      <blockquote className="mb-1 font-han text-[0.95rem] leading-relaxed text-pine">
        {item.han}
      </blockquote>
      <p className="mb-1 text-sm italic leading-relaxed text-muted">{item.dich}</p>
      <p className="mb-3 text-xs text-subtle">{item.nguon}</p>
      <p className="mb-4 border-l-2 border-warn/40 pl-3 text-sm text-warn">{item.canhBao}</p>
      <ScorePills value={score} onChange={onScore} />
      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-medium text-subtle">Ghi chú buổi này</span>
        <textarea
          value={note}
          onChange={(e) => onNote(e.target.value)}
          rows={2}
          className="w-full resize-y rounded-md border border-line bg-bg px-3 py-2 text-sm text-ink outline-none ring-pine/30 placeholder:text-subtle focus:ring-2"
          placeholder="Cảm thọ cụ thể, không diễn giải…"
        />
      </label>
    </article>
  );
}
