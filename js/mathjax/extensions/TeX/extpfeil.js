MathJax.Extension["TeX/extpfeil"]={version:"2.7.8"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var o=MathJax.InputJax.TeX,t=o.Definitions;t.Add({macros:{xtwoheadrightarrow:["Extension","AMSmath"],xtwoheadleftarrow:["Extension","AMSmath"],xmapsto:["Extension","AMSmath"],xlongequal:["Extension","AMSmath"],xtofrom:["Extension","AMSmath"],Newextarrow:["Extension","AMSmath"]}},null,!0),MathJax.Hub.Register.StartupHook("TeX AMSmath Ready",function(){MathJax.Hub.Insert(t,{macros:{xtwoheadrightarrow:["xArrow",8608,12,16],xtwoheadleftarrow:["xArrow",8606,17,13],xmapsto:["xArrow",8614,6,7],xlongequal:["xArrow",61,7,7],xtofrom:["xArrow",8644,12,12],Newextarrow:"NewExtArrow"}})}),o.Parse.Augment({NewExtArrow:function(t){var e=this.GetArgument(t),r=this.GetArgument(t),a=this.GetArgument(t);e.match(/^\\([a-z]+|.)$/i)||o.Error(["NewextarrowArg1","First argument to %1 must be a control sequence name",t]),r.match(/^(\d+),(\d+)$/)||o.Error(["NewextarrowArg2","Second argument to %1 must be two integers separated by a comma",t]),a.match(/^(\d+|0x[0-9A-F]+)$/i)||o.Error(["NewextarrowArg3","Third argument to %1 must be a unicode character number",t]),e=e.substr(1),r=r.split(","),a=parseInt(a),this.setDef(e,["xArrow",a,parseInt(r[0]),parseInt(r[1])])}}),MathJax.Hub.Startup.signal.Post("TeX extpfeil Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/extpfeil.js");