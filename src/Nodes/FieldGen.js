var FieldGen=cc.PhysicsSprite.extend({
    ctor:function(space, father, mother, pos, rot){
        this._super(res.bossGenOff_img);
        
        this.space=space;
        this.father=father;
        this.mother=mother;
        this.active=false;
        this.toDel=false;
        
        this.contentSize = this.getContentSize();
        
        this.body=new cp.Body(1, cp.momentForBox(1,this.contentSize.width, this.contentSize.height));
        this.space.addBody(this.body);
        this.setBody(this.body);
        this.body.ajar="FieldGen";
        this.body.father=this;
        
        this.setPosition(pos);
        this.rotation=rot;
        this.scale=0.5;
        
        this.shape=null;
        
        this.energy=new cc.Sprite(res.bossGenOn_img);
        this.energy.attr({
            x:this.x,
            y:this.y,
            scale:this.scale,
            rotation:this.rotation
        });
        this.father.addChild(this.energy, 2);
        this.scheduleUpdate();
        this.space.addCollisionHandler(ColType.FieldGen, ColType.missilP, this.collision.bind(this), null, null, null);
        
    },
    update:function(dt){
        if(this.toDel){
            this.remove();
        }else{
            if(this.mother.active!=this.active){
                this.active=this.mother.active;
                if(this.mother.active){
                    this.on();
                }else{
                    this.off();
                };
            };
        };
    },
    on:function(){
        this.energy.setOpacity(255);
        this.energy.runAction(new cc.fadeTo(10, 0));
        if(this.shape!=null){
            this.body.removeShape(this.shape);
            this.space.removeShape(this.shape);
        };
    
    },
    off:function(){
        this.shape= new cp.BoxShape(this.body, (this.contentSize.width*this.scale), (this.contentSize.height*this.scale));
        this.shape.setCollisionType(ColType.FieldGen);
        this.space.addShape(this.shape);
    },
    del:function(){
        this.toDel=true;
    },
    remove:function(){
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
        this.space.removeBody(this.body);
        this.release();
        this.father.removeChild(this);
        this.unscheduleUpdate();
    },
    collision:function(arbiter, space){
        if(arbiter.body_a.ajar=="FieldGen"){
            arbiter.body_a.father.del();
            arbiter.body_a.father.mother.dest();
            arbiter.body_b.parent.del();
        }else{
            arbiter.body_b.father.del();
            arbiter.body_b.father.mother.dest();
            arbiter.body_a.parent.del();
        };    
    }
});