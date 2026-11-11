import { isPlasmicConfigured, PLASMIC } from "@/plasmic-init";
import { ClientPlasmicRootProvider } from "@/plasmic-init-client";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ catchall?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateStaticParams() {
  if (!isPlasmicConfigured) {
    return [];
  }

  const pages = await PLASMIC.fetchPages();
  return pages.map((page) => ({
    catchall: page.path === "/" ? [] : page.path.substring(1).split("/")
  }));
}

export default async function PlasmicPage({
  params,
  searchParams
}: PageProps) {
  if (!isPlasmicConfigured) {
    return (
      <main>
        <h1>NOCS Lab</h1>
        <p>
          Configure o arquivo .env.local com o ID e o token do projeto Plasmic
          para publicar esta página.
        </p>
      </main>
    );
  }

  const { catchall } = await params;
  const query = await searchParams;
  const path = catchall ? `/${catchall.join("/")}` : "/";
  const prefetchedData = await PLASMIC.maybeFetchComponentData(path);

  if (!prefetchedData || prefetchedData.entryCompMetas.length === 0) {
    notFound();
  }

  const pageMeta = prefetchedData.entryCompMetas[0];
  return (
    <ClientPlasmicRootProvider
      prefetchedData={prefetchedData}
      pageParams={pageMeta.params}
      pageQuery={query}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </ClientPlasmicRootProvider>
  );
}
