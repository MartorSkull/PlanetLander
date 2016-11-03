var PlayerL = cc.Layer.extend({
    ctor:function (space) {
        timecalc=function(distance){
            var maxdistance = size.height;
            var maxtime = 2;
            var newtime = (distance*maxtime) / maxdistance
            return newtime;
        };
        //////////////////////////////
        // 1. super init first
        this._super();
        this.space=space;

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        var mid = cc.p(100, size.height / 2);
        var bot = cc.p(100, 0);
        var top = cc.p(100, size.height);

    

        this.player = new Player(this.space, this);
        this.player.attr({
            x: 100,
            y: size.height / 2
        });
        this.addChild(this.player, 0);

        var eventos = cc.EventListener.create({
            event: cc.EventListener.MOUSE,
            onMouseDown: function(event){
                if(event.getButton()==cc.EventMouse.BUTTON_LEFT){
                    var target = event.getCurrentTarget();
                    //cc.log(target.y +"/" +timecalc(size.height-target.y) +"/"+size.height/2+ " down");
                    if(target.getNumberOfRunningActions() != 0){
                        target.stopActionByTag("up");
                    }

                    var action_down = cc.moveTo(timecalc(size.height-target.y), top);
                    action_down.setTag("down");
                    if(!ended){
                        target.runAction(action_down);
                    }
                }
            },
            onMouseUp: function(event){
                if(event.getButton()==cc.EventMouse.BUTTON_LEFT){
                    var target = event.getCurrentTarget();
                    //cc.log(target.y +"/" +timecalc(size.height+target.y) +"/"+size.height/2+ " down");
                    if(target.getNumberOfRunningActions() != 0){
                        target.stopActionByTag("down");
                    }
                    var action_down = cc.moveTo(2-(timecalc(size.height-target.y)), bot);
                    action_down.setTag("up");
                    if(!ended){
                        target.runAction(action_down);
                    }
                }
            }
        });
        cc.eventManager.addListener(eventos.clone(), this.player);

        var shot = cc.EventListener.create({
            event: cc.EventListener.MOUSE,
            onMouseScroll: function(event){                
                var target = event.getCurrentTarget();
                target.shoot();
            }
        });
        cc.eventManager.addListener(shot.clone(), this.player);
        
        if(hardwin){
            this.space.addCollisionHandler(ColType.player, ColType.block,this.collisionWithMap.bind(this), null, null, null);
        };
        if(debug){
            this._debugNode = new cc.PhysicsDebugNode(this.space);
            this.addChild(this._debugNode, 10);
        };
        
        this.scheduleUpdate();
        return true;
    },
    update:function(dt){
        if(ended){
            this.player.stopActionByTag("up");
            this.player.stopActionByTag("down");
            var action = new cc.MoveTo (1.5, cc.p(size.width+72, size.height/2))
            this.player.runAction(action);
            this.unscheduleUpdate();
        }  
    },
    collisionWithMap:function(arbiter, space){
        cc.director.runScene(new GameOver());
    }
});