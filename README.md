<div align="center">

# VENEZIANICO — Experiência digital de relojoaria

Projeto de estudo desenvolvido em **Astro** para apresentar um relógio de luxo por meio de uma experiência cinematográfica, responsiva, componentizada e orientada por rolagem.

[![Astro](https://img.shields.io/badge/Astro-7.3-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
![HTML5](https://img.shields.io/badge/HTML5-semântico-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsivo-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-interações-F7DF1E?style=flat-square&logo=javascript&logoColor=111)
![Git](https://img.shields.io/badge/Git-versionamento-F05032?style=flat-square&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

![Relógio Venezianico Redentore Avventurina](src/assets/imagem3.png)

## Visão geral

Este projeto recria uma landing page editorial para o **Venezianico Redentore Avventurina 40**. A experiência combina vídeos, parallax em camadas, tipografia de alto contraste, microinterações e uma ficha técnica detalhada para apresentar o produto de forma imersiva.

O site foi construído como exercício de desenvolvimento front-end e estudo de interfaces premium. A página foi dividida em componentes Astro independentes, com estilos encapsulados e JavaScript utilizado apenas nas interações que dependem de rolagem.

> **Aviso:** este é um projeto educacional e não oficial, sem vínculo comercial com a Venezianico. Marcas, nomes e materiais de referência pertencem aos respectivos proprietários.

## Uso de inteligência artificial

O projeto foi desenvolvido **quase integralmente com assistência de IA generativa**, principalmente por meio do OpenAI Codex. A IA apoiou a implementação dos componentes, a reprodução das referências visuais, a criação das animações, a depuração, os testes de build e a documentação.

O repositório registra um processo de aprendizado assistido. O objetivo não é apresentar o código como integralmente escrito à mão, mas demonstrar a capacidade de definir requisitos, avaliar resultados, solicitar correções, validar comportamentos e conduzir um projeto até a publicação.

## Meu papel no processo

Minha participação concentrou-se em:

- Definir o objetivo e a direção visual da página;
- Selecionar as referências, imagens e vídeos utilizados no estudo;
- Especificar a estrutura, o conteúdo e o comportamento de cada seção;
- Comparar as implementações com as referências visuais;
- Identificar problemas de proporção, tipografia, movimento e responsividade;
- Solicitar ajustes incrementais e validar as correções no navegador;
- Acompanhar os builds de produção do Astro;
- Organizar a apresentação e a documentação do repositório;
- Preparar o projeto para versionamento no GitHub e deploy na Vercel.

## Projeto em números

| Entrega | Resultado |
| --- | --- |
| Páginas Astro | 1 |
| Componentes principais | 9 |
| Camadas do parallax | 6 |
| Linhas da ficha técnica | 10 |
| Imagens do lookbook | 4 |
| Layout compartilhado | 1 |

## Experiência da página

- Header responsivo inspirado na navegação original;
- Filme de abertura em tela cheia, com desaceleração nos segundos finais;
- Reinício do vídeo ao retornar ao topo da página;
- Paisagem parallax formada por seis imagens transparentes;
- Texto editorial revelado progressivamente durante a rolagem;
- Hero do produto com conteúdo e especificações resumidas;
- Marquee metálico com movimento contínuo em CSS;
- Vídeo ambiente que cresce de um quadro centralizado até preencher a tela;
- Ficha técnica responsiva com dez especificações;
- Galeria lookbook responsiva em quatro, duas ou uma coluna;
- Rodapé completo com newsletter, menus e elementos institucionais.

## Tecnologias e ferramentas

| Tecnologia | Aplicação no projeto |
| --- | --- |
| **Astro 7** | Componentes, layout e geração do site estático |
| **HTML5** | Estrutura semântica, navegação, imagens, vídeos e formulário |
| **CSS3** | Grid, Flexbox, responsividade, tipografia e animações |
| **JavaScript / TypeScript** | Interações sincronizadas com a rolagem |
| **Web APIs** | `requestAnimationFrame`, `IntersectionObserver` e `matchMedia` |
| **Node.js e npm** | Ambiente de desenvolvimento e gerenciamento de dependências |
| **Git e GitHub** | Versionamento e publicação do código-fonte |
| **Vercel** | Build e hospedagem da versão de produção |
| **OpenAI Codex** | Apoio na implementação, revisão e documentação |

## Organização do código

```text
src/
├── assets/
│   ├── parallax/
│   ├── Luxury_watch_video_in_space_202608091840.mp4
│   ├── imagem3.png
│   ├── fontes locais
│   └── logotipos
├── components/
│   ├── AmbientVideo.astro
│   ├── BrandMarquee.astro
│   ├── EditorialGallery.astro
│   ├── Header.astro
│   ├── HeroProduct.astro
│   ├── Intro.astro
│   ├── Parallax.astro
│   ├── SiteFooter.astro
│   └── TechnicalSpecs.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── scripts/
    └── main.js
```

O `index.astro` organiza os componentes na ordem visual da página. O `Layout.astro` concentra a estrutura comum do documento e as variáveis globais. Os comportamentos da abertura e do parallax ficam em `main.js`, enquanto interações específicas permanecem próximas aos seus componentes.

## Desafios e soluções

| Desafio | Solução aplicada |
| --- | --- |
| Desacelerar o filme de abertura sem criar controles visíveis | Ajuste progressivo de `playbackRate` nos segundos finais e congelamento do último quadro |
| Reproduzir uma paisagem com profundidade | Seis camadas PNG movimentadas com velocidades e escalas diferentes |
| Manter animações suaves durante a rolagem | Atualizações agrupadas com `requestAnimationFrame` |
| Expandir o vídeo ambiente como na referência | Frame sticky com largura, altura e raio interpolados pelo progresso do scroll |
| Preservar legibilidade sobre imagens escuras | Vignettes, sombras de texto e contraste controlado |
| Adaptar a experiência para telas menores | Breakpoints dedicados para navegação, parallax, ficha técnica, galeria e rodapé |
| Evitar interferência entre seções | Componentes Astro com estilos encapsulados |

## Executar localmente

Requisitos:

- Node.js 22.12 ou superior;
- npm.

```bash
npm install
npm run dev
```

O servidor de desenvolvimento do Astro será iniciado em `http://localhost:4321`.

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Comandos

| Comando | Ação |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Exibe localmente o build de produção |
| `npm run astro -- --help` | Exibe a ajuda da CLI do Astro |

## Prática com Git e GitHub

O repositório registra a evolução do projeto e permite praticar um fluxo real de versionamento e publicação:

- Organização das alterações em commits descritivos;
- Uso da branch principal como fonte da versão de produção;
- Integração entre GitHub e Vercel;
- Build automático após cada atualização;
- Consulta do histórico para acompanhar a evolução da interface.

## Competências praticadas

- Desenvolvimento front-end;
- Construção de interfaces responsivas;
- Componentização com Astro;
- Organização e manutenção de CSS;
- Manipulação do DOM;
- Animações orientadas por scroll;
- Integração de vídeos e imagens responsivas;
- Versionamento com Git e GitHub;
- Preparação de projetos para deploy na Vercel;
- Definição de requisitos e condução iterativa com IA generativa;
- Avaliação crítica e refinamento de resultados produzidos por IA.

## Status e limitações

A experiência visual principal está concluída e o build de produção é gerado corretamente.

Alguns elementos foram mantidos apenas para demonstração visual: os ícones sociais do rodapé não são interativos, o formulário de newsletter não envia dados para uma API e parte dos links institucionais ainda não possui rotas internas correspondentes. Algumas mídias são carregadas por URLs externas e dependem da disponibilidade do CDN de origem.

## Próximas melhorias

- Publicar a primeira versão na Vercel;
- Substituir dependências externas por arquivos locais quando permitido;
- Criar rotas para os links institucionais e de coleção;
- Integrar o formulário de newsletter a um serviço real;
- Executar auditorias com Lighthouse;
- Adicionar testes de interface e acessibilidade;
- Otimizar imagens e vídeos para conexões móveis.

## Sobre mim

Sou estudante do curso de **Análise e Desenvolvimento de Sistemas**, em início de carreira. Utilizo projetos práticos e ferramentas de IA para transformar o conteúdo estudado em experiências funcionais e fortalecer meus conhecimentos em desenvolvimento web.

Este projeto demonstra minha capacidade de conduzir uma ideia até uma versão publicável, aprender por meio de iterações e utilizar IA com transparência.
