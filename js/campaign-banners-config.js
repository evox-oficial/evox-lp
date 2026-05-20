/*
 * CONFIGURACAO COMPLETA DOS BANNERS DA HOME
 *
 * O cliente pode editar SOMENTE este arquivo.
 * Aqui ficam todos os textos, imagens, botoes e comportamento visual do banner.
 *
 * COMO USAR:
 * 1. Para esconder um banner, troque `ativo: true` para `ativo: false`.
 * 2. Para trocar uma campanha, altere imagem, titulo, subtitulo e botoes.
 * 3. O titulo aceita HTML simples, por exemplo:
 *    'DIA DAS <br><span class="highlight">MAES</span>'
 * 4. Para mudar a cor especial do banner, use `corEspecial: 'azul'`, `corEspecial: 'verde'` ou `corEspecial: 'amarelo'`.
 * 5. Se nao quiser um botao, use `mostrar: false`.
 * 6. As especificacoes tambem podem ser trocadas ou removidas.
 */

window.campaignBannerSettings = {
    tempoRotacaoMs: 30000,
    tempoFadeMs: 500,
    overlayCss: 'linear-gradient(90deg, rgba(4, 10, 18, 0.88) 0%, rgba(4, 10, 18, 0.56) 38%, rgba(4, 10, 18, 0.16) 100%)',
    tituloFallback: 'EVOX <br><span class="highlight">EM DESTAQUE</span>',
    subtituloFallback: 'Ative ao menos um banner em js/campaign-banners-config.js para exibir campanhas na home.'
};

window.campaignBannersConfig = [
    {
        ativo: true,
        imagemDesktop: 'img-slider/1.png',
        imagemMobile: 'img-slider/1-mobile.jpeg',
        posicaoImagemDesktop: 'center center',
        posicaoImagemMobile: 'center center',
        corEspecial: 'azul',
        titulo: 'O FUTURO DA <br><span class="highlight">MOBILIDADE</span> CHEGOU.',
        subtitulo: 'Potência elétrica, autonomia inteligente e design urbano premium.',
        esconderSubtitulo: false,
        esconderBotoes: false,
        mostrarEspecificacoes: true,
        mostrarEspecificacoesNoMobile: true,
        mostrarBotaoSecundarioNoMobile: true,
        botaoPrincipal: {
            mostrar: true,
            texto: 'FALAR COM ESPECIALISTA',
            link: 'https://www.instagram.com/evox.oficial.br/',
            icone: 'fa-arrow-right'
        },
        botaoSecundario: {
            mostrar: true,
            texto: 'VER TECNOLOGIA',
            link: '#tecnologia-visual',
            icone: 'fa-microchip'
        },
        especificacoes: [
            { icone: 'fa-solid fa-route', rotulo: 'ATE', valor: '55 <span>KM</span>', textoApoio: 'DE AUTONOMIA' },
            { icone: 'fa-solid fa-bolt', rotulo: '', valor: '1000<span>W</span>', textoApoio: 'POTENCIA NOMINAL' },
            { icone: 'fa-solid fa-battery-full', rotulo: 'BATERIA', valor: 'GRAFENO', textoApoio: 'MAIS VIDA. MAIS POTENCIA.' },
            { icone: 'fa-regular fa-clock', rotulo: '', valor: '5 - 6<span>H</span>', textoApoio: 'EM TOMADA COMUM' }
        ]
    },
    {
        ativo: true,
        imagemDesktop: 'img-slider/2.png',
        imagemMobile: 'img-slider/2-mobile.png',
        posicaoImagemDesktop: 'center center',
        posicaoImagemMobile: 'center center',
        corEspecial: 'amarelo',
        titulo: 'SUA NOVA FORMA<br><span class="highlight"> DE SE MOVER</span> PELA CIDADE',
        subtitulo: 'Potência elétrica, autonomia inteligente e design urbano premium.',
        esconderSubtitulo: true,
        esconderBotoes: false,
        mostrarEspecificacoes: false,
        mostrarEspecificacoesNoMobile: false,
        mostrarBotaoSecundarioNoMobile: false,
        botaoPrincipal: {
            mostrar: true,
            texto: 'FALAR COM ESPECIALISTA',
            link: 'https://www.instagram.com/evox.oficial.br/',
            icone: 'fa-arrow-right'
        },
        botaoSecundario: {
            mostrar: false,
            texto: 'VER TECNOLOGIA',
            link: '#tecnologia-visual',
            icone: 'fa-microchip'
        },
        especificacoes: [
        ]
    },
    {
        ativo: true,
        imagemDesktop: 'img-slider/3.png',
        imagemMobile: 'img-slider/3-mobile.png',
        posicaoImagemDesktop: 'center center',
        posicaoImagemMobile: 'center center',
        corEspecial: 'verde',
        titulo: 'ENERGIA <br><span class="highlight">INTELIGENTE</span> EM MOVIMENTO.',
        subtitulo: 'Baterias de grafeno de última geração com recarga simples em tomada comum, sem depender de postos.',
        esconderSubtitulo: false,
        esconderBotoes: false,
        mostrarEspecificacoes: false,
        mostrarEspecificacoesNoMobile: false,
        mostrarBotaoSecundarioNoMobile: false,
        botaoPrincipal: {
            mostrar: true,
            texto: 'SIMULAR ECONOMIA',
            link: '#simulador',
            icone: 'fa-arrow-right'
        },
        botaoSecundario: {
            mostrar: false,
            texto: 'TECNOLOGIA',
            link: '#tecnologia-visual',
            icone: 'fa-microchip'
        },
        especificacoes: []
    },
    {
        ativo: true,
        imagemDesktop: 'img-slider/4.jpeg',
        imagemMobile: 'img-slider/4-mobile.jpeg',
        posicaoImagemDesktop: 'center center',
        posicaoImagemMobile: 'center center',
        corEspecial: 'amarelo',
        titulo: 'SINTA A <br><span class="highlight">LIBERDADE</span> ELETRICA.',
        subtitulo: 'Silencio, economia e potência instantânea a cada aceleração.',
        esconderSubtitulo: true,
        esconderBotoes: false,
        mostrarEspecificacoes: false,
        mostrarEspecificacoesNoMobile: false,
        mostrarBotaoSecundarioNoMobile: true,
        botaoPrincipal: {
            mostrar: true,
            texto: 'NOSSOS MODELOS',
            link: '#modelos',
            icone: 'fa-arrow-right'
        },
        botaoSecundario: {
            mostrar: true,
            texto: 'TECNOLOGIA',
            link: '#tecnologia-visual',
            icone: 'fa-microchip'
        },
        especificacoes: []
    },
    {
        ativo: true,
        imagemDesktop: 'img-slider/5.png',
        imagemMobile: 'img-slider/5-mobile.png',
        posicaoImagemDesktop: 'center center',
        posicaoImagemMobile: 'center center',
        corEspecial: 'verde',
        titulo: 'ENERGIA <br> INTELIGENTE <br><span class="highlight">EM MOVIMENTO</span> ',
        subtitulo: 'Mova-se com agilidade e design sofisticado por onde você passar.',
        esconderSubtitulo: true,
        esconderBotoes: false,
        mostrarEspecificacoes: false,
        mostrarEspecificacoesNoMobile: false,
        mostrarBotaoSecundarioNoMobile: true,
        botaoPrincipal: {
            mostrar: true,
            texto: 'QUERO MINHA EVOX',
            link: 'https://wa.me/5511999999999',
            icone: 'fa-arrow-right'
        },
        botaoSecundario: {
            mostrar: false,
            texto: 'FALAR COM A EVOX',
            link: '#contato',
            icone: 'fa-play'
        },
        especificacoes: [

        ]
    }
];
