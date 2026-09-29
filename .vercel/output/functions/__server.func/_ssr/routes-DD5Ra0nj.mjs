import { i as __toESM } from "../_runtime.mjs";
import { n as SCORE_LABELS, r as TRONG_TAM, t as CRITERIA } from "./criteria-Di5-4tN6.mjs";
import { J as require_jsx_runtime, b as useNavigate, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as emptyScores, o as quyCan, r as emptyNotes, s as upsertSession } from "./journal-B5qcDPNs.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DD5Ra0nj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var ORDER = [
	0,
	1,
	2,
	3,
	4
];
function ScorePills({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		role: "radiogroup",
		children: ORDER.map((s) => {
			const active = value === s;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": active,
				onClick: () => onChange(s),
				className: cn("min-h-11 rounded-full border px-3 text-sm font-medium transition-colors duration-[var(--motion-quick)]", active ? s === 1 ? "border-warn bg-warn text-pine-fg" : "border-pine bg-pine text-pine-fg" : "border-line bg-surface text-muted hover:border-ink/30 hover:text-ink"),
				children: SCORE_LABELS[s]
			}, s);
		})
	});
}
function CriterionCard({ item, score, note, onScore, onNote }) {
	const trongTam = TRONG_TAM.includes(item.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-lg border border-line bg-surface p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium tracking-wide text-subtle",
					children: [
						"Mục ",
						item.so,
						trongTam ? " · then chốt giai đoạn này" : ""
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold text-ink",
					children: item.ten
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-han shrink-0 text-sm text-pine",
					children: item.so.toString().padStart(2, "0")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-[0.95rem] leading-relaxed text-ink",
				children: item.hoi
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mb-4 space-y-1 text-sm text-muted",
				children: item.goiY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-pine/50" }), g]
				}, g))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "mb-1 font-han text-[0.95rem] leading-relaxed text-pine",
				children: item.han
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-sm italic leading-relaxed text-muted",
				children: item.dich
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs text-subtle",
				children: item.nguon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 border-l-2 border-warn/40 pl-3 text-sm text-warn",
				children: item.canhBao
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScorePills, {
				value: score,
				onChange: onScore
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-xs font-medium text-subtle",
					children: "Ghi chú buổi này"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: note,
					onChange: (e) => onNote(e.target.value),
					rows: 2,
					className: "w-full resize-y rounded-md border border-line bg-bg px-3 py-2 text-sm text-ink outline-none ring-pine/30 placeholder:text-subtle focus:ring-2",
					placeholder: "Cảm thọ cụ thể, không diễn giải…"
				})]
			})
		]
	});
}
function blankDraft() {
	return {
		id: "draft",
		createdAt: "",
		date: "",
		durationMin: 30,
		scores: emptyScores(),
		notes: emptyNotes(),
		tong: ""
	};
}
function Home() {
	const navigate = useNavigate();
	const [draft, setDraft] = (0, import_react.useState)(blankDraft);
	(0, import_react.useEffect)(() => {
		const now = /* @__PURE__ */ new Date();
		setDraft((d) => ({
			...d,
			id: `${now.getTime().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
			createdAt: now.toISOString(),
			date: d.date || now.toISOString().slice(0, 10)
		}));
	}, []);
	const qc = (0, import_react.useMemo)(() => quyCan(draft), [draft]);
	function save() {
		const now = /* @__PURE__ */ new Date();
		upsertSession({
			...draft,
			id: draft.id === "draft" ? `${now.getTime().toString(36)}` : draft.id,
			createdAt: now.toISOString(),
			date: draft.date || now.toISOString().slice(0, 10)
		});
		navigate({ to: "/lich-su" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-han text-sm text-pine",
						children: "每坐一考 · mỗi ngồi một khảo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-xl font-semibold",
						children: "Phiếu nhật khảo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-prose text-sm leading-relaxed text-muted",
						children: "Chấm ngay sau khi xuống tọa. Cảnh khớp cổ tịch không đồng nghĩa đã kết đan. Bốn mục then chốt giai đoạn Cam Lộ: nguồn khí, quy hạ đan, địa hộ, vô vi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-xs text-subtle",
									children: "Ngày"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: draft.date,
									onChange: (e) => setDraft({
										...draft,
										date: e.target.value
									}),
									className: "h-11 w-full rounded-md border border-line bg-bg px-3 text-ink outline-none focus:ring-2 focus:ring-pine/30"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-xs text-subtle",
									children: "Thời lượng (phút)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 1,
									max: 300,
									value: draft.durationMin,
									onChange: (e) => setDraft({
										...draft,
										durationMin: Number(e.target.value) || 0
									}),
									className: "h-11 w-full rounded-md border border-line bg-bg px-3 text-ink outline-none focus:ring-2 focus:ring-pine/30"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2 rounded-md border border-line bg-bg px-3 py-2 sm:col-span-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-subtle",
										children: "Chỉ số quy căn"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl tabular-nums text-pine",
										children: qc.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: "Trung bình 4 mục then chốt"
									})
								]
							})
						]
					})
				]
			}),
			CRITERIA.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CriterionCard, {
				item,
				score: draft.scores[item.id] ?? 0,
				note: draft.notes[item.id] ?? "",
				onScore: (s) => setDraft({
					...draft,
					scores: {
						...draft.scores,
						[item.id]: s
					}
				}),
				onNote: (n) => setDraft({
					...draft,
					notes: {
						...draft.notes,
						[item.id]: n
					}
				})
			}, item.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-sm font-medium text-ink",
					children: "Tổng cảm buổi ngồi"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: draft.tong,
					onChange: (e) => setDraft({
						...draft,
						tong: e.target.value
					}),
					rows: 4,
					className: "w-full rounded-md border border-line bg-surface px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pine/30",
					placeholder: "Một đoạn ngắn: khí từ đâu, về đâu, có cưỡng ý không."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: save,
				className: "h-12 w-full rounded-md bg-pine text-base font-medium text-pine-fg hover:opacity-90",
				children: "Lưu phiếu này"
			})
		]
	});
}
//#endregion
export { Home as component };
