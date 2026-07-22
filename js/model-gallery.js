(function () {
    function getCurrentModelFolder() {
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        const modelosIndex = pathParts.lastIndexOf('modelos');

        if (modelosIndex >= 0 && pathParts[modelosIndex + 1]) {
            return pathParts[modelosIndex + 1];
        }

        return document.body.dataset.modelFolder || '';
    }

    function sortImages(imagePaths) {
        return [...imagePaths].sort((first, second) => {
            const firstName = first.split('/').pop() || '';
            const secondName = second.split('/').pop() || '';
            const firstIsCover = /^capa\./i.test(firstName);
            const secondIsCover = /^capa\./i.test(secondName);

            if (firstIsCover && !secondIsCover) return -1;
            if (!firstIsCover && secondIsCover) return 1;

            return firstName.localeCompare(secondName, 'pt-BR', { numeric: true, sensitivity: 'base' });
        });
    }

    function dedupeImages(imagePaths) {
        return [...new Set(imagePaths)];
    }

    function toCurrentFolderImagePath(imagePath) {
        const fileName = typeof imagePath === 'string' ? imagePath.split('/').pop() || '' : '';
        return fileName ? `img/${fileName}` : '';
    }

    function getManifestImages(folder) {
        const manifest = window.modelGalleryManifest || {};
        const modelImages = manifest[folder];

        if (!Array.isArray(modelImages)) {
            return [];
        }

        const currentFolderImages = modelImages
            .map(toCurrentFolderImagePath)
            .filter(Boolean);

        return sortImages(dedupeImages(currentFolderImages));
    }

    function renderGallery(imagePaths, modelName) {
        const mainImage = document.getElementById('mainImage');
        const thumbnailGrid = document.querySelector('.thumbnail-grid');
        const mainImageContainer = document.querySelector('.main-image-container');

        if (!mainImage || !thumbnailGrid || !mainImageContainer) return;

        if (!Array.isArray(imagePaths) || imagePaths.length === 0) {
            mainImageContainer.innerHTML = '<div class="gallery-empty-state">Adicione imagens na pasta <strong>img</strong> deste modelo para exibir a galeria.</div>';
            thumbnailGrid.innerHTML = '';
            return;
        }

        const altText = `EVOX ${modelName}`;
        let currentIndex = 0;

        function syncActiveThumbnail() {
            thumbnailGrid.querySelectorAll('.thumbnail').forEach((item, index) => {
                item.classList.toggle('active', index === currentIndex);
            });
        }

        function updateMainImage(nextIndex) {
            if (!Array.isArray(imagePaths) || imagePaths.length === 0) return;

            currentIndex = (nextIndex + imagePaths.length) % imagePaths.length;
            mainImage.src = imagePaths[currentIndex];
            mainImage.alt = altText;
            syncActiveThumbnail();
        }

        function ensureGalleryNavigation() {
            const existingNav = mainImageContainer.querySelector('.gallery-nav');
            if (existingNav) existingNav.remove();

            if (imagePaths.length <= 1) return;

            const navMarkup = `
                <div class="gallery-nav" aria-label="Navegacao da galeria">
                    <button type="button" class="gallery-nav-button prev" aria-label="Imagem anterior">
                        <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="gallery-nav-button next" aria-label="Proxima imagem">
                        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            `;

            mainImageContainer.insertAdjacentHTML('beforeend', navMarkup);

            const prevButton = mainImageContainer.querySelector('.gallery-nav-button.prev');
            const nextButton = mainImageContainer.querySelector('.gallery-nav-button.next');

            if (prevButton) {
                prevButton.addEventListener('click', () => updateMainImage(currentIndex - 1));
            }

            if (nextButton) {
                nextButton.addEventListener('click', () => updateMainImage(currentIndex + 1));
            }
        }

        updateMainImage(0);
        ensureGalleryNavigation();

        thumbnailGrid.innerHTML = imagePaths.map((imagePath, index) => `
            <img
                src="${imagePath}"
                alt="${altText}"
                class="thumbnail${index === 0 ? ' active' : ''}"
                data-image-src="${imagePath}"
            >
        `).join('');

        thumbnailGrid.querySelectorAll('.thumbnail').forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const nextIndex = imagePaths.findIndex((imagePath) => imagePath === (thumbnail.dataset.imageSrc || thumbnail.src));
                updateMainImage(nextIndex >= 0 ? nextIndex : 0);
            });
        });
    }

    function initModelGallery() {
        if (!document.body.classList.contains('product-page') && !document.body.dataset.enableModelGallery) {
            return;
        }

        const folder = getCurrentModelFolder();
        const modelName = document.body.dataset.modelName || document.querySelector('.product-info h1, [data-model-title]')?.textContent?.trim() || 'Modelo';
        const galleryImages = getManifestImages(folder);

        renderGallery(galleryImages, modelName);
    }

    document.addEventListener('DOMContentLoaded', initModelGallery);
})();
