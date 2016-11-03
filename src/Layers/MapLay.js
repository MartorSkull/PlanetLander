var Map = cc.Layer.extend({ 
    ctor:function (space){
        this._super();
        this.space = space;
        this.arPosy = [72, 216, 360, 504, 648];
        this.blockSpwn = [];
        
        function randmap(){
            var arr = [];
            var arPos = [72, 216, 360, 504, 648];
            for(i=0; i<50; i++){
                arr.push(arPos[Math.floor(Math.random()*4)]);  
            };
            return arr;
        };
        cc.log(randmap());
        this.map=randmap();
        
        for(i=0; i<this.arPosy.length; i++){
            var aux = new BlockSpawner(this.space, this,new cc.p(size.width+100,this.arPosy[i]), this.map);
            this.blockSpwn.push(aux);
            this.addChild(aux);
        };
        this.scheduleUpdate();
    },
    update:function (dt){
        if (this.getChildrenCount() != 6){
            for(i=0; i<this.blockSpwn.length; i++){
                this.blockSpwn[i].spawn();
            };
        };
        if(winOn){
            if (this.getChildrenCount() == 0){
                ended=true;
                this.addChild(new win(), 3);
            };
        };
    }
});