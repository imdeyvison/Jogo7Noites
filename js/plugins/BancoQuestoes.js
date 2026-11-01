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
// INIMIGO ID 7 - GOBLINS INVASORES
// Habilidade: EF07MA34
// Local: Floresta das Probabilidades
// ========================================================

7: [

    {
        question: "Um dos goblins se aproxima do protagonista fingindo estar assustado, mas logo abre um sorriso malicioso: \"Hehehe! Quer saber como planejamos nosso ataque à Vila de Graficália? Fizemos um teste com uma moeda mágica para decidir por qual caminho nossos invasores deveriam seguir. Lançamos a moeda 50 vezes e obtivemos o resultado Sol em 27 lançamentos. Qual foi a frequência relativa do resultado Sol? Vamos, humano! Mostre que sabe fazer contas!\"",

        answers: [
            "23%",
            "27%",
            "46%",
            "54%"
        ],

        correct: 2
    },

    {
        question: "Um goblin guerreiro retira um dado de sua mochila e começa a girá-lo entre os dedos. \"Para decidir quantos guerreiros enviaremos para atacar os portões da vila, realizamos uma simulação! Lançamos este dado mágico de seis faces 60 vezes, e o número 4 apareceu em 12 lançamentos. Com base nesse experimento, qual é a estimativa da probabilidade de obter o número 4? Responda logo, antes que nossos soldados cheguem!\"",

        answers: [
            "10%",
            "12%",
            "20%",
            "24%"
        ],

        correct: 2
    },

    {
        question: "Um goblin abre uma sacola roubada de um antigo mercador e mostra três tipos de poções. \"Veja só o que conseguimos roubar! Temos poções vermelhas, azuis e verdes. Para escolher qual delas usaremos durante a invasão, fizemos um experimento: retiramos uma poção, devolvemos à sacola e repetimos o processo 100 vezes. A vermelha apareceu 45 vezes, a azul 35 vezes e a verde 20 vezes. Qual poção apresentou a maior estimativa de probabilidade de ser retirada?\"",

        answers: [
            "Poção verde",
            "Poção azul",
            "Poção vermelha",
            "Todas apresentam a mesma probabilidade"
        ],

        correct: 2
    },

    {
        question: "O líder dos goblins desenha um plano de invasão no chão e desafia o protagonista: \"Para decidir quais tropas atacarão primeiro, fizemos uma simulação com um dado mágico! Realizamos 200 lançamentos e os números pares apareceram 104 vezes, enquanto os ímpares apareceram 96 vezes. Qual foi a frequência relativa dos números pares? Acerte e talvez eu conte nosso próximo passo... HAHAHA!\"",

        answers: [
            "48%",
            "50%",
            "52%",
            "54%"
        ],

        correct: 2
    },

    {
        question: "O goblin líder finalmente abandona a falsa expressão de sofrimento e revela seu verdadeiro plano: \"Chega de fingir que somos prisioneiros indefesos! Vamos conquistar Graficália! Mas antes, quero testar sua sorte. Nosso dragão de guerra possui um desafio com quatro alternativas, sendo apenas uma correta. Em uma simulação de 100 tentativas escolhendo ao acaso, acertamos 28 vezes. Qual alternativa apresenta a frequência relativa observada e a probabilidade teórica de acerto? Responda, humano, se quiser impedir nossa invasão!\"",

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
// INIMIGO ID 8 - MÍMICOS
// Habilidades: EF06MA10, EF07MA34, EF08MA03 e EF09MA20
// Local: Diversos - Casas, Vila, Labirinto e Castelo
// ========================================================

8: [

    // ========================================================
    // EF06MA10 - ADIÇÃO E SUBTRAÇÃO DE FRAÇÕES
    // ========================================================

    {
        question: "O baú aparentemente comum começa a tremer. De repente, abre uma enorme boca cheia de dentes! \"HAHAHA! Pensou que encontraria um tesouro dentro de mim? Primeiro terá que responder! Um aventureiro encontrou 1/4 de um mapa mágico dentro de uma casa abandonada e mais 2/4 em um antigo baú. Que fração do mapa ele conseguiu reunir?\"",

        answers: [
            "3/8 do mapa",
            "3/4 do mapa",
            "2/4 do mapa",
            "1/4 do mapa"
        ],

        correct: 1
    },

    {
        question: "O mímico estica sua língua monstruosa e faz surgir a imagem de um frasco de poção. \"Tenho uma poção que contém 5/6 de sua capacidade total. Mas um aventureiro roubou uma quantidade equivalente a 1/2 da capacidade do frasco! Agora me diga, espertinho: que fração da poção ainda restou?\"",

        answers: [
            "4/4 do frasco",
            "2/6 do frasco",
            "1/3 do frasco",
            "4/6 do frasco"
        ],

        correct: 2
    },


    // ========================================================
    // EF07MA34 - PROBABILIDADE E FREQUÊNCIA DE OCORRÊNCIAS
    // ========================================================

    {
        question: "O mímico começa a girar sobre suas próprias pernas e invoca a imagem de uma chave mágica. \"Quer descobrir se consegue encontrar uma chave verdadeira entre tantas armadilhas? Realizamos um experimento: abrimos e fechamos um baú 40 vezes. Em 12 dessas tentativas, encontramos uma chave verdadeira. Com base nesse experimento, qual foi a frequência relativa de encontrar a chave? Responda antes que eu feche minha boca!\"",

        answers: [
            "12%",
            "20%",
            "30%",
            "40%"
        ],

        correct: 2
    },


    // ========================================================
    // EF08MA03 - PRINCÍPIO MULTIPLICATIVO
    // ========================================================

    {
        question: "O mímico se transforma em um armário antigo e faz surgir três túnicas, duas capas e quatro máscaras mágicas. \"Um aventureiro precisa escolher uma túnica, uma capa e uma máscara para entrar disfarçado no castelo. Quantas combinações diferentes ele poderá formar escolhendo uma peça de cada tipo? Faça as contas, humano!\"",

        answers: [
            "9 combinações",
            "12 combinações",
            "18 combinações",
            "24 combinações"
        ],

        correct: 3
    },


    // ========================================================
    // EF09MA20 - EVENTOS INDEPENDENTES E DEPENDENTES
    // ========================================================

    {
        question: "O mímico assume a forma de uma pequena mesa e coloca dois dados mágicos sobre ela. \"Vamos testar sua sorte! Para abrir uma passagem secreta, você precisa tirar o número 6 no primeiro dado e um número par no segundo. Os resultados dos dados são independentes. Qual é a probabilidade de conseguir os dois resultados necessários?\"",

        answers: [
            "1/6, aproximadamente 16,67%",
            "1/12, aproximadamente 8,33%",
            "1/3, aproximadamente 33,33%",
            "1/2, ou 50%"
        ],

        correct: 1
    },

    {
        question: "O mímico abre sua boca enorme e revela uma bolsa com 5 moedas douradas e 3 moedas prateadas. \"Último desafio, aventureiro! Você precisa retirar duas moedas douradas para abrir meu tesouro. A primeira moeda será retirada e não será devolvida à bolsa antes da segunda retirada. Qual é a probabilidade de retirar duas moedas douradas em sequência? Lembre-se: cada retirada altera as chances da próxima!\"",

        answers: [
            "5/14, aproximadamente 35,71%",
            "5/8, ou 62,5%",
            "25/64, aproximadamente 39,06%",
            "1/2, ou 50%"
        ],

        correct: 0
    }

],

// ========================================================
// INIMIGO ID 9 - FANTASMAS DO CEMITÉRIO
// Habilidade: EF08MA03
// Local: Antigo Cemitério - Labirinto Chuvoso
// ========================================================

9: [

    {
        question: "Um fantasma surge de dentro de uma lápide enquanto a chuva cai sobre o cemitério. Sua voz ecoa entre os túmulos: \"Mortal, pretende atravessar este labirinto? Então responda! Um antigo guerreiro precisava se preparar para enfrentar uma criatura das sombras. Ele possuía 3 espadas amaldiçoadas diferentes e 4 escudos fantasmagóricos. Escolhendo uma espada e um escudo, quantas combinações de equipamento poderia formar?\"",

        answers: [
            "7 combinações",
            "12 combinações",
            "9 combinações",
            "16 combinações"
        ],

        correct: 1
    },

    {
        question: "Um espírito aparece flutuando diante de uma estátua quebrada, usando um chapéu torto. \"HAHAHA! Você acha que consegue se disfarçar para escapar dos guardiões deste cemitério? Uma feiticeira precisava escolher seu traje para participar de um ritual sombrio. Ela possuía 4 túnicas, 3 chapéus mágicos e 2 pares de botas. Escolhendo uma peça de cada tipo, quantos visuais diferentes poderia montar?\"",

        answers: [
            "9 visuais",
            "12 visuais",
            "24 visuais",
            "18 visuais"
        ],

        correct: 2
    },

    {
        question: "Um fantasma atravessa uma parede de pedra e aponta para os corredores do labirinto. \"Está perdido, mortal? Pois até os mortos conhecem estes caminhos! Existem 3 passagens que levam à primeira ponte do cemitério e, depois dela, 4 corredores diferentes que conduzem à saída. Escolhendo uma passagem e depois um corredor, quantas rotas diferentes você poderá percorrer?\"",

        answers: [
            "7 rotas",
            "12 rotas",
            "10 rotas",
            "16 rotas"
        ],

        correct: 1
    },

    {
        question: "Um espírito surge de um antigo caldeirão abandonado junto a uma sepultura. \"Os alquimistas enterrados neste lugar escondiam seus segredos muito bem! Um deles possuía 5 ingredientes mágicos diferentes e 3 tipos de frascos para armazenar suas poções. Escolhendo um ingrediente e um frasco, quantas combinações diferentes poderia preparar?\"",

        answers: [
            "8 combinações",
            "15 combinações",
            "10 combinações",
            "20 combinações"
        ],

        correct: 1
    },

    {
        question: "Um fantasma aparece no fim de um corredor escuro, cercado por símbolos brilhantes. \"Para atravessar o Portão das Sombras, você precisará descobrir a senha! Ela é formada por três símbolos mágicos. Em cada posição, existem 4 símbolos diferentes disponíveis, e eles podem se repetir. Quantas senhas diferentes podem ser formadas? Responda, antes que o portão se feche para sempre!\"",

        answers: [
            "12 senhas",
            "16 senhas",
            "64 senhas",
            "24 senhas"
        ],

        correct: 2
    },

    {
        question: "Um espírito guerreiro emerge de uma sepultura segurando um arco transparente. \"Quer enfrentar os mortos deste cemitério? Então escolha suas armas! Uma arqueira possuía 3 arcos diferentes e 5 tipos de flechas mágicas. Se ela escolher um arco e um tipo de flecha, quantas combinações de combate poderá utilizar?\"",

        answers: [
            "8 combinações",
            "15 combinações",
            "10 combinações",
            "20 combinações"
        ],

        correct: 1
    },

    {
        question: "Um fantasma com uma coroa enferrujada surge sobre um túmulo antigo. \"Em vida, os aventureiros escolhiam seus destinos antes de entrar neste labirinto. Imagine que um deles pudesse escolher entre 4 raças fantásticas, 3 classes de combate e 2 habilidades especiais iniciais. Quantos personagens diferentes poderiam ser criados?\"",

        answers: [
            "9 personagens",
            "12 personagens",
            "24 personagens",
            "18 personagens"
        ],

        correct: 2
    },

    {
        question: "Um espírito aparece no cruzamento de dois corredores, enquanto um relâmpago ilumina as lápides. \"Está procurando a saída? Então calcule! Um cavaleiro precisava atravessar duas regiões perigosas para chegar a uma masmorra. Para sair da cidade, existiam 4 caminhos. Depois, para atravessar a floresta, havia 3 caminhos diferentes. Quantas rotas completas ele poderia escolher?\"",

        answers: [
            "7 rotas",
            "12 rotas",
            "16 rotas",
            "9 rotas"
        ],

        correct: 1
    },

    {
        question: "Um fantasma guardião surge diante de um mausoléu e faz três baús flutuarem no ar. \"Os tesouros deste cemitério pertencem aos mortos! Mas vamos imaginar que um aventureiro pudesse escolher 2 coroas mágicas, 4 anéis encantados e 3 amuletos de proteção. Recebendo um item de cada tipo, quantos conjuntos diferentes de tesouros poderia formar?\"",

        answers: [
            "9 conjuntos",
            "14 conjuntos",
            "24 conjuntos",
            "12 conjuntos"
        ],

        correct: 2
    },

    {
        question: "O último fantasma aparece no centro do labirinto, envolto por uma névoa azulada. Sua voz ecoa por todo o cemitério: \"Este é seu último desafio, mortal! Para lançar um feitiço capaz de abrir o caminho até o castelo, uma feiticeira precisa escolher uma entre 3 palavras mágicas, um entre 4 gestos encantados e uma entre 2 pedras de foco. Quantas maneiras diferentes existem de lançar esse feitiço?\"",

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
// INIMIGO ID 10 - Zumbi1
// Habilidade: EF08MA03
// Local: Antigo Cemitério - Labirinto Chuvoso
// ========================================================

10: [

    {
        question: "Grrr... Você não passará por este cemitério! Minha antiga sepultura foi protegida por 4 selos diferentes e 3 correntes mágicas. Se uma combinação de selo e corrente for necessária para abrir a tumba, quantas combinações diferentes podem ser formadas?",

        answers: [
            "7 combinações",
            "12 combinações",
            "16 combinações",
            "9 combinações"
        ],

        correct: 1
    },

    {
        question: "Mortal insolente! Para atravessar uma parte deste labirinto, existem 3 passagens entre as lápides. Depois delas, você encontrará 5 caminhos diferentes até o próximo corredor. Quantos trajetos diferentes poderá realizar?",

        answers: [
            "8 trajetos",
            "15 trajetos",
            "10 trajetos",
            "20 trajetos"
        ],

        correct: 1
    },

    {
        question: "Hehehe... A feiticeira que me despertou deixou 4 tipos de elmos, 2 capas sombrias e 3 pares de botas em minha tumba. Quantos conjuntos diferentes podem ser formados escolhendo uma peça de cada tipo?",

        answers: [
            "9 conjuntos",
            "12 conjuntos",
            "24 conjuntos",
            "18 conjuntos"
        ],

        correct: 2
    },

    {
        question: "Minha feiticeira utiliza 5 sementes amaldiçoadas e 4 feitiços diferentes para criar criaturas como eu. Quantas combinações de semente e feitiço ela pode experimentar?",

        answers: [
            "9 combinações",
            "20 combinações",
            "15 combinações",
            "25 combinações"
        ],

        correct: 1
    },

    {
        question: "Não conseguirá abrir o portão do castelo! A senha foi criada com dois símbolos. Cada posição pode receber qualquer um dos 6 símbolos disponíveis, inclusive repetidos. Quantas senhas diferentes podem ser criadas?",

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
// INIMIGO ID 11 - Zumbi2
// Habilidade: EF08MA03
// Local: Antigo Cemitério - Labirinto Chuvoso
// ========================================================

11: [

    {
        question: "Arrrgh... Minha tumba guarda armas de antigos guerreiros! Existem 3 espadas, 4 lanças e 2 machados diferentes. Se você pudesse escolher apenas uma arma, quantas opções teria?",

        answers: [
            "9 opções",
            "24 opções",
            "12 opções",
            "7 opções"
        ],

        correct: 0
    },

    {
        question: "Você pensa que uma oração poderá salvá-lo? Para realizar um ritual de proteção contra os mortos-vivos, existem 4 orações diferentes e 3 símbolos sagrados. Escolhendo uma oração e um símbolo, quantos rituais diferentes podem ser realizados?",

        answers: [
            "7 rituais",
            "12 rituais",
            "16 rituais",
            "9 rituais"
        ],

        correct: 1
    },

    {
        question: "Grrr... A passagem para o castelo está trancada por um código de três algarismos! Cada posição pode receber um número entre 0, 1, 2, 3 e 4, e a repetição é permitida. Quantos códigos diferentes podem ser formados?",

        answers: [
            "15 códigos",
            "25 códigos",
            "60 códigos",
            "125 códigos"
        ],

        correct: 3
    },

    {
        question: "A feiticeira que nos trouxe de volta domina três elementos: fogo, gelo e vento. Ela possui 3 essências de fogo, 2 de gelo e 4 de vento. Para preparar um elixir, precisa escolher uma essência de cada elemento. Quantos elixires diferentes poderá preparar?",

        answers: [
            "9 elixires",
            "12 elixires",
            "24 elixires",
            "18 elixires"
        ],

        correct: 2
    },

    {
        question: "Hehehe... Este labirinto possui 5 entradas para as catacumbas e outras 3 passagens para sair delas. Considerando que qualquer entrada pode ser combinada com qualquer saída, quantos percursos de ida e volta são possíveis?",

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
// INIMIGO ID 12 - Zumbi3
// Habilidade: EF08MA03
// Local: Antigo Cemitério - Labirinto Chuvoso
// ========================================================

12: [

    {
        question: "Mortal... Minha antiga senhora dominava a magia das sombras! Ela conhecia 3 feitiços de ataque, 4 de defesa e 2 de cura. Para criar uma sequência mágica, escolhia um feitiço de cada categoria. Quantas sequências diferentes poderia criar?",

        answers: [
            "9 sequências",
            "14 sequências",
            "24 sequências",
            "12 sequências"
        ],

        correct: 2
    },

    {
        question: "Grrr... Encontrei 5 cristais de cores diferentes e 3 suportes mágicos diferentes nesta cripta. Se eu escolher um cristal e um suporte para criar um artefato amaldiçoado, quantos artefatos distintos poderei montar?",

        answers: [
            "8 artefatos",
            "15 artefatos",
            "10 artefatos",
            "20 artefatos"
        ],

        correct: 1
    },

    {
        question: "Você jamais decifrará os segredos da feiticeira! Seu grimório possui uma senha de quatro letras. Cada posição pode receber as letras A, B ou C, podendo repetir letras. Quantas senhas diferentes podem ser formadas?",

        answers: [
            "12 senhas",
            "64 senhas",
            "81 senhas",
            "24 senhas"
        ],

        correct: 1
    },

    {
        question: "A feiticeira invocou espíritos para proteger o caminho até o castelo. Para realizar cada invocação, ela escolhe uma entre 4 runas, uma entre 3 velas encantadas e um entre 5 incensos mágicos. Quantas combinações de ritual são possíveis?",

        answers: [
            "12 combinações",
            "20 combinações",
            "60 combinações",
            "45 combinações"
        ],

        correct: 2
    },

    {
        question: "Arrrgh... Para completar o equipamento de um servo das trevas, existem 6 cajados, 4 livros de feitiços e 3 pedras mágicas diferentes. Escolhendo um item de cada categoria, quantos equipamentos completos podem ser montados?",

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
// INIMIGO ID 13 - Zumbi4
// Habilidade: EF08MA03
// Local: Antigo Cemitério - Labirinto Chuvoso
// ========================================================

13: [

    {
        question: "Grrr... Você chegou longe demais, mortal! Para atravessar este cemitério, poderia escolher entre 4 cavalos, 3 lobos gigantes e 2 lagartos de guerra. Se pudesse escolher apenas uma montaria, quantas opções teria?",

        answers: [
            "9 montarias",
            "24 montarias",
            "12 montarias",
            "7 montarias"
        ],

        correct: 0
    },

    {
        question: "Hehehe... A feiticeira que nos controla possui uma armadura especial! Ela pode escolher entre 3 modelos de escudo, 5 modelos de peitoral e 4 modelos de elmo. Quantos conjuntos de proteção diferentes pode montar?",

        answers: [
            "12 conjuntos",
            "60 conjuntos",
            "35 conjuntos",
            "20 conjuntos"
        ],

        correct: 1
    },

    {
        question: "Não abrirá o portão do castelo tão facilmente! Para destrancar a passagem, você precisa descobrir um código com dois símbolos em sequência. Existem 8 símbolos disponíveis, mas não é permitido repetir o primeiro símbolo na segunda posição. Quantos códigos diferentes podem ser formados?",

        answers: [
            "16 códigos",
            "56 códigos",
            "64 códigos",
            "72 códigos"
        ],

        correct: 1
    },

    {
        question: "Arrrgh... Existem 4 caminhos que levam deste cemitério até uma antiga vila. Da vila até o castelo assombrado, existem outras 6 estradas possíveis. Quantos trajetos diferentes ligam o cemitério ao castelo passando pela vila?",

        answers: [
            "10 trajetos",
            "20 trajetos",
            "24 trajetos",
            "36 trajetos"
        ],

        correct: 2
    },

    {
        question: "Se prepare para o desafio, mortal! A feiticeira fabrica anéis amaldiçoados usando uma entre 3 pedras preciosas, um entre 4 metais e um entre 2 símbolos mágicos. Quantos anéis diferentes podem ser fabricados combinando esses elementos?",

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
// INIMIGO ID 14 — CAIM, O CAVALEIRO ESQUELETO
// Habilidade: EF08MA03
// Local: Centro do Antigo Cemitério - Labirinto Chuvoso
// ========================================================

14: [

    {
        question: "HAHAHAHA! Contemple o destino daqueles que ousam desafiar meu mestre! Enquanto Abel desperdiçava sua vida protegendo vermes insignificantes, eu escolhi conquistar riquezas e poder! Em seu tesouro existem 4 coroas amaldiçoadas, 5 colares sombrios e 2 anéis mágicos. Se eu escolher um item de cada tipo, quantos conjuntos diferentes poderei formar? Responda, verme! Quero saber se sua mente ainda funciona antes que eu esmague seu crânio!",

        answers: [
            "11 conjuntos",
            "20 conjuntos",
            "40 conjuntos",
            "30 conjuntos"
        ],

        correct: 2
    },

    {
        question: "Seu tolo! Você ainda acredita em lealdade, justiça e fraternidade? HA! Essas são correntes que prendem os fracos! Para alcançar meu mestre, preciso preparar uma expedição ao castelo. Tenho 4 mapas, 3 bússolas mágicas e 5 kits de sobrevivência. Escolhendo um item de cada categoria, quantos equipamentos de expedição diferentes posso organizar? Calcule depressa! Minha paciência é tão curta quanto sua expectativa de sobreviver!",

        answers: [
            "12 equipamentos",
            "60 equipamentos",
            "35 equipamentos",
            "20 equipamentos"
        ],

        correct: 1
    },

    {
        question: "Escute com atenção, miserável! Nas profundezas do castelo, meu mestre aguarda o momento de recuperar seu poder. Para romper o selo que o mantém aprisionado, preciso de uma senha de três runas. Existem 7 runas disponíveis para cada posição, e elas podem ser repetidas. Quantas senhas diferentes podem ser formadas? HAHAHA! Tantas possibilidades... e nenhuma delas lhe dará uma chance contra mim!",

        answers: [
            "21 senhas",
            "49 senhas",
            "343 senhas",
            "210 senhas"
        ],

        correct: 2
    },

    {
        question: "Sabe o que mais me diverte em você? Essa sua insistência em ajudar os outros! Abel também era assim... E veja onde sua bondade o deixou! Agora, imagine que eu precise preparar uma armadilha para transformar sua jornada em um verdadeiro pesadelo. Tenho 2 tipos de armadilhas, 5 tipos de iscas e 3 tipos de redes mágicas. Escolhendo um item de cada categoria, quantos planos diferentes posso elaborar para capturá-lo? Escolha sua resposta com cuidado... Cada erro seu torna minha diversão ainda maior!",

        answers: [
            "10 planos",
            "15 planos",
            "30 planos",
            "25 planos"
        ],

        correct: 2
    },

    {
        question: "BASTA! Cansei de brincar com você! Quando libertar meu mestre, receberei um exército capaz de reduzir reinos inteiros a cinzas! Existem 4 dragões aliados disponíveis e 3 selas encantadas diferentes. Cada dragão pode utilizar qualquer uma das selas. Quantas combinações de dragão e sela são possíveis? Responda! Quero ver se consegue ao menos compreender a dimensão do poder que conquistarei... Antes de se tornar mais um cadáver esquecido neste cemitério!",

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