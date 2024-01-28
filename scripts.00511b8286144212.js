var _self=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var g=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,w={},s={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof v?new v(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++o}),e.__id},clone:function e(n,a){var t,r;switch(a=a||{},s.util.type(n)){case"Object":if(r=s.util.objId(n),a[r])return a[r];for(var l in a[r]=t={},n)n.hasOwnProperty(l)&&(t[l]=e(n[l],a));return t;case"Array":return r=s.util.objId(n),a[r]?a[r]:(a[r]=t=[],n.forEach(function(c,i){t[i]=e(c,a)}),t);default:return n}},getLanguage:function(e){for(;e;){var n=g.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(g,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(t){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(t.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var a in n)if(n[a].src==e)return n[a]}return null}},isActive:function(e,n,a){for(var t="no-"+n;e;){var r=e.classList;if(r.contains(n))return!0;if(r.contains(t))return!1;e=e.parentElement}return!!a}},languages:{plain:w,plaintext:w,text:w,txt:w,extend:function(e,n){var a=s.util.clone(s.languages[e]);for(var t in n)a[t]=n[t];return a},insertBefore:function(e,n,a,t){var r=(t=t||s.languages)[e],l={};for(var c in r)if(r.hasOwnProperty(c)){if(c==n)for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);a.hasOwnProperty(c)||(l[c]=r[c])}var d=t[e];return t[e]=l,s.languages.DFS(s.languages,function(y,A){A===d&&y!=e&&(this[y]=l)}),l},DFS:function e(n,a,t,r){r=r||{};var l=s.util.objId;for(var c in n)if(n.hasOwnProperty(c)){a.call(n,c,n[c],t||c);var i=n[c],d=s.util.type(i);"Object"!==d||r[l(i)]?"Array"===d&&!r[l(i)]&&(r[l(i)]=!0,e(i,a,c,r)):(r[l(i)]=!0,e(i,a,null,r))}}},plugins:{},highlightAll:function(e,n){s.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,a){var t={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",t),t.elements=Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),s.hooks.run("before-all-elements-highlight",t);for(var l,r=0;l=t.elements[r++];)s.highlightElement(l,!0===n,t.callback)},highlightElement:function(e,n,a){var t=s.util.getLanguage(e),r=s.languages[t];s.util.setLanguage(e,t);var l=e.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&s.util.setLanguage(l,t);var i={element:e,language:t,grammar:r,code:e.textContent};function d(A){i.highlightedCode=A,s.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,s.hooks.run("after-highlight",i),s.hooks.run("complete",i),a&&a.call(i.element)}if(s.hooks.run("before-sanity-check",i),(l=i.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!i.code)return s.hooks.run("complete",i),void(a&&a.call(i.element));if(s.hooks.run("before-highlight",i),i.grammar)if(n&&u.Worker){var y=new Worker(s.filename);y.onmessage=function(A){d(A.data)},y.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}))}else d(s.highlight(i.code,i.grammar,i.language));else d(s.util.encode(i.code))},highlight:function(e,n,a){var t={code:e,grammar:n,language:a};if(s.hooks.run("before-tokenize",t),!t.grammar)throw new Error('The language "'+t.language+'" has no grammar.');return t.tokens=s.tokenize(t.code,t.grammar),s.hooks.run("after-tokenize",t),v.stringify(s.util.encode(t.tokens),t.language)},tokenize:function(e,n){var a=n.rest;if(a){for(var t in a)n[t]=a[t];delete n.rest}var r=new $;return S(r,r.head,e),z(e,r,n,r.head,0),function L(e){for(var n=[],a=e.head.next;a!==e.tail;)n.push(a.value),a=a.next;return n}(r)},hooks:{all:{},add:function(e,n){var a=s.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=s.hooks.all[e];if(a&&a.length)for(var r,t=0;r=a[t++];)r(n)}},Token:v};function v(e,n,a,t){this.type=e,this.content=n,this.alias=a,this.length=0|(t||"").length}function T(e,n,a,t){e.lastIndex=n;var r=e.exec(a);if(r&&t&&r[1]){var l=r[1].length;r.index+=l,r[0]=r[0].slice(l)}return r}function z(e,n,a,t,r,l){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){var i=a[c];i=Array.isArray(i)?i:[i];for(var d=0;d<i.length;++d){if(l&&l.cause==c+","+d)return;var y=i[d],A=y.inside,P=!!y.lookbehind,j=!!y.greedy,D=y.alias;if(j&&!y.pattern.global){var M=y.pattern.toString().match(/[imsuy]*$/)[0];y.pattern=RegExp(y.pattern.source,M+"g")}for(var B=y.pattern||y,m=t.next,x=r;m!==n.tail&&!(l&&x>=l.reach);x+=m.value.length,m=m.next){var _=m.value;if(n.length>e.length)return;if(!(_ instanceof v)){var F,C=1;if(j){if(!(F=T(B,x,e,P))||F.index>=e.length)break;var E=F.index,O=F.index+F[0].length,h=x;for(h+=m.value.length;E>=h;)h+=(m=m.next).value.length;if(x=h-=m.value.length,m.value instanceof v)continue;for(var k=m;k!==n.tail&&(h<O||"string"==typeof k.value);k=k.next)C++,h+=k.value.length;C--,_=e.slice(x,h),F.index-=x}else if(!(F=T(B,0,_,P)))continue;var I=F[0],U=_.slice(0,E=F.index),G=_.slice(E+I.length),Z=x+_.length;l&&Z>l.reach&&(l.reach=Z);var H=m.prev;if(U&&(H=S(n,H,U),x+=U.length),R(n,H,C),m=S(n,H,new v(c,A?s.tokenize(I,A):I,D,I)),G&&S(n,m,G),C>1){var q={cause:c+","+d,reach:Z};z(e,n,a,m.prev,x,q),l&&q.reach>l.reach&&(l.reach=q.reach)}}}}}}function $(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function S(e,n,a){var t=n.next,r={value:a,prev:n,next:t};return n.next=r,t.prev=r,e.length++,r}function R(e,n,a){for(var t=n.next,r=0;r<a&&t!==e.tail;r++)t=t.next;n.next=t,t.prev=n,e.length-=r}if(u.Prism=s,v.stringify=function e(n,a){if("string"==typeof n)return n;if(Array.isArray(n)){var t="";return n.forEach(function(d){t+=e(d,a)}),t}var r={type:n.type,content:e(n.content,a),tag:"span",classes:["token",n.type],attributes:{},language:a},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(r.classes,l):r.classes.push(l)),s.hooks.run("wrap",r);var c="";for(var i in r.attributes)c+=" "+i+'="'+(r.attributes[i]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+c+">"+r.content+"</"+r.tag+">"},!u.document)return u.addEventListener&&(s.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.immediateClose;u.postMessage(s.highlight(n.code,s.languages[a],a)),r&&u.close()},!1)),s;var b=s.util.currentScript();function p(){s.manual||s.highlightAll()}if(b&&(s.filename=b.src,b.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var f=document.readyState;"loading"===f||"interactive"===f&&b&&b.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return s}(_self);typeof module<"u"&&module.exports&&(module.exports=Prism),typeof global<"u"&&(global.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(u){"entity"===u.type&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(g,o){var w={};w["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[o]},w.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:w}};s["language-"+o]={pattern:/[\s\S]+/,inside:Prism.languages[o]};var v={};v[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",v)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(u,g){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:Prism.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(u){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var o=u.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,function(){if(!(typeof Prism>"u"||typeof document>"u")){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var w={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",v="loading",T="loaded",$="pre[data-src]:not(["+s+'="'+T+'"]):not(['+s+'="'+v+'"])';Prism.hooks.add("before-highlightall",function(b){b.selector+=", "+$}),Prism.hooks.add("before-sanity-check",function(b){var p=b.element;if(p.matches($)){b.code="",p.setAttribute(s,v);var f=p.appendChild(document.createElement("CODE"));f.textContent="Loading\u2026";var e=p.getAttribute("data-src"),n=b.language;if("none"===n){var a=(/\.(\w+)$/.exec(e)||[,"none"])[1];n=w[a]||a}Prism.util.setLanguage(f,n),Prism.util.setLanguage(p,n);var t=Prism.plugins.autoloader;t&&t.loadLanguages(n),function S(b,p,f){var e=new XMLHttpRequest;e.open("GET",b,!0),e.onreadystatechange=function(){4==e.readyState&&(e.status<400&&e.responseText?p(e.responseText):f(e.status>=400?function(b,p){return"\u2716 Error "+b+" while fetching file: "+p}(e.status,e.statusText):"\u2716 Error: File does not exist or is empty"))},e.send(null)}(e,function(r){p.setAttribute(s,T);var l=function R(b){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(p){var f=Number(p[1]),n=p[3];return p[2]?n?[f,Number(n)]:[f,void 0]:[f,f]}}(p.getAttribute("data-range"));if(l){var c=r.split(/\r\n?|\n/g),i=l[0],d=null==l[1]?c.length:l[1];i<0&&(i+=c.length),i=Math.max(0,Math.min(i-1,c.length)),d<0&&(d+=c.length),d=Math.max(0,Math.min(d,c.length)),r=c.slice(i,d).join("\n"),p.hasAttribute("data-start")||p.setAttribute("data-start",String(i+1))}f.textContent=r,Prism.highlightElement(f)},function(r){p.setAttribute(s,"failed"),f.textContent=r})}}),Prism.plugins.fileHighlight={highlight:function(p){for(var n,f=(p||document).querySelectorAll($),e=0;n=f[e++];)Prism.highlightElement(n)}};var L=!1;Prism.fileHighlight=function(){L||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),L=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}}(),function(u){function g(h,k){return h.replace(/<<(\d+)>>/g,function(E,I){return"(?:"+k[+I]+")"})}function o(h,k,E){return RegExp(g(h,k),E||"")}function w(h,k){for(var E=0;E<k;E++)h=h.replace(/<<self>>/g,function(){return"(?:"+h+")"});return h.replace(/<<self>>/g,"[^\\s\\S]")}var s="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",v="class enum interface record struct",T="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",z="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function $(h){return"\\b(?:"+h.trim().replace(/ /g,"|")+")\\b"}var S=$(v),R=RegExp($(s+" "+v+" "+T+" "+z)),L=$(v+" "+T+" "+z),b=$(s+" "+v+" "+z),p=w("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),f=w("\\((?:[^()]|<<self>>)*\\)",2),e="@?\\b[A-Za-z_]\\w*\\b",n=g("<<0>>(?:\\s*<<1>>)?",[e,p]),a=g("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[L,n]),t="\\[\\s*(?:,\\s*)*\\]",r=g("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[a,t]),l=g("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[p,f,t]),c=g("\\(<<0>>+(?:,<<0>>+)+\\)",[l]),i=g("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[c,a,t]),d={keyword:R,punctuation:/[<>()?,.:[\]]/},y="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",A='"(?:\\\\.|[^\\\\"\r\n])*"';u.languages.csharp=u.languages.extend("clike",{string:[{pattern:o("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:o("(^|[^@$\\\\])<<0>>",[A]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:o("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[a]),lookbehind:!0,inside:d},{pattern:o("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[e,i]),lookbehind:!0,inside:d},{pattern:o("(\\busing\\s+)<<0>>(?=\\s*=)",[e]),lookbehind:!0},{pattern:o("(\\b<<0>>\\s+)<<1>>",[S,n]),lookbehind:!0,inside:d},{pattern:o("(\\bcatch\\s*\\(\\s*)<<0>>",[a]),lookbehind:!0,inside:d},{pattern:o("(\\bwhere\\s+)<<0>>",[e]),lookbehind:!0},{pattern:o("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[r]),lookbehind:!0,inside:d},{pattern:o("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[i,b,e]),inside:d}],keyword:R,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),u.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),u.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:o("([(,]\\s*)<<0>>(?=\\s*:)",[e]),lookbehind:!0,alias:"punctuation"}}),u.languages.insertBefore("csharp","class-name",{namespace:{pattern:o("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[e]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:o("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[f]),lookbehind:!0,alias:"class-name",inside:d},"return-type":{pattern:o("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[i,a]),inside:d,alias:"class-name"},"constructor-invocation":{pattern:o("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[i]),lookbehind:!0,inside:d,alias:"class-name"},"generic-method":{pattern:o("<<0>>\\s*<<1>>(?=\\s*\\()",[e,p]),inside:{function:o("^<<0>>",[e]),generic:{pattern:RegExp(p),alias:"class-name",inside:d}}},"type-list":{pattern:o("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[S,n,e,i,R.source,f,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:o("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[n,f]),lookbehind:!0,greedy:!0,inside:u.languages.csharp},keyword:R,"class-name":{pattern:RegExp(i),greedy:!0,inside:d},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var P=A+"|"+y,j=g("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>",[P]),D=w(g("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[j]),2),M="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",B=g("<<0>>(?:\\s*\\(<<1>>*\\))?",[a,D]);u.languages.insertBefore("csharp","class-name",{attribute:{pattern:o("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[M,B]),lookbehind:!0,greedy:!0,inside:{target:{pattern:o("^<<0>>(?=\\s*:)",[M]),alias:"keyword"},"attribute-arguments":{pattern:o("\\(<<0>>*\\)",[D]),inside:u.languages.csharp},"class-name":{pattern:RegExp(a),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var m=":[^}\r\n]+",x=w(g("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[j]),2),_=g("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[x,m]),C=w(g("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",[P]),2),F=g("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[C,m]);function O(h,k){return{interpolation:{pattern:o("((?:^|[^{])(?:\\{\\{)*)<<0>>",[h]),lookbehind:!0,inside:{"format-string":{pattern:o("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[k,m]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:u.languages.csharp}}},string:/[\s\S]+/}}u.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:o('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[_]),lookbehind:!0,greedy:!0,inside:O(_,x)},{pattern:o('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[F]),lookbehind:!0,greedy:!0,inside:O(F,C)}],char:{pattern:RegExp(y),greedy:!0}}),u.languages.dotnet=u.languages.cs=u.languages.csharp}(Prism),function(u){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+g.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var o=u.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(Prism),Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;