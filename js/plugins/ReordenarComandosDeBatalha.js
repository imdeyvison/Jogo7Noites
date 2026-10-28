Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addCommand(
            "Resolver Questão",
            "mathQuestion",
            true
        );
        this.addItemCommand(); // <--- O comando de Item foi movido para o final da lista
    }
};
