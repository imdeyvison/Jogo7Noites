/*:
 * @target MZ
 * @plugindesc Sistema de desafios matemáticos - Etapa 2
 * @author Deyvison
 *
 * @help
 * Adiciona o comando "Resolver Questão"
 * ao menu de batalha.
 */

(() => {

    // ============================================================
    // COMANDO "RESOLVER QUESTÃO"
    // ============================================================

    const _makeCommandList =
        Window_ActorCommand.prototype.makeCommandList;

    Window_ActorCommand.prototype.makeCommandList = function() {

        _makeCommandList.call(this);

        this.addCommand(
            "Resolver Questão",
            "mathQuestion",
            true
        );
    };


    // ============================================================
    // JANELA DA QUESTÃO
    // ============================================================

    function Window_MathQuestion() {
        this.initialize(...arguments);
    }

    Window_MathQuestion.prototype =
        Object.create(Window_Command.prototype);

    Window_MathQuestion.prototype.constructor =
        Window_MathQuestion;

        Window_MathQuestion.prototype.initialize = function(rect) {

            this._question = "";
            this._answers = [];
            this._correctAnswer = 0;
        
            Window_Command.prototype.initialize.call(
                this,
                rect
            );
        };

        Window_MathQuestion.prototype.setQuestion =
        function(questionData) {
    
            this._question =
                questionData.question;
    
            this._answers =
                questionData.answers;
    
            this._correctAnswer =
                questionData.correct;
    
    
            // Reconstrói os comandos da janela
            this.refresh();
    
            this.select(1);
        };

    Window_MathQuestion.prototype.makeCommandList =
        function() {

            this.addCommand(
                this._question,
                "question",
                false
            );

            this.addCommand(
                "A) " + this._answers[0],
                "answer",
                true
            );

            this.addCommand(
                "B) " + this._answers[1],
                "answer",
                true
            );

            this.addCommand(
                "C) " + this._answers[2],
                "answer",
                true
            );

            this.addCommand(
                "D) " + this._answers[3],
                "answer",
                true
            );
        };


    // ============================================================
    // CRIA A JANELA NA BATALHA
    // ============================================================

    const _createAllWindows =
        Scene_Battle.prototype.createAllWindows;

    Scene_Battle.prototype.createAllWindows =
        function() {

            _createAllWindows.call(this);

            this.createMathQuestionWindow();
        };


    Scene_Battle.prototype.createMathQuestionWindow =
        function() {

            const width = 500;
            const height = 300;

            const x =
                (Graphics.boxWidth - width) / 2;

            const y =
                (Graphics.boxHeight - height) / 2;

            const rect = new Rectangle(
                x,
                y,
                width,
                height
            );

            this._mathQuestionWindow =
                new Window_MathQuestion(rect);

            this._mathQuestionWindow.hide();

            this._mathQuestionWindow.deactivate();

            this._mathQuestionWindow.setHandler(
                "answer",
                this.onMathAnswer.bind(this)
            );

            this.addWindow(
                this._mathQuestionWindow
            );
        };


    // ============================================================
    // LIGA O BOTÃO À JANELA
    // ============================================================

    const _createActorCommandWindow =
        Scene_Battle.prototype.createActorCommandWindow;

    Scene_Battle.prototype.createActorCommandWindow =
        function() {

            _createActorCommandWindow.call(this);

            this._actorCommandWindow.setHandler(
                "mathQuestion",
                this.commandMathQuestion.bind(this)
            );
        };


    // ============================================================
    // ABRE A QUESTÃO
    // ============================================================

    Scene_Battle.prototype.commandMathQuestion =
    function() {

        // Esconde o menu de comandos do protagonista
        this._actorCommandWindow.deactivate();
        this._actorCommandWindow.hide();

        // Indica que estamos selecionando o alvo
        this._mathSelectingTarget = true;

        // Guarda os handlers originais
        this._mathEnemyOkHandler =
            this._enemyWindow._handlers["ok"];

        this._mathEnemyCancelHandler =
            this._enemyWindow._handlers["cancel"];

        // Define os handlers temporários
        this._enemyWindow.setHandler(
            "ok",
            this.onMathEnemyOk.bind(this)
        );

        this._enemyWindow.setHandler(
            "cancel",
            this.onMathEnemyCancel.bind(this)
        );

        // IMPORTANTE:
        // No RPG Maker MZ o método é startEnemySelection()
        this.startEnemySelection();
    };

    // ============================================================
// INIMIGO SELECIONADO
// ============================================================

Scene_Battle.prototype.onMathEnemyOk =
    function() {

        // =====================================================
        // PEGA O INIMIGO SELECIONADO
        // =====================================================

        const enemy =
            this._enemyWindow.enemy();


        // Guarda o inimigo
        this._mathTarget =
            enemy;


        // =====================================================
        // DESCOBRE O ID DO INIMIGO
        // =====================================================

        const enemyId =
            enemy.enemyId();


        console.log(
            "Inimigo selecionado:",
            enemy.name()
        );

        console.log(
            "ID do inimigo:",
            enemyId
        );


        // =====================================================
        // BUSCA O BANCO DE QUESTÕES
        // =====================================================

        const questions =
            BancoQuestoes[enemyId];


        // =====================================================
        // VERIFICA SE EXISTEM QUESTÕES
        // =====================================================

        if (!questions || questions.length === 0) {

            console.error(
                "Não existem questões cadastradas para o inimigo ID:",
                enemyId
            );

            $gameMessage.add(
                "Este inimigo ainda não possui questões cadastradas!"
            );

            return;
        }


        // =====================================================
        // POR ENQUANTO PEGAMOS A PRIMEIRA QUESTÃO
        // =====================================================

        const question =
            questions[0];


        console.log(
            "Questão selecionada:",
            question.question
        );


        // =====================================================
        // FECHA A SELEÇÃO DE INIMIGO
        // =====================================================

        this._enemyWindow.hide();

        this._enemyWindow.deactivate();


        // =====================================================
        // RESTAURA OS HANDLERS
        // =====================================================

        this._enemyWindow.setHandler(
            "ok",
            this._mathEnemyOkHandler
        );

        this._enemyWindow.setHandler(
            "cancel",
            this._mathEnemyCancelHandler
        );


        // =====================================================
        // ENVIA A QUESTÃO PARA A JANELA
        // =====================================================

        this._mathQuestionWindow.setQuestion(
            question
        );


        // =====================================================
        // ABRE A QUESTÃO
        // =====================================================

        this._mathQuestionWindow.show();

        this._mathQuestionWindow.activate();

        this._mathQuestionWindow.select(1);
    };


// ============================================================
// CANCELAR SELEÇÃO DE INIMIGO
// ============================================================

Scene_Battle.prototype.onMathEnemyCancel =
function() {

    // Fecha a seleção
    this._enemyWindow.hide();
    this._enemyWindow.deactivate();

    // Restaura os handlers originais
    this._enemyWindow.setHandler(
        "ok",
        this._mathEnemyOkHandler
    );

    this._enemyWindow.setHandler(
        "cancel",
        this._mathEnemyCancelHandler
    );

    // Sai do modo de seleção
    this._mathSelectingTarget = false;

    // Volta para o menu do protagonista
    this._actorCommandWindow.show();
    this._actorCommandWindow.activate();
};

    // ============================================================
    // VERIFICA A RESPOSTA
    // ============================================================

    Scene_Battle.prototype.onMathAnswer =
function() {

    const index =
        this._mathQuestionWindow.index();

    const answerIndex = index - 1;

    const actor =
        BattleManager.actor();

    const enemy =
        this._mathTarget;


    // =====================================================
    // RESPOSTA CORRETA
    // =====================================================

    if (
        answerIndex ===
        this._mathQuestionWindow._correctAnswer
    ) {

        $gameMessage.add(
            "Resposta correta!"
        );

        $gameMessage.add(
            "CRÍTICO! Ataque matemático!"
        );


        if (actor && enemy && !enemy.isDead()) {

            // =================================================
            // CRIA A AÇÃO DO PROTAGONISTA
            // =================================================

            const action =
                new Game_Action(actor);

            action.setSkill(4);

            action.setTarget(
                enemy.index()
            );


            // Coloca a ação no protagonista
            actor.setAction(
                0,
                action
            );

            actor.setLastTarget(enemy);


            // =================================================
            // AÇÃO FORÇADA DO PROTAGONISTA
            // =================================================

            BattleManager._actionForcedBattler =
                actor;

            BattleManager._inputting = false;

            BattleManager.processForcedAction();
        }


    // =====================================================
    // RESPOSTA ERRADA
    // =====================================================

    } else {

        $gameMessage.add(
            "Resposta incorreta!"
        );

        $gameMessage.add(
            "O inimigo aproveitou a oportunidade!"
        );


        if (actor && enemy && !actor.isDead()) {

            // =================================================
            // DESCOBRE O ATAQUE DO INIMIGO
            // =================================================

            const skillId =
                enemy.attackSkillId();


            // =================================================
            // CRIA A AÇÃO DO INIMIGO
            // =================================================

            const action =
                new Game_Action(enemy);

            action.setSkill(
                skillId
            );

            action.setTarget(
                actor.index()
            );


            // =================================================
            // COLOCA A AÇÃO NO INIMIGO
            // =================================================

            enemy.setAction(
                0,
                action
            );


            // =================================================
            // AÇÃO FORÇADA DO INIMIGO
            // =================================================

            BattleManager._actionForcedBattler =
                enemy;

            BattleManager._inputting = false;

            BattleManager.processForcedAction();
        }
    }


    // =====================================================
    // FECHA A JANELA DA QUESTÃO
    // =====================================================

    this._mathQuestionWindow.hide();

    this._mathQuestionWindow.deactivate();

    this._actorCommandWindow.hide();

    this._actorCommandWindow.deactivate();

};

})();