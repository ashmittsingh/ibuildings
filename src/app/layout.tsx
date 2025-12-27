// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

// System font stack - no external dependencies for offline builds
// Using industry-standard fallback for production reliability

export const metadata: Metadata = {
  title: "iBuildings - Structural Engineering",
  description: "Structural engineering consultancy since 1998",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: 'white',
        color: '#111827'
      }}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}