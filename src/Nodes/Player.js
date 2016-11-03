var Player = cc.PhysicsSprite.extend({
    ctor:function(space, father){
        this._super(res.Nave_img);
        
        this.hasMis=false;
        this.reloadTime=1;
        this.time=0;
        this.space = space;
        this.father=father;
        
        var contentSize = this.getContentSize();
        
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.space.addBody(this.body);
        
        this.setBody(this.body);
        this.attr({
            scale: 0.4,
            rotation:90
        });
        
        this.shape = new cp.BoxShape(this.body, contentSize.width-112, contentSize.height-142);
        this.shape.setCollisionType(ColType.player);
        this.shape1 = new cp.BoxShape(this.body, contentSize.width-165, contentSize.height-109);
        this.shape.setCollisionType();
        this.space.addShape(this.shape);
        this.space.addShape(this.shape1);
        this.scheduleUpdate();
    },
    update:function(dt){
        this.time+=dt;
        if (this.time>=this.reloadTime){
            this.hasMis=true;  
        };
    },
    shoot:function(){
        if (this.hasMis){
            this.time=0;
            this.hasMis=false;
            var aux = new Missil(this.space, cc.p(this.x, this.y), this.father);
            this.father.addChild(aux);
        }
    }
});