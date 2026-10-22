import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wantok Business Manager",
  description: "Simple business records for small businesses in Papua New Guinea.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b6b3a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="header">
            <span>Wantok Business Manager</span>
            <span className="badge">Test build</span>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            Foundation build for testing. Not for real business records. Amounts in kina (K).
          </footer>
        </div>
      </body>
    </html>
  );
}
