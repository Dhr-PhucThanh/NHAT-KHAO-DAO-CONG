import { t as CRITERIA } from "./criteria-Di5-4tN6.mjs";
import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/can-cu-BP3eVSNy.js
var import_jsx_runtime = require_jsx_runtime();
var GIAI_DOAN = [
	{
		han: "鍊形成氣，鍊氣成神，鍊神合道。",
		dich: "Luyện hình thành khí, luyện khí thành thần, luyện thần hợp đạo.",
		nguon: "Chung Lã Truyền Đạo Tập"
	},
	{
		han: "自下田入上田，自上田復下田。",
		dich: "Từ hạ điền vào thượng điền, từ thượng điền trở lại hạ điền.",
		nguon: "Chung Lã · Luận hoàn đan"
	},
	{
		han: "醍醐灌頂，甘露灑心。此乃真景象也，非譬喻也。",
		dich: "Đề hồ quán đỉnh, Cam Lộ rưới tâm. Đây là cảnh thật, không phải thí dụ.",
		nguon: "Tính Mệnh Khuê Chỉ"
	},
	{
		han: "咽津納氣是人行……鼎內若無真種子，猶將水火煮空鐺。",
		dich: "Nuốt tân nạp khí là việc người thường. Đỉnh không hạt giống thật khác gì đun chảo không.",
		nguon: "Ngộ Chân Thiên"
	}
];
function Canon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Căn cứ cổ tịch"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-prose text-sm leading-relaxed text-muted",
				children: "Mười mục nhật khảo bám nguyên văn. Dùng để đối chiếu công pháp, không dùng để tự phong quả vị. Cảnh (hiện tượng) khác chứng (đan kết)."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium",
					children: "Định vị giai đoạn"
				}), GIAI_DOAN.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "rounded-md border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-han text-[0.95rem] leading-relaxed text-pine",
							children: g.han
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm italic text-muted",
							children: g.dich
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-subtle",
							children: g.nguon
						})
					]
				}, g.han))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium",
					children: "Mười mục và câu chữ"
				}), CRITERIA.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-subtle",
							children: ["Mục ", c.so]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-lg font-semibold",
							children: c.ten
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm",
							children: c.hoi
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-han text-pine",
							children: c.han
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm italic text-muted",
							children: c.dich
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-subtle",
							children: c.nguon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-warn",
							children: c.canhBao
						})
					]
				}, c.id))]
			})
		]
	});
}
//#endregion
export { Canon as component };
