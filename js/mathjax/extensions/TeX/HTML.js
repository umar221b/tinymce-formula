MathJax.Extension["TeX/HTML"]={version:"2.7.9"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX;t.Definitions.Add({macros:{href:"HREF_attribute",class:"CLASS_attribute",style:"STYLE_attribute",cssId:"ID_attribute"}},null,!0),t.Parse.Augment({HREF_attribute:function(t){var e=this.GetArgument(t),t=this.GetArgumentMML(t);this.Push(t.With({href:e}))},CLASS_attribute:function(t){var e=this.GetArgument(t),t=this.GetArgumentMML(t);null!=t.class&&(e=t.class+" "+e),this.Push(t.With({class:e}))},STYLE_attribute:function(t){var e=this.GetArgument(t),t=this.GetArgumentMML(t);null!=t.style&&(";"!==e.charAt(e.length-1)&&(e+=";"),e=t.style+" "+e),this.Push(t.With({style:e}))},ID_attribute:function(t){var e=this.GetArgument(t),t=this.GetArgumentMML(t);this.Push(t.With({id:e}))},GetArgumentMML:function(t){t=this.ParseArg(t);return t.inferred&&1==t.data.length?t=t.data[0]:delete t.inferred,t}}),MathJax.Hub.Startup.signal.Post("TeX HTML Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/HTML.js");