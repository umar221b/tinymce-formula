"use strict";
const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const path = require("path");
const del = require("del");

const options = {
  build: {
    tasks: [
      "clean",
      "copy:translations",
      "copy:index",
      "copy:langs",
      "copy:images",
      "copy:mathjax",
      "minify:formula",
      "minify:plugin",
      "minify:styles"
    ]
  }
};

const paths = {
  src: {
    plugin: "src/plugin.js",
    styles: ["src/css/*.css"],
    formula: ["src/parameters/*.js", "src/components/*.js", "src/lib/*.js"],
    translations: ["src/translations/*.js"],
    langs: ["src/langs/*.js"],
    images: {
      dir: "src/img",
      files: [
        "formula-editor-icons.png"
      ]
    },
    mathjax: {
      dir: "node_modules/mathjax/unpacked",
      files: [
        "MathJax.js",
        "config/TeX-AMS-MML_SVG.js",
        "jax/input/MathML/config.js",
        "jax/input/TeX/config.js",
        "jax/output/SVG/config.js",
        "jax/output/PreviewHTML/*.js",
        "extensions/mml2jax.js",
        "extensions/tex2jax.js",
        "extensions/fast-preview.js",
        "extensions/MathEvents.js",
        "extensions/MathZoom.js",
        "extensions/MathMenu.js",
        "jax/element/mml/jax.js",
        "extensions/toMathML.js",
        "extensions/TeX/*.js",
        "jax/input/MathML/jax.js",
        "jax/input/TeX/jax.js",
        "jax/output/SVG/jax.js",
        "jax/output/SVG/fonts/TeX/*.js",
        "jax/output/SVG/autoload/*.js",
        "extensions/MathML/mml3.js",
        "extensions/a11y/accessibility-menu.js",
        "extensions/AssistiveMML.js",
        "jax/input/MathML/entities/*.js",
        "jax/element/mml/optable/*.js",
        "extensions/MatchWebFonts.js",
        "extensions/HelpDialog.js",
        "jax/output/SVG/fonts/TeX/Main/Regular/*.js",
        "jax/output/SVG/fonts/TeX/AMS/Regular/*.js",
        "jax/output/SVG/fonts/TeX/Typewriter/Regular/*.js",
        "jax/output/SVG/fonts/TeX/Fraktur/Regular/*.js",
        "jax/output/SVG/fonts/TeX/Fraktur/Bold/*.js",
        "jax/output/SVG/fonts/TeX/Math/BoldItalic/Main.js",
        "jax/output/SVG/fonts/TeX/Caligraphic/Regular/Main.js",
        "jax/output/SVG/fonts/TeX/Caligraphic/Bold/Main.js",
        "jax/output/SVG/fonts/TeX/Main/Italic/*.js",
        "jax/output/SVG/fonts/TeX/Main/Bold/*.js",
        "jax/output/SVG/fonts/TeX/Size3/Regular/Main.js",
        "jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",
        "jax/output/SVG/fonts/TeX/Script/Regular/Main.js",
        "jax/output/SVG/fonts/TeX/Script/Regular/BasicLatin.js",
        "jax/output/SVG/fonts/TeX/Size1/Regular/Main.js",
        "jax/output/SVG/fonts/TeX/SansSerif/Italic/*.js",
        "jax/output/SVG/fonts/TeX/SansSerif/Regular/*.js",
        "jax/output/SVG/fonts/TeX/SansSerif/Bold/*.js",
        "jax/output/SVG/fonts/TeX/Size4/Regular/Main.js"
      ]
    },
    index: {
      dir: "src",
      files: [
        "index.js",
        "index.html"
      ]
    }
  },
  dest: {
    styles: "dist/css",
    formula: "dist/js",
    translations: "dist/js/translations",
    langs: "dist/langs",
    mathjax: "dist/js/mathjax",
    images: "dist/img"
  }
};

gulp.task("clean", function() {
  return del([paths.dest.styles, paths.dest.formula]);
});

gulp.task("copy:translations", function() {
  return copyAndMinify(paths.src.translations, paths.dest.translations);
});

gulp.task("copy:langs", function() {
  return copyAndMinify(paths.src.langs, paths.dest.langs);
});

gulp.task("minify:formula", function() {
  return gulp
    .src(paths.src.formula)
    .pipe(plugins.concat("formula.js"))
    .pipe(gulp.dest(paths.dest.formula))
    .pipe(plugins.rename("formula.min.js"))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.dest.formula));
});

gulp.task("minify:plugin", function() {
  return gulp
    .src(paths.src.plugin)
    .pipe(plugins.rename("plugin.min.js"))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task("minify:styles", function() {
  return gulp
    .src(paths.src.styles)
    .pipe(plugins.concat("formula.css"))
    .pipe(gulp.dest(paths.dest.styles))
    .pipe(plugins.rename("formula.min.css"))
    .pipe(plugins.cleanCss())
    .pipe(gulp.dest(paths.dest.styles));
});

gulp.task("copy:images", function(files, srcFolder, destFolder) {
  return copyTree(
    paths.src.images.files,
    paths.src.images.dir,
    paths.dest.images
  );
});

gulp.task("copy:index", function(files, srcFolder, destFolder) {
  return copyTree(
    paths.src.index.files,
    paths.src.index.dir,
    './dist'
  );
});

gulp.task("copy:mathjax", function() {
  return copyAndMinifyTree(
    paths.src.mathjax.files,
    paths.src.mathjax.dir,
    paths.dest.mathjax
  );
});

gulp.task("build", gulp.series(...options.build.tasks));

let copy = function(src, dest) {
  return gulp
    .src(src)
    .pipe(gulp.dest(dest));
};

let copyTree = function(files, srcFolder, destFolder) {
  let result;
  for (let filePath of files) {
    result = copy(
      path.resolve(srcFolder, filePath),
      path.resolve(destFolder, path.dirname(filePath))
    );
  }
  return result;
};

let copyAndMinify = function(src, dest) {
  return gulp
    .src(src)
    .pipe(plugins.uglify())
    .pipe(gulp.dest(dest));
};

let copyAndMinifyTree = function(files, srcFolder, destFolder) {
  let result;
  for (let filePath of files) {
    result = copyAndMinify(
      path.resolve(srcFolder, filePath),
      path.resolve(destFolder, path.dirname(filePath))
    );
  }
  return result;
};
