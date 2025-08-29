import "./globals.css";

export const metadata = {
  title: "Mi página",
  description: "Proyecto con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
