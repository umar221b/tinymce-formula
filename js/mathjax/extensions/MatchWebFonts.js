!function(l,i){var s=MathJax.Hub.CombineConfig("MatchWebFonts",{matchFor:{"HTML-CSS":!0,NativeMML:!0,SVG:!0},fontCheckDelay:500,fontCheckTimeout:15e3});MathJax.Extension.MatchWebFonts={version:"2.7.9",config:s},l.Register.StartupHook("HTML-CSS Jax Ready",function(){var t=MathJax.OutputJax["HTML-CSS"],a=t.postTranslate;t.Augment({postTranslate:function(t,e){return!e&&s.matchFor["HTML-CSS"]&&this.config.matchFontHeight&&i.timer.start(i,["checkFonts",this,t.jax[this.id]],s.fontCheckDelay,s.fontCheckTimeout),a.apply(this,arguments)},checkFonts:function(t,e){if(!t.time(function(){})){for(var a,i,s,o=[],n=!1,r=0,h=e.length;r<h;r++)(script=e[r]).parentNode&&script.MathJax.elementJax&&script.parentNode.insertBefore(this.EmExSpan.cloneNode(!0),script);for(r=0,h=e.length;r<h;r++)(script=e[r]).parentNode&&(n=!0,(a=script.MathJax.elementJax)&&(s=(i=script.previousSibling).firstChild.offsetHeight/60,i=i.lastChild.lastChild.offsetHeight/60,0!==s&&"NaN"!==s||(s=this.defaultEx,i=this.defaultEm),s===a.HTMLCSS.ex&&i===a.HTMLCSS.em||(s=s/this.TeX.x_height/i,(s=Math.floor(Math.max(this.config.minScaleAdjust/100,s)*this.config.scale))/100!==a.scale&&(o.push(script),e[r]={}))));for(r=0,h=(e=e.concat(o)).length;r<h;r++)(script=e[r])&&script.parentNode&&script.MathJax.elementJax&&script.parentNode.removeChild(script.previousSibling);o.length&&l.Queue(["Rerender",l,[o],{}]),n&&setTimeout(t,t.delay)}}})}),l.Register.StartupHook("SVG Jax Ready",function(){var t=MathJax.OutputJax.SVG,a=t.postTranslate;t.Augment({postTranslate:function(t,e){return!e&&s.matchFor.SVG&&i.timer.start(i,["checkFonts",this,t.jax[this.id]],s.fontCheckDelay,s.fontCheckTimeout),a.apply(this,arguments)},checkFonts:function(t,e){if(!t.time(function(){})){for(var a,i,s=[],o=!1,n=0,r=e.length;n<r;n++)(script=e[n]).parentNode&&script.MathJax.elementJax&&script.parentNode.insertBefore(this.ExSpan.cloneNode(!0),script);for(n=0,r=e.length;n<r;n++)(script=e[n]).parentNode&&(o=!0,(a=script.MathJax.elementJax)&&(i=0!==(i=script.previousSibling.firstChild.offsetHeight/60)&&"NaN"!==i?i:this.defaultEx)!==a.SVG.ex&&(s.push(script),e[n]={}));for(n=0,r=(e=e.concat(s)).length;n<r;n++)(script=e[n]).parentNode&&script.MathJax.elementJax&&script.parentNode.removeChild(script.previousSibling);s.length&&l.Queue(["Rerender",l,[s],{}]),o&&setTimeout(t,t.delay)}}})}),l.Register.StartupHook("NativeMML Jax Ready",function(){var t=MathJax.OutputJax.NativeMML,e=t.postTranslate;t.Augment({postTranslate:function(t){!l.Browser.isMSIE&&s.matchFor.NativeMML&&i.timer.start(i,["checkFonts",this,t.jax[this.id]],s.fontCheckDelay,s.fontCheckTimeout),e.apply(this,arguments)},checkFonts:function(t,e){if(!t.time(function(){})){for(var a=[],i=[],s=[],o=0,n=e.length;o<n;o++)(r=e[o]).parentNode&&r.MathJax.elementJax&&r.parentNode.insertBefore(this.EmExSpan.cloneNode(!0),r);for(o=0,n=e.length;o<n;o++){var r=e[o];if(r.parentNode)if(d=r.MathJax.elementJax){var h=document.getElementById(d.inputID+"-Frame"),l=h.getElementsByTagName("math")[0];if(l){var c,d=d.NativeMML,f=r.previousSibling,p=f.firstChild.offsetWidth/60,f=f.lastChild.offsetWidth/60,x=(0!==p&&"NaN"!==p||(p=this.defaultEx,f=this.defaultMEx),p!==d.ex);if(!x&&f==d.mex||(c=this.config.matchFontHeight&&1<f?p/f:1,(c=Math.floor(Math.max(this.config.minScaleAdjust/100,c)*this.config.scale))/100!==d.scale&&s.push([h.style,c]),d.scale=c/100,d.fontScale=c+"%",d.ex=p,d.mex=f),"scrollWidth"in d&&(x||d.scrollWidth!==l.firstChild.scrollWidth)&&(d.scrollWidth=l.firstChild.scrollWidth,a.push([l.parentNode.style,d.scrollWidth/d.ex/d.scale])),l.MathJaxMtds)for(var u=0,m=l.MathJaxMtds.length;u<m;u++)!l.MathJaxMtds[u].parentNode||!x&&l.MathJaxMtds[u].firstChild.scrollWidth===d.mtds[u]||(d.mtds[u]=l.MathJaxMtds[u].firstChild.scrollWidth,i.push([l.MathJaxMtds[u],d.mtds[u]/d.ex]))}}}for(o=0,n=e.length;o<n;o++)(r=e[o]).parentNode&&r.MathJax.elementJax&&r.parentNode.removeChild(r.previousSibling);for(o=0,n=s.length;o<n;o++)s[o][0].fontSize=s[o][1]+"%";for(o=0,n=a.length;o<n;o++)a[o][0].width=a[o][1].toFixed(3)+"ex";for(o=0,n=i.length;o<n;o++){var M=(M=i[o][0].getAttribute("style")).replace(/(($|;)\s*min-width:).*?ex/,"$1 "+i[o][1].toFixed(3)+"ex");i[o][0].setAttribute("style",M)}setTimeout(t,t.delay)}}})}),l.Startup.signal.Post("MatchWebFonts Extension Ready"),i.loadComplete("[MathJax]/extensions/MatchWebFonts.js")}(MathJax.Hub,MathJax.Ajax);