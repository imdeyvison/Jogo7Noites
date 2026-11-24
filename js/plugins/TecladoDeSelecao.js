/*:
 * @target MZ
 * @plugindesc Permite digitar o nome do personagem diretamente usando o teclado do computador.
 */

(() => {
    const _Scene_Name_start = Scene_Name.prototype.start;
    Scene_Name.prototype.start = function() {
        _Scene_Name_start.call(this);
        this._boundOnKeyDown = this._onPhysicalKeyDown.bind(this);
        document.addEventListener("keydown", this._boundOnKeyDown);
    };

    const _Scene_Name_terminate = Scene_Name.prototype.terminate;
    Scene_Name.prototype.terminate = function() {
        document.removeEventListener("keydown", this._boundOnKeyDown);
        _Scene_Name_terminate.call(this);
    };

    Scene_Name.prototype._onPhysicalKeyDown = function(event) {
        if (!this._editWindow) return;

        // Backspace apaga o último caractere
        if (event.key === "Backspace") {
            event.preventDefault();
            if (this._editWindow.back()) {
                SoundManager.playCancel();
            }
            return;
        }

        // Enter confirma o nome imediatamente
        if (event.key === "Enter") {
            event.preventDefault();
            event.stopImmediatePropagation(); // Evita conflito com o "OK" do teclado virtual
            this.onInputOk();
            return;
        }

        // Aceita letras (incluindo acentos/ç), números e espaço
        if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
            event.preventDefault();
            event.stopImmediatePropagation(); // Impede que teclas como Z, X, C ou setas movam o cursor
            if (this._editWindow.add(event.key)) {
                SoundManager.playCursor();
            } else {
                SoundManager.playBuzzer(); // Toca som de erro se atingir o limite de letras
            }
        }
    };
})();