var Map = cc.Layer.extend({ 
    ctor:function (space){
        this._super();
        this.space = space;
        this.count = 0;
        this.aux = 0;
        this.aux1 = 119;
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
        var exp = Math.floor((Math.random() * 200) + 100)/(100*velocidad);
        if(this.count>=exp){
            var x = Math.floor(Math.random()*2);
            if (x==0){
                var nBlock = new Block(this.space, this, cc.p(1280, this.array[this.aux]));
                this.addChild(nBlock);
                this.aux+=1;
            }else{
                var nBlock1 = new Block(this.space, this, cc.p(1280, this.array[this.aux1]));
                this.addChild(nBlock1);
                this.aux1-=1;
            }
            this.count=0;
        }else{
            this.count+=dt;
        };
    }
    
});