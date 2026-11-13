# NOCS Lab Site

Este é o protótipo de criação do site do NOCS usando
[Plasmic](https://www.plasmic.app/), executado localmente e integrado ao
React por Codegen.

O site é publicado como HTML estático no GitHub Pages. O Plasmic Studio não é
acessado pelo GitHub: o código é gerado localmente, versionado neste
repositório e depois compilado pelo GitHub Actions.

## Repositórios e responsabilidades

- `../plasmic-local`: Studio Plasmic self-hosted, PostgreSQL, projeto visual e
  backups. Consulte o [guia do Studio local](../plasmic-local/README-MY.md).
- `nocs-lab-site`: código React gerado, aplicação Next.js e deploy.

Fluxo:

```text
Plasmic local → npm run codegen → React versionado → push → GitHub Pages
```

O código gerado não reconstrói o projeto visual. Para trabalhar em outro
computador, restaure também o backup do Studio/PostgreSQL descrito no
[guia de backups](../plasmic-local/backups/README.md).

## Pré-requisitos

- Node.js 20 ou superior;
- Docker;
- Git;
- Studio local funcionando em `http://localhost:3003`.

## Configuração local

Inicie o Studio no repositório separado:

```bash
cd ../plasmic-local
docker compose up -d
```

Depois, neste repositório:

```bash
npm install
cp .env.example .env.local
```

Confira o `.env.local`:

```dotenv
PLASMIC_PROJECT_ID=
PLASMIC_HOST=http://localhost:3003
```

Esse arquivo é local e não deve ser commitado.

## Autenticar o Codegen no Studio local

Use o host local, não o Plasmic SaaS:

```bash
npx plasmic auth --host http://localhost:3003
```

Autorize a URL que começa com
`http://localhost:3003/auth/plasmic-init/`. A autenticação fica na máquina
local, normalmente em `~/.plasmic.auth`.

## Gerar e testar o site

Após editar e publicar o projeto visual no Studio:

```bash
npm run codegen
npm run dev
```

Abra `http://localhost:3000`.

Antes de enviar:

```bash
npm run build
```

O build estático será criado em `out/`.

Os arquivos `Plasmic*.tsx` e CSS gerados são controlados pelo Codegen e não
devem ser editados manualmente. Comportamentos próprios devem ficar em
wrappers ou arquivos da aplicação fora da área gerenciada pelo Plasmic.

## Publicar no GitHub Pages

Envie alterações para o repositório
[`brasilicioh/nocs-lab-site`](https://github.com/brasilicioh/nocs-lab-site):

```bash
git add .
git commit -m "..."
git push origin main
```

No GitHub:

1. Abra **Settings > Pages**.
2. Selecione **GitHub Actions** como fonte.
3. Aguarde o workflow
   [.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml).

O workflow instala dependências, executa `npm run build` e publica `out/`. Ele
não precisa de token do Plasmic.

A URL esperada é:

```text
https://brasilicioh.github.io/nocs-lab-site/
```

## Atualizar o site

Depois de fazer alterações no Studio local:

```bash
npm run codegen
npm run build
git add .
git commit -m "Update NOCS site"
git push
```

O push dispara o deploy automaticamente.

## Outro computador ou colaborador

1. Clone `plasmic-local` e restaure um backup do PostgreSQL.
2. Inicie o Studio local.
3. Clone este repositório.
4. Execute `npm install`.
5. Autentique o CLI com `npx plasmic auth --host http://localhost:3003`.
6. Execute `npm run codegen`.
7. Teste com `npm run dev` e `npm run build`.
8. Faça commit e push.

## Segurança

Nunca versione `.env.local`, `.plasmic.auth`, tokens, senhas, dumps ou exports
JSON. Revogue qualquer token que tenha sido exposto.
