import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/plasmic/nocs_lab_site/plasmic.css"; // plasmic-import: q2bNAsKkbiT6rYXpuB7PPG/projectcss
import "../components/plasmic/imported_project/plasmic.css"; // plasmic-import: 9CQRGX1w6jNvZbc4uxDRzz/projectcss
import "../components/plasmic/imported_project/plasmic.css"; // plasmic-import: 8cknWe2DbKJBCm8iYPPxy4/projectcss
import "../components/plasmic/imported_project/plasmic.css"; // plasmic-import: j2drmhCFcBPFjhgcVEyYEZ/projectcss
import "../components/plasmic/nocs_lab_site/plasmic.css"; // plasmic-import: mtEUaQuwBpAFAb2iovN16n/projectcss
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
