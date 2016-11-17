var Mother = cc.Sprite.extend({
    ctor:function(space){
        this._super(res.cubo_img);
        this.life = 1000;
        this.space = space;
        this.attr({
            x: size.width/2,
            y: size.height/2,
            scale:0.3
        });
        ////////////////////////////////////////////////////
        var turret1 = new Turret(cc.p(0, 0));
        this.addChild(turret1);
        ////////////////////////////////////////////////////
        var action = new cc.moveTo(1.5, cc.p(size.width-200, size.height/2));
        //this.runAction(action);
    }
});