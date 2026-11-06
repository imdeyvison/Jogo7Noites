/*:
 * @target MZ
 * @plugindesc Oculta completamente o PM (Pontos de Magia) em todas as janelas padrão.
 * @author Deyvison
 */

(() => {
    // 1. Oculta o desenho básico do PM
    Window_StatusBase.prototype.drawActorPm = function(actor, x, y, width) {
        // Vazio
    };

    // 2. Garante que o Gauge de PM (MZ moderno) não renderize
    const _Window_StatusBase_placeGauge = Window_StatusBase.prototype.placeGauge;
    Window_StatusBase.prototype.placeGauge = function(actor, type, x, y) {
        if (type === "mp") {
            return; // Ignora o gauge de MP
        }
        _Window_StatusBase_placeGauge.call(this, actor, type, x, y);
    };
})();