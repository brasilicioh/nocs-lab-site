# NOCS Lab Site

Este repositório contém o site publicado do NOCS Lab. O site usa componentes
React gerados pelo Plasmic Codegen e é publicado como HTML estático no GitHub
Pages.

O Plasmic Studio é executado localmente em um repositório separado:

- `../plasmic-local`: Studio self-hosted e PostgreSQL.
- `nocs-lab-site`: código React gerado, aplicação e deploy.

O GitHub não acessa o Studio local. Por isso, o Codegen é executado localmente
e os arquivos gerados são versionados neste repositório. O GitHub Actions
somente instala as dependências, executa o build e publica a pasta `out/`.

## Pré-requisitos

- Node.js 20 ou superior;
- Docker;
- Git;
- GitHub Pages habilitado no repositório;
- Plasmic Studio local funcionando em `http://localhost:3003`.

## Primeira configuração

### 1. Iniciar o Studio local

Em outro terminal:

```bash
cd ../plasmic-local
docker compose up -d
```

Confirme que `http://localhost:3003` abre no navegador.

### 2. Instalar dependências do site

```bash
cd ../nocs-lab-site
npm install
```

O projeto já contém a configuração do Codegen em [plasmic.json](./plasmic.json).
O arquivo `.env.local` é ignorado pelo Git e pode ser criado assim:

```bash
cp .env.example .env.local
```

O `.env.local` deve conter:

```dotenv
PLASMIC_PROJECT_ID=oKaeA9YdZNDXCbTvRRP6Ev
PLASMIC_HOST=http://localhost:3003
```

### 3. Autenticar o CLI no Studio local

Não use o endereço do Plasmic SaaS. Execute:

```bash
npx plasmic auth --host http://localhost:3003
```

O navegador deve abrir uma URL iniciada por
`http://localhost:3003/auth/plasmic-init/`. Autorize o CLI no Studio local.

Essa autenticação fica na máquina local, normalmente em `~/.plasmic.auth`, e
não deve ser commitada.

### 4. Gerar o código React

Com o Studio local funcionando:

```bash
npm run codegen
```

Esse comando executa `plasmic sync`, baixa os componentes do projeto e gera:

- componentes visuais em `components/plasmic/`;
- páginas em `app/`;
- CSS e tokens;
- imagens em `public/`;
- metadados em `plasmic.json` e `plasmic.lock`.

Os arquivos `Plasmic*.tsx` e CSS gerados são controlados pelo Codegen. Não
edite esses arquivos manualmente. Código de comportamento próprio deve ficar
em wrappers ou em arquivos da aplicação que não sejam gerenciados pelo
Plasmic.

### 5. Testar localmente

```bash
npm run dev
```

Abra `http://localhost:3000`. O site Next.js agora renderiza os componentes
gerados localmente; ele não usa Loader nem precisa buscar dados do Plasmic em
runtime.

Antes do commit, valide a exportação:

```bash
npm run build
```

O resultado deve ser criado em `out/`.

## Publicar no GitHub Pages

### 1. Criar e enviar o repositório

Na pasta `nocs-lab-site`:

```bash
git init
git add .
git commit -m "Initial generated site"
git branch -M main
git remote add origin https://github.com/USUARIO/nocs-lab-site.git
git push -u origin main
```

Substitua `USUARIO` pela sua conta e use a URL real do repositório.

Não envie estes arquivos:

- `.env.local`;
- `.plasmic.auth`;
- tokens ou senhas;
- `node_modules/`;
- `.next/` e `out/`.

### 2. Ativar o GitHub Pages

No GitHub:

1. Abra **Settings > Pages**.
2. Em **Build and deployment > Source**, selecione **GitHub Actions**.
3. Aguarde o workflow `Deploy site to GitHub Pages`.

O workflow está em
[.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml).
Ele não precisa de secrets do Plasmic, porque o código já foi gerado e está no
Git.

Para um repositório chamado `nocs-lab-site`, a URL será:

```text
https://USUARIO.github.io/nocs-lab-site/
```

### 3. Atualizar o site

Sempre que fizer alterações no Studio local:

```bash
cd ../nocs-lab-site
npm run codegen
npm run build
git add .
git commit -m "Update site design"
git push
```

O push dispara o GitHub Actions, que publica a nova versão.

## Trabalhar em outro computador

1. Clone `plasmic-local` e `nocs-lab-site`.
2. Restaure o backup do banco/projeto do Studio local.
3. Inicie o Studio com `docker compose up -d`.
4. No site, rode `npm install`.
5. Autentique o CLI no Studio local:

   ```bash
   npx plasmic auth --host http://localhost:3003
   ```

6. Rode `npm run codegen`.
7. Teste com `npm run dev` e `npm run build`.
8. Faça commit e push.

O código React gerado não reconstrói o projeto visual do Plasmic. Para outra
pessoa continuar editando visualmente, ela precisa também do backup ou de uma
instância compartilhada do Studio/PostgreSQL.
