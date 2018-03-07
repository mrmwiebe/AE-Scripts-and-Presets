{
    function myScript(thisObj)
    {
        function myScript_buildUI(thisObj)
        {
            //Figures out if this is being run as a Panel or a floating Window
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "My Window Name", undefined, {resizeable:true});
            
            //Where the UI layout stuff should go
            res = "group{orientation:'column',\
                            groupOne: Group {orientation:'row',\
                                myButton: Button{text: 'Button Name'},\
                                myDropDownList: DropDownList{properties:{items:['Item 1', 'Item 2']}},\
                            },\
                      }";
            
            //Add resource string to the panel
            myPanel.grp = myPanel.add(res);
            
            // Assign controls to variables for ease later
            var myButton = myPanel.grp.groupOne.myButton;
            var myDropDown = myPanel.grp.groupOne.myDropDownList;
            
            // Dropdown list default selection of 'Item 2'
            myDropDownList.selection = 1;
            
            //Setup panel sizing and make panel resizable
            myPanel.layout.layout(true);
            myPanel.grp.minimumSize = myPanel.grp.size;
            myPanel.layout.resize();
            myPanel.onResizing = myPanel.onResize = function () {this.layout.resize();}
            
            //---------------------
            // SCRIPT CODE
            //---------------------
            
            return myPanel;
        }
        
        var myScriptPal = myScript_buildUI(thisObj);
        
        //Checks to see if this is floating Window and shows it if it's not a Panel
        if(myScriptPal != null && myScriptPal instanceof Window)
        {
            //Yo, this is a normal floating window, and not run from ScriptUIPanels folder.  Treat it nice.
            myScriptPal.center();
            myScriptPal.show();
        }
     }
    myScript(this);
  }  