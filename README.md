# NOCS Lab Site

Aplicacao Next.js gerada com [Plasmic](https://www.plasmic.app/) Codegen. O projeto visual fica em um Studio Plasmic local; este repositorio contem a aplicacao React gerada, os assets e os workflows de deploy.

## Fluxo

```text
Studio local -> npm run codegen -> Next.js -> GitHub Actions -> Pages ou Docker
```

O Codegen gera ou atualiza os arquivos em `components/plasmic/`, `public/plasmic/` e `plasmic.json`. Ele nao cria ou restaura o projeto visual nem o banco PostgreSQL.

## Pré-requisitos

- Node.js 20 ou superior;
- Docker;
- Git;
- acesso ao Studio local em `http://localhost:3003` ou ao Plasmic SaaS em `https://studio.plasmic.app`.

## Estrutura dos repositorios

Esta pasta esta organizada ao lado do repositorio do Studio:

```text
nocs/
├── plasmic-local/          # Studio, Docker Compose, PostgreSQL e backups
└── nocs-lab-site/    # esta aplicacao
```

Os detalhes do Studio estao em [`../plasmic-local/README-MY.md`](../plasmic-local/README-MY.md). Os procedimentos de backup e restauracao estao em [`../plasmic-local/backups/README.md`](../plasmic-local/backups/README.md).

## Preparar o Studio local

Na pasta `plasmic-local`, configure e inicie os servicos:

```bash
cd ../plasmic-local
docker compose up -d --build
docker compose ps
```

Abra `http://localhost:3003`. Em uma inicializacao nova do banco, o seed pode ser necessario apenas uma vez:

```bash
docker compose exec plasmic-wab pnpm seed
```

Consulte os arquivos locais citados no README do Studio para as credenciais administrativas. Nunca copie senhas ou dumps para este repositorio.

## Configurar esta aplicacao

Na pasta `nocs-lab-site`:

```bash
npm ci
```

Copie o modelo de ambiente:

```powershell
cp .env.example .env.local
```

Variaveis:

- `PLASMIC_PROJECT_ID`: ID do projeto principal usado pelo Codegen;
- `PLASMIC_HOST`: URL do Studio local ou SaaS;
- `NEXT_PUBLIC_BASE_PATH`: prefixo opcional para uma publicacao em subpasta. Deixe vazio para raiz ou use `/nocs-lab-site` no GitHub Pages.

Mantenha `.env.local` apenas na maquina local.

## Autenticar o Codegen

O host usado para autenticar e gerar o codigo vem de `PLASMIC_HOST` no `.env.local`. Autentique com o mesmo host configurado:

```bash
npm run plasmic:auth
```

### Studio local

Com o Studio aberto em `http://localhost:3003`, configure:

```dotenv
PLASMIC_HOST=http://localhost:3003
```

Autorize a URL que comeca com
`http://localhost:3003/auth/plasmic-init/`.

### Plasmic SaaS

Para gerar diretamente do SaaS, use exatamente o origin do Studio:

```dotenv
PLASMIC_HOST=https://studio.plasmic.app
PLASMIC_PROJECT_ID=
```

Depois execute:

```bash
npm run plasmic:auth
npm run codegen
```

Nao inclua o caminho de um projeto ou workspace em `PLASMIC_HOST`; use apenas `https://studio.plasmic.app`. O projeto continua sendo selecionado por `PLASMIC_PROJECT_ID`.

## Gerar e executar

Apos publicar as alteracoes no Studio:

```bash
npm run codegen
npm run dev
```

Abra `http://localhost:3000`.

Para confirmar o build estatico:

```bash
npm run build
```

O Next.js gera `out/`. Os comandos validam o resultado e o script `patch-exported-asset-paths.mjs` ajusta o prefixo dos assets do Plasmic. Arquivos gerados como `Plasmic*.tsx`, os CSS gerados e `plasmic.json` nao devem ser editados manualmente.

## Executar com Docker

Crie e execute o contêiner na raiz desta aplicacao:

```bash
docker build -t nocs-lab-site .
docker run --rm -d --name nocs-lab-site -p 9999:80 nocs-lab-site
```

Abra `http://localhost:9999`.

Para substituir ou parar o contêiner:

```bash
docker rm -f nocs-lab-site
```

Para publicar em uma subpasta dentro do Docker, passe o prefixo no build:

```bash
docker build --build-arg NEXT_PUBLIC_BASE_PATH=/nocs-lab-site -t nocs-lab-site .
```

## Publicar no GitHub Pages

O workflow [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml) executa `npm ci` e `npm run build` com o prefixo baseado no nome do repositorio. Ele nao executa o Codegen e nao precisa de credenciais do Plasmic: os arquivos React ja devem estar commitados.

Depois de confirmar as alteracoes:

```bash
git add .
git commit -m "..."
git push origin main
```

No GitHub, em **Settings > Pages**, selecione **GitHub Actions**. A URL
esperada para este repositorio e:

```text
https://brasilicioh.github.io/nocs-lab-site/
```

## Publicar uma imagem Docker

O workflow [`.github/workflows/deploy-docker.yml`](./.github/workflows/deploy-docker.yml) publica no GitHub Container Registry em pushes para `main`.

## Atualizar o projeto visual

1. Inicie o Studio local;
2. edite e publique o projeto no Studio;
3. execute `npm run codegen`;
4. revise os arquivos gerados;
5. execute `npm run build`;
6. faca commit e push.

## Configurar em outro computador

1. Clone os repositorios `plasmic-local` e `nocs-lab-site`;
2. restaure o banco ou importe o backup do Studio;
3. execute `docker compose up -d --build` em `plasmic-local`;
4. execute `npm ci` em `nocs-lab-site`;
5. copie `.env.example` para `.env.local`;
6. autentique com `npm run plasmic:auth`, usando o host configurado em `.env.local`;
7. execute `npm run codegen`;
8. valide com `npm run dev` e `npm run build`.
