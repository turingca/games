
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var layer1=new cc.Layer();
        var background=new cc.Sprite(res.background_png);
        background.setPosition(size.width/2,size.height/2);
        layer1.addChild(background);
        this.addChild(layer1);

        var layer2=new cc.Layer();
        var earth1=new cc.Sprite(res.earth1_png);
        earth1.setPosition(size.width/2,size.height/2-400);
        earth1.setAnchorPoint(0.5,0.5);
        this.schedule(function(f){
            earth1.setRotation(earth1.getRotation()+0.08);
        });
        layer2.addChild(earth1);
        this.addChild(layer2);

        var layer3=new cc.Layer();
        var startbutton=new cc.Sprite(res.startbutton_png);
        startbutton.setPosition(size.width/2,size.height/2-260);
        layer3.addChild(startbutton);
        this.addChild(layer3);

        var layer4=new cc.Layer();
        var eco=new cc.Sprite(res.eco_png);
        eco.setPosition(size.width-150,size.height-150);
        layer4.addChild(eco);
        this.addChild(layer4);

        var layer5=new cc.Layer();
        var help=new cc.Sprite(res.help_png);
        help.setPosition(80,size.height-100);
        layer5.addChild(help);
        this.addChild(layer5);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

