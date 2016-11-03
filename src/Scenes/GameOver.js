var GameOver=cc.Scene.extend({
    onEnter:function(){
        this._super();
        this.addChild(new BackgroundL(1), 0);
        this.addChild(new GameOverL(), 1);
    }
});