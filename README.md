# tinyMCE formula plugin

Formula plugin for tinyMCE WYSIWYG editor. Allows user to add equations and formulas inside tinymce.

## Browser compatibility

- IE8+
- Chrome
- Firefox
- Safari
- Opera

## Dependencies

- [tinyMCE](https://www.tiny.cloud/)

## Usage

Install using npm

```javascript
npm install tinymce6-formula
```


Or copy  the source of the plugin to the plugins directory of your tinyMCE installation.

Add the formula plugin to your tinyMCE configuration:

```javascript
plugins: '... formula',
toolbar: '... formula'
```

If you have installed the plugin in a different folder than the `tinymce/plugins` folder then you need to specify
the location where the plugin is installed:

```javascript
external_plugins: {
  formula: "path/to/public/plugin/folder";
}
```

In this case you can remove `formula` from the plugins setting.

## License

MIT licensed

Copyright (C) 2016 iCAP Lyon1, Panagiotis Tsavdaris
Copyright (C) 2022 Umar Alkafaween

The original plugin is published ([here](https://github.com/iCAPLyon1/tinymce-formula)). It is only compatible with tinyMCE4. This plugin is updated to work with versions 5 and 6 of tinyMCE.
