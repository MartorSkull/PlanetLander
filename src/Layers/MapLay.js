var Map = cc.Layer.extend({ 
    ctor:function (space){
        this._super();
        this.space = space;
        this.count = 0;
        this.time = 0;
        this.rocks = 60;
        this.attackspeed = 0.3;

        function randarray(quan, maxv, minv){
            var arr = [];
            for(i=0; i<quan+1; i++){  
                arr.push(Math.floor(Math.random() * maxv) + minv);
            };
            return arr;
        };
        this.array = randarray(this.rocks, 648, 72);
        this.velocity = randarray(this.rocks, 3, 2)
        this.scheduleUpdate();

        
        
    },
    update:function(dt){
        if (this.rocks>=this.count){
            if(this.time>=this.attackspeed){
                var nBlock = new Block(this.space, cc.p(size.width+75, this.array[this.count]), this, this.velocity[this.count]);
                this.addChild(nBlock);
                this.count+=1;
                this.time-=this.attackspeed;
            }else{
                this.time+=dt;
            }


        }else{
            if(winOn && this.childrenCount==0){
                ended = true
            }
        }
    }
    
});