import "../components/plasmic/imported_project/plasmic.css"; // plasmic-import: fW8ySBRpgbQN1cYrDk9PsP/projectcss
import "@/styles/globals.css";
export const metadata = {
  title: "NOCS Lab",
  description: "Site do NOCS Lab"
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
