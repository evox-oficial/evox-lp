# EVOX LP

Landing page institucional da **EVOX** — marca de mobilidade elétrica (cadeiras de rodas motorizadas / autopropelidas). O site apresenta os modelos, tecnologia, simulador de economia, comparador e canais de contato da marca.

Site 100% estático (HTML + CSS + JavaScript puro), sem framework, sem bundler e sem dependências de runtime — basta servir os arquivos.

## Como executar

Não há build nem instalação de pacotes para rodar o site. Como as páginas usam `fetch` para montar galerias de imagem dinamicamente (`js/model-gallery.js`), é necessário abrir os arquivos através de um servidor HTTP local — abrir o `index.html` direto no navegador (`file://`) faz algumas funcionalidades (galeria de fotos dos modelos, visão 360°) não funcionarem por causa de restrições de CORS do navegador.

**Opção 1 — Node.js (`npx serve`)**
```bash
npx serve .
```

**Opção 2 — Python**
```bash
python -m http.server 8000
```

**Opção 3 — VS Code**
Extensão "Live Server", clicar em "Go Live" com `index.html` aberto.

Depois, acesse `http://localhost:<porta>` no navegador.

### Gerar o PDF do tutorial do cliente (opcional)

Existe um script utilitário que converte `documentos/tutorial-cliente-evox.html` em PDF usando Playwright:

```bash
npm install playwright
node scripts/export-client-tutorial-pdf.js
```

O PDF é gerado em `documentos/tutorial-cliente-evox.pdf`. Este é o único ponto do projeto que depende de Node.js — não é necessário para rodar o site em si.

## Estrutura do projeto

```
evox-lp/
├── index.html                # Página principal (home)
├── comparador.html           # Comparador de modelos
├── contato.html               # Página de contato
├── garantia.html               # Termos de garantia
├── privacidade.html            # Política de privacidade
├── revendedores.html           # Página para revendedores
├── tecnologia.html             # Página de tecnologia
├── termos.html                 # Termos de uso
├── css/
│   └── style.css              # Estilo global do site
├── js/
│   ├── campaign-banners-config.js   # Conteúdo editável dos banners do hero slider
│   ├── hero-config.js               # Converte config dos banners para o slider
│   ├── models-config.js             # Cards de modelos exibidos na home
│   ├── model-gallery.js             # Monta a galeria de fotos de cada modelo
│   ├── model-gallery-manifest.js    # Lista de imagens de cada modelo (fallback sem servidor)
│   ├── vision-360-config.js         # Configuração da visão 360°/personalização por cor
│   └── vision-360-manifest.js       # Manifesto de frames da visão 360°
├── modelos/                    # Uma pasta por modelo (ex.: doha/, vienna/)
│   └── <modelo>/
│       ├── <modelo>.html       # Página de detalhes do modelo
│       └── img/                # Fotos do modelo (capa + galeria)
├── images/                     # Imagens gerais do site
│   ├── personalize/<modelo>/<cor>/   # Imagens usadas na personalização por cor
│   └── visao-360/<modelo>/<cor>/     # Frames sequenciais (01.jpg, 02.jpg, ...) para o giro 360°
├── img-slider/                 # Imagens dos banners do hero (desktop/mobile)
├── img-detailer/                # Imagens usadas em seções de destaque/detalhamento
├── videos/                     # Vídeos usados no site
├── docs/                       # Fichas técnicas em PDF dos modelos (Cloud, Doha, Vienna)
├── documentos/
│   └── tutorial-cliente-evox.html   # Tutorial do cliente (fonte do PDF gerado)
└── scripts/
    └── export-client-tutorial-pdf.js   # Script Node/Playwright para gerar o PDF do tutorial
```

## Especificações do projeto

- **Tipo:** site estático institucional / landing page (sem back-end, sem banco de dados).
- **Stack:** HTML5, CSS3 e JavaScript vanilla (ES6+, sem framework). Ícones via [Font Awesome 6](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css) (CDN).
- **Idioma:** `pt-BR`.
- **Dependência externa opcional:** [Playwright](https://playwright.dev/) — apenas para o script de exportação de PDF (`scripts/export-client-tutorial-pdf.js`), não é usada pelo site em produção.
- **Sem package.json / gerenciador de dependências:** o projeto não usa npm para rodar o site; é só um conjunto de arquivos estáticos.

### Principais seções da home (`index.html`)
- Hero slider de campanhas (`#hero-slider`) — rotativo, configurado em `js/campaign-banners-config.js`.
- Modelos (`#modelos`) — grid de cards com os modelos ativos, configurado em `js/models-config.js`.
- Experiência / diferenciais (`#experiencia`, `#diferenciais`).
- Tecnologia visual (`#tecnologia-visual`) e Visão 360°/personalização por cor (`#visao-360`, `#personalize-bike`).
- Simulador de economia (`#simulador`).
- Fale com um especialista (`#especialista`).
- FAQ (`#faq`).
- Contato (`#contato`).

### Páginas complementares
| Página | Descrição |
|---|---|
| `comparador.html` | Comparador entre modelos |
| `contato.html` | Formulário/canais de contato |
| `garantia.html` | Termos de garantia |
| `privacidade.html` | Política de privacidade |
| `revendedores.html` | Informações para revendedores |
| `tecnologia.html` | Detalhes de tecnologia da marca |
| `termos.html` | Termos de uso |
| `modelos/<modelo>/<modelo>.html` | Página de detalhes de cada modelo (ex.: `modelos/doha/doha.html`, `modelos/vienna/vienna.html`) |

### Como o conteúdo é editado (sem mexer em lógica)
O projeto foi estruturado para que edições de conteúdo fiquem isoladas em arquivos de configuração, sem tocar na lógica:

- **Banners do hero:** editar `js/campaign-banners-config.js` (ativar/desativar com `ativo`, textos, imagens, botões e cor de destaque).
- **Cards de modelos na home:** editar `js/models-config.js` (`visible: true/false`, nome, descrição, pasta, link e cores — limite de 9 itens).
- **Fotos de cada modelo:** colocar em `modelos/<pasta-do-modelo>/img/`; a capa deve se chamar `capa.jpg` / `.jpeg` / `.png` / `.webp`.
- **Visão 360° e personalização por cor:** editar `js/vision-360-config.js` (modelos e cores) e adicionar as imagens em `images/personalize/<modelo>/<cor>/` e `images/visao-360/<modelo>/<cor>/` (frames `01.jpg` a `36.jpg`).

### Modelos atualmente publicados
- **DOHA** — 6 cores (Cinza, Verde, Azul Claro, Vermelho, Branco, Azul).
- **VIENNA** — 4 cores (Prata, Cinza, Preto, Branco).
- Modelos 3 a 9 já possuem estrutura de pasta e entrada de configuração prontas, porém estão com `visible: false` (não publicados).

### Fichas técnicas
PDFs com especificações técnicas dos modelos ficam em `docs/`:
- `CLOUD Ficha Técnica.pdf`
- `DOHA Ficha Técnica - Autopropelido.pdf`
- `VIENNA Ficha Técnica - Autopropelido.pdf`

## Deploy

Por ser um site 100% estático, pode ser publicado em qualquer serviço de hospedagem estática (GitHub Pages, Netlify, Vercel, S3, etc.) apenas enviando os arquivos do repositório — não há etapa de build.
