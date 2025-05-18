import "./globals.css";

export const metadata = {
  title: "Dominicana Compañía de Seguros",
  description: "Sistema de gestión de seguros",
};

export default function login({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}