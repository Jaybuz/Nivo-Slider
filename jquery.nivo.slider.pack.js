/**
* jQuery Nivo Slider v2.7.1
* http://nivo.dev7studios.com
*
* Copyright 2011, Gilbert Pellegrom
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*
* January 2012
*/
(function(g){var m=null;function r(){return function(){}}function y(u,s){function v(a){for(var b,e,g=a.length;g;b=parseInt(Math.random()*g),e=a[--g],a[g]=a[b],a[b]=e);return a}function o(c){var d=a.a.data("nivo:vars");if(d&&!d.stop||c){c?(c=="prev"&&a.a.css("background",'url("'+d.c.url+'") no-repeat'),c=="next"&&a.a.css("background",'url("'+d.c.url+'") no-repeat')):a.a.css("background",'url("'+d.c.url+'") no-repeat');++d.b;if(d.b==d.i)d.g=d.i-1,d.b=0;else if(d.b<0)d.g=0,d.b=d.i-1;a.d=g(a.h[d.b]);a.d=a.d.is("img")?a.d:a.d.find("img").eq(0);
d.c={url:a.d.attr("src"),title:a.d.attr("title"),A:a.d.data("transition")};b.v&&a.z.removeClass("active").eq(d.b).addClass("active");w();g(".nivo-slice",a.a).remove();g(".nivo-box",a.a).remove();c=b.o;b.o==="random"?(c=["sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse"],c=c[Math.floor(Math.random()*(c.length-1))]):b.o.indexOf(",")!==-1&&(c=b.o.split(","),c=c[Math.floor(Math.random()*
c.length)]);if(d.c.A)c=d.c.A;d.k=!0;var e=function(c,e,d,g,f){setTimeout(function(){c.animate(e,!d?b.j:d,"",f?function(){a.a.trigger("nivo:animFinished")}:m)},100+g)};switch(c){case "sliceDown":case "sliceDownRight":case "sliceDownLeft":q();var d=0,k=g(".nivo-slice",a.a),i=0;c==="sliceDownLeft"&&(k=k.n());do c=g(k[i]),c.css({top:"0px"}),e(c,{height:"100%",opacity:1},m,d,i===b.e-1?!0:!1),d+=50;while(++i<b.e);break;case "sliceUp":case "sliceUpRight":case "sliceUpLeft":q();d=0;k=g(".nivo-slice",a.a);
i=0;c==="sliceUpLeft"&&(k=k.n());do c=g(k[i]),c.css({bottom:"0px"}),e(c,{height:"100%",opacity:1},m,d,i===b.e-1?!0:!1),d+=50;while(++i<b.e);break;case "sliceUpDown":case "sliceUpDownRight":case "sliceUpDownLeft":q();var f=d=0,k=g(".nivo-slice",a.a),i=0;c==="sliceUpDownLeft"&&(k=k.n());do c=g(k[i]),f?c.css("top","0px"):c.css("bottom","0px"),f=!f,e(c,{height:"100%",opacity:1},m,d,i===b.e-1?!0:!1),d+=50;while(++i<b.e);break;case "fold":q();d=0;k=g(".nivo-slice",a.a);f=i=0;do c=g(k[i]),f=c.width(),c.css({top:"0px",
height:"100%",width:"0px"}),e(c,{width:f+"px",opacity:1},m,d,i===b.e-1?!0:!1),d+=50;while(++i<b.e);break;default:case "fade":q();e=g(".nivo-slice",a.a).eq(0);e.css({height:"100%",width:a.a.width()+"px"}).animate({opacity:1},b.j*2,"",function(){a.a.trigger("nivo:animFinished")});break;case "slideIn":case "slideInLeft":case "slideInRight":q();k=a.a.width();e=g(".nivo-slice",a.a).eq(0);i={left:"",right:k+"px",width:k+"px",height:"100%",opacity:1};if(c==="slideInLeft"||c==="slideIn"&&d.b>d.g)i.right=
-k+"px";e.css(i).animate({right:"0px"},b.j*2,"",function(){a.a.trigger("nivo:animFinished")});break;case "boxRandom":x();var k=b.f*b.l,d=0,n=v(g(".nivo-box",a.a)),l=0,h;do h=g(n[l]),e(h,{opacity:1},m,d,l===k-1?!0:!1),d+=20;while(++l<k);break;case "boxRain":case "boxRainReverse":case "boxRainGrow":case "boxRainGrowReverse":x();var k=b.f*b.l,d=0,i=[],j=h=0,n=g(".nivo-box",a.a),l=0,f=k;if(c=="boxRainReverse"||c=="boxRainGrowReverse")n=n.n();i[h]=[];do i[h][j]=n[l],++j,++l,j===b.f&&(++h,i[h]=[],j=0);
while(--f);var o=f=j=l=n=0,p=0;do{j=n;do j>=0&&j<b.f&&(h=g(i[l][j]),o=h.width(),p=h.height(),(c=="boxRainGrow"||c=="boxRainGrowReverse")&&h.width(0).height(0),e(h,{width:o,height:p,opacity:1},b.j/1.3,d,++f===k?!0:!1)),--j;while(++l<b.l);l=0;d+=100}while(++n<b.f*2)}}}function x(){var c=a.a.width(),d=Math.round(c/b.f),f=Math.round(a.a.height()/b.l),k=document.createDocumentFragment(),i=0,h=0,j=0,l={background:'url("'+e.c.url+'") no-repeat',backgroundPosition:"",left:"",top:"",width:"",height:f+"px",
opacity:0};do{l.top=f*h+"px";l.width=d+"px";do{i=d*j;l.left=d*j+"px";l.backgroundPosition="-"+(d+i-d)+"px -"+(f+h*f-f)+"px";if(j===b.f-1)l.width=c-i+"px";k.appendChild(g('<div class="nivo-box"></div>').css(l)[0])}while(++j<b.f);j=0}while(++h<b.l);a.a.append(k)}function q(){var c=e.c.url,d=a.a.width(),f=0,h=document.createDocumentFragment(),i,j,n={background:"",left:"",width:"",height:"0px",opacity:0};do{i=Math.round(d/b.e);j=i*f;n.left=j+"px";n.background='url("'+c+'") no-repeat -'+(i+j-i)+"px 0%";
n.width=i+"px";if(f==b.e-1)n.width=d-j+"px";h.appendChild(g('<div class="nivo-slice"></div>').css(n)[0])}while(++f<b.e);a.a.append(h)}function w(){var c=e.c.title?e.c.title:m;c&&(c.substr(0,1)=="#"&&(c=g(c).html()),a.p.css("opacity")!=0?a.t.stop().fadeTo(b.j,0,function(){a.t.html(c).stop().fadeTo(b.j,1)}):a.t.html(c));a.p.stop().fadeTo(b.j,c?b.u:0)}var b=g.extend({},g.fn.nivoSlider.G,s),e={g:0,b:0,c:{},i:0,k:!1,paused:!1,stop:!1},a={};a.a=g(u);a.a.data("nivo:vars",e);a.a.css("position","relative");a.a.addClass("nivoSlider");
a.h=a.a.children();for(var f,p=a.h.length,j=0,t=0;--p+1;)f=g(a.h[p]),f.is("img")||(f.is("a")&&f.addClass("nivo-imageLink"),f=f.find("img").eq(0)),j=f.width(),t=f.height(),j===0&&(j=f.attr("width")),t===0&&(t=f.attr("height")),j>a.a.width()&&a.a.width(j),t>a.a.height()&&a.a.height(t),f.css("display","none"),++e.i;if(b.N)b.m=Math.floor(Math.random()*e.i);if(b.m>0){if(b.m>=e.i)b.m=e.i-1;e.b=b.m}a.d=g(a.h[e.b]);a.d.is("img")?(e.c.url=a.d.attr("src"),e.c.title=a.d.attr("title")):(f=a.d.find("img").eq(0),
e.c.url=f.attr("src"),e.c.title=f.attr("title"));a.d.is("a")&&a.d.css("display","block");a.a.css("background",'url("'+e.c.url+'") no-repeat').append(g('<div class="nivo-caption"><p></p></div>').css({display:"none",opacity:b.u}));a.p=g(".nivo-caption",a.a);a.t=a.p.find("p");a.p.css("opacity",0);w();var h=0;if(e.i>1)b.r||(h=setInterval(function(){e.g=e.b;o(!1)},b.s));else return!1;if(b.H)a.a.append('<div class="nivo-directionNav"><a class="nivo-prevNav" data-dir="prev">'+b.M+'</a><a class="nivo-nextNav" data-dir="next">'+
b.K+"</a></div>"),a.q=g(".nivo-directionNav",a.a),b.I&&(a.q.hide(),a.a.hover(function(){a.q.show()},function(){a.q.hide()})),a.q.children().click(function(){var a=g(this).data("dir"),a=a?a:"next";if(e.k)return!1;clearInterval(h);h=m;e.g=e.b;a==="prev"&&(e.b-=2);o(a)});if(b.v){f=p="";for(j=a.h.length;--j+1;)b.B?(f=g(a.h[j]),f.is("img")||(f=f.find("img").eq(0)),f=b.C?'<img src="'+f.attr("rel")+'" alt="" />':'<img src="'+f.attr("src").replace(b.F,b.D)+'" alt="" />'):f=j+1,p='<a class="nivo-control" data-slide="'+
j+'">'+f+"</a>"+p;a.a.append('<div class="nivo-controlNav">'+p+"</div>");a.O=g(".nivo-controlNav",a.a);a.z=a.O.find("a");a.z.click(function(){var c=g(this);if(e.k||c.hasClass("active"))return!1;clearInterval(h);h=m;a.a.css("background",'url("'+e.c.url+'") no-repeat');e.g=e.b;e.b=c.data("slide")-1;o("control")}).eq(e.b).addClass("active")}b.J&&g(document).keydown(function(a){a=a.keyCode?a.keyCode:a.which;e.g=e.b;if(a===37||a===63234){if(e.k)return!1;clearInterval(h);h=m;e.b-=2;o("prev")}else if(a===
39||a===63235){if(e.k)return!1;clearInterval(h);h=m;o("next")}});b.L&&a.a.hover(function(){e.paused=!0;clearInterval(h);h=m},function(){e.paused=!1;h===m&&!b.r&&(h=setInterval(function(){e.g=e.b;o(!1)},b.s))});a.a.bind("nivo:animFinished",function(){e.k=!1;for(var c,d=a.h.length;--d+1;)c=g(a.h[d]),c.is("a")&&c.css("display","none");a.d.is("a")&&a.d.css("display","block");h===m&&!e.paused&&!b.r&&(h=setInterval(function(){o(!1)},b.s))});this.stop=function(){if(!a.a.data("nivo:vars").stop)a.a.data("nivo:vars").stop=
!0};this.start=function(){if(a.a.data("nivo:vars").stop)a.a.data("nivo:vars").stop=!1};return this}g.fn.nivoSlider=function(u){return this.each(function(){var s=g(this);if(s.data("nivoslider"))return s.data("nivoslider");var v=new y(this,u);s.data("nivoslider",v)})};g.fn.nivoSlider.G={o:"random",e:15,f:8,l:4,j:500,s:3E3,m:0,H:!0,I:!0,v:!0,B:!1,C:!1,F:".jpg",D:"_thumb.jpg",J:!0,L:!0,r:!1,u:0.8,M:"Prev",K:"Next",N:!1,R:r(),P:r(),T:r(),S:r(),Q:r()};g.fn.n=[].reverse})(jQuery);