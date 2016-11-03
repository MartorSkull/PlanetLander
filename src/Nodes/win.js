var win = cc.Sprite.extend({
    ctor:function(){
        this._super(res.final_img);
        
        this.setPosition(new cc.p(size.width+72, size.height/2));
        
        var Action = new cc.moveTo(1.5, new cc.p(size.width-72, size.height/2))
        this.runAction(Action);
    }
});