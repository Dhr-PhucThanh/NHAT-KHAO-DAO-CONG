import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Nhật Khảo Đạo Công";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: "Phiếu nhật khảo 10 mục đối chiếu công pháp Đạo gia với cổ tịch.",
      },
      { name: "theme-color", content: "#2f4a43" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,600;1,400&family=Noto+Serif+SC:wght@500;600&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-4 pb-16 pt-5 sm:px-6">
            <header className="mb-6 flex items-end justify-between gap-4 border-b border-line pb-4">
              <Link to="/" className="block">
                <p className="font-han text-sm tracking-widest text-pine">日考道功</p>
                <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Nhật Khảo Đạo Công
                </h1>
              </Link>
              <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-muted">
                <Link to="/" className="hover:text-ink" activeProps={{ className: "text-pine" }}>
                  Phiếu mới
                </Link>
                <Link
                  to="/lich-su"
                  className="hover:text-ink"
                  activeProps={{ className: "text-pine" }}
                >
                  Lịch sử
                </Link>
                <Link
                  to="/xu-huong"
                  className="hover:text-ink"
                  activeProps={{ className: "text-pine" }}
                >
                  Xu hướng
                </Link>
                <Link
                  to="/can-cu"
                  className="hover:text-ink"
                  activeProps={{ className: "text-pine" }}
                >
                  Căn cứ
                </Link>
              </nav>
            </header>
            <Outlet />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
