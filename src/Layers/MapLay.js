var Map = cc.Layer.extend({ 
    ctor:function (space){
        this._super();
        this.space = space;
        this.count = 0;
        this.aux = 0;
        this.aux1 = 119;
        this.max=50;
        this.num=0;
        function randmap(){
            var arr = [];
            for(i=0; i<120; i++){  
                arr.push(Math.floor(Math.random() * 648) + 72);
            };
            return arr;
        };
        this.array = randmap();
        this.array1 = randmap();
        this.scheduleUpdate();

        
        
    },
    update:function(dt){
        var velocidad = 4;
        if(this.num<=this.max){
            if(this.count>=0.5){
                var x = Math.floor(Math.random()*2);
                if (x==0){
                    var nBlock = new Block(this.space, cc.p(1280, this.array[this.aux]), this);
                    this.addChild(nBlock);
                    this.aux+=1;
                }else{
                    var nBlock1 = new Block(this.space, cc.p(1280, this.array[this.aux1]), this);
                    this.addChild(nBlock1);
                    this.aux1-=1;
                }
                this.count=0;
                this.num+=1;
            }else{
                this.count+=dt;
            };
        }else{
            if(winOn && this.childrenCount==0){
                ended=true;
            };
        }
    }
    
});