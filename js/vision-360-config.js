/*
 * CONFIGURACAO DA VISAO 360
 *
 * Como usar:
 * 1. Personalize usa `images/personalize/modelo/cor/img.jpg` ou `capa.jpg`.
 * 2. Visao 360 usa `images/visao-360/modelo/cor/01.jpg`, `02.jpg`, etc.
 * 3. Se houver apenas uma imagem, `img.jpg` ou `capa.jpg` tambem funcionam.
 * 3. Se quiser usar `.png`, `.jpeg` ou `.webp`, basta manter o mesmo nome-base.
 * 4. Para alterar a ordem, cores ou modelos, edite apenas este arquivo.
 * 5. Passe o 5o argumento de `buildVisionColor` (ex.: 'img.jpg') quando ja
 *    souber o nome exato do arquivo - evita 404 no console tentando outros
 *    nomes/extensoes. Se omitir, o site tenta varias opcoes automaticamente.
 */

(function () {
    function getPersonalizeCandidates(modelFolder, colorFolder) {
        const basePath = `images/personalize/${modelFolder}/${colorFolder}`;
        return [
            `${basePath}/capa.jpg`,
            `${basePath}/capa.jpeg`,
            `${basePath}/capa.png`,
            `${basePath}/capa.webp`,
            `${basePath}/img.jpg`,
            `${basePath}/img.jpeg`,
            `${basePath}/img.png`,
            `${basePath}/img.webp`,
            `${basePath}/1.jpg`,
            `${basePath}/1.jpeg`,
            `${basePath}/1.png`,
            `${basePath}/1.webp`,
            `${basePath}/01.jpg`,
            `${basePath}/01.jpeg`,
            `${basePath}/01.png`,
            `${basePath}/01.webp`
        ];
    }

    function getVisionFrameCandidates(modelFolder, colorFolder) {
        const basePath = `images/visao-360/${modelFolder}/${colorFolder}`;
        const candidates = [];

        for (let index = 1; index <= 36; index += 1) {
            const padded = String(index).padStart(2, '0');
            ['jpg', 'jpeg', 'png', 'webp'].forEach((extension) => {
                candidates.push(`${basePath}/${padded}.${extension}`);
            });
        }

        return [
            ...candidates,
            `${basePath}/img.jpg`,
            `${basePath}/img.jpeg`,
            `${basePath}/img.png`,
            `${basePath}/img.webp`,
            `${basePath}/capa.jpg`,
            `${basePath}/capa.jpeg`,
            `${basePath}/capa.png`,
            `${basePath}/capa.webp`
        ];
    }

    function buildVisionColor(modelFolder, colorFolder, label, swatch, fileName) {
        return {
            id: colorFolder,
            label,
            swatch,
            personalizeFolderPath: `images/personalize/${modelFolder}/${colorFolder}`,
            visionFolderPath: `images/visao-360/${modelFolder}/${colorFolder}`,
            // Se `fileName` for informado, usa direto (zero tentativas erradas no console).
            // Sem `fileName`, tenta varios nomes/extensoes ate achar um que exista.
            imageCandidates: fileName
                ? [`images/personalize/${modelFolder}/${colorFolder}/${fileName}`]
                : getPersonalizeCandidates(modelFolder, colorFolder),
            frameCandidates: getVisionFrameCandidates(modelFolder, colorFolder)
        };
    }

    window.vision360Config = {
        defaultModel: 'doha',
        // Giro 360 compartilhado (secao "VISAO 360"): as imagens ficam soltas em
        // images/visao-360/1.png, 2.png, 3.png, ... (sem subpasta por modelo/cor).
        // Ao adicionar/remover fotos nessa pasta, atualize `spinTotalFrames` e
        // `spinExtension` para bater com a quantidade e o formato reais -
        // isso evita tentativas erradas (404) no console.
        spinTotalFrames: 5,
        spinExtension: 'jpg',
        models: [
            {
                id: 'doha',
                label: 'DOHA',
                colors: [
                    buildVisionColor('doha', 'verde', 'Verde', '#1f8a4d', 'img.jpg'),
                    buildVisionColor('doha', 'azul-claro', 'Azul Claro', '#8ed9ff', 'img.jpg'),
                    buildVisionColor('doha', 'branco', 'Branco', '#f3f4f6', 'img.jpg')
                    // Cores 'cinza', 'vermelho' e 'azul' ficam ocultas ate ter fotos em images/personalize/doha/<cor>/
                ]
            },
            {
                id: 'vienna',
                label: 'VIENNA',
                colors: [
                    buildVisionColor('vienna', 'prata', 'Prata', '#c0c7cf', 'img.png'),
                    buildVisionColor('vienna', 'preto', 'Preto', '#111111', 'img.png'),
                    buildVisionColor('vienna', 'branco', 'Branco', '#f3f4f6', 'img.png')
                    // Cor 'cinza' fica oculta ate ter fotos em images/personalize/vienna/cinza/
                ]
            }
        ]
    };
})();
