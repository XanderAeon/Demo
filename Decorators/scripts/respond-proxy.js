!function(a,b,c){function d(b){return a.encodeURIComponent(b)}function e(c,e){function g(){var b;try{b=h.contentWindow.name}catch(c){}b?(h.src="about:blank",h.parentNode.removeChild(h),h=null,l&&(l=null,a.CollectGarbage&&a.CollectGarbage()),e(b)):a.setTimeout(g,100)}var h,l;"ActiveXObject"in a?(l=new ActiveXObject("htmlfile"),l.open(),l.write('<iframe id="x"></iframe>'),l.close(),h=l.getElementById("x")):(h=b.createElement("iframe"),h.style.cssText="position:absolute;top:-99em",i.insertBefore(h,i.firstElementChild||i.firstChild)),h.src=f(j)+"?url="+d(k)+"&css="+d(f(c)),a.setTimeout(g,500)}function f(a){var b=document.createElement("div"),c=a.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;");return b.innerHTML='<a href="'+c+'">x</a>',b.firstChild.href}function g(){if(~!k.indexOf(location.host)){var a=b.createElement("div");a.innerHTML='<a href="'+k+'"></a>',i.insertBefore(a,i.firstElementChild||i.firstChild),k=a.firstChild.href,a.parentNode.removeChild(a),a=null}}function h(){for(var a=b.getElementsByTagName("link"),c=0,d=a.length;d>c;c++){var f=a[c],g=a[c].href,h=/^([a-zA-Z:]*\/\/(www\.)?)/.test(g),i=l&&!h||h;f.rel.indexOf("stylesheet")>=0&&i&&!function(a){e(g,function(b){a.styleSheet.rawCssText=b,respond.update()})}(f)}}var i=b.documentElement,j=b.getElementById("respond-proxy").href,k=(b.getElementById("respond-redirect")||location).href,l=b.getElementsByTagName("base")[0];respond.mediaQueriesSupported||(g(),h())}(window,document);