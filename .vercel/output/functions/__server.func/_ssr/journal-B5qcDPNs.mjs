import { t as CRITERIA } from "./criteria-Di5-4tN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-B5qcDPNs.js
var KEY = "daogong-nhatkhao-v1";
function loadSessions() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed.sort((a, b) => b.createdAt.localeCompare(a.createdAt)) : [];
	} catch {
		return [];
	}
}
function saveSessions(sessions) {
	localStorage.setItem(KEY, JSON.stringify(sessions));
}
function upsertSession(session) {
	const all = loadSessions().filter((s) => s.id !== session.id);
	all.unshift(session);
	saveSessions(all);
}
function deleteSession(id) {
	saveSessions(loadSessions().filter((s) => s.id !== id));
}
function emptyScores() {
	return Object.fromEntries(CRITERIA.map((c) => [c.id, 0]));
}
function emptyNotes() {
	return Object.fromEntries(CRITERIA.map((c) => [c.id, ""]));
}
function mean(vals) {
	const n = vals.filter((v) => v > 0).length;
	if (!n) return 0;
	return vals.reduce((a, b) => a + b, 0) / n;
}
function average(session) {
	return mean(CRITERIA.map((c) => session.scores[c.id] ?? 0));
}
function quyCan(session) {
	return mean([
		"ha-dan",
		"dia-ho",
		"vo-vi",
		"nguon-khi"
	].map((id) => session.scores[id] ?? 0));
}
//#endregion
export { loadSessions as a, emptyScores as i, deleteSession as n, quyCan as o, emptyNotes as r, upsertSession as s, average as t };
