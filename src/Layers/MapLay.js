var Map = cc.Layer.extend({ 
    ctor:function (space){
        this._super();
        this.space = space;
        this.count = 0;
        this.aux= 0;
        function randmap(){
            var arr = [];
            for(i=0; i<120; i++){  
                arr.push(Math.floor(Math.random() * 648) + 72);
            };
            return arr;
        };
        this.array = randmap();

        this.scheduleUpdate();
        
        
    },
    update:function(dt){
        if(this.count>=0.2){
            var nBlock = new Block(this.space, this, cc.p(1280, this.array[this.aux]));
            this.addChild(nBlock);
            //cc.log(this.array.length());
            this.aux+=1;
            this.count=0;
        }else{
            this.count+=dt;
        };
    }
});