import { i as __toESM } from "../_runtime.mjs";
import { n as SCORE_LABELS, t as CRITERIA } from "./criteria-Di5-4tN6.mjs";
import { J as require_jsx_runtime, b as useNavigate, q as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as loadSessions, n as deleteSession, o as quyCan } from "./journal-B5qcDPNs.mjs";
import { n as Route } from "./router-BWNBNUrm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/phien._id-B8Pw477S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function subscribe(cb) {
	window.addEventListener("storage", cb);
	return () => window.removeEventListener("storage", cb);
}
function Detail() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const s = (0, import_react.useSyncExternalStore)(subscribe, loadSessions, () => []).find((x) => x.id === id);
	if (!s) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-muted",
		children: [
			"Không tìm thấy phiếu.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/lich-su",
				className: "text-pine underline",
				children: "Về lịch sử"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted tabular-nums",
						children: s.date
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-xl font-semibold",
						children: [
							"Phiếu ",
							s.durationMin,
							" phút"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-pine",
						children: [
							"Chỉ số quy căn ",
							quyCan(s).toFixed(1),
							" / 4"
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-10 rounded-md border border-warn/40 px-3 text-sm text-warn",
					onClick: () => {
						deleteSession(id);
						navigate({ to: "/lich-su" });
					},
					children: "Xóa"
				})]
			}),
			s.tong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md border border-line bg-surface p-4 text-sm leading-relaxed",
				children: s.tong
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: CRITERIA.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-medium",
							children: [
								c.so,
								". ",
								c.ten
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-pine",
							children: SCORE_LABELS[s.scores[c.id] ?? 0]
						})]
					}), s.notes[c.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: s.notes[c.id]
					}) : null]
				}, c.id))
			})
		]
	});
}
//#endregion
export { Detail as component };
