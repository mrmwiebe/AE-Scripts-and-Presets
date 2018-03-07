# AE-Scripts-and-Presets

## Media Encoder Presets

This is a collection of presets I've made based on requirements for different video game console publishers etc.

## Scripts

A collection (well one so far) of scripts I've made.  The source folder contains the source code for any scripts.  Details below.

### Dockable Panel Base

This is a template to base other dockable scripts on.  I found it convoluted to create this when it seems like it's the same for any panel.  Just take this and build on it!

### Pixel Comp

If you work with any pixel art, this is a super handy script to use.  

By default After Effects softens the edges of your footage, which is undesirable if you want those crisp pixels.  Kert Gartner taught me that if you precomp your footage, scale it by 4x inside the pre-comp and set the footage to draft mode, the pixels stay crisp on the precomped footage!  It's a bit of a pain when you're working with a lot of footage, so this just automates the process. :)

## Presets

This is a collection of custom presets that I found help a lot with my After Effects projects.  Just dump the folder into C:\Program Files\Adobe\Adobe After Effects CC 2018\Support Files\Presets and drag-n-drop them onto your layers!

Details of each preset is below.

### Blink

_Slider: Rate_  
_Slider: Offset_  

Makes the layer's opacity turn off an on again at the effect's rate.  Offset is a slider as well.

### Constant Rotation

_Slider: Constant Rotation Speed_  

Does what it says on the tin.  Makes the layer spin on the Z-Axis at the effect slider speed.

### Easy Zoom

_Slider: Multiplier_  

Will scale the layer at a constant speed based on the layer's in point.  I use this one all the time.

### FilmFade-In & FilmFade-Out

Use on an adjustment layer to fade your video so the highlights go last for a more filmic look.  Similar to Video Copilot's FilmFade, but adjusted slightly.

### Fire Wave

Preset I use to animate fire illustrations.  Used on a Crypt of the Necrodancer cutscene.

### Glow Highlights

Pulls the highlights out and makes them shine.  Used on Necrodancer cutscene as well.

### Parallax

_Slider: Parallax Amount_  

Used to make 2D Parallax scenes.  Create a null named "Parallax" then drag this preset on any layer you want to move in parallax, then move the null to move all parallaxed layers.  Adjust "Parallax Amount" accordingly: higher numbers move more = appearing closer to camera.

### Quick Vignette

Uses a Lumetri setting for a quick vignette.  Usually used on an adjustment layer.

### Separate Scale Dimentions

_Slider: Scale X_  
_Slider: Scale Y_

Sometimes you just wanna animate a layer's scale parameters separately (which you can't do normally).  This just splits it into two effect sliders you can then keyframe.

### Shake

_Slider: Shakes per Second_
_Slider: Shake Amount_

A quick and easy layer shaker!  Keyframe the sliders even for some nice screen shake.

### Sketchy Animation

Meant for animations and drawings that have black outlines.  It pulls the black outlines out and wobbles them.

### Typey Typey

_Slider: Typing Speed_
_Checkbox: Show cursor_
_Slider: Cursor Blink Speed_

Use on a text layer to type it out and display a cursor.

### Wiggle Scale Uniform

_Slider: Uniform Scale_

Links scale together and you can use the slider to wiggle without worrying about it scaling parameters separately.