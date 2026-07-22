/*
 * Controle dos cards de modelos da home.
 *
 * Como usar:
 * 1. Para esconder um modelo, deixe `visible: false`.
 * 2. Para publicar um modelo novo, troque `visible` para `true`
 *    e preencha `name`, `description`, `folder`, `link` e as cores.
 * 3. A imagem da capa deve ficar em `modelos/NOME-DA-PASTA/img/capa`
 *    com extensao `.jpg`, `.jpeg`, `.png` ou `.webp`.
 * 4. Mantenha no maximo 9 itens nesta lista.
 */

function getModelCover(folder) {
    return [
        `modelos/${folder}/img/capa.jpg`,
        `modelos/${folder}/img/capa.jpeg`,
        `modelos/${folder}/img/capa.png`,
        `modelos/${folder}/img/capa.webp`
    ];
}

window.modelShowcaseConfig = [
    {
        visible: true,
        name: 'DOHA',
        folder: 'doha',
        description: 'Estrutura robusta, presenca marcante e 6 opcoes de cores para um visual mais versatil.',
        image: 'modelos/doha/img/capa.jpg',
        link: 'modelos/doha',
        accentColor: '#e5b80b',
        accentTextColor: '#000000',
        buttonLabel: 'Explorar Doha',
        colors: ['Cinza', 'Verde', 'Azul Claro', 'Vermelho', 'Branco', 'Azul']
    },
    {
        visible: true,
        name: 'VIENNA',
        folder: 'vienna',
        description: 'Linha mais sobria e executiva, com 4 cores para quem busca elegancia urbana.',
        image: 'modelos/vienna/img/capa.png',
        link: 'modelos/vienna',
        accentColor: '#f5f5f5',
        accentTextColor: '#000000',
        buttonLabel: 'Explorar Vienna',
        colors: ['Prata', 'Cinza', 'Preto', 'Branco']
    },
    {
        visible: false,
        name: 'NOVO MODELO 3',
        folder: 'modelo-03',
        description: 'Descricao do novo modelo.',
        image: getModelCover('modelo-03'),
        link: 'modelos/modelo-03',
        accentColor: '#2ecc71',
        accentTextColor: '#ffffff',
        buttonLabel: 'Explorar Modelo',
        colors: []
    },
    {
        visible: false,
        name: 'NOVO MODELO 4',
        folder: 'modelo-04',
        description: 'Descricao do novo modelo.',
        image: getModelCover('modelo-04'),
        link: 'modelos/modelo-04',
        accentColor: '#ff6b35',
        accentTextColor: '#ffffff',
        buttonLabel: 'Explorar Modelo',
        colors: []
    },
    {
        visible: false,
        name: 'NOVO MODELO 5',
        folder: 'modelo-05',
        description: 'Descricao do novo modelo.',
        image: getModelCover('modelo-05'),
        link: 'modelos/modelo-05',
        accentColor: '#7dd3fc',
        accentTextColor: '#000000',
        buttonLabel: 'Explorar Modelo',
        colors: []
    },
    {
        visible: false,
        name: 'NOVO MODELO 6',
        folder: 'modelo-06',
        description: 'Descricao do novo modelo.',
        image: getModelCover('modelo-06'),
        link: 'modelos/modelo-06',
        accentColor: '#f97316',
        accentTextColor: '#ffffff',
        buttonLabel: 'Explorar Modelo',
        colors: []
    },
    {
        visible: false,
        name: 'NOVO MODELO 7',
        folder: 'modelo-07',
        description: 'Descricao do novo modelo.',
        image: getModelCover('modelo-07'),
        link: 'modelos/modelo-07',
        accentColor: '#a3e635',
        accentTextColor: '#000000',
        buttonLabel: 'Explorar Modelo',
        colors: []
    },
    {
        visible: false,
        name: 'NOVO MODELO 8',
        folder: 'modelo-08',
        description: 'Descricao do novo modelo.',
        image: getModelCover('modelo-08'),
        link: 'modelos/modelo-08',
        accentColor: '#c084fc',
        accentTextColor: '#ffffff',
        buttonLabel: 'Explorar Modelo',
        colors: []
    },
    {
        visible: false,
        name: 'NOVO MODELO 9',
        folder: 'modelo-09',
        description: 'Descricao do novo modelo.',
        image: getModelCover('modelo-09'),
        link: 'modelos/modelo-09',
        accentColor: '#38bdf8',
        accentTextColor: '#000000',
        buttonLabel: 'Explorar Modelo',
        colors: []
    }
];
