/* ============================================
   CONFERE AÍ — Modern Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Data ---
    const curiosities = [
        {
            category: 'Animais',
            image: './images/VldACuSHLWGz.jpg',
            frontText: 'Pinguins conseguem voar como pássaros!',
            backText: 'Pinguins não voam, mas são excelentes nadadores.'
        },
        {
            category: 'Animais',
            image: './images/VldACuSHLWGz.jpg',
            frontText: 'O recorde de voo de uma galinha é de 13 segundos.',
            backText: 'Apesar de não serem conhecidas por voar, galinhas podem realizar voos curtos.'
        },
        {
            category: 'Animais',
            image: './images/VldACuSHLWGz.jpg',
            frontText: 'Mosquitos são os animais mais letais do mundo.',
            backText: 'Eles transmitem doenças que causam milhões de mortes humanas anualmente.'
        },
        {
            category: 'Espaço',
            image: './images/bze0WGgurstp.jpg',
            frontText: 'Um milhão de Terras caberiam dentro do Sol.',
            backText: 'O Sol é uma estrela de tamanho médio, mas é imenso comparado à Terra.'
        },
        {
            category: 'Espaço',
            image: './images/bze0WGgurstp.jpg',
            frontText: 'Por anos, acreditou-se que a Terra era o único planeta com água líquida.',
            backText: 'Hoje sabemos que há evidências de água em outros corpos celestes.'
        },
        {
            category: 'Corpo Humano',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O corpo humano tem mais ossos ao nascer do que na idade adulta.',
            backText: 'Bebês nascem com cerca de 300 ossos, que se fundem para formar 206 no adulto.'
        },
        {
            category: 'Corpo Humano',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O cérebro humano pesa cerca de 1,4 kg.',
            backText: 'Ele consome cerca de 20% do oxigênio e calorias do corpo.'
        },
        {
            category: 'História',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'A Grande Muralha da China não é visível do espaço a olho nu.',
            backText: 'Essa é uma lenda urbana muito difundida, mas não é verdade.'
        },
        {
            category: 'História',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'Cleópatra viveu mais perto da invenção do iPhone do que da construção das pirâmides.',
            backText: 'As pirâmides foram construídas milhares de anos antes de Cleópatra.'
        },
        {
            category: 'Tecnologia',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O primeiro mouse de computador foi feito de madeira.',
            backText: 'Criado por Douglas Engelbart em 1964, era um bloco de madeira com rodas.'
        },
        {
            category: 'Tecnologia',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'A primeira webcam foi criada para monitorar uma cafeteira.',
            backText: 'Pesquisadores da Universidade de Cambridge a usavam para ver se o café estava pronto.'
        },
        {
            category: 'Natureza',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'As nuvens não são tão leves quanto parecem.',
            backText: 'Uma nuvem cumulus média pode pesar mais de 500 toneladas.'
        },
        {
            category: 'Natureza',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O deserto do Saara já foi uma floresta tropical.',
            backText: 'Milhares de anos atrás, o Saara era verde e cheio de vida.'
        },
        {
            category: 'Comida',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'As cenouras eram originalmente roxas.',
            backText: 'A variedade laranja foi desenvolvida na Holanda no século XVII.'
        },
        {
            category: 'Comida',
            image: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O chocolate branco não é tecnicamente chocolate.',
            backText: 'Ele não contém sólidos de cacau, apenas manteiga de cacau.'
        }
    ];

    // --- State ---
    let activeCategory = 'Todas';

    // --- DOM References ---
    const outputContainer = document.getElementById('curiosities-output');
    const filterTabsContainer = document.getElementById('filterTabs');
    const header = document.querySelector('.header');

    // --- Utility Functions ---
    const getUniqueCategories = () => {
        return ['Todas', ...new Set(curiosities.map(c => c.category))];
    };

    const filterByCategory = (category) => {
        if (category === 'Todas') return curiosities;
        return curiosities.filter(c => c.category === category);
    };

    // --- SVG Icons ---
    const flipIcon = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
            <path d="M21 3v5h-5"/>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
            <path d="M8 16H3v5"/>
        </svg>
    `;

    // --- Render Filter Tabs ---
    const renderFilterTabs = () => {
        const categories = getUniqueCategories();

        filterTabsContainer.innerHTML = categories.map(cat => `
            <button 
                class="filter-tab ${cat === activeCategory ? 'active' : ''}" 
                data-category="${cat}"
            >${cat}</button>
        `).join('');

        // Add click handlers
        filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                activeCategory = tab.dataset.category;
                renderFilterTabs();
                renderCards();
            });
        });
    };

    // --- Render Cards ---
    const renderCards = () => {
        const filtered = filterByCategory(activeCategory);

        outputContainer.innerHTML = '';

        // If showing all categories, add section headers
        if (activeCategory === 'Todas') {
            const grouped = {};
            filtered.forEach(item => {
                if (!grouped[item.category]) grouped[item.category] = [];
                grouped[item.category].push(item);
            });

            let globalDelay = 0;
            for (const [category, items] of Object.entries(grouped)) {
                // Category title
                const titleEl = document.createElement('div');
                titleEl.className = 'category-section';
                titleEl.innerHTML = `<h3 class="category-title">${category}</h3>`;
                outputContainer.appendChild(titleEl);

                // Cards
                items.forEach(item => {
                    const card = createCardElement(item, globalDelay);
                    outputContainer.appendChild(card);
                    globalDelay++;
                });
            }
        } else {
            // Single category — no section headers
            filtered.forEach((item, index) => {
                const card = createCardElement(item, index);
                outputContainer.appendChild(card);
            });
        }
    };

    // --- Create Single Card ---
    const createCardElement = (item, delay) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.style.animationDelay = `${delay * 0.08}s`;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-front">
                    <div class="card-image-wrapper">
                        <img 
                            src="${item.image}" 
                            alt="${item.category}" 
                            class="card-image"
                            loading="lazy"
                            onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect fill=%22%231a1a24%22 width=%22400%22 height=%22200%22/><text fill=%22%2394a3b8%22 font-family=%22sans-serif%22 font-size=%2214%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22>${item.category}</text></svg>'"
                        >
                        <div class="card-image-overlay"></div>
                        <span class="card-category-badge">${item.category}</span>
                        <div class="flip-hint">${flipIcon}</div>
                    </div>
                    <div class="card-content">
                        <span class="card-label">Curiosidade</span>
                        <p class="card-text">${item.frontText}</p>
                    </div>
                </div>
                <div class="card-face card-back">
                    <div class="card-image-wrapper">
                        <img 
                            src="${item.image}" 
                            alt="${item.category}" 
                            class="card-image"
                            loading="lazy"
                            onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect fill=%22%231e1e2e%22 width=%22400%22 height=%22200%22/><text fill=%22%2394a3b8%22 font-family=%22sans-serif%22 font-size=%2214%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22>${item.category}</text></svg>'"
                        >
                        <div class="card-image-overlay"></div>
                        <span class="card-category-badge">Resposta</span>
                        <div class="flip-hint">${flipIcon}</div>
                    </div>
                    <div class="card-content">
                        <span class="card-label">A verdade é...</span>
                        <p class="card-text">${item.backText}</p>
                    </div>
                </div>
            </div>
        `;

        return card;
    };

    // --- Header Scroll Effect ---
    const handleScroll = () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Touch Support for Mobile (tap to flip) ---
    let activeTouchCard = null;

    document.addEventListener('touchstart', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            if (activeTouchCard && activeTouchCard !== card) {
                activeTouchCard.classList.remove('touch-active');
            }
            if (card.classList.contains('touch-active')) {
                card.classList.remove('touch-active');
                activeTouchCard = null;
            } else {
                card.classList.add('touch-active');
                activeTouchCard = card;
            }
        } else if (activeTouchCard) {
            activeTouchCard.classList.remove('touch-active');
            activeTouchCard = null;
        }
    }, { passive: true });

    // --- Init ---
    renderFilterTabs();
    renderCards();
    handleScroll();
});

/* ============================================
   Additional CSS for touch-active (injected)
   ============================================ */
(() => {
    const style = document.createElement('style');
    style.textContent = `
        .card.touch-active .card-inner {
            transform: rotateY(180deg);
        }
    `;
    document.head.appendChild(style);
})();
