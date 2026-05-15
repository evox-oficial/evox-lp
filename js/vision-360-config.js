/*
 * CONFIGURACAO DA VISAO 360
 *
 * Como usar:
 * 1. Personalize usa `images/personalize/modelo/cor/img.jpg` ou `capa.jpg`.
 * 2. Visao 360 usa `images/visao-360/modelo/cor/01.jpg`, `02.jpg`, etc.
 * 3. Se houver apenas uma imagem, `img.jpg` ou `capa.jpg` tambem funcionam.
 * 3. Se quiser usar `.png`, `.jpeg` ou `.webp`, basta manter o mesmo nome-base.
 * 4. Para alterar a ordem, cores ou modelos, edite apenas este arquivo.
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

    function buildVisionColor(modelFolder, colorFolder, label, swatch) {
        return {
            id: colorFolder,
            label,
            swatch,
            personalizeFolderPath: `images/personalize/${modelFolder}/${colorFolder}`,
            visionFolderPath: `images/visao-360/${modelFolder}/${colorFolder}`,
            imageCandidates: getPersonalizeCandidates(modelFolder, colorFolder),
            frameCandidates: getVisionFrameCandidates(modelFolder, colorFolder)
        };
    }

    window.vision360Config = {
        defaultModel: 'doha',
        models: [
            {
                id: 'doha',
                label: 'DOHA',
                colors: [
                    buildVisionColor('doha', 'cinza', 'Cinza', '#7d838c'),
                    buildVisionColor('doha', 'verde', 'Verde', '#1f8a4d'),
                    buildVisionColor('doha', 'azul-claro', 'Azul Claro', '#8ed9ff'),
                    buildVisionColor('doha', 'vermelho', 'Vermelho', '#c73333'),
                    buildVisionColor('doha', 'branco', 'Branco', '#f3f4f6'),
                    buildVisionColor('doha', 'azul', 'Azul', '#0b63ce')
                ]
            },
            {
                id: 'vienna',
                label: 'VIENNA',
                colors: [
                    buildVisionColor('vienna', 'prata', 'Prata', '#c0c7cf'),
                    buildVisionColor('vienna', 'cinza', 'Cinza', '#7d838c'),
                    buildVisionColor('vienna', 'preto', 'Preto', '#111111'),
                    buildVisionColor('vienna', 'branco', 'Branco', '#f3f4f6')
                ]
            }
        ]
    };
})();
