// app/layout.tsx
import './globals.css'; // Si no tienes globals.css, puedes quitar esta línea

export const metadata = {
  title: 'Separación Libre',
  description: 'App para familias separadas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
