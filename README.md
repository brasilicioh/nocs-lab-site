# NOCS Lab Site

Este diretório contém apenas o site público do NOCS Lab. O repositório
[`../plasmic`](../plasmic) permanece separado e contém o Plasmic Studio
self-hosted e seu PostgreSQL.

## Estrutura local

- `../plasmic`: editor visual e banco do Studio, iniciado pelo compose oficial.
- `nocs-lab-site`: aplicação Next.js que renderiza as páginas do projeto Plasmic.

São duas pastas, mas um único workspace. O site não deve ser colocado dentro do
repositório do Plasmic, pois são projetos com dependências, ciclos de release e
volumes Docker diferentes.

## Primeira execução

1. Inicie o Studio a partir de `../plasmic`:

   ```powershell
   cd ..\plasmic
   docker compose up -d
   ```

2. Crie um projeto no Studio e copie o ID e o token do projeto.
3. Neste diretório, instale as dependências e crie `.env.local` a partir de
   `.env.example`:

   ```powershell
   cd ..\nocs-lab-site
   npm install
   Copy-Item .env.example .env.local
   ```

4. Preencha `NEXT_PUBLIC_PLASMIC_PROJECT_ID` e
   `NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN` em `.env.local`.
5. Inicie o site:

   ```powershell
   npm run dev
   ```

Abra `http://localhost:3000`.

O compose oficial do Studio usa `http://localhost:3003`. O site e o Studio são
serviços diferentes e podem ser iniciados ou parados independentemente.
