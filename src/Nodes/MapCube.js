var Block = cc.PhysicsSprite.extend({
    ctor:function(space, father, pos){
        var imgs = [res.basu1, res.basu2, res.basu3];
        var img = imgs[Math.floor(Math.random()*2)];
        
        this._super(img);
        this.scheduleUpdate();
        this.father=father;
        
        this.space = space;
        var contentSize = this.getContentSize()
        
        this.body = new cp.Body(Infinity, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.space.addBody(this.body);
        
        this.setBody(this.body);
        this.attr({
            x:pos.x,
            y:pos.y
        });
        
        this.shape = new cp.BoxShape(this.body, contentSize.width, contentSize.height);
        this.space.addShape(this.shape);
        var move=null;
        var rand=Math.random()*size.height;
        if(hardwin){
            move=cc.moveTo(1.5, cc.p(-200, rand));
        }else{
            move=cc.moveTo(0.0001, cc.p(-200, rand));
        };
        this.runAction(move);
        
        this.shape.setCollisionType(ColType.block);
    },
    update:function(dt){
        if (this.x<-75){
            this.remove();
        };
    },
    remove:function(){
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
        this.space.removeBody(this.body);
        this.release();
        this.father.removeChild(this);
        this.unscheduleUpdate();
    }
});