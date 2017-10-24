var PlayerShield = cc.PhysicsSprite.extend({
    ctor:function(space, father){
        this._super(res.playerShield_img);

        this.space=space;
        this.father=father;

        var contentSize = this.getContentSize();
        cc.log(contentSize)
        
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.space.addBody(this.body);
        
        this.setBody(this.body);
        this.attr({
            x: father.getContentSize().width/2,
            y: father.getContentSize().height/2,
        });

        this.shape = new cp.BoxShape(this.body, (contentSize.width*this.scale)-55, (contentSize.height*this.scale)-10);
        this.space.addShape(this.shape);

    },
    off:function(){
        this.stopAllActions();
        this.opacity=0;
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
    },
    on:function(){
        
        this.shape=new cp.BoxShape(this.body, (this.contentSize.width*this.scale), (this.contentSize.height*this.scale));
        this.shape.setCollisionType(ColType.shield);
        this.space.addShape(this.shape);
    },
    update:function(dt){

    },
});
