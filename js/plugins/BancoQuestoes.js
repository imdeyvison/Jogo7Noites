/*:
 * @target MZ
 * @plugindesc Banco de questões matemáticas por inimigo
 * @author Deyvison
 *
 * @help
 * Armazena as questões matemáticas utilizadas
 * pelo plugin DesafioMatematico.js.
 */

const BancoQuestoes = {

    // ========================================================
    // INIMIGO ID 1 - Livro Vivo
    // Habilidade:  Revisão de conteúdos das 4 operações básicas.
    // Local: Fase 1
    // ========================================================

    1: [

        // ========================================================
        // ADIÇÃO (2 QUESTÕES)
        // ========================================================
    
        {
            question: "Ao despertar na arena inicial, o protagonista encontra um livro encantado flutuando sobre a grama. Suas páginas brilham e uma voz mágica diz: \"Primeiro teste, jovem aventureiro! Encontrei 145 moedas de ouro em um baú próximo à floresta e outras 238 moedas em um segundo baú. Se eu juntar todo esse tesouro, quantas moedas terei?\"",
    
            answers: [
                "373 moedas",
                "383 moedas",
                "378 moedas",
                "393 moedas"
            ],
    
            correct: 1
        },
    
        {
            question: "O livro encantado abre uma página coberta por símbolos luminosos e desafia o protagonista: \"Uma poção mágica recuperou 56 pontos de vida do herói. Em seguida, outra poção recuperou mais 89 pontos. Para descobrir o poder total das poções, some a energia recuperada! Quantos pontos de vida foram restaurados ao todo?\"",
    
            answers: [
                "135 pontos",
                "142 pontos",
                "145 pontos",
                "155 pontos"
            ],
    
            correct: 2
        },
    
    
        // ========================================================
        // SUBTRAÇÃO (2 QUESTÕES)
        // ========================================================
    
        {
            question: "As páginas do livro encantado começam a girar, formando um círculo mágico sobre o campo. Ele anuncia: \"Para lançar uma magia poderosa, o aventureiro possuía 350 pontos de mana. Depois de conjurá-la, restaram apenas 127 pontos. Descubra quanto de mana foi consumido pelo feitiço!\"",
    
            answers: [
                "223 pontos",
                "227 pontos",
                "233 pontos",
                "213 pontos"
            ],
    
            correct: 0
        },
    
        {
            question: "O livro encantado invoca a imagem de um pequeno monstro da floresta e diz: \"Vamos testar seus conhecimentos de batalha! A criatura possuía 500 pontos de vida, mas recebeu um ataque crítico e ficou com apenas 184 pontos. Quantos pontos de dano o ataque causou?\"",
    
            answers: [
                "326 de dano",
                "316 de dano",
                "324 de dano",
                "306 de dano"
            ],
    
            correct: 1
        },
    
    
        // ========================================================
        // MULTIPLICAÇÃO (2 QUESTÕES)
        // ========================================================
    
        {
            question: "Uma ilustração surge nas páginas do livro: seis goblins correm pelo campo próximo à floresta. O livro dá uma risada e pergunta: \"Cada goblin derrotado concede 25 pontos de experiência. Se um aventureiro derrotar os seis goblins, quantos pontos de experiência receberá no total? Multiplique e descubra!\"",
    
            answers: [
                "125 pontos",
                "140 pontos",
                "150 pontos",
                "175 pontos"
            ],
    
            correct: 2
        },
    
        {
            question: "O livro encantado invoca a imagem de um mercador viajante que vende flechas mágicas na entrada da floresta. Então, ele propõe outro desafio: \"Cada pacote contém 12 flechas. Se o herói comprar 7 pacotes para se preparar para a aventura, quantas flechas terá ao todo?\"",
    
            answers: [
                "72 flechas",
                "84 flechas",
                "96 flechas",
                "78 flechas"
            ],
    
            correct: 1
        },
    
    
        // ========================================================
        // DIVISÃO (2 QUESTÕES)
        // ========================================================
    
        {
            question: "O livro encantado abre uma página ilustrada com quatro aventureiros diante de um baú cheio de moedas de prata. Sua voz ecoa pela arena: \"Os quatro companheiros encontraram 192 moedas de prata e decidiram dividir o tesouro igualmente. Quantas moedas cada aventureiro receberá?\"",
    
            answers: [
                "46 moedas",
                "48 moedas",
                "52 moedas",
                "44 moedas"
            ],
    
            correct: 1
        },
    
        {
            question: "Por fim, o livro encantado faz surgir nove baús mágicos sobre a grama. As páginas brilham intensamente enquanto ele pergunta: \"Um aventureiro possui 135 poções e precisa distribuí-las igualmente entre os nove baús, sem deixar nenhuma de fora. Quantas poções deverão ser colocadas em cada baú?\"",
    
            answers: [
                "15 poções",
                "13 poções",
                "14 poções",
                "16 poções"
            ],
    
            correct: 0
        }
    
    ],

    // ========================================================
    // INIMIGO ID 2 - Moeda Amaldiçoada
    // Habilidade:  EF06MA10
    // Local: Fase 2
    // ========================================================

    2: [
    
        {
            question: "\"PARE AÍ, AVENTUREIRO(A)!\" A moeda amaldiçoada salta sobre uma raiz e encara o protagonista com seus olhos vermelhos. \"Quero testar sua inteligência antes de devorar suas moedas! Eu corrompi 1/4 de um baú de tesouros, e minha companheira corrompeu mais 2/4. Que fração do baú nós duas corrompemos ao todo? Responda, se for capaz!\"",
    
            answers: [
                "3/8 do baú",
                "3/4 do baú",
                "2/4 do baú",
                "1/4 do baú"
            ],
    
            correct: 1
        },
    
        {
            question: "\"HAHAHA! ACHA QUE CONSEGUE ME ENGANAR?\" A moeda amaldiçoada gira no ar e projeta a imagem de um bolo mágico. \"Um viajante possuía 5/6 de um bolo, mas eu roubei 1/2 do bolo inteiro! Diga-me, aventureiro: que fração do bolo sobrou para aquele pobre coitado? Se errar, roubarei também o seu lanche!\"",
    
            answers: [
                "4/4 do bolo",
                "2/6 do bolo",
                "1/3 do bolo",
                "4/6 do bolo"
            ],
    
            correct: 2
        },
    
        {
            question: "\"VAMOS VER SE SUA MENTE É MAIS FORTE QUE MINHA MALDIÇÃO!\" A moeda amaldiçoada libera uma fumaça roxa e cria um frasco flutuante. \"Usei 1/3 deste frasco para espalhar minha magia sombria e mais 2/5 para erguer uma barreira contra os heróis. Que fração do frasco eu usei no total? Não tente fugir da resposta!\"",
    
            answers: [
                "3/8 do frasco",
                "11/15 do frasco",
                "3/15 do frasco",
                "1/15 do frasco"
            ],
    
            correct: 1
        },
    
        {
            question: "\"EI, VOCÊ AÍ! NÃO OUSE IGNORAR MEU DESAFIO!\" A moeda amaldiçoada pousa sobre uma noz dourada e começa a emitir faíscas negras. \"Já corrompi 3/8 desta noz e acabei de corromper mais 2/8! Que fração da noz está sob meu domínio agora? Quero ver se você sabe somar frações!\"",
    
            answers: [
                "5/16 da noz",
                "5/8 da noz",
                "1/8 da noz",
                "6/8 da noz"
            ],
    
            correct: 1
        },
    
        {
            question: "\"RESPONDA COM CUIDADO, AVENTUREIRO(A)!\" A moeda amaldiçoada bloqueia o caminho até uma poção mágica. \"O frasco contém 4/5 de sua capacidade total, mas uma raiz encantada o atingiu e derramou 1/5 da capacidade total. Que fração da poção ainda restou? Se acertar, talvez eu permita que você passe!\"",
    
            answers: [
                "3/10 do frasco",
                "3/5 do frasco",
                "2/5 do frasco",
                "1/5 do frasco"
            ],
    
            correct: 1
        },
    
        {
            question: "\"ESTE SERÁ SEU ÚLTIMO DESAFIO, MORTAL!\" A moeda amaldiçoada cresce e brilha intensamente sob as árvores da Floresta das Probabilidades. \"Uma fada tentou destruir minha maldição usando 1/4 de uma poção de luz. Depois, gastou mais 1/3 do frasco para invocar estrelas protetoras. Que fração da poção ela utilizou ao todo? Acerte e prove que é digno de enfrentar os perigos desta floresta!\"",
    
            answers: [
                "2/7 da poção",
                "7/12 da poção",
                "2/12 da poção",
                "1/12 da poção"
            ],
    
            correct: 1
        }
    
    ],


    // ========================================================
    // INIMIGO ID 3
    // ========================================================

    3: [

        {
            question: "Quanto é 36 ÷ 6?",

            answers: [
                "4",
                "5",
                "6",
                "7"
            ],

            correct: 2
        }

    ],

    // ========================================================
    // INIMIGO ID 5 - Teste
    // Habilidade: EF06MA10
    // Local: Fase 2
    // ========================================================

    5: [

        {
            question: "Uma fada tinha um fio de teia luminosa. Ela usou 1/2 do fio em um amuleto, 1/5 em outro e guardou o restante na mochila. Que fração do fio de teia sobrou?",

            answers: [
                "2/7 do fio",
                "3/10 do fio",
                "7/10 do fio",
                "1/10 do fio"
            ],

            correct: 1
        },

        {
            question: "Para restaurar a pintura de um portal sagrado na Floresta Mágica, um elfo gastou 2/3 de um frasco de tinta estelar na primeira camada e 1/4 na segunda camada. Qual a fração total de tinta utilizada?",

            answers: [
                "3/7 do frasco",
                "3/12 do frasco",
                "11/12 do frasco",
                "5/12 do frasco"
            ],

            correct: 2
        },

        {
            question: "O caldeirão de um alquimista estava com 3/4 de sua capacidade cheia de poção da vida. Após uma tempestade mágica, recebeu mais 1/2 de poção referente à sua capacidade. Sabendo que transbordou, qual fração da capacidade total do caldeirão excedeu o limite (ficou acima de 1 inteiro)?",

            answers: [
                "1/4 da capacidade",
                "5/4 da capacidade",
                "2/4 da capacidade",
                "3/8 da capacidade"
            ],

            correct: 0
        },

        {
            question: "Na Floresta Mágica, um jovem aprendiz percorreu 1/3 da trilha encantada na primeira noite, 2/5 na segunda noite e concluiu o restante na terceira noite. Que fração da trilha ele percorreu na terceira noite?",

            answers: [
                "3/8 da trilha",
                "4/15 da trilha",
                "11/15 da trilha",
                "1/15 da trilha"
            ],

            correct: 1
        },

        {
            question: "Um mestre alquimista colheu 2 sacos e meio de pó de vagalume (5/2). Durante a semana na Floresta Mágica, usou 4/3 de saco para poções de luz e 1/2 saco para encantar lanternas. Quanto sobrou de pó de vagalume?",

            answers: [
                "2/3 de saco",
                "5/6 de saco",
                "1/3 de saco",
                "1/6 de saco"
            ],

            correct: 0
        }

    ],

    // ========================================================
    // INIMIGO ID 6 - Moeda Errante
    // Habilidade: EF06MA10
    // Local: Fase 2
    // ========================================================

6: [

    {
        question: "A enorme moeda emerge de dentro do mímico, fazendo o chão da floresta tremer. Seus olhos vermelhos brilham enquanto ela provoca o protagonista: \"Então você veio buscar a chave que protege os gnomos? HAHAHA! Antes, responda! Encontrei um fio de teia luminosa e usei 1/2 dele para criar um amuleto e mais 1/5 para proteger meu tesouro. Que fração do fio ainda sobrou?\"",

        answers: [
            "2/7 do fio",
            "3/10 do fio",
            "7/10 do fio",
            "1/10 do fio"
        ],

        correct: 1
    },

    {
        question: "A moeda gigante gira no ar e invoca a imagem do antigo portão da floresta. \"Este portão já foi protegido pela magia dos elfos, mas agora está sob meu domínio! Um elfo tentou restaurar sua pintura usando 2/3 de um frasco de tinta estelar na primeira camada e mais 1/4 na segunda. Diga-me, aventureiro: que fração do frasco foi utilizada ao todo?\"",

        answers: [
            "3/7 do frasco",
            "3/12 do frasco",
            "11/12 do frasco",
            "5/12 do frasco"
        ],

        correct: 2
    },

    {
        question: "A criatura lança uma onda de energia sombria sobre a clareira e faz surgir um caldeirão mágico. \"Os gnomos costumavam preparar poções para proteger sua cidade! Mas veja este desastre: um caldeirão estava com 3/4 de sua capacidade preenchida e recebeu mais 1/2 de sua capacidade em uma tempestade mágica. Como transbordou, quero saber: que fração da capacidade ficou acima do limite?\"",

        answers: [
            "1/4 da capacidade",
            "5/4 da capacidade",
            "2/4 da capacidade",
            "3/8 da capacidade"
        ],

        correct: 0
    },

    {
        question: "A moeda gigante bate contra o chão, fazendo aparecer uma trilha mágica que atravessa a floresta. \"Um pequeno gnomo tentou fugir do meu domínio! Na primeira noite, percorreu 1/3 da trilha; na segunda, avançou mais 2/5. Ele conseguiu escapar na terceira noite, percorrendo o restante do caminho. Que fração da trilha ele percorreu na última noite?\"",

        answers: [
            "3/8 da trilha",
            "4/15 da trilha",
            "11/15 da trilha",
            "1/15 da trilha"
        ],

        correct: 1
    },

    {
        question: "A moeda gigante começa a rachar, mas sua maldição ainda mantém a chave do portão presa em seu interior. Furiosa, ela grita: \"Prepare-se para o seu desafio, aventureiro(a)! Um alquimista gnomo conseguiu colher 2 sacos e meio de pó de vagalume, ou seja, 5/2 de saco. Ele usou 4/3 de saco para preparar poções de luz e mais 1/2 saco para encantar lanternas. Quanto pó de vagalume restou? Responda corretamente, se quiser colocar as mãos na minha chave!\"",

        answers: [
            "2/3 de saco",
            "5/6 de saco",
            "1/3 de saco",
            "1/6 de saco"
        ],

        correct: 0
    }

],

    // ========================================================
// INIMIGO ID 7
// ========================================================

7: [

    {
        question: "Durante uma aventura, o guerreiro Arthur encontrou uma moeda mágica que poderia apresentar dois resultados: Sol ou Lua. Ele lançou a moeda 50 vezes e obteve Sol em 27 lançamentos. Qual foi a frequência relativa do resultado Sol?",

        answers: [
            "23%",
            "27%",
            "46%",
            "54%"
        ],

        correct: 3
    },

    {
        question: "Na torre de um antigo mago, um dado mágico de seis faces foi lançado 60 vezes. A face 4 apareceu em 12 lançamentos. Com base nesse experimento, qual é a estimativa da probabilidade de obter a face 4?",

        answers: [
            "10%",
            "12%",
            "20%",
            "24%"
        ],

        correct: 2
    },

    {
        question: "Uma aventureira encontrou um baú contendo poções vermelhas, azuis e verdes. Ela retirou uma poção e a devolveu ao baú 100 vezes. A poção vermelha apareceu 45 vezes, a azul 35 vezes e a verde 20 vezes. Qual poção apresentou a maior estimativa de probabilidade de ser retirada?",

        answers: [
            "Poção verde",
            "Poção azul",
            "Poção vermelha",
            "Todas apresentam a mesma probabilidade"
        ],

        correct: 2
    },

    {
        question: "Um poderoso mago criou um feitiço que dependia do resultado de um dado. Para testar sua magia, ele realizou uma simulação com 200 lançamentos. Os números pares apareceram 104 vezes e os números ímpares 96 vezes. Qual foi a frequência relativa dos números pares?",

        answers: [
            "48%",
            "50%",
            "52%",
            "54%"
        ],

        correct: 2
    },

    {
        question: "Para enfrentar o Dragão das Quatro Respostas, um aventureiro precisa responder corretamente a um desafio com quatro alternativas, sendo apenas uma correta. Em uma simulação com 100 tentativas escolhendo ao acaso, ele acertou 28 vezes. Qual alternativa apresenta a frequência relativa observada e a probabilidade teórica de acerto?",

        answers: [
            "28% e 20%",
            "28% e 25%",
            "25% e 28%",
            "72% e 25%"
        ],

        correct: 1
    }
],

       // ========================================================
    // INIMIGO ID 8 (Mobs das casinhas presentes na Fase3)
    // ========================================================

    8: [
        {
            question: "Na Floresta Mágica, você colheu 1/4 de uma cesta de amoras brilhantes pela manhã e mais 2/4 de tarde. Que fração da cesta ficou cheia com as amoras ao todo?",

            answers: [
                "3/8 da cesta",
                "3/4 da cesta",
                "2/4 da cesta",
                "1/4 da cesta"
            ],

            correct: 1
        },

        {
            question: "Um duende amigável guardava 5/6 de um bolo mágico, mas deu 1/2 desse bolo para um passarinho faminto. Quanto sobrou do bolo mágica?",

            answers: [
                "4/4 do bolo",
                "2/6 do bolo",
                "1/3 do bolo",
                "4/6 do bolo"
            ],

            correct: 2
        },

        {
            question: "Para acender uma fogueira mágica, um feiticeiro usou 1/3 do seu frasco de poção mágica e 2/5 para criar um escudo protetor. Que fração do frasco de poção ele usou no total?",

            answers: [
                "3/8 do frasco",
                "11/15 do frasco",
                "3/15 do frasco",
                "1/15 do frasco"
            ],

            correct: 1
        },

        {
            question: "Na Floresta Mágica, um esquilo guardava 3/8 de uma noz dourada pela manhã e encontrou mais 2/8 à tarde. Que fração da noz dourada ele tem agora ao todo?",

            answers: [
                "5/16 da noz",
                "5/8 da noz",
                "1/8 da noz",
                "6/8 da noz"
            ],

            correct: 1
        },

        {
            question: "Você encontrou uma poção mágica com 4/5 do seu líquido total, mas derramou 1/5 ao desviar de uma raiz encantada. Que fração da poção restou no frasco?",

            answers: [
                "3/10 da poção",
                "3/5 da poção",
                "2/5 da poção",
                "1/5 da poção"
            ],

            correct: 1
        },

        {
            question: "Uma fada usou 1/4 da sua poção de luz para iluminar um caminho e 1/3 para criar estrelas brilhantes. Que fração da poção ela usou no total?",

            answers: [
                "2/7 da poção",
                "7/12 da poção",
                "2/12 da poção",
                "1/12 da poção"
            ],

            correct: 1
        }
    ],

    // ========================================================
// INIMIGO ID 9
// ========================================================
9: [

    {
        question: "Um guerreiro precisa escolher seu equipamento antes de enfrentar um dragão. Na loja do reino, existem 3 espadas mágicas diferentes e 4 escudos encantados diferentes. Sabendo que ele escolherá uma espada e um escudo, quantas combinações de equipamento ele poderá formar?",

        answers: [
            "7 combinações",
            "12 combinações",
            "9 combinações",
            "16 combinações"
        ],

        correct: 1
    },

    {
        question: "Uma maga está preparando sua roupa para participar do Torneio dos Feiticeiros. Ela possui 4 túnicas diferentes, 3 chapéus mágicos e 2 pares de botas encantadas. Escolhendo uma peça de cada tipo, quantos visuais diferentes ela poderá montar?",

        answers: [
            "9 visuais",
            "12 visuais",
            "24 visuais",
            "18 visuais"
        ],

        correct: 2
    },

    {
        question: "Na Floresta da Aleatoriedade, um aventureiro precisa escolher um caminho para chegar ao castelo. Existem 3 trilhas que levam à primeira ponte e, depois dela, 4 estradas diferentes que levam ao castelo. Quantas rotas diferentes ele poderá percorrer, escolhendo uma trilha e depois uma estrada?",

        answers: [
            "7 rotas",
            "12 rotas",
            "10 rotas",
            "16 rotas"
        ],

        correct: 1
    },

    {
        question: "Um alquimista possui 5 ingredientes mágicos diferentes para preparar poções e 3 tipos de frascos para armazená-las. Para cada poção, ele deve escolher um ingrediente e um frasco. Quantas combinações diferentes poderá fazer?",

        answers: [
            "8 combinações",
            "15 combinações",
            "10 combinações",
            "20 combinações"
        ],

        correct: 1
    },

    {
        question: "Para abrir o Portão das Sombras, um herói precisa criar uma senha de três símbolos mágicos. Em cada posição, ele pode escolher entre 4 símbolos diferentes, e os símbolos podem se repetir. Quantas senhas diferentes podem ser formadas?",

        answers: [
            "12 senhas",
            "16 senhas",
            "64 senhas",
            "24 senhas"
        ],

        correct: 2
    },

    {
        question: "Uma arqueira está se preparando para uma batalha contra os goblins. Ela possui 3 arcos diferentes e 5 tipos de flechas mágicas. Se escolher um arco e um tipo de flecha, quantas combinações de combate poderá utilizar?",

        answers: [
            "8 combinações",
            "15 combinações",
            "10 combinações",
            "20 combinações"
        ],

        correct: 1
    },

    {
        question: "Na Guilda dos Aventureiros, um jogador precisa criar seu personagem escolhendo uma entre 4 raças fantásticas, uma entre 3 classes e uma entre 2 habilidades especiais iniciais. Quantos personagens diferentes podem ser criados?",

        answers: [
            "9 personagens",
            "12 personagens",
            "24 personagens",
            "18 personagens"
        ],

        correct: 2
    },

    {
        question: "Um cavaleiro precisa atravessar duas regiões perigosas para chegar à masmorra. Para sair da cidade, existem 4 caminhos. Depois, para atravessar a floresta, existem 3 caminhos diferentes. Quantas rotas completas ele poderá escolher para chegar à masmorra?",

        answers: [
            "7 rotas",
            "12 rotas",
            "16 rotas",
            "9 rotas"
        ],

        correct: 1
    },

    {
        question: "Um dragão guardião oferece aos aventureiros a possibilidade de escolher um tesouro. Há 2 coroas mágicas, 4 anéis encantados e 3 amuletos de proteção. Se o aventureiro receber um item de cada tipo, quantos conjuntos diferentes de tesouros poderá formar?",

        answers: [
            "9 conjuntos",
            "14 conjuntos",
            "24 conjuntos",
            "12 conjuntos"
        ],

        correct: 2
    },

    {
        question: "Para lançar um feitiço lendário, uma feiticeira precisa escolher uma entre 3 palavras mágicas, um entre 4 gestos encantados e uma entre 2 pedras de foco. Considerando todas as combinações possíveis, quantas maneiras diferentes existem de lançar o feitiço?",

        answers: [
            "9 maneiras",
            "12 maneiras",
            "24 maneiras",
            "18 maneiras"
        ],

        correct: 1
    }

],

    // ========================================================
// INIMIGO ID 10 — Zumbi1
// Habilidade: EF08MA03
// ========================================================

10: [

    {
        question: "Um goblin ferreiro oferece a um aventureiro 4 modelos de machado e 3 tipos de cabo mágico. Escolhendo um machado e um cabo, quantas armas diferentes podem ser montadas?",

        answers: [
            "7 armas",
            "12 armas",
            "16 armas",
            "9 armas"
        ],

        correct: 1
    },

    {
        question: "Para atravessar um pântano encantado, uma aventureira pode escolher entre 3 pontes de madeira e, depois, entre 5 barcos mágicos disponíveis na outra margem. Quantas maneiras diferentes ela tem de combinar uma ponte e um barco?",

        answers: [
            "8 maneiras",
            "15 maneiras",
            "10 maneiras",
            "20 maneiras"
        ],

        correct: 1
    },

    {
        question: "Um goblin guardião possui 4 tipos de elmo, 2 capas mágicas e 3 pares de botas. Um guerreiro deseja escolher uma peça de cada tipo. Quantos conjuntos completos de armadura ele pode formar?",

        answers: [
            "9 conjuntos",
            "12 conjuntos",
            "24 conjuntos",
            "18 conjuntos"
        ],

        correct: 2
    },

    {
        question: "Um druida precisa escolher uma entre 5 sementes encantadas para plantar e uma entre 4 magias para fazê-la crescer. Quantas combinações de semente e magia ele pode experimentar?",

        answers: [
            "9 combinações",
            "20 combinações",
            "15 combinações",
            "25 combinações"
        ],

        correct: 1
    },

    {
        question: "Para confundir os invasores, os goblins criaram uma senha com dois símbolos. Cada posição pode receber qualquer um dos 6 símbolos disponíveis, inclusive repetidos. Quantas senhas diferentes podem ser criadas?",

        answers: [
            "12 senhas",
            "30 senhas",
            "36 senhas",
            "18 senhas"
        ],

        correct: 2
    }

],

// ========================================================
// INIMIGO ID 11 — Zumbi2
// Habilidade: EF08MA03
// ========================================================

11: [

    {
        question: "Um cavaleiro precisa escolher uma arma para enfrentar os esqueletos. Na cripta, ele encontra 3 espadas, 4 lanças e 2 machados, todos diferentes. Se escolher apenas uma arma, quantas opções ele terá?",

        answers: [
            "9 opções",
            "24 opções",
            "12 opções",
            "7 opções"
        ],

        correct: 0
    },

    {
        question: "Uma sacerdotisa pode escolher entre 4 orações de proteção e 3 símbolos sagrados para realizar um ritual. Se utilizar uma oração e um símbolo, quantos rituais diferentes poderá realizar?",

        answers: [
            "7 rituais",
            "12 rituais",
            "16 rituais",
            "9 rituais"
        ],

        correct: 1
    },

    {
        question: "Na cripta, uma porta mágica possui um código de três algarismos. Cada algarismo pode ser escolhido entre 0, 1, 2, 3 e 4, e a repetição é permitida. Quantos códigos diferentes podem ser formados?",

        answers: [
            "15 códigos",
            "25 códigos",
            "60 códigos",
            "125 códigos"
        ],

        correct: 3
    },

    {
        question: "Um alquimista encontrou 3 essências de fogo, 2 essências de gelo e 4 essências de vento. Para criar um elixir especial, ele deve escolher uma essência de cada elemento. Quantos elixires diferentes poderá preparar?",

        answers: [
            "9 elixires",
            "12 elixires",
            "24 elixires",
            "18 elixires"
        ],

        correct: 2
    },

    {
        question: "Um explorador pode entrar em uma catacumba por 5 passagens diferentes e sair por uma entre outras 3 passagens. Considerando que qualquer entrada pode ser combinada com qualquer saída, quantos percursos de ida e volta são possíveis?",

        answers: [
            "8 percursos",
            "15 percursos",
            "10 percursos",
            "20 percursos"
        ],

        correct: 1
    }

],

// ========================================================
// INIMIGO ID 12 — Zumbi3
// Habilidade: EF08MA03
// ========================================================

12: [

    {
        question: "Um mago das sombras conhece 3 feitiços de ataque, 4 feitiços de defesa e 2 feitiços de cura. Para montar uma sequência mágica, ele escolhe um feitiço de cada categoria. Quantas sequências diferentes pode criar?",

        answers: [
            "9 sequências",
            "14 sequências",
            "24 sequências",
            "12 sequências"
        ],

        correct: 2
    },

    {
        question: "Uma feiticeira possui 5 cristais de cores diferentes e 3 suportes mágicos diferentes. Para montar um artefato, ela escolhe um cristal e um suporte. Quantos artefatos distintos pode montar?",

        answers: [
            "8 artefatos",
            "15 artefatos",
            "10 artefatos",
            "20 artefatos"
        ],

        correct: 1
    },

    {
        question: "O grimório de um mago exige uma senha de quatro letras. Para cada posição, ele pode escolher entre as letras A, B e C, podendo repetir letras. Quantas senhas diferentes são possíveis?",

        answers: [
            "12 senhas",
            "64 senhas",
            "81 senhas",
            "24 senhas"
        ],

        correct: 1
    },

    {
        question: "Para invocar um espírito guardião, um mago precisa escolher uma entre 4 runas, uma entre 3 velas encantadas e um entre 5 incensos mágicos. Quantas combinações de ritual são possíveis?",

        answers: [
            "12 combinações",
            "20 combinações",
            "60 combinações",
            "45 combinações"
        ],

        correct: 2
    },

    {
        question: "Um aprendiz de magia pode escolher entre 6 cajados e 4 livros de feitiços. Ele também precisa selecionar uma entre 3 pedras mágicas para completar seu equipamento. Quantos equipamentos completos diferentes poderá montar?",

        answers: [
            "13 equipamentos",
            "24 equipamentos",
            "36 equipamentos",
            "72 equipamentos"
        ],

        correct: 3
    }

],

// ========================================================
// INIMIGO ID 13 — Zumbi4
// Habilidade: EF08MA03
// ========================================================

13: [

    {
        question: "Um cavaleiro precisa escolher uma montaria para sua jornada. O estábulo oferece 4 cavalos, 3 lobos gigantes e 2 lagartos de guerra, todos diferentes. Quantas montarias ele pode escolher?",

        answers: [
            "9 montarias",
            "24 montarias",
            "12 montarias",
            "7 montarias"
        ],

        correct: 0
    },

    {
        question: "Uma armeira real oferece 3 modelos de escudo, 5 modelos de peitoral e 4 modelos de elmo. Um cavaleiro escolherá uma peça de cada categoria. Quantos conjuntos de proteção diferentes pode montar?",

        answers: [
            "12 conjuntos",
            "60 conjuntos",
            "35 conjuntos",
            "20 conjuntos"
        ],

        correct: 1
    },

    {
        question: "Para abrir um cofre amaldiçoado, o herói precisa inserir dois símbolos em sequência. Existem 8 símbolos disponíveis, e não é permitido repetir o primeiro símbolo na segunda posição. Quantos códigos diferentes podem ser formados?",

        answers: [
            "16 códigos",
            "56 códigos",
            "64 códigos",
            "72 códigos"
        ],

        correct: 1
    },

    {
        question: "Um cavaleiro pode viajar de seu castelo até uma vila por 4 estradas diferentes. Da vila até uma torre, existem outras 6 estradas possíveis. Quantos trajetos diferentes ligam o castelo à torre passando pela vila?",

        answers: [
            "10 trajetos",
            "20 trajetos",
            "24 trajetos",
            "36 trajetos"
        ],

        correct: 2
    },

    {
        question: "Um ferreiro encantado fabrica anéis usando uma entre 3 pedras preciosas, um entre 4 metais e um entre 2 símbolos mágicos. Quantos anéis diferentes podem ser fabricados combinando esses elementos?",

        answers: [
            "9 anéis",
            "12 anéis",
            "24 anéis",
            "18 anéis"
        ],

        correct: 2
    }

],

// ========================================================
// INIMIGO ID 14 — Boss da Fase 4
// Habilidade: EF08MA03
// ========================================================

14: [

    {
        question: "Um dragão ancestral guarda 3 tipos de tesouros: coroas, colares e anéis. Existem 4 coroas diferentes, 5 colares diferentes e 2 anéis diferentes. Se um aventureiro receber um item de cada tipo, quantos conjuntos de tesouro poderá formar?",

        answers: [
            "11 conjuntos",
            "20 conjuntos",
            "40 conjuntos",
            "30 conjuntos"
        ],

        correct: 2
    },

    {
        question: "Para preparar uma expedição ao Abismo, uma equipe precisa escolher um entre 4 mapas, uma entre 3 bússolas mágicas e um entre 5 kits de sobrevivência. Quantos equipamentos de expedição diferentes podem ser organizados?",

        answers: [
            "12 equipamentos",
            "60 equipamentos",
            "35 equipamentos",
            "20 equipamentos"
        ],

        correct: 1
    },

    {
        question: "O portal do dragão exige uma senha de três runas. Em cada posição, é possível escolher entre 7 runas, sem restrição de repetição. Quantas senhas diferentes podem ser formadas?",

        answers: [
            "21 senhas",
            "49 senhas",
            "343 senhas",
            "210 senhas"
        ],

        correct: 2
    },

    {
        question: "Um caçador de dragões possui 2 tipos de armadilhas, 5 tipos de iscas e 3 tipos de redes mágicas. Para montar um plano, ele escolhe um item de cada categoria. Quantos planos diferentes pode montar?",

        answers: [
            "10 planos",
            "15 planos",
            "30 planos",
            "25 planos"
        ],

        correct: 2
    },

    {
        question: "Na batalha final, um herói pode escolher entre 4 dragões aliados para montar e entre 3 selas encantadas para equipar seu companheiro. Cada dragão pode usar qualquer uma das selas. Quantas combinações de dragão e sela são possíveis?",

        answers: [
            "7 combinações",
            "12 combinações",
            "16 combinações",
            "24 combinações"
        ],

        correct: 1
    }

],

    // ========================================================
// INIMIGO ID 15 — MÍMICO DO JARDIM ENCANTADO
// Habilidade: EF09MA20
// Local: Miniárea de matinho e cogumelos do castelo
// ========================================================

15: [

    {
        question: "Hehehe! Você entrou no meu jardim de cogumelos mágicos! 🍄 Em um canteiro existem 4 cogumelos vermelhos e 6 cogumelos azuis. Um aventureiro escolhe um cogumelo ao acaso, devolve-o ao canteiro e depois escolhe outro. Qual é a probabilidade de retirar dois cogumelos vermelhos? Considere que a primeira retirada não altera a segunda.",

        answers: [
            "16%",
            "20%",
            "40%",
            "36%"
        ],

        correct: 0
    },

    {
        question: "Muito bem, aventureiro! Agora vamos ver se você entende os perigos deste jardim! Em um baú existem 5 poções de cura e 3 poções venenosas. Um herói retira uma poção ao acaso e não a devolve. Em seguida, retira outra poção. Qual é a probabilidade de as duas poções serem de cura?",

        answers: [
            "25%",
            "5/14, aproximadamente 35,7%",
            "5/8, aproximadamente 62,5%",
            "10/16, aproximadamente 62,5%"
        ],

        correct: 1
    },

    {
        question: "Rá-rá-rá! Dois dados comuns de seis faces são lançados ao mesmo tempo. Qual é a probabilidade de o primeiro dado mostrar 6 e o segundo mostrar um número par? Considere que os resultados dos dados são independentes.",

        answers: [
            "1/12",
            "1/6",
            "1/4",
            "1/2"
        ],

        correct: 0
    },

    {
        question: "Cuidado com os cogumelos venenosos! Em uma cesta há 3 cogumelos brilhantes e 2 cogumelos venenosos. Um mago retira dois cogumelos, um após o outro, sem devolver o primeiro. Qual é a probabilidade de retirar primeiro um cogumelo brilhante e depois um venenoso?",

        answers: [
            "3/10, ou 30%",
            "1/5, ou 20%",
            "2/5, ou 40%",
            "3/5, ou 60%"
        ],

        correct: 0
    },

    {
        question: "No meu jardim encantado, você precisa abrir dois baús mágicos. O primeiro baú tem 4 chaves, sendo 1 dourada e 3 prateadas. O segundo tem 5 chaves, sendo 2 douradas e 3 prateadas. Você escolhe uma chave de cada baú. Qual é a probabilidade de escolher duas chaves douradas? Considere que a escolha em um baú não interfere na escolha do outro.",

        answers: [
            "10%",
            "20%",
            "30%",
            "40%"
        ],

        correct: 0
    }

],

    // ========================================================
// INIMIGO ID 16 — LIVRO AMALDIÇOADO
// Habilidade: EF09MA20
// Local: Biblioteca abandonada do castelo do mestre maligno
// ========================================================

16: [

    {
        question: "Uma voz sombria ecoa das páginas do Livro Amaldiçoado: \"Aventureiro, prove que conhece os segredos da probabilidade!\" Em uma estante existem 8 livros antigos, dos quais 3 contêm feitiços proibidos. O jogador escolhe um livro ao acaso, devolve-o à estante e escolhe outro. Qual é a probabilidade de escolher dois livros com feitiços proibidos?",

        answers: [
            "9/64, aproximadamente 14,06%",
            "3/8, ou 37,5%",
            "3/16, ou 18,75%",
            "6/64, aproximadamente 9,38%"
        ],

        correct: 0
    },

    {
        question: "As páginas do livro começam a virar sozinhas! Entre as páginas encantadas há 6 pergaminhos: 4 contêm encantamentos de proteção e 2 contêm maldições. Um mago retira um pergaminho e não o devolve. Depois, retira outro. Qual é a probabilidade de retirar dois pergaminhos de proteção?",

        answers: [
            "4/9, aproximadamente 44,44%",
            "2/5, ou 40%",
            "8/15, aproximadamente 53,33%",
            "2/3, aproximadamente 66,67%"
        ],

        correct: 0
    },

    {
        question: "O livro revela duas runas mágicas que precisam ser ativadas para abrir uma passagem secreta. A primeira runa tem 1/4 de probabilidade de ser ativada, e a segunda tem 1/3. Sabendo que os eventos são independentes, qual é a probabilidade de as duas runas serem ativadas?",

        answers: [
            "7/12, aproximadamente 58,33%",
            "1/7, aproximadamente 14,29%",
            "1/12, aproximadamente 8,33%",
            "1/2, ou 50%"
        ],

        correct: 2
    },

    {
        question: "Uma gaveta secreta da biblioteca guarda 5 chaves antigas: 2 abrem o cofre do mestre maligno e 3 são falsas. Um aventureiro escolhe uma chave ao acaso e a guarda consigo. Sem devolver essa chave, escolhe uma segunda. Qual é a probabilidade de as duas chaves abrirem o cofre?",

        answers: [
            "1/5, ou 20%",
            "1/10, ou 10%",
            "2/5, ou 40%",
            "1/2, ou 50%"
        ],

        correct: 1
    },

    {
        question: "O último enigma aparece escrito em letras vermelhas no Livro Amaldiçoado! Há dois recipientes mágicos sobre a mesa. O primeiro contém 3 pedras negras e 2 pedras roxas. O segundo contém 4 pedras negras e 1 pedra roxa. Um aventureiro retira uma pedra de cada recipiente. Qual é a probabilidade de retirar duas pedras negras?",

        answers: [
            "7/10, ou 70%",
            "12/25, ou 48%",
            "3/5, ou 60%",
            "4/5, ou 80%"
        ],

        correct: 1
    }

],

    // ========================================================
// INIMIGO ID 17 — CHEFÃO DO CASTELO AMALDIÇOADO
// Habilidade: EF09MA20
// Local: Topo do castelo amaldiçoado, sob a lua sangrenta
// ========================================================

17: [

    {
        question: "10ESTE É O MEU ÚLTIMO DESAFIO! Dois altares alimentam minha transformação. O primeiro tem probabilidade de 2/5 de funcionar, e o segundo, de 3/4. Seus poderes são independentes. Qual é a probabilidade de ambos funcionarem e libertarem todo o meu poder? Acerte... ou contemple o fim do seu mundo!\"",

        answers: [
            "5/9, aproximadamente 55,56%",
            "3/10, ou 30%",
            "1/5, ou 20%",
            "23/20, ou 115%"
        ],

        correct: 1
    },

    {
        question: "Se eu lançar dois dados mágicos de seis faces para te atacar. Para ativar seu escudo, você precisa obter um número maior que 4 no primeiro dado e um número par no segundo. Considerando os resultados independentes, qual é a probabilidade de se ativar o escudo?",

        answers: [
            "1/6, aproximadamente 16,67%",
            "1/4, ou 25%",
            "1/3, aproximadamente 33,33%",
            "1/12, aproximadamente 8,33%"
        ],

        correct: 0
    },

    {
        question: "Eu possuo 4 poções de cura e 3 poções explosivas comigo. Ao acaso, pego uma poção, mas não a devolvo. Logo depois, pego outra. Qual é a probabilidade de a primeira poção ser de cura e a segunda ser explosiva?",

        answers: [
            "2/7, aproximadamente 28,57%",
            "1/3, aproximadamente 33,33%",
            "2/7? Não, pois os eventos são independentes.",
            "12/49, aproximadamente 24,49%"
        ],

        correct: 0
    },

    {
        question: "Se eu invocar dois círculos mágicos sobre as torres do castelo. \"O primeiro círculo tem 2/3 de probabilidade de lançar uma maldição, e o segundo tem 3/4 de probabilidade de aprisionar sua alma. Suponha que os eventos sejam independentes. Qual é a probabilidade de você sofrer as duas maldições ao mesmo tempo? HAHAHAHA! Talvez a matemática prolongue sua agonia!\"",

        answers: [
            "5/7, aproximadamente 71,43%",
            "1/2, ou 50%",
            "17/12, aproximadamente 141,67%",
            "1/2? Não é possível determinar."
        ],

        correct: 1
    },

    {
        question: "A lua sangrenta fica ainda mais brilhante enquanto a criatura prepara seu ataque supremo. Dois selos flutuam diante dela: o primeiro tem 1/4 de probabilidade de se romper, e o segundo tem 2/3 de probabilidade de se romper. Considerando que os eventos são independentes, qual é a probabilidade de ambos os selos se romperem e libertarem a energia necessária para seu golpe final? \"ESTA É A ÚLTIMA CHANCE DE PROVAR SEU VALOR, VIAJANTE!\"",

        answers: [
            "11/12, aproximadamente 91,67%",
            "5/12, aproximadamente 41,67%",
            "1/6, aproximadamente 16,67%",
            "1/2, ou 50%"
        ],

        correct: 2
    }

],

// ========================================================
// INIMIGO ID 18 — DRAGÃO DE CINCO CABEÇAS
// Prova Final — Jogo 7 Noites
// Cada 2 respostas corretas: o dragão perde 1 cabeça
// ========================================================

18: [

    // ====================================================
    // QUESTÃO 1 — EF06MA10
    // Primeira cabeça: escudo de frações
    // ====================================================

    {
        question: "A primeira cabeça do dragão abre suas mandíbulas, revelando um núcleo de fogo negro. \"Observe! Minha primeira cabeça está protegida por um escudo mágico! O escudo possui energia equivalente a 3/4 de sua capacidade, mas você conseguiu romper parte dele, causando uma perda de 1/6 dessa capacidade total. Que fração da energia do escudo ainda resta? Responda corretamente, ou minhas chamas consumirão sua alma!\"",

        answers: [
            "5/12",
            "11/12",
            "7/12",
            "3/4"
        ],

        correct: 1
    },

    // ====================================================
    // QUESTÃO 2 — EF06MA10
    // Primeira cabeça: energia restante
    // ====================================================

    {
        question: "O dragão ruge ao perceber que seu escudo está enfraquecendo. \"NÃO! Você não destruirá minha primeira cabeça! Ainda possuo 5/6 de minha energia defensiva, mas seu último golpe arrancou mais 1/4 da capacidade total do escudo. Calcule a fração que me resta! Se acertar, talvez consiga destruir minha primeira cabeça... mas não espere sobreviver às outras quatro!\"",

        answers: [
            "7/12",
            "4/12",
            "2/3",
            "1/2"
        ],

        correct: 0
    },

    // ====================================================
    // QUESTÃO 3 — EF06MA10
    // Segunda cabeça: energia amaldiçoada
    // ====================================================

    {
        question: "A primeira cabeça cai, e o dragão solta um rugido que faz a torre estremecer. A segunda cabeça absorve a energia da lua ensanguentada. \"Você pagará por isso! Minha segunda cabeça reuniu 2/5 da energia lunar e absorveu mais 1/4 de sua capacidade total. Qual é a fração de energia que consegui reunir? Mostre que sabe calcular, antes que eu transforme você em cinzas!\"",

        answers: [
            "3/9",
            "3/20",
            "13/20",
            "11/20"
        ],

        correct: 2
    },

    // ====================================================
    // QUESTÃO 4 — EF07MA34
    // Segunda cabeça: frequência dos ataques
    // ====================================================

    {
        question: "A segunda cabeça dispara uma sequência de raios negros contra a torre. O dragão gargalha: \"Observe os meus ataques! Em um experimento com 40 disparos, 12 atingiram o alvo. Usando a frequência relativa observada, qual foi a porcentagem de acertos dos meus raios? Calcule corretamente, pois o próximo disparo pode ser o último que você verá!\"",

        answers: [
            "20%",
            "30%",
            "40%",
            "12%"
        ],

        correct: 1
    },

    // ====================================================
    // QUESTÃO 5 — EF07MA34
    // Terceira cabeça: estimativa da maldição
    // ====================================================

    {
        question: "A segunda cabeça é destruída, e o dragão perde o equilíbrio. Furioso, ele invoca uma maldição para aprisionar o protagonista. \"Em 60 tentativas de um ritual sombrio, consegui aprisionar aventureiros 18 vezes. Com base nessa frequência experimental, qual é a probabilidade estimada de minha maldição aprisionar uma vítima? Descubra a chance de escapar, se tiver coragem!\"",

        answers: [
            "30%",
            "18%",
            "40%",
            "60%"
        ],

        correct: 0
    },

    // ====================================================
    // QUESTÃO 6 — EF08MA03
    // Terceira cabeça: arsenal de guerra
    // ====================================================

    {
        question: "A terceira cabeça abre a boca e invoca um arsenal amaldiçoado para seus guerreiros. \"Seus truques não serão suficientes! Meus soldados podem escolher entre 3 armas, 4 armaduras e 2 amuletos diferentes. Cada soldado deve usar exatamente uma arma, uma armadura e um amuleto. Quantas combinações diferentes de equipamento posso formar para meu exército? Conte minhas possibilidades, antes que eu conte seus últimos segundos!\"",

        answers: [
            "9 combinações",
            "12 combinações",
            "24 combinações",
            "18 combinações"
        ],

        correct: 2
    },

    // ====================================================
    // QUESTÃO 7 — EF08MA03
    // Quarta cabeça: passagem do ritual
    // ====================================================

    {
        question: "A terceira cabeça cai, e as correntes mágicas que prendem a torre começam a se romper. A quarta cabeça se ergue e bloqueia a passagem. \"Para alcançar meu núcleo, você precisa atravessar meu ritual! Existem 4 capas mágicas, 3 máscaras e 2 cajados disponíveis. Escolhendo uma peça de cada tipo, quantos equipamentos diferentes podem ser montados? Acerte, e talvez consiga se aproximar de mim!\"",

        answers: [
            "24 combinações",
            "12 combinações",
            "9 combinações",
            "18 combinações"
        ],

        correct: 0
    },

    // ====================================================
    // QUESTÃO 8 — EF09MA20
    // Quarta cabeça: maldições independentes
    // ====================================================

    {
        question: "A quarta cabeça prepara dois ataques simultâneos, enquanto a quinta permanece protegida pela energia da lua. \"Vou lançar duas maldições contra você! A primeira tem probabilidade de 1/2 de acertar o alvo, e a segunda tem probabilidade de 1/4. Os ataques são independentes. Qual é a probabilidade de ambas acertarem você? HAHAHAHA! Que a matemática decida se você merece continuar respirando!\"",

        answers: [
            "3/4",
            "1/4",
            "1/6",
            "1/8"
        ],

        correct: 3
    },

    // ====================================================
    // QUESTÃO 9 — EF09MA20
    // Quinta cabeça: chaves amaldiçoadas
    // ====================================================

    {
        question: "A quarta cabeça é destruída. Restam apenas a cabeça central e seu núcleo de poder. Se eu invocar dois círculos mágicos sobre as torres do castelo. \"O primeiro círculo tem 2/3 de probabilidade de lançar uma maldição, e o segundo tem 3/4 de probabilidade de aprisionar sua alma. Suponha que os eventos sejam independentes. Qual é a probabilidade de você sofrer as duas maldições ao mesmo tempo? HAHAHAHA! Talvez a matemática prolongue sua agonia!\"",

        answers: [
            "5/7, aproximadamente 71,43%",
            "1/2, ou 50%",
            "17/12, aproximadamente 141,67%",
            "1/2? Não é possível determinar."
        ],

        correct: 1
    },

    // ====================================================
    // QUESTÃO 10 — EF09MA20
    // Quinta cabeça: última armadilha
    // ====================================================

    {
        question: "A lua sangrenta fica ainda mais brilhante enquanto a criatura prepara seu ataque supremo. Dois selos flutuam diante dela: o primeiro tem 1/4 de probabilidade de se romper, e o segundo tem 2/3 de probabilidade de se romper. Considerando que os eventos são independentes, qual é a probabilidade de ambos os selos se romperem e libertarem a energia necessária para seu golpe final? \"ESTA É A ÚLTIMA CHANCE DE PROVAR SEU VALOR, VIAJANTE!\"",

        answers: [
            "11/12, aproximadamente 91,67%",
            "5/12, aproximadamente 41,67%",
            "1/6, aproximadamente 16,67%",
            "1/2, ou 50%"
        ],

        correct: 2
    }

],

    // ========================================================
// INIMIGO ID 19 — CADEADO MÁGICO DO CALABOUÇO
// Habilidade: EF09MA20
// Local: Calabouço escuro do castelo do mago maligno
// ========================================================

19: [

    {
        question: "No fundo do calabouço, um cadeado negro desperta e seus olhos vermelhos brilham entre as correntes. Uma voz ecoa das paredes: \"Mortal, duas runas protegem a cela dos prisioneiros! A primeira tem probabilidade de 1/2 de se ativar, e a segunda tem probabilidade de 1/3. Os mecanismos funcionam independentemente. Qual é a probabilidade de as duas runas se ativarem ao mesmo tempo e abrirem o cadeado?\"",

        answers: [
            "1/5, ou 20%",
            "1/6, aproximadamente 16,67%",
            "2/5, ou 40%",
            "5/6, aproximadamente 83,33%"
        ],

        correct: 1
    },

    {
        question: "O cadeado estala, revelando um compartimento com 5 chaves antigas: 3 douradas e 2 negras. Apenas as douradas abrem a cela. O mecanismo retira uma chave ao acaso e, sem devolvê-la, retira outra. A voz do mago gargalha: \"Se duas chaves forem necessárias para libertar os prisioneiros, qual é a probabilidade de ambas serem douradas? Lembre-se: a primeira chave retirada altera as chances da segunda!\"",

        answers: [
            "3/10, ou 30%",
            "9/25, ou 36%",
            "3/5, ou 60%",
            "1/2, ou 50%"
        ],

        correct: 0
    },

    {
        question: "Símbolos mágicos aparecem na superfície do cadeado. Para libertar os prisioneiros, o protagonista precisa ativar dois mecanismos: o primeiro funciona com probabilidade de 2/3, e o segundo com probabilidade de 3/4. O cadeado sussurra: \"Meus mecanismos são independentes! Qual é a probabilidade de ambos funcionarem e romperem minhas correntes?\"",

        answers: [
            "5/7, aproximadamente 71,43%",
            "1/2, ou 50%",
            "1/4, ou 25%",
            "1/2? Não é possível determinar."
        ],

        correct: 1
    },

    {
        question: "Ao lado do cadeado, há uma bolsa com 4 pedras rúnicas azuis e 3 vermelhas. Apenas as azuis desativam a maldição. O protagonista retira uma pedra e, sem devolvê-la, retira outra. Uma voz sombria provoca: \"Qual é a probabilidade de você retirar duas pedras azuis em sequência? Cada escolha muda o destino dos prisioneiros!\"",

        answers: [
            "4/7, aproximadamente 57,14%",
            "2/7, aproximadamente 28,57%",
            "1/3, aproximadamente 33,33%",
            "16/49, aproximadamente 32,65%"
        ],

        correct: 1
    },

    {
        question: "O cadeado começa a tremer, e as correntes que prendem os prisioneiros brilham em vermelho. Dois selos precisam ser rompidos: o primeiro tem probabilidade de 1/4 de se quebrar, e o segundo tem probabilidade de 2/5. Considerando que os eventos são independentes, a voz do mago pergunta: \"Qual é a probabilidade de os dois selos se romperem e libertarem todos os prisioneiros? Falhe, e eles permanecerão aqui por toda a eternidade!\"",

        answers: [
            "3/5, ou 60%",
            "7/20, ou 35%",
            "1/10, ou 10%",
            "1/4, ou 25%"
        ],

        correct: 2
    }

]

};