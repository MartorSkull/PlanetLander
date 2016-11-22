var MenuL = cc.Layer.extend({
    ctor:function(){
        this._super();

        var menuItem1 = new cc.MenuItemFont("Play", play);
        menuItem1.setPosition(center);
        var menuItem2 = new cc.MenuItemFont("Prueba", win);
        menuItem2.setPosition(cc.p(280, 300));
        var menuItem3 = new cc.MenuItemFont("Level2", next);
        menuItem3.setPosition(cc.p(320, 240));
        var menuItem4 = new cc.MenuItemFont("Level3", next2);
        menuItem4.setPosition(cc.p(360, 180));
        
        var menu = new cc.Menu(menuItem1, menuItem2, menuItem3, menuItem4);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu);
        
        function play(){
            cc.director.runScene(new Level1());
        }
        function win(){
            cc.director.runScene(new Cine1());
        }
        function next(){
            cc.director.runScene(new Level2());   
        }
        function next2(){
            cc.director.runScene(new Level3());
        }
    }
});