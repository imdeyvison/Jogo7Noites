/*:
 * @target MZ
 * @plugindesc Habilita as teclas W, A, S e D para movimentação e navegação nos menus.
 */

(() => {
    // Mapeamento dos keyCodes para as direções do RPG Maker MZ
    Input.keyMapper[87] = "up";    // Tecla W
    Input.keyMapper[65] = "left";  // Tecla A
    Input.keyMapper[83] = "down";  // Tecla S
    Input.keyMapper[68] = "right"; // Tecla D
})();