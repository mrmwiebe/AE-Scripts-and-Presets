{
    function PixelCompScript(thisObj)
    {
        function PixelCompScript_buildUI(thisObj)
        {
            //Figures out if this is being run as a Panel or a floating Window
            var PixelCompPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Pixel Comp", undefined, {resizeable:true});
            
            //Where the UI layout stuff should go
            res = "group{orientation:'column',\
                            groupOne: Group {orientation:'row',\
                                PrefixLabel: StaticText{text:'Comp Prefix:'},\
                                PrefixField: EditText{text:'Pixel Comp - '},\
                             },\
                            groupTwo: Group {orientation:'row',\
                                MakePixelCompButton: Button{text: 'Make Pixel Comp'},\
                                PixelCompSizeDropDownList: DropDownList{properties:{items:['2x', '4x', '8x', '16x']}},\
                            },\
                            groupThree: Group {orientation:'row',\
                                PixelCompHelp: Button{text: 'Help'},\
                                PixelCompAbout: Button{text: 'About'},\
                            },\
                      }";
            
            //Add resource string to the panel
            PixelCompPanel.grp = PixelCompPanel.add(res);
            
            // Assign controls to variables for ease later
            var prefix = PixelCompPanel.grp.groupOne.PrefixField;
            
            var makePixelCompsButton = PixelCompPanel.grp.groupTwo.MakePixelCompButton;
            var sizeDropdown = PixelCompPanel.grp.groupTwo.PixelCompSizeDropDownList;

            var help = PixelCompPanel.grp.groupThree.PixelCompHelp;
            var about = PixelCompPanel.grp.groupThree.PixelCompAbout;

            // Dropdown list default selection of 'Item 2'
            sizeDropdown.selection = 1;
            
            //Setup panel sizing and make panel resizable
            PixelCompPanel.layout.layout(true);
            PixelCompPanel.grp.minimumSize = PixelCompPanel.grp.size;
            PixelCompPanel.layout.resize();
            PixelCompPanel.onResizing = PixelCompPanel.onResize = function () {this.layout.resize();}
            
            //---------------------
            // SCRIPT CODE
            //---------------------
            
            //alert("");
            
            //Default
            var resizeAmnt = 4;
            
            //Dropdown
            sizeDropdown.onChange = function() {
                if(this.selection == 0) {
                    resizeAmnt = 2;
                } else if(this.selection == 1) {
                    resizeAmnt = 4;
                } else if(this.selection == 2) {
                    resizeAmnt = 8;
                } else if(this.selection == 3) {
                    resizeAmnt = 16;
                }
            
                alert('changed to: '+resizeAmnt);
            };
        
            //Button
            makePixelCompsButton.onClick = makePixComp;
            help.onClick = showHelp;
            about.onClick = showAbout;

            //Meat and potatoes
            function makePixComp() {

                //Find all the juicy layers that are selected
                var thisComp = app.project.activeItem;
                var layers = thisComp.selectedLayers;
                
                //Make sure that all the conversions are one undo
                app.beginUndoGroup("PixelComp");
                
                if(layers.length > 0) {
                    
                    for(var i = 0; i < layers.length; i++) {
                        
                        var thisLayer = layers[i];    
                        var newScale = 100*resizeAmnt;
                        
                        //Precomp dat layer
                        var pixComp = thisComp.layers.precompose([thisLayer.index], prefix.text + thisLayer.name, false);
                        
                        //Reference the new layer inside the pixComp
                        var pixLayer = pixComp.layers[1];    
                        
                        //change the new layer's quality to draft for that pixel perfect look!
                        pixLayer.quality = LayerQuality.DRAFT;
                        
                        pixLayer.scale.setValue([newScale, newScale, newScale]);
                        pixLayer.anchorPoint.setValue([0, 0]);
                        pixLayer.position.setValue([0, 0, 0]);
                        
                        //Resize the Comp
                        pixComp.width = pixComp.width * resizeAmnt;
                        pixComp.height = pixComp.height * resizeAmnt;
                        
                        //Resize the compositions scale
                        //Props to Dan Ebberts if this works
                        var s = thisComp.layer(pixComp.name).property("Scale").value;
                        thisComp.layer(pixComp.name).property("Scale").setValue([s[0]/resizeAmnt,s[1]/resizeAmnt] );

                        //DONE.
                    }
                    
                } else {
                    alert("Select at least one layer please! :/");
                }
            
                app.endUndoGroup("PixelComp");

            }
        
            function showAbout() {
                alert("---PIXEL COMP---\
---build 0009---\
\
Script by\
Marlon Wiebe - mwiebe.com\
\
Thanks to\
Kert Gartner - kertgartner.com\
for showing me the technique");
            }
        
            function showHelp() {
                alert("¯\\_(ツ)_/¯");
            }

            //----------------------------
            // END SCRIPT CODE
            //----------------------------   
            
            return PixelCompPanel;
        }
        
        var PixelCompScriptPal = PixelCompScript_buildUI(thisObj);
        
        //Checks to see if this is floating Window and shows it if it's not a Panel
        if(PixelCompScriptPal != null && PixelCompScriptPal instanceof Window)
        {
            //Yo, this is a normal floating window, and not run from ScriptUIPanels folder.  Treat it nice.
            PixelCompScriptPal.center();
            PixelCompScriptPal.show();
        }
     }
    PixelCompScript(this);
  }  
    