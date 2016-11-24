var Mother = cc.Sprite.extend({
    ctor:function(space, father){
        this._super(res.bossBody_img);
        this.father=father;
        this.space = space;
        this.scale=0.58;
        this.attr({
            x: size.width-(158.5*this.scale)+1,
            y: size.height/2,
        });
        ////////////////////////////////////////////////////
        var action = new cc.moveTo(1.5, cc.p(size.width-200, size.height/2));
        //this.runAction(action);
    }
});