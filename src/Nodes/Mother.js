var Mother = cc.Sprite.extend({
    ctor:function(space, father){
        this._super(res.bossBody_img);
        this.active=true;
        this.gens=5;
        this.cycle=10;
        this.reactcycle=3;
        this.counter=0;
        this.father=father;
        this.space = space;
        this.scale=0.58;
        this.attr({
            x: size.width-(158.5*this.scale)+1,
            y: size.height/2,
        });
        this.scheduleUpdate()
    },
    update:function(dt){
        if(this.gens==0){
            cc.director.runScene(new WinL());
        };
        if(this.active){
            if(this.counter>=this.cycle){
                this.active=false;
                this.counter=0;
            }else{
                this.counter+=dt;
            };
        }else{
            if(this.counter>=this.reactcycle){
                this.active=true;
                this.counter=0;
            }else{
                this.counter+=dt;
            };
        };
    },
    dest:function(){
        this.active=true;
        this.gens-=1;
    }
});