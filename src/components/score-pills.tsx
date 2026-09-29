import { SCORE_LABELS, type Score } from "@/lib/criteria";
import { cn } from "@/lib/utils";

const ORDER: Score[] = [0, 1, 2, 3, 4];

export function ScorePills({
  value,
  onChange,
}: {
  value: Score;
  onChange: (s: Score) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5" role="radiogroup">
      {ORDER.map((s) => {
        const active = value === s;
        return (
          <button
            key={s}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(s)}
            className={cn(
              "min-h-11 rounded-full border px-3 text-sm font-medium transition-colors duration-[var(--motion-quick)]",
              active
                ? s === 1
                  ? "border-warn bg-warn text-pine-fg"
                  : "border-pine bg-pine text-pine-fg"
                : "border-line bg-surface text-muted hover:border-ink/30 hover:text-ink",
            )}
          >
            {SCORE_LABELS[s]}
          </button>
        );
      })}
    </div>
  );
}
