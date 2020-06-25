# JavaScript 30 Lessons Learned

Here is a summary of my lessons learned from each project.

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
- [5. Flex Panel Gallery](#flex-panel-gallery)

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