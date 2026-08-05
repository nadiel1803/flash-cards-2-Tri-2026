/* ============================================
   CONFERE AÍ — Ultimate Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // PARTICLE BACKGROUND
    // ==========================================
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0, mouseY = 0;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = ['124,58,237', '245,158,11', '6,182,212', '16,185,129'][Math.floor(Math.random() * 4)];
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(124, 58, 237, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    };
    animateParticles();

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // ==========================================
    // DATA — Curiosities (10+ per category)
    // ==========================================
    const curiosities = [
        // ANIMAIS
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=600&h=400&fit=crop', frontText: 'Pinguins não voam, mas nadam como aviões!', backText: 'Pinguins alcançam até 36 km/h debaixo d\'água, usando as asas como propulsores.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop', frontText: 'Polvos têm 3 corações e sangue azul!', backText: 'Dois corações bombeiam sangue para as brânquias, e um para o resto do corpo. O sangue é azul por conter cobre.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&h=400&fit=crop', frontText: 'Leopardos podem carregar uma presa 3x mais pesada que eles nas árvores.', backText: 'Eles são tão fortes que conseguem subir árvores com antílopes pesados na boca.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&h=400&fit=crop', frontText: 'Golfinhos dormem com um olho aberto!', backText: 'Eles desligam apenas metade do cérebro para continuar nadando e respirando.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1517011894977-f2358a5d3e55?w=600&h=400&fit=crop', frontText: 'Tartarugas marinhas podem retornar à praia onde nasceram para desovar.', backText: 'Elas navegam milhares de quilômetros usando o campo magnético da Terra.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1484406566174-437a054e2b33?w=600&h=400&fit=crop', frontText: 'Elefantes são os únicos animais que não conseguem pular.', backText: 'Seus ossos pesados e estrutura das pernas impedem qualquer salto.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1504006833117-8886a36e6bf3?w=600&h=400&fit=crop', frontText: 'Chitas podem atingir 112 km/h em apenas 3 segundos!', backText: 'Mas só mantêm essa velocidade por cerca de 30 segundos antes de precisar descansar.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1535083783855-76462b2d7ce6?w=600&h=400&fit=crop', frontText: 'Baleias jubarte cantam músicas que duram horas.', backText: 'Suas canções podem ser ouvidas a mais de 3.000 km de distância na água.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1478949997800-616511c05f83?w=600&h=400&fit=crop', frontText: 'Formigas conseguem carregar 50x seu próprio peso.', backText: 'Algumas espécies de formigas cortadeiras suportam até 100x o peso do próprio corpo.' },
        { category: 'Animais', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&h=400&fit=crop', frontText: 'Corujas podem girar a cabeça até 270 graus.', backText: 'Elas têm 14 vértebras cervicais (nós temos 7) e vasos sanguíneos especiais que evitam coágulos.' },

        // ESPAÇO
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop', frontText: 'Um milhão de Terras caberiam dentro do Sol.', backText: 'O Sol é uma estrela de tamanho médio, mas é imenso comparado à Terra.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop', frontText: 'A Estação Espacial Internacional viaja a 28.000 km/h.', backText: 'Os astronautas veem 16 nasceres do sol por dia.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=400&fit=crop', frontText: 'Júpiter tem uma tempestade que dura há mais de 350 anos.', backText: 'A Grande Mancha Vermelha é tão grande que caberiam 2 Terras dentro dela.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop', frontText: 'O espaço é completamente silencioso.', backText: 'O som precisa de um meio para se propagar, e o vácuo espacial não possui ar.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&h=400&fit=crop', frontText: 'Saturno flutuaria na água se existisse uma banheira grande o suficiente.', backText: 'Saturno é menos denso que a água, apesar de ser o segundo maior planeta.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&h=400&fit=crop', frontText: 'A Via Láctea vai colidir com Andrômeda em 4 bilhões de anos.', backText: 'As duas galáxias estão se aproximando a 110 km/s e se fundirão em uma nova.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600&h=400&fit=crop', frontText: 'Existem mais estrelas no universo do que grãos de areia na Terra.', backText: 'Estima-se que existam 700 bilhões de bilhões de estrelas observáveis.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600&h=400&fit=crop', frontText: 'Os astronautas crescem até 5 cm no espaço.', backText: 'Sem a gravidade, a coluna vertebral se alonga durante a permanência em órbita.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1534996858221-380b92700493?w=600&h=400&fit=crop', frontText: 'Um dia em Vênus dura mais que um ano venusiano.', backText: 'Vênus leva 243 dias terrestres para girar, mas apenas 225 dias para orbitar o Sol.' },
        { category: 'Espaço', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop', frontText: 'A luz do Sol leva 8 minutos para chegar à Terra.', backText: 'Viajando a 300.000 km/s, a luz percorre 150 milhões de km em 8 minutos e 20 segundos.' },

        // CORPO HUMANO
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop', frontText: 'O corpo humano tem mais ossos ao nascer do que na idade adulta.', backText: 'Bebês nascem com cerca de 300 ossos, que se fundem para formar 206 no adulto.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop', frontText: 'O cérebro humano pesa cerca de 1,4 kg.', backText: 'Ele consome cerca de 20% do oxigênio e calorias do corpo.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop', frontText: 'O DNA humano, se esticado, alcançaria o Sol e voltaria 600 vezes.', backText: 'Cada célula contém cerca de 2 metros de DNA. O corpo inteiro tem ~37 trilhões de células.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop', frontText: 'O coração humano bate cerca de 2,5 bilhões de vezes na vida.', backText: 'Pulsa em média 100.000 vezes por dia, bombeando 7.500 litros de sangue.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&h=400&fit=crop', frontText: 'O estômago produz um novo revestimento a cada 3-4 dias.', backText: 'Sem isso, o ácido estomacal digeriria o próprio órgão.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop', frontText: 'Você pisca cerca de 15-20 vezes por minuto.', backText: 'Cada piscada dura 0,3 segundos. Em um dia, você pisca cerca de 28.800 vezes.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop', frontText: 'O fígado é o único órgão que pode se regenerar completamente.', backText: 'Mesmo com apenas 25% do tecido original, ele pode se reconstruir inteiro.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop', frontText: 'A pele humana se renova completamente a cada 27 dias.', backText: 'Você troca de pele inteira cerca de 1.000 vezes durante a vida.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop', frontText: 'O nariz humano pode detectar 1 trilhão de odores diferentes.', backText: 'Estudos recentes mostram que nosso olfato é muito mais sensível do que se pensava.' },
        { category: 'Corpo Humano', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop', frontText: 'Você tem cerca de 60.000 km de vasos sanguíneos no corpo.', backText: 'Se esticados em linha reta, dariam quase 1,5 voltas ao redor da Terra.' },

        // HISTÓRIA
        { category: 'História', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600&h=400&fit=crop', frontText: 'A Grande Muralha da China não é visível do espaço a olho nu.', backText: 'Essa é uma lenda urbana muito difundida, mas não é verdade.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop', frontText: 'Cleópatra viveu mais perto da invenção do iPhone do que das pirâmides.', backText: 'As pirâmides foram construídas 2.500 anos antes de Cleópatra.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1585734334425-6e6d99831a45?w=600&h=400&fit=crop', frontText: 'Oxford é mais antiga que o Império Asteca.', backText: 'Oxford foi fundada em 1096, enquanto o Império Asteca começou em 1428.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop', frontText: 'Napoleão não era baixo — ele tinha 1,68m, acima da média da época.', backText: 'A confusão veio da diferença entre pés franceses e ingleses nas medidas.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&h=400&fit=crop', frontText: 'A guerra mais curta da história durou 38 minutos.', backText: 'Foi entre Zanzibar e o Reino Unido em 1896.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop', frontText: 'Os vikings usavam ossos de foca para patinar no gelo.', backText: 'A Escandinávia já praticava esportes no gelo há mais de 1.000 anos.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1565939593027-0c0e2e76d4a5?w=600&h=400&fit=crop', frontText: 'O coliseu romano levava apenas 1 hora para ser esvaziado.', backText: 'Seus 80 portões de saída e sistema de corredores permitiam evacuação rápida.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', frontText: 'A Idade Média durou cerca de 1.000 anos (476-1492 d.C.).', backText: 'Vai da queda de Roma até a descoberta da América por Colombo.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=400&fit=crop', frontText: 'O Titanic foi precedido por uma profecia literária 14 anos antes.', backText: 'Morgan Robertson escreveu "Futility" em 1898, descrevendo um navio muito similar.' },
        { category: 'História', image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&h=400&fit=crop', frontText: 'A França ainda usava a guilhotina em 1977.', backText: 'A última execução na França foi em setembro de 1977, pouco antes de sua abolição.' },

        // TECNOLOGIA
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop', frontText: 'O primeiro mouse de computador foi feito de madeira.', backText: 'Criado por Douglas Engelbart em 1964, era um bloco de madeira com rodas.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', frontText: 'A primeira webcam foi criada para monitorar uma cafeteira.', backText: 'Pesquisadores de Cambridge a usavam para ver se o café estava pronto.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop', frontText: 'O primeiro domínio da internet foi symbolics.com, registrado em 1985.', backText: 'Foi o domínio de uma empresa de computadores de Massachusetts.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop', frontText: 'O primeiro celular pesava 1,1 kg e custava quase US$ 4.000.', backText: 'O Motorola DynaTAC 8000X foi lançado em 1983.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', frontText: 'A IA pode gerar imagens em segundos que levariam horas para um artista.', backText: 'Mas artistas humanos ainda trazem criatividade e emoção que a IA não reproduz.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop', frontText: 'O Google processa mais de 8,5 bilhões de pesquisas por dia.', backText: 'Isso equivale a cerca de 99.000 pesquisas por segundo.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop', frontText: 'O código-fonte do Appollo 11 foi escrito à mão e costurado.', backText: 'O código de 600 páginas foi impresso e literalmente costurado à mão.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop', frontText: 'O primeiro email foi enviado em 1971 por Ray Tomlinson.', backText: 'Ele mesmo criou o símbolo @ para separar o nome do destinatário do computador.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', frontText: 'Um chip de smartphone moderno é mais poderoso que o computador da NASA em 1969.', backText: 'O smartphone no seu bolso tem mais capacidade que o sistema que levou o homem à Lua.' },
        { category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop', frontText: 'A internet contém cerca de 130 trilhões de páginas web.', backText: 'Mas menos de 0,01% desse conteúdo é acessado regularmente.' },

        // NATUREZA
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&h=400&fit=crop', frontText: 'As nuvens não são tão leves quanto parecem.', backText: 'Uma nuvem cumulus média pode pesar mais de 500 toneladas.' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop', frontText: 'O deserto do Saara já foi uma floresta tropical.', backText: 'Há 6.000 anos, o Saara era verde e cheio de vida.' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1432405972618-c6b0cfba8b47?w=600&h=400&fit=crop', frontText: 'As árvores se comunicam através de uma "internet" subterrânea.', backText: 'Elas trocam nutrientes e sinais de alerta através de redes de fungos (micorrizas).' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', frontText: 'A Amazônia produz 20% do oxigênio do planeta.', backText: 'Mas também consome grande parte desse oxigênio na respiração das plantas.' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop', frontText: 'Os oceanos contêm 97% de toda a água da Terra.', backText: 'Mas apenas 1% dessa água é acessível e potável para consumo humano.' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&h=400&fit=crop', frontText: 'A Grande Barreira de Coral pode ser vista do espaço.', backText: 'Ela se estende por mais de 2.300 km ao longo da costa australiana.' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', frontText: 'O Monte Everest cresce cerca de 4 mm por ano.', backText: 'As placas tectônicas da Índia e da Eurásia continuam empurrando o Himalaia para cima.' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', frontText: 'A areia da praia é feita de rochas erodidas ao longo de milhões de anos.', backText: 'Além de minerais, ela pode conter fragmentos de corais, conchas e ossos.' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', frontText: 'Uma única árvore grande pode absorver 22 kg de CO2 por ano.', backText: 'E produz oxigênio suficiente para 2 pessoas respirarem por um ano.' },
        { category: 'Natureza', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop', frontText: 'Os raios caem na Terra cerca de 100 vezes por segundo.', backText: 'Cada raio atinge temperaturas de até 30.000°C, 5x mais quente que a superfície do Sol.' },

        // COMIDA
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1447175008436-348e77c09e12?w=600&h=400&fit=crop', frontText: 'As cenouras eram originalmente roxas.', backText: 'A variedade laranja foi desenvolvida na Holanda no século XVII em homenagem à família real.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&h=400&fit=crop', frontText: 'O chocolate branco não é tecnicamente chocolate.', backText: 'Ele não contém sólidos de cacau, apenas manteiga de cacau, açúcar e leite.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop', frontText: 'O mel nunca estraga — potes de 3.000 anos ainda são comestíveis.', backText: 'Encontraram mel comestível em tumbas egípcias milenares.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop', frontText: 'A banana que comemos hoje não existia há 100 anos.', backText: 'Todas as bananas atuais são clones da variedade Cavendish, desenvolvida no século XX.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop', frontText: 'Tomates eram considerados venenosos na Europa até o século XIX.', backText: 'Como pertencem à família das solanáceas, muitos europeus temiam comê-los.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop', frontText: 'O wasabi verdadeiro custa até US$ 250 por quilo.', backText: 'A maioria dos restaurantes usa pasta de raiz-forte com corante verde.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop', frontText: 'O hambúrguer foi inventado na Alemanha, não nos EUA.', backText: 'Vem da cidade de Hamburgo, onde trabalhadores portavam carne picada em pão.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', frontText: 'Abacaxis levam até 2 anos para crescer.', backText: 'Cada planta produz apenas um abacaxi por vez, que leva de 18 a 24 meses.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop', frontText: 'A pimenta mais ardida do mundo mede 2,2 milhões de unidades Scoville.', backText: 'O Carolina Reaper é tão quente que pode causar queimaduras químicas na boca.' },
        { category: 'Comida', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop', frontText: 'Panquecas são o prato mais antigo do mundo.', backText: 'Grãos de amido foram encontrados em panelas com 30.000 anos.' },
    ];

    // ==========================================
    // AUTH SYSTEM (localStorage)
    // ==========================================
    const authOverlay = document.getElementById('authOverlay');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authTabs = document.querySelectorAll('.auth-tab');
    const userGreeting = document.getElementById('userGreeting');
    const logoutBtn = document.getElementById('logoutBtn');

    const getUsers = () => JSON.parse(localStorage.getItem('confereai_users') || '[]');
    const saveUsers = (users) => localStorage.setItem('confereai_users', JSON.stringify(users));
    const getCurrentUser = () => JSON.parse(localStorage.getItem('confereai_current_user') || 'null');
    const setCurrentUser = (user) => localStorage.setItem('confereai_current_user', JSON.stringify(user));
    const clearCurrentUser = () => localStorage.removeItem('confereai_current_user');

    // Auth tabs
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (tab.dataset.tab === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            } else {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
            }
        });
    });

    // Register
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim().toLowerCase();
        const password = document.getElementById('registerPassword').value;
        const errorEl = document.getElementById('registerError');

        const users = getUsers();
        if (users.find(u => u.email === email)) {
            errorEl.textContent = 'Este e-mail já está cadastrado.';
            return;
        }

        users.push({ name, email, password, createdAt: Date.now() });
        saveUsers(users);
        setCurrentUser({ name, email });
        errorEl.textContent = '';
        enterApp();
        showToast('Conta criada com sucesso!', 'success');
    });

    // Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value;
        const errorEl = document.getElementById('loginError');

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            errorEl.textContent = 'E-mail ou senha incorretos.';
            return;
        }

        setCurrentUser({ name: user.name, email: user.email });
        errorEl.textContent = '';
        enterApp();
        showToast(`Bem-vindo(a), ${user.name}!`, 'success');
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
        clearCurrentUser();
        authOverlay.classList.remove('hidden');
        loginForm.reset();
        registerForm.reset();
    });

    function enterApp() {
        authOverlay.classList.add('hidden');
        const user = getCurrentUser();
        userGreeting.querySelector('strong').textContent = user.name;
        renderCards();
    }

    // Check if already logged in
    const existingUser = getCurrentUser();
    if (existingUser) {
        authOverlay.classList.add('hidden');
        userGreeting.querySelector('strong').textContent = existingUser.name;
    }

    // ==========================================
    // NAVIGATION
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-link');
    const homePage = document.getElementById('homePage');
    const aiSection = document.getElementById('aiSection');
    const mainContent = document.getElementById('mainContent');
    const filterSection = document.querySelector('.filter-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (link.dataset.page === 'create') {
                homePage.style.display = 'none';
                aiSection.style.display = 'block';
                mainContent.style.display = 'none';
                filterSection.style.display = 'none';
            } else {
                homePage.style.display = 'block';
                aiSection.style.display = 'block';
                mainContent.style.display = 'block';
                filterSection.style.display = 'block';
            }
        });
    });

    // ==========================================
    // AI CARD GENERATOR
    // ==========================================
    const aiPrompt = document.getElementById('aiPrompt');
    const aiGenerateBtn = document.getElementById('aiGenerateBtn');
    const aiResult = document.getElementById('aiResult');

    const categoryImages = {
        'Animais': ['https://images.unsplash.com/photo-1474511320723-9a56873571b7', 'https://images.unsplash.com/photo-1535083783855-76462b2d7ce6'],
        'Espaço': ['https://images.unsplash.com/photo-1462331940025-496dfbfc7564', 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa'],
        'Corpo Humano': ['https://images.unsplash.com/photo-1559757148-5c350d0d3c56', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'],
        'História': ['https://images.unsplash.com/photo-1568322445389-f64ac2515020', 'https://images.unsplash.com/photo-1548013146-72479768bada'],
        'Tecnologia': ['https://images.unsplash.com/photo-1519389950473-47ba0277781c', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'],
        'Natureza': ['https://images.unsplash.com/photo-1432405972618-c6b0cfba8b47', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05'],
        'Comida': ['https://images.unsplash.com/photo-1563805042-7684c019e1cb', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'],
        'Geral': ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3', 'https://images.unsplash.com/photo-1493612276216-ee3925520721']
    };

    function detectCategory(text) {
        const t = text.toLowerCase();
        if (t.includes('animal') || t.includes('bicho') || t.includes('pet') || t.includes('cão') || t.includes('gato') || t.includes('cavalo') || t.includes('ave')) return 'Animais';
        if (t.includes('espaço') || t.includes('estrela') || t.includes('planeta') || t.includes('luna') || t.includes('sol') || t.includes('galáxia') || t.includes('astro') || t.includes('nasa')) return 'Espaço';
        if (t.includes('corpo') || t.includes('humano') || t.includes('saúde') || t.includes('médico') || t.includes('anatomia') || t.includes('órgão')) return 'Corpo Humano';
        if (t.includes('história') || t.includes('antigo') || t.includes('guerra') || t.includes('rei') || t.includes('império') || t.includes('romano')) return 'História';
        if (t.includes('tecno') || t.includes('computador') || t.includes('internet') || t.includes('software') || t.includes('ia') || t.includes('robô')) return 'Tecnologia';
        if (t.includes('natureza') || t.includes('planta') || t.includes('oceano') || t.includes('montanha') || t.includes('floresta') || t.includes('rio')) return 'Natureza';
        if (t.includes('comida') || t.includes('comer') || t.includes('receita') || t.includes('fruta') || t.includes('doce') || t.includes('prato')) return 'Comida';
        return 'Geral';
    }

    function generateCuriosity(prompt) {
        const responses = {
            'Animais': [
                `Curiosidade: ${prompt} — Os animais têm comportamentos surpreendentes que a ciência ainda está descobrindo!`,
                `Fato incrível: No reino animal, ${prompt} revela características fascinantes que poucos conhecem.`,
                `Sabia que? Sobre ${prompt}: muitos animais possuem habilidades extraordinárias que desafiam nossa compreensão.`
            ],
            'Espaço': [
                `Descoberta espacial: ${prompt} — O universo esconde segredos que desafiam nossa imaginação.`,
                `Fato cósmico: Quando pensamos em ${prompt}, o espaço nos mostra o quão vasto e misterioso tudo é.`,
                `Curiosidade astronômica: ${prompt} é um tema que conecta nosso planeta ao cosmos infinito.`
            ],
            'Corpo Humano': [
                `Descoberta médica: ${prompt} — O corpo humano é uma máquina perfeita com milhões de detalhes.`,
                `Fato biológico: Sobre ${prompt}, nosso organismo esconde capacidades extraordinárias.`,
                `Curiosidade anatômica: ${prompt} revela o quão fascinante é o funcionamento do ser humano.`
            ],
            'História': [
                `Fato histórico: ${prompt} — O passado guarda lições que moldaram o mundo como conhecemos.`,
                `Curiosidade do passado: ${prompt} nos lembra que a história é cheia de reviravoltas inesperadas.`,
                `Descoberta histórica: Sobre ${prompt}, eventos antigos influenciaram profundamente nossa era moderna.`
            ],
            'Tecnologia': [
                `Fato tecnológico: ${prompt} — A tecnologia avança em velocidade incrível, transformando tudo ao redor.`,
                `Curiosidade digital: Sobre ${prompt}, inovações recentes estão redefinindo o que é possível.`,
                `Descoberta tech: ${prompt} é um exemplo de como a ciência e a engenharia criam maravilhas.`
            ],
            'Natureza': [
                `Fato natural: ${prompt} — A natureza possui mecanismos que a ciência apenas começa a entender.`,
                `Curiosidade ambiental: Sobre ${prompt}, o planeta Terra esconde belezas e mistérios extraordinários.`,
                `Descoberta ecológica: ${prompt} mostra como os ecossistemas são complexos e interconectados.`
            ],
            'Comida': [
                `Fato gastronômico: ${prompt} — A culinária é uma das formas mais antigas de arte humana.`,
                `Curiosidade culinária: Sobre ${prompt}, os alimentos guardam histórias fascinantes de sua origem.`,
                `Descoberta alimentar: ${prompt} revela como a gastronomia evoluiu ao longo dos séculos.`
            ],
            'Geral': [
                `Curiosidade: ${prompt} — O conhecimento é infinito e sempre há algo novo para descobrir!`,
                `Fato interessante: Sobre ${prompt}, o mundo está cheio de informações surpreendentes.`,
                `Sabia que? ${prompt} é um tema que desperta curiosidade e convida à exploração.`
            ]
        };

        const cat = detectCategory(prompt);
        const answers = responses[cat];
        const front = answers[Math.floor(Math.random() * answers.length)];
        const back = `Essa curiosidade sobre "${prompt}" foi gerada por IA. Continue explorando o mundo e descubra mais fatos incríveis sobre ${cat.toLowerCase()}!`;

        return { frontText: front, backText: back, category: cat };
    }

    aiGenerateBtn.addEventListener('click', async () => {
        const prompt = aiPrompt.value.trim();
        if (!prompt) {
            showToast('Digite um tema para o card!', 'error');
            return;
        }

        aiGenerateBtn.classList.add('loading');
        aiResult.innerHTML = '';

        // Simulate AI processing delay
        await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

        const generated = generateCuriosity(prompt);
        const images = categoryImages[generated.category] || categoryImages['Geral'];
        const image = images[Math.floor(Math.random() * images.length)] + '?w=600&h=400&fit=crop';

        aiResult.innerHTML = `
            <div class="ai-card-preview">
                <h4>✨ Card Gerado — ${generated.category}</h4>
                <p><strong>Frente:</strong> ${generated.frontText}</p>
                <p style="margin-top:8px;"><strong>Verso:</strong> ${generated.backText}</p>
                <div class="ai-actions">
                    <button class="ai-save-btn" id="saveAiCard">💾 Salvar Card</button>
                    <button class="ai-discard-btn" id="discardAiCard">Descartar</button>
                </div>
            </div>
        `;

        aiGenerateBtn.classList.remove('loading');

        document.getElementById('saveAiCard').addEventListener('click', () => {
            const user = getCurrentUser();
            if (!user) return;

            const userCards = JSON.parse(localStorage.getItem('confereai_user_cards') || '[]');
            const newCard = {
                ...generated,
                image,
                userId: user.email,
                userName: user.name,
                createdAt: Date.now()
            };
            userCards.push(newCard);
            localStorage.setItem('confereai_user_cards', JSON.stringify(userCards));
            showToast('Card salvo com sucesso!', 'success');
            aiResult.innerHTML = '';
            aiPrompt.value = '';
        });

        document.getElementById('discardAiCard').addEventListener('click', () => {
            aiResult.innerHTML = '';
            aiPrompt.value = '';
        });
    });

    // ==========================================
    // STATE
    // ==========================================
    let activeCategory = 'Todas';

    // ==========================================
    // DOM REFERENCES
    // ==========================================
    const outputContainer = document.getElementById('curiosities-output');
    const filterTabsContainer = document.getElementById('filterTabs');
    const header = document.getElementById('mainHeader');

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    const getAllCards = () => {
        const userCards = JSON.parse(localStorage.getItem('confereai_user_cards') || '[]');
        return [...curiosities, ...userCards];
    };

    const getUniqueCategories = () => {
        const allCards = getAllCards();
        return ['Todas', ...new Set(allCards.map(c => c.category))];
    };

    const filterByCategory = (category) => {
        const allCards = getAllCards();
        if (category === 'Todas') return allCards;
        return allCards.filter(c => c.category === category);
    };

    // ==========================================
    // SVG ICONS
    // ==========================================
    const flipIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`;

    // ==========================================
    // RENDER FILTER TABS
    // ==========================================
    const renderFilterTabs = () => {
        const categories = getUniqueCategories();
        filterTabsContainer.innerHTML = categories.map(cat =>
            `<button class="filter-tab ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">${cat}</button>`
        ).join('');

        filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                activeCategory = tab.dataset.category;
                renderFilterTabs();
                renderCards();
            });
        });
    };

    // ==========================================
    // RENDER CARDS
    // ==========================================
    const renderCards = () => {
        const filtered = filterByCategory(activeCategory);

        outputContainer.innerHTML = '';

        if (activeCategory === 'Todas') {
            const grouped = {};
            filtered.forEach(item => {
                if (!grouped[item.category]) grouped[item.category] = [];
                grouped[item.category].push(item);
            });

            let globalDelay = 0;
            for (const [category, items] of Object.entries(grouped)) {
                const titleEl = document.createElement('div');
                titleEl.className = 'category-section';
                titleEl.innerHTML = `<h3 class="category-title">${category}</h3>`;
                outputContainer.appendChild(titleEl);

                items.forEach(item => {
                    const card = createCardElement(item, globalDelay);
                    outputContainer.appendChild(card);
                    globalDelay++;
                });
            }
        } else {
            filtered.forEach((item, index) => {
                const card = createCardElement(item, index);
                outputContainer.appendChild(card);
            });
        }
    };

    // ==========================================
    // CREATE SINGLE CARD
    // ==========================================
    const createCardElement = (item, delay) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.style.animationDelay = `${delay * 0.06}s`;

        const isUserCard = item.userId ? true : false;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-front">
                    <div class="card-image-wrapper">
                        <img src="${item.image}" alt="${item.category}" class="card-image" loading="lazy">
                        <div class="card-image-overlay"></div>
                        <span class="card-category-badge">${item.category}</span>
                        ${isUserCard ? '<span class="card-user-made">✨</span>' : ''}
                    </div>
                    <div class="card-content">
                        <span class="card-label">Curiosidade</span>
                        <p class="card-text">${item.frontText}</p>
                    </div>
                    <div class="flip-hint">${flipIcon}</div>
                </div>
                <div class="card-face card-back">
                    <div class="card-content">
                        <span class="card-label">Resposta</span>
                        <p class="card-text">${item.backText}</p>
                        ${isUserCard ? `<span class="card-label" style="margin-top:8px; color: var(--accent);">Criado por ${item.userName || 'Você'}</span>` : ''}
                    </div>
                    <div class="flip-hint">${flipIcon}</div>
                </div>
            </div>
        `;

        return card;
    };

    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================
    const handleScroll = () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ==========================================
    // TOUCH SUPPORT (Mobile)
    // ==========================================
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

    // ==========================================
    // TOAST NOTIFICATION
    // ==========================================
    function showToast(message, type = 'success') {
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span>${type === 'success' ? '✅' : '⚠️'}</span> ${message}`;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ==========================================
    // INIT
    // ==========================================
    renderFilterTabs();
    renderCards();
    handleScroll();
});
