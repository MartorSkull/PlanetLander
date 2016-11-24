var Shield = cc.PhysicsSprite.extend({
    ctor:function(space, father){
        this._super(res.bossShield_img);
        this.space=space;
        this.father=father;
        
        var contentSize = this.getContentSize();
        
        this.body=new cp.Body(Infinity, Infinity);
        this.body.ajar="Shield";
        this.body.father=this;
        this.space.addBody(this.body);
        
        this.setBody(this.body);
        this.scale=0.58;
        this.attr({
            x:size.width-(170*this.scale),
            y:size.height/2,
            opacity:0
        });
        
        this.shape=new cp.BoxShape(this.body, (contentSize.width*this.scale), (contentSize.height*this.scale));
        this.shape.setCollisionType(ColType.shield);
        this.space.addShape(this.shape);
        
        this.space.addCollisionHandler(ColType.shield, ColType.missilP, this.collision.bind(this), null, null, null);
        
    },
    off:function(){
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
    },
    on:function(){
        this.shape=new cp.BoxShape(this.body, (contentSize.width*this.scale), (contentSize.height*this.scale));
        this.shape.setCollisionType(ColType.shield);
        this.space.addShape(this.shape);
    },
    collision:function(arbiter, space){
        if(arbiter.body_a.ajar=="Shield"){
            arbiter.body_a.father.stopAllActions();
            arbiter.body_a.father.opacity=255;
            var dis = cc.fadeTo(2,0);
            this.body_a.father.runAction(dis);
            this.body_b.parent.del();
        }else{
            arbiter.body_b.father.stopAllActions();
            arbiter.body_b.father.opacity=255;
            var dis = cc.fadeTo(2,0);
            arbiter.body_b.father.runAction(dis);
            arbiter.body_a.parent.del();
        };    
    },
    update:function(dt){
        
    },
});