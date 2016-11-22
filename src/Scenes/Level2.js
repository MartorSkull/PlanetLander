var Level2 = cc.Scene.extend({
    space : null,
    initPhysics : function(){
        this.space = new cp.Space();
    },
    
    update : function(dt){
        this.space.step(dt);
    }, 
    
    onEnter : function () {
        this._super();
        
        level=2;
        this.initPhysics();
        this.addChild(new BackgroundL(0), 0);
        this.addChild(new EnemyL(this.space),1);
        this.addChild(new PlayerL(this.space), 2);
        this.scheduleUpdate();
    }
});