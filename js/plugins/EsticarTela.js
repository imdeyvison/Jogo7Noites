/*:
 * @target MZ
 * @plugindesc Ajusta o canvas para Itch.io (iframe e fullscreen) compensando escala do Windows sem barras.
 * @author Custom
 */

(() => {
    const isIframe = window.self !== window.top;

    // Só altera a escala de DPI se NÃO estiver preso em um iframe pequeno
    if (!isIframe) {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = `width=device-width, initial-scale=${1 / window.devicePixelRatio}, maximum-scale=${1 / window.devicePixelRatio}, user-scalable=no`;
        document.head.appendChild(meta);
    }

    // Injeta CSS para travar o canvas exatamente no tamanho do container (iframe ou tela cheia)
    const style = document.createElement("style");
    style.textContent = `
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            overflow: hidden !important;
            background-color: #000 !important;
        }
        #gameCanvas {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
        }
    `;
    document.head.appendChild(style);

    // Mantém a precisão dos cliques do mouse tanto na caixa do Itch.io quanto em Fullscreen
    Graphics.pageToCanvasX = function(x) {
        if (this._canvas) {
            const rect = this._canvas.getBoundingClientRect();
            return Math.round((x - rect.left) * (this._width / rect.width));
        }
        return 0;
    };

    Graphics.pageToCanvasY = function(y) {
        if (this._canvas) {
            const rect = this._canvas.getBoundingClientRect();
            return Math.round((y - rect.top) * (this._height / rect.height));
        }
        return 0;
    };
})();