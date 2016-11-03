var CineL1 = cc.Layer.extend({
    ctor:function(space){
        this._super();
        var player = new cc.Sprite(res.Nave_img);
        var final = new  cc.Sprite(res.final_img);
        this.addChild(player);
        this.addChild(final);
        final.attr({
            x:1280,
            y:360
        });
        player.attr({
            x:100,
            y:360,
            rotation:90
        });
        var action1 = new cc.moveTo(3, cc.p(1280, 360));
        player.runAction(action1);
    }
});