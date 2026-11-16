/*:
 * @target MZ
 * @plugindesc Ativa quebra automática (Word Wrap), espaçamento vertical extra e texto justificado.
 * @author Dev
 * 
 * @param lineSpacing
 * @text Espaçamento Extra
 * @desc Quantos pixels adicionar de espaçamento vertical entre cada linha de texto.
 * @type number
 * @default 8
 * 
 * @param justifyText
 * @text Justificar Texto
 * @desc Ativa a justificação automática das linhas de texto (true / false).
 * @type boolean
 * @default true
 */

(() => {
    const pluginName = "AutoWordWrap";
    const parameters = PluginManager.parameters(pluginName);
    const lineSpacing = Number(parameters["lineSpacing"] || 8);
    const justifyText = parameters["justifyText"] === "true";

    // Aumenta a altura padrão da linha nas janelas de mensagem
    const _Window_Base_lineHeight = Window_Base.prototype.lineHeight;
    Window_Base.prototype.lineHeight = function() {
        return _Window_Base_lineHeight.call(this) + lineSpacing;
    };

    // Quebra de linha automática (Word Wrap)
    const _Window_Base_processCharacter = Window_Base.prototype.processCharacter;
    Window_Base.prototype.processCharacter = function(textState) {
        const c = textState.text[textState.index];
        if (c === " " || c === "\t") {
            const nextSpaceIndex = textState.text.indexOf(" ", textState.index + 1);
            const word = textState.text.substring(textState.index + 1, nextSpaceIndex > -1 ? nextSpaceIndex : textState.text.length);
            const size = this.textSizeEx(word);
            if (textState.x + size.width > this.contentsWidth()) {
                this.processNewLine(textState);
                textState.index++;
                return;
            }
        }
        _Window_Base_processCharacter.call(this, textState);
    };

    // Justificação de texto por linha
    if (justifyText) {
        const _Window_Message_processNewLine = Window_Message.prototype.processNewLine;
        Window_Message.prototype.processNewLine = function(textState) {
            if (textState && textState.text) {
                const remainingText = textState.text.slice(textState.index);
                const nextNewLine = remainingText.indexOf("\n");
                const currentLineText = nextNewLine > -1 ? remainingText.slice(0, nextNewLine) : remainingText;
                
                // Aplica distribuição de espaço se houver mais de uma palavra na linha
                const words = currentLineText.trim().split(/\s+/);
                if (words.length > 1 && !remainingText.startsWith("\n")) {
                    const lineWidth = this.textSizeEx(currentLineText.trim()).width;
                    const availableWidth = this.contentsWidth() - textState.startX;
                    const extraSpace = availableWidth - lineWidth;
                    if (extraSpace > 0 && extraSpace < availableWidth * 0.3) {
                        textState.x += Math.floor(extraSpace / (words.length - 1));
                    }
                }
            }
            _Window_Message_processNewLine.call(this, textState);
        };
    }
})();