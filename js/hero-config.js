/*
 * Converte a configuracao amigavel do cliente para o formato interno do slider.
 * O cliente nao precisa editar este arquivo.
 */
(function () {
    const settings = window.campaignBannerSettings || {};
    const banners = Array.isArray(window.campaignBannersConfig) ? window.campaignBannersConfig : [];

    const heroSliderSettings = window.heroSliderSettings = {
        rotationMs: settings.tempoRotacaoMs || 30000,
        fadeMs: settings.tempoFadeMs || 500,
        overlayCss: settings.overlayCss || '',
        fallbackTitle: settings.tituloFallback || 'EVOX <br><span class="highlight">EM DESTAQUE</span>',
        fallbackSubtitle: settings.subtituloFallback || 'Ative ao menos um banner.',
    };

    const heroSliderConfig = window.heroSliderConfig = banners
        .filter(banner => banner && banner.ativo)
        .map((banner, index) => ({
            id: index + 1,
            image: banner.imagemDesktop,
            mobileImage: banner.imagemMobile || banner.imagemDesktop,
            desktopPosition: banner.posicaoImagemDesktop || 'center center',
            mobilePosition: banner.posicaoImagemMobile || banner.posicaoImagemDesktop || 'center center',
            specialColor: banner.corEspecial || 'azul',
            showSecondaryOnMobile: banner.mostrarBotaoSecundarioNoMobile !== false,
            title: banner.titulo || '',
            subtitle: banner.subtitulo || '',
            btnMain: {
                visible: banner.botaoPrincipal?.mostrar !== false,
                text: banner.botaoPrincipal?.texto || 'SAIBA MAIS',
                link: banner.botaoPrincipal?.link || '#',
                icon: banner.botaoPrincipal?.icone || 'fa-arrow-right'
            },
            btnSecondary: {
                visible: banner.botaoSecundario?.mostrar !== false,
                text: banner.botaoSecundario?.texto || 'VER DETALHES',
                link: banner.botaoSecundario?.link || '#',
                icon: banner.botaoSecundario?.icone || 'fa-arrow-right'
            },
            noSubtitle: banner.esconderSubtitulo === true,
            noButtons: banner.esconderBotoes === true,
            showSpecs: banner.mostrarEspecificacoes === true,
            showSpecsOnMobile: banner.mostrarEspecificacoesNoMobile === true,
            specs: Array.isArray(banner.especificacoes)
                ? banner.especificacoes.map(spec => ({
                    icon: spec.icone || 'fa-solid fa-star',
                    label: spec.rotulo || '',
                    value: spec.valor || '',
                    sub: spec.textoApoio || ''
                }))
                : []
        }));
})();
