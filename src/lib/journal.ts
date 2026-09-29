import { CRITERIA, type Score } from "./criteria";

const KEY = "daogong-nhatkhao-v1";

export type Session = {
  id: string;
  createdAt: string;
  date: string;
  durationMin: number;
  scores: Record<string, Score>;
  notes: Record<string, string>;
  tong: string;
};

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function loadSessions(): Session[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Session[];
    return Array.isArray(parsed) ? parsed.sort((a, b) => b.createdAt.localeCompare(a.createdAt)) : [];
  } catch {
    return [];
  }
}

export function saveSessions(sessions: Session[]) {
  localStorage.setItem(KEY, JSON.stringify(sessions));
}

export function upsertSession(session: Session) {
  const all = loadSessions().filter((s) => s.id !== session.id);
  all.unshift(session);
  saveSessions(all);
}

export function deleteSession(id: string) {
  saveSessions(loadSessions().filter((s) => s.id !== id));
}

export function emptyScores(): Record<string, Score> {
  return Object.fromEntries(CRITERIA.map((c) => [c.id, 0 as Score]));
}

export function emptyNotes(): Record<string, string> {
  return Object.fromEntries(CRITERIA.map((c) => [c.id, ""]));
}

function mean(vals: number[]) {
  const n = vals.filter((v) => v > 0).length;
  if (!n) return 0;
  return vals.reduce((a, b) => a + b, 0) / n;
}

export function average(session: Session) {
  return mean(CRITERIA.map((c) => session.scores[c.id] ?? 0));
}

export function quyCan(session: Session) {
  return mean(["ha-dan", "dia-ho", "vo-vi", "nguon-khi"].map((id) => session.scores[id] ?? 0));
}

export function newSessionDraft(): Session {
  const now = new Date();
  return {
    id: uid(),
    createdAt: now.toISOString(),
    date: now.toISOString().slice(0, 10),
    durationMin: 30,
    scores: emptyScores(),
    notes: emptyNotes(),
    tong: "",
  };
}
