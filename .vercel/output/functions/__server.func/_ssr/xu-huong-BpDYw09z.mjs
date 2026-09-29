import { i as __toESM } from "../_runtime.mjs";
import { t as CRITERIA } from "./criteria-Di5-4tN6.mjs";
import { J as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as loadSessions, o as quyCan } from "./journal-B5qcDPNs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/xu-huong-BpDYw09z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function subscribe(cb) {
	window.addEventListener("storage", cb);
	return () => window.removeEventListener("storage", cb);
}
function Trends() {
	const sessions = (0, import_react.useSyncExternalStore)(subscribe, loadSessions, () => []).slice().reverse();
	if (sessions.length < 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "Cần ít nhất một phiếu đã lưu."
	});
	const latest = sessions[sessions.length - 1];
	const avgBy = (id) => {
		const vals = sessions.map((s) => Number(s.scores[id] ?? 0)).filter((v) => v > 0);
		if (!vals.length) return 0;
		return vals.reduce((a, b) => a + b, 0) / vals.length;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Xu hướng"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [sessions.length, " buổi. Cổ tịch xem bốn cột then chốt hơn quang cảm."]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Quy căn theo thời gian"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex h-32 items-end gap-1",
						children: sessions.map((s) => {
							const v = quyCan(s);
							const h = Math.max(6, v / 4 * 100);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-full flex-1 flex-col justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full rounded-sm bg-pine",
									style: { height: `${h}%` },
									title: `${s.date}: ${v.toFixed(1)}`
								})
							}, s.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Phiếu mới nhất: ",
							quyCan(latest).toFixed(1),
							" / 4"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium",
					children: "Trung bình từng mục"
				}), CRITERIA.map((c) => {
					const a = avgBy(c.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.ten }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-muted",
							children: a.toFixed(1)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 overflow-hidden rounded-full bg-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-pine",
							style: { width: `${a / 4 * 100}%` }
						})
					})] }, c.id);
				})]
			})
		]
	});
}
//#endregion
export { Trends as component };
