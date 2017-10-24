var Player = cc.PhysicsSprite.extend({
    ctor:function(space, father){
        this._super(res.playerBody_img);
        
        this.hasMis = false;
        this.reloadTime = 1;
        this.time = 0;
        this.space = space;
        this.father = father;
        this.scale = 0.1;
        
        var contentSize = this.getContentSize();
        
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.space.addBody(this.body);
        
        this.setBody(this.body);
        this.attr({
            rotation:90
        });
        
        this.shape = new cp.BoxShape(this.body, (contentSize.width*this.scale)-55, (contentSize.height*this.scale)-10);
        this.shape.setCollisionType(ColType.player);
        this.shape1 = new cp.BoxShape(this.body, (contentSize.width*this.scale), (contentSize.height*this.scale)-57);
        this.shape1.setCollisionType(ColType.player);
        this.space.addShape(this.shape);
        this.space.addShape(this.shape1);

        //this.shield = new PlayerShield(this.space, this);
        //this.addChild(this.shield)


        this.scheduleUpdate();
    },
    update:function(dt){
        this.time+=dt;
        if (this.time>=this.reloadTime){
            this.hasMis=true;  
        };
        if (this.x>size.width+80){
            if(level==1){
                cc.director.runScene(new Level2());
            }else if(level==2){
                cc.director.runScene(new Level3());
            }else{
                cc.director.runScene(new Level2())
            };
            ended=false;
        };
    },
    shoot:function(){
        if (this.hasMis){
            this.time=0;
            this.hasMis=false;
            var aux = new Missil(true, cc.p(this.x+(85*0.4)+455*this.scale, this.y), cc.p(size.width+1000, this.y), this.father, this.space);
            this.father.addChild(aux);
        }
    },
});