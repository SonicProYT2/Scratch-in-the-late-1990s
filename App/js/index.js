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
                .setLeft("36.57142857142857em")
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
                .setWidth("7.161904761904762em")
                .setHeight("6.4em")
                .setSrc("{/}img/scratch beta logo.png")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setCaption("File")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button11")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setCaption("Edit")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button12")
                .setDirtyMark(false)
                .setLeft("12.19047619047619em")
                .setTop("0.7619047619047619em")
                .setCaption("Insert")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button13")
                .setDirtyMark(false)
                .setLeft("16em")
                .setTop("0.7619047619047619em")
                .setCaption("View")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setDirtyMark(false)
                .setLeft("17.523809523809526em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Project Name")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput18")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("43.42857142857143em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Color Picker")
                .setType("color")
            );
            
            append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"xui_ui_richeditor1")
                .setDirtyMark(false)
                .setLeft("35.04761904761905em")
                .setTop("3.8095238095238093em")
                .setWidth("21.333333333333332em")
                .setHeight("26em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Project Editor")
                .setLabelHAlign("left")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel5")
                .setDock("none")
                .setLeft("0.7619047619047619em")
                .setTop("6.857142857142857em")
                .setWidth("28.266666666666666em")
                .setHeight("22.933333333333334em")
                .setCaption("Preview")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button20")
                .setDirtyMark(false)
                .setLeft("1.5238095238095237em")
                .setTop("31.238095238095237em")
                .setCaption("More Scratch!")
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