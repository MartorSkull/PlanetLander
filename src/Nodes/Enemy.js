var Enemy = cc.Node.extend({
    img:null,
    ctor:function(){
        this._super();
        this.img = new cc.Sprite(res.Ovni);
        this.img.attr({
            y: this.x,
            x: this.y,
            scale : 0.4
        });
        this.addChild(this.img, 0);
    }
});