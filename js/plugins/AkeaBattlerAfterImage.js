// NÃO MEXE AQUI POR FAVOR :(!
// No touching this part!
var Akea = Akea || {};
Akea.BattleAfterImage = Akea.BattleAfterImage || {};
Akea.BattleAfterImage.VERSION = [1, 0, 0];

//////////////////////////////////////////////////////////////////////////////////////////////////
//                      Akea Battler After Image
//////////////////////////////////////////////////////////////////////////////////////////////////

//-----------------------------------------------------------------------------
(() => {

    //-----------------------------------------------------------------------------
    // Sprite_Battler_AfterImage
    //
    // The sprite for displaying a battler After Image
    //-----------------------------------------------------------------------------
    function Sprite_Battler_AfterImage() {
        this.initialize(...arguments);
    }
    Sprite_Battler_AfterImage.prototype = Object.create(Sprite.prototype);
    Sprite_Battler_AfterImage.prototype.constructor = Sprite_Battler_AfterImage;

    Sprite_Battler_AfterImage.prototype.initialize = function (index) {
        Sprite.prototype.initialize.call(this);
        this._realX = 0;
        this._realY = 0;
        this.anchor.x = 0.5;
        this.anchor.y = 1;
    };
    Sprite_Battler_AfterImage.prototype.update = function () {
    }

    Sprite_Battler_AfterImage.prototype.setBitmap = function (bitmap) {
        this.bitmap = bitmap;
    };
    Sprite_Battler_AfterImage.prototype.setAkeaParameters = function (maxWidth, maxHeight, maxFrame, akeaMirror, akeaMirroredMoves,
        x, y) {
        this.akeaAnimatedBSMaxWidth = maxWidth;
        this.akeaAnimatedBSMaxHeight = maxHeight;
        this.akeaMaxFrame = maxFrame;
        this._akeaMirror = akeaMirror;
        this._akeaMirroredMoves = akeaMirroredMoves;
        this._realX = x;
        this._realY = y;
        this.x = 0;
        this.y = 0;
    };
    Sprite_Battler_AfterImage.prototype.updatePositions = function (x, y) {
        if (this._akeaMirror) {
            this.x = (x - this._realX);
            this.y = -(y - this._realY);
        } else {
            this.x = -(x - this._realX);
            this.y = -(y - this._realY);
        }
        //this._realX = x;
        //this._realY = y;
    };


    Sprite_Battler_AfterImage.prototype.updateFrame = function (isActor, motion, pattern) {
        this._motion = motion;
        this._pattern = pattern;
        if (isActor) {
            Sprite_Actor.prototype.updateFrame.call(this, ...arguments);
        } else {
            Sprite_Enemy.prototype.updateFrame.call(this, ...arguments);
        }
    }

    Sprite_Battler_AfterImage.prototype.updateAkeaFrame = function () {
        const bitmap = this.bitmap;
        if (bitmap) {
            const motionIndex = this._motion ? this._motion.index : 0;
            const pattern = this._pattern < this.akeaMaxFrame ? this._pattern : 1;
            const cw = bitmap.width / this.akeaAnimatedBSMaxWidth;
            const ch = bitmap.height / this.akeaAnimatedBSMaxHeight;
            const cx = Math.floor(motionIndex / this.akeaAnimatedBSMaxHeight) * 3 + pattern;
            const cy = motionIndex % this.akeaAnimatedBSMaxHeight;
            this.setFrame(cx * cw, cy * ch, cw, ch);
            //this.scale.x = this._akeaMirror ? -1 : 1;
        }
        return;
    }

    let _akeaBattlerAfterImage_Sprite_Battler_initialize = Sprite_Battler.prototype.initialize;
    Sprite_Battler.prototype.initialize = function (battler) {
        _akeaBattlerAfterImage_Sprite_Battler_initialize.call(this, ...arguments);
        this._akeaAfterImages = [];
        this._onAkeaAfterImage = true;
        for (var n = 0; n < 40; n++) { //MAX NUMBER
            this._akeaAfterImages[n] = new Sprite_Battler_AfterImage(n + 1);
            this.addChild(this._akeaAfterImages[n]);
        }

    };

    let _akeaBattlerAfterImage_Sprite_Battler_update = Sprite_Battler.prototype.update;
    Sprite_Battler.prototype.update = function () {
        if (this._onAkeaAfterImage)
            this.updateAkeaAfterImagePosition();
        _akeaBattlerAfterImage_Sprite_Battler_update.call(this, ...arguments);
    }
    Sprite_Battler.prototype.startAkeaAfterImage = function () {
        this._akeaSequenceActual = 0;
        this._akeaSequenceMax = 39;
        for (var n = 0; n < 40; n++) {
            this._akeaAfterImages[n].setBitmap(this.mainSprite().bitmap);
            this._akeaAfterImages[n].opacity = 0;
            this.setAkeaAfterImagePosition(n);
        }
    };
    Sprite_Battler.prototype.setAkeaAfterImagePosition = function (n) {
        if (Akea.BattleSystem) {
            this._akeaAfterImages[n].setAkeaParameters(this.akeaAnimatedBSMaxWidth,
                this.akeaAnimatedBSMaxHeight, this.akeaMaxFrame, this._akeaMirror, this._akeaMirroredMoves,
                this.x, this.y)
        }
        else {
            this._akeaAfterImages[n].setAkeaParameters(this.akeaAnimatedBSMaxWidth,
                this.akeaAnimatedBSMaxHeight, this.akeaMaxFrame, this._akeaMirror, this._akeaMirroredMoves,
                this.x, this.y)
        }
        if (this._battler)
            this._akeaAfterImages[n].updateFrame(this._battler.isActor(), this._motion, this._pattern);
    }

    Sprite_Battler.prototype.updateAkeaAfterImagePosition = function () {
        for (var n = 0; n < 40; n++) {
            this._akeaAfterImages[n].opacity -= 1;
            if (this._akeaAfterImages[n].opacity > 0)
                this._akeaAfterImages[n].updatePositions(this.x, this.y);
            if (n == this._akeaSequenceActual && Graphics.frameCount % 5) {
                this.setAkeaAfterImagePosition(n);
                this._akeaAfterImages[n].opacity = 255
            }
        }
        if (Graphics.frameCount % 5)
            this._akeaSequenceActual = this._akeaSequenceActual < this._akeaSequenceMax ? this._akeaSequenceActual + 1 : 0;

    }



    let _specificName_Game_Battler_callAkeaActions = Game_Battler.prototype.callAkeaActions
    Game_Battler.prototype.callAkeaActions = function (action, targets) {
        _specificName_Game_Battler_callAkeaActions.call(this, ...arguments);
        if (RegExp.$2 == "AfterImage") { //Which would be called <akeaPicture id>
            this._akeaAnimatedBSActions.addCustomAddon(RegExp.$3, targets, RegExp.$2, this, action);
        } else if (RegExp.$2 == "StopAfterImage") { //Which would be called <akeaPicture id>
            this._akeaAnimatedBSActions.addCustomAddon(RegExp.$3, targets, RegExp.$2, this, action);
        }
    }
    let _specificName_Sprite_Battler_manageAkeaActions = Sprite_Battler.prototype.manageAkeaActions
    Sprite_Battler.prototype.manageAkeaActions = function (action) {
        _specificName_Sprite_Battler_manageAkeaActions.call(this, ...arguments);
        if (action.getActionType() == "AfterImage") { //Which would be called <akeaPicture id>
            this._onAkeaAfterImage = true;
            this.startAkeaAfterImage();
        } else if (action.getActionType() == "StopAfterImage") { //Which would be called <akeaPicture id>
            this._onAkeaAfterImage = false;
            for (var n = 0; n < 40; n++) {
                this._akeaAfterImages[n].opacity = 0;
            }
        }
    }

})();