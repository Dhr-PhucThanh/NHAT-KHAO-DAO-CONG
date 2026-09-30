import React from 'react';
import type { Score } from '@/lib/criteria';

interface CriterionItem {
  id: string;
  name: string;
  desc?: string;
  weight?: number;
}

interface CriterionCardProps {
  item: CriterionItem;
  score: Score;
  note: string;
  onScore: (s: Score) => void;
  onNote: (n: string) => void;
}

export const CriterionCard: React.FC<CriterionCardProps> = ({
  item,
  score,
  note,
  onScore,
  onNote,
}) => {
  const scores: Score[] = [0, 1, 2, 3, 4, 5];

  return (
    <div className="rounded-lg border border-line bg-surface p-4 space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h3 className="font-display font-medium text-ink">{item.name}</h3>
        {item.desc && <p className="text-xs text-muted">{item.desc}</p>}
      </div>

      <div className="flex flex-wrap gap-2">
        {scores.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onScore(s)}
            className={`h-9 w-9 rounded-md border text-sm font-medium transition-colors ${
              score === s
                ? 'border-pine bg-pine text-pine-fg'
                : 'border-line bg-bg text-ink hover:border-pine/50'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={note}
        onChange={(e) => onNote(e.target.value)}
        placeholder="Ghi chú chi tiết cho mục này..."
        className="w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-pine/30"
      />
    </div>
  );
};

export default CriterionCard;
