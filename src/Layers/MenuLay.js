var MenuL = cc.Layer.extend({
    ctor:function(){
        this._super();
        var menuItem1 = new cc.MenuItemFont("Play", play);
        menuItem1.setPosition(cc.p(240, 360));
        var menuItem2 = new cc.MenuItemFont("Level2", next);
        menuItem2.setPosition(cc.p(280, 300));
        var menuItem3 = new cc.MenuItemFont("Level3", next2);
        menuItem3.setPosition(cc.p(320, 240));
        
        var menu = new cc.Menu(menuItem1, menuItem2, menuItem3);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu);
        
        function play(){
            cc.director.runScene(new Level1());
        }
        function next(){
            cc.director.runScene(new Level2());   
        }
        function next2(){
            cc.director.runScene(new Level3());
        }
    }
});