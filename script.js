document.addEventListener('DOMContentLoaded', () => {
    const curiosities = [
        {
            category: 'Animais',
            frontImage: './images/VldACuSHLWGz.jpg',
            frontText: 'Pinguins conseguem voar como pássaros!',
            backText: 'Pinguins não voam, mas são excelentes nadadores.'
        },
        {
            category: 'Animais',
            frontImage: './images/VldACuSHLWGz.jpg',
            frontText: 'O recorde de voo de uma galinha é de 13 segundos.',
            backText: 'Apesar de não serem conhecidas por voar, galinhas podem realizar voos curtos.'
        },
        {
            category: 'Animais',
            frontImage: './images/VldACuSHLWGz.jpg',
            frontText: 'Mosquitos são os animais mais letais do mundo.',
            backText: 'Eles transmitem doenças que causam milhões de mortes humanas anualmente.'
        },
        {
            category: 'Espaço',
            frontImage: './images/bze0WGgurstp.jpg',
            frontText: 'Um milhão de Terras caberiam dentro do Sol.',
            backText: 'O Sol é uma estrela de tamanho médio, mas é imenso comparado à Terra.'
        },
        {
            category: 'Espaço',
            frontImage: './images/bze0WGgurstp.jpg',
            frontText: 'Por anos, acreditou-se que a Terra era o único planeta com água líquida.',
            backText: 'Hoje sabemos que há evidências de água em outros corpos celestes.'
        },
        {
            category: 'Corpo Humano',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O corpo humano tem mais ossos ao nascer do que na idade adulta.',
            backText: 'Bebês nascem com cerca de 300 ossos, que se fundem para formar 206 no adulto.'
        },
        {
            category: 'Corpo Humano',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O cérebro humano pesa cerca de 1,4 kg.',
            backText: 'Ele consome cerca de 20% do oxigênio e calorias do corpo.'
        },
        {
            category: 'História',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'A Grande Muralha da China não é visível do espaço a olho nu.',
            backText: 'Essa é uma lenda urbana muito difundida, mas não é verdade.'
        },
        {
            category: 'História',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'Cleópatra viveu mais perto da invenção do iPhone do que da construção das pirâmides.',
            backText: 'As pirâmides foram construídas milhares de anos antes de Cleópatra.'
        },
        {
            category: 'Tecnologia',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O primeiro mouse de computador foi feito de madeira.',
            backText: 'Criado por Douglas Engelbart em 1964, era um bloco de madeira com rodas.'
        },
        {
            category: 'Tecnologia',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'A primeira webcam foi criada para monitorar uma cafeteira.',
            backText: 'Pesquisadores da Universidade de Cambridge a usavam para ver se o café estava pronto.'
        },
        {
            category: 'Natureza',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'As nuvens não são tão leves quanto parecem.',
            backText: 'Uma nuvem cumulus média pode pesar mais de 500 toneladas.'
        },
        {
            category: 'Natureza',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O deserto do Saara já foi uma floresta tropical.',
            backText: 'Milhares de anos atrás, o Saara era verde e cheio de vida.'
        },
        {
            category: 'Comida',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'As cenouras eram originalmente roxas.',
            backText: 'A variedade laranja foi desenvolvida na Holanda no século XVII.'
        },
        {
            category: 'Comida',
            frontImage: './images/R2pUYFIpN9HN.jpg',
            frontText: 'O chocolate branco não é tecnicamente chocolate.',
            backText: 'Ele não contém sólidos de cacau, apenas manteiga de cacau.'
        }
    ];

    const curiositiesOutput = document.getElementById('curiosities-output');

    const renderCuriosities = () => {
        curiositiesOutput.innerHTML = ''; // Limpa o conteúdo existente

        const categories = {};
        curiosities.forEach(curiosity => {
            if (!categories[curiosity.category]) {
                categories[curiosity.category] = [];
            }
            categories[curiosity.category].push(curiosity);
        });

        for (const categoryName in categories) {
            const categorySection = document.createElement('section');
            categorySection.classList.add('categoria-section');

            const categoryTitle = document.createElement('h3');
            categoryTitle.classList.add('categoria-titulo');
            categoryTitle.textContent = categoryName;
            categorySection.appendChild(categoryTitle);

            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('categoria-container');

            categories[categoryName].forEach(curiosity => {
                const card = document.createElement('article');
                card.classList.add('cartao');
                card.innerHTML = `
                    <div class="cartao-interno">
                        <div class="cartao-frente">
                            <img src="${curiosity.frontImage}" alt="${curiosity.category}" class="cartao-imagem">
                            <p>${curiosity.frontText}</p>
                        </div>
                        <div class="cartao-verso">
                            <img src="${curiosity.frontImage}" alt="${curiosity.category}" class="cartao-imagem">
                            <p>${curiosity.backText}</p>
                        </div>
                    </div>
                `;
                categoryContainer.appendChild(card);
            });
            categorySection.appendChild(categoryContainer);
            curiositiesOutput.appendChild(categorySection);
        }
    };

    renderCuriosities();
});
