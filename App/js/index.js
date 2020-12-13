// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("53.333333333333336em")
                .setTop("0.7619047619047619em")
                .setWidth("4.571428571428571em")
                .setHeight("4.114285714285714em")
                .setSrc("{/}img/default-avatar.gif")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.923809523809524em")
                .setHeight("7.923809523809524em")
                .setSrc("{/}img/scratch beta logo.png")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});