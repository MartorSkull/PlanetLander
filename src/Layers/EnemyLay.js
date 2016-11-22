var EnemyL = cc.Layer.extend({
    ctor:function(space){
        this._super();
        ended=false;
        this.space = space;
        this.scheduleUpdate();
        this.count = 0;
        this.num=0;
        this.space.addCollisionHandler(ColType.enemy, ColType.missilP, this.collision.bind(this), null, null, null);
        },
    update:function(dt){
        if (this.count == 5){
            if(this.num<5){
                var x = Math.floor((Math.random()*400)+800);
                var y = Math.floor((Math.random() * 500) + 100);
                var enemy = new Enemy(this.space, cc.p(1400, 360), this);
                var action = cc.moveTo(1, cc.p(x, y));
                enemy.runAction(action);
                this.addChild(enemy);
                this.num+=1
                this.count = 6;
            }else{
                ended=true;
            }
        }else{
            this.count += 1;
        };
    },
    collision:function(arbiter, space){
        if(arbiter.body_a.ajar=="Enemigo"){
            arbiter.body_a.parent.liferest();
            arbiter.body_b.parent.del();
        }else{
            arbiter.body_b.parent.liferest();
            arbiter.body_a.parent.del();
        }
    }    
});