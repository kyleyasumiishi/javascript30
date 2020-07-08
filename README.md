# JavaScript 30 Lessons Learned

Here is a summary of my lessons learned from each project.

Keep Learning/Don't Fully Understand Yet
- display: block, display: inherit, display: inline-block
- background shorthand
- transition
- background-size: cover
- user agent stylesheet (https://www.w3schools.com/cssref/css_default_values.asp, https://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements/6867287#6867287)

- [1. Drum Kit](#1-drum-kit)
    - [HTML data-* Attribute](#html-data-attribute)
    - [HTML kbd Element](#html-kbd-element)
    - [HTML meta charset Attribute](#html-meta-charset-attribute)
    - [HTML lang Attribute](#html-lang-attribute)
    - [CSS rem Unit](#css-rem-unit)
    - [CSS rgba Function](#css-rgba-function)
- [2. CSS Clock](#css-clock)
- [3. CSS Variables](#css-variables)
- [4. Array Cardio 1](#array-cardio-1)
- [5. Flex Panel Gallery](#5-flex-panel-gallery)
    - [CSS box-sizing Property](#css-box-sizing-property)
    - [CSS * Selector](#css-*-selector)
    - [CSS overflow Property](#css-overflow-property)
    - [CSS box-shadow Property](#css-box-shadow-property)
    - [CSS transition Property](#css-transition-property)

[Back to top](#contents)
****************

## 1. Drum Kit

### HTML data-* Attribute

[Link](https://www.w3schools.com/tags/att_data-.asp)

The ```data-*``` attribute is used to store custom data private to the page or application. This stored data can then be accessed via JavaScript.

```
<div data-key="65" class="key></div>
<audio data-key="65" src="sounds/clap.wav"></audio>
```

### HTML kdb Element

[Link](https://www.w3schools.com/tags/tag_kbd.asp)

The ```kbd``` tag is used to define keyboard input. The content inside is displayed in the browser's default monospace font.

```
<kbd>A</kbd>
```

### HTML meta charset Attribute

[Link](https://www.w3schools.com/tags/att_meta_charset.asp)

The ```meta charset``` attribute specifies the character encoding for the HTML document. In theory, any character encoding can be used, but not browser understands all of them. The more widely a character encoding is used, the better the chance that a browser will understand it.

```
<meta charset="UTF-8">
```

### HTML lang Attribute

[Link](https://www.w3schools.com/tags/att_lang.asp)

The ```lang``` attribute specifies the language of the element's content. Common examples are "en" for English, "es" for Spanish, "fr" for French, etc.

```
<html lang="en">
```

### CSS rem Unit

[Link](https://www.w3schools.com/cssref/css_units.asp)

The ```rem``` unit specifies a length relative to the ```font-size``` of the root element. ```rem``` stands for "root em".

```
:root {
    font-size: 20px;
}
.key {
    border: .4rem solid black;
    border-radius: .5rem;
    margin: 1rem;
}
```

### CSS rgba Function

[Link](https://www.w3schools.com/cssref/func_rgba.asp)

The ```rgba()``` function define colors using the Red-green-blue-alpha (RGBA) model. Alpha defines the opacity as a number between 0.0 (fully transparent) and 1.0 (fully opaque).

```
.key {
    background: rgba(0, 0, 0, 0.4);
}
```

## 5. Flex Panel Gallery

### CSS box-sizing Property

[Link](https://www.w3schools.com/css/css3_box-sizing.asp)

The ```box-sizing``` property allows us to include the padding and border in an element's total width and height. By default, the actual width and height of an element equals the width/heigh + padding + border. 

If you set ```box-sizing: border-box``` on an element, padding and border are included in the width and height.

```
html {
    box-sizing: border-box
}
```

### CSS * Selector

[Link](https://www.w3schools.com/cssref/sel_all.asp)

The ```*``` selector selects all elements. It can also select all elements inside another element.

```
*, *:before, *:after {
    box-sizing: inherit;
}
```

### CSS Overflow Property

[Link](https://www.w3schools.com/css/css_overflow.asp)

The ```overflow``` property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area. 

The default is ```visible```, which means the overflow is not clipped and the content renders outside the element's box.
```hidden``` - The overflow is clipped, and the rest of the content will be invisible.
```scroll``` - The overflow is clipped, and a scrollbar is added to see the rest of the content
```auto``` - Simil to ```scroll```, but it adds scrollbars only when necessary.

```
.panels {
    overflow: hidden;
}
```

### CSS box-shadow Property

[Link](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

The ```box-shadow``` property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

The presence of the ```inset``` keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.

```
.panel {
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
    // inset | offset-x | offset-y | blur-radius | spread-raius | color
}
```

### CSS transition Property

[Link](https://www.w3schools.com/css/css3_transitions.asp)

The ```transition``` property allows you to change property values smoothly, over a given duration. To create a transition effect, you must specify (1) the CSS property you want to add an effect to, and (2) the duration of th effect. The transition effect will start when the specified CSS propery changes value.

The shorthand property ```transition``` includes ```transition-property```, ```transition-duration```, ```transition-timing-function```, and ```transition-delay```.

```
.panel {
    font-size 0.7s cubic-bezier(0.61,-0.19,0.7,-0.11),
    flex 0.7s cubic-bezier(0.61,-0.91,0.7,-0.11),
    background 0.2s
}
.panel p {
    font-size: 2em;
}
```