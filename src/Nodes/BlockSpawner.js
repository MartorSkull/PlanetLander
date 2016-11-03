var BlockSpawner = cc.Node.extend({
    ctor:function (space, father, pos, arr){
        this._super();
        this.space=space;
        this.father=father;
        this.pos=pos;
        this.arr=arr;
        this.count=0;
        this.attr({
            x:pos.x,
            y:pos.y
        });
    },
    spawn:function (){
        if(this.arr.length>this.count){
            if(this.arr[this.count]==this.pos.y){
                var aux = new Block(this.space, this.father, cc.p(this.x, this.y));
                this.father.addChild(aux);
            };
        }else{
            this.remove();
        };
        this.count++;
    },
    remove:function (){
        this.release();
        this.father.removeChild(this);
        this.unscheduleUpdate();
    }
});