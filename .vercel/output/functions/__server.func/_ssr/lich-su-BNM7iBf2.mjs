import { i as __toESM } from "../_runtime.mjs";
import { n as SCORE_LABELS } from "./criteria-Di5-4tN6.mjs";
import { J as require_jsx_runtime, q as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as loadSessions, o as quyCan, t as average } from "./journal-B5qcDPNs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lich-su-BNM7iBf2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function subscribe(cb) {
	window.addEventListener("storage", cb);
	return () => window.removeEventListener("storage", cb);
}
function HistoryPage() {
	const sessions = (0, import_react.useSyncExternalStore)(subscribe, loadSessions, () => []);
	if (!sessions.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rounded-lg border border-dashed border-line bg-surface px-5 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg",
				children: "Chưa có phiếu nào"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Sau buổi ngồi, vào Phiếu mới và chấm 10 mục."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-flex h-11 items-center rounded-md bg-pine px-5 text-sm font-medium text-pine-fg",
				children: "Mở phiếu mới"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-semibold",
			children: "Lịch sử ngồi"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: sessions.map((s) => {
				const avg = average(s);
				const qc = quyCan(s);
				const ha = s.scores["ha-dan"] ?? 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/phien/$id",
					params: { id: s.id },
					className: "flex items-center justify-between gap-3 rounded-md border border-line bg-surface px-4 py-3 hover:border-pine/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium tabular-nums",
						children: s.date
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							s.durationMin,
							" phút · hạ đan ",
							SCORE_LABELS[ha]
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-subtle",
								children: "Quy căn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl tabular-nums text-pine",
								children: qc.toFixed(1)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: ["TB ", avg.toFixed(1)]
							})
						]
					})]
				}) }, s.id);
			})
		})]
	});
}
//#endregion
export { HistoryPage as component };
