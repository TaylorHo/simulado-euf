# Simulador EUF - Exame Unificado de Física

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
![GitHub Release](https://img.shields.io/github/v/release/TaylorHo/simulado-euf)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22181101.svg)](https://doi.org/10.5281/zenodo.22181101)

Uma plataforma web gratuita e de código aberto projetada para auxiliar estudantes na preparação para o **Exame Unificado de Física (EUF)**. O EUF é o principal exame de ingresso para programas de pós-graduação em Física no Brasil.

Visite o site oficial: [euf.hoffmann.io](https://euf.hoffmann.io)

## Funcionalidades

- **Gerador de simulados:** Monte provas personalizadas utilizando questões de edições anteriores do EUF.
- **Flashcards de estudo:** Revise conceitos e fórmulas de forma rápida e iterativa.
- **Simulados nnline ou impressos:** Resolva diretamente no navegador ou imprima para uma experiência mais próxima da prova real.
- **Correção agilizada da folha de respostas:** Ao imprimir o simulado, uma folha de respostas com QR Code é gerada. A página web tem uma versão igual dessa página, para conseguir preencher rapidamente as respostas marcadas na versão impressa.

## 🛠️ Tecnologias

Este projeto é uma aplicação web estática moderna:

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
- **Linguagem:** TypeScript
- **Estilização:** Vanilla CSS (com variáveis customizadas e suporte a Dark Mode)
- **Bibliotecas Principais:**
  - `KaTeX` para fórmulas matemáticas.
  - `Tauri` para o aplicativo mobile android.
  - `jsQR` para processamento da folha de respostas.
  - `Lucide Svelte` para ícones.

## Desenvolvimento

Este projeto utiliza o `pnpm` como gerenciador de pacotes.

### Pré-requisitos

- Node.js (versão recente)
- pnpm

### Configuração local

1. Clone o repositório:

   ```bash
   git clone https://github.com/TaylorHo/simulado-euf.git
   cd simulado-euf
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   pnpm dev
   ```

4. Para gerar a versão de produção:
   ```bash
   pnpm build
   ```

## Deploy

A aplicação é totalmente estática e pode ser hospedada em qualquer serviço de hospedagem estática (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.). O projeto já conta com o `@sveltejs/adapter-vercel` configurado, mas pode ser facilmente adaptado para outros adaptadores do SvelteKit.

## Licença

Este projeto está licenciado sob a **GNU Affero General Public License v3.0 (AGPL-3.0)**. Isso garante que a ferramenta permaneça gratuita e que qualquer melhoria ou fork também seja disponibilizado publicamente com a mesma licença.

---

Desenvolvido por [Taylor Hoffmann](https://hoffmann.io). Questões e dados extraídos das provas oficiais do EUF.
