(this["webpackJsonppoke-site"]=this["webpackJsonppoke-site"]||[]).push([[0],{391:function(n,e,t){"use strict";t.r(e);var a,r,o,i,s,c,p,d,l,b,h=t(0),x=t.n(h),m=t(118),u=t.n(m),g=t(19),f=t(16),j=t.n(f),w=t(41),k=t(24),v=t(36),y=t.n(v),O=t(12),S=t(20),z=t(40),C=t(392),T={hidden:{y:500},show:{y:70,transition:{type:"spring",bounce:.3,duration:1.5}},exit:{y:900,transition:{duration:.75}}},D={hidden:{x:-500,opacity:0},show:{x:0,opacity:1,y:0,transition:{duration:1.75,staggerChildren:.5}},exit:{x:-500,opacity:0,transition:{duration:.75}}},_={hidden:{y:-20,opacity:0},show:{opacity:1,y:0,transition:{duration:1.75,staggerChildren:.5}},exit:{x:-500,opacity:0,transition:{duration:.75}}},Y={fire:"#eeb7b7",grass:"#defde0",electric:"#f3e4a0",water:"#def3fd",ground:"#f4e7da",rock:"#d5d5d4",fairy:"#fceaff",poison:"#c9aae9",bug:"#deebb3",dragon:"#97b3e6",psychic:"#e0a2d0",flying:"#c8d9fd",fighting:"#cfa1a1",normal:"#F5F5F5",dark:"#9a9bb1",steel:"#bcc4d3",ghost:"#a598ca",ice:"#c3ebe7"},P=t(60),X=t(61),I=t(4),N=Object(S.a)(C.a.div)(a||(a=Object(g.a)(["\n    margin: 0rem;\n    padding: 0rem;\n    @media screen and (max-width: 768px) {\n        //background: #ffd890;\n        background: #ee8080;\n    }\n"]))),F=Object(S.a)(C.a.div)(r||(r=Object(g.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));\n    grid-column-gap: 0rem;\n    grid-row-gap: 0.1rem;\n    a {\n        cursor: default;\n        text-decoration: none;\n    }\n    overflow-x: hidden;\n    overflow-y: none;\n    width: 100%;\n    height: 100%;\n    margin-top: 3.5rem;\n    padding-bottom: 2.5rem;\n    @media screen and (max-width: 768px) {\n        background: #ffffff;\n        //background: #d8f9ff;\n        height: 100%;\n        width: 100%;\n        justify-content: center;\n        margin-left: 0rem;\n        margin-top: 0rem;\n        overflow-x: hidden;\n        padding-bottom: 2.5rem;\n        -webkit-tap-highlight-color: transparent;\n        scroll-behavior: smooth;\n    }\n"]))),E=Object(S.a)(C.a.div)(o||(o=Object(g.a)(["\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 80%;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 12px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    border-radius: 35px;\n    border-width: 5px;\n    padding: 0rem 0rem 2rem 0rem;\n    margin: 1.5rem 0rem 0rem 1.5rem;\n    background: #eeeded;\n    //box-shadow: 0 8px 12px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    &.card:hover {\n        background: linear-gradient(to bottom right,hotpink, white, hotpink);\n        transform: scale(0.9);\n        transition: 1.6s ease;\n        border-radius: 50%;\n        position: relative;\n        //background Color shift\n        background-image: (linear-gradient(270deg, #8e9ac2, #42579a));\n        background-size: 400% 400%;\n        animation: TransitioningBackground 3.5s ease infinite;\n        //animation-iteration-count: 1;\n        &::before {\n            content: '';\n            display: block;\n            position: absolute;\n            background: rgba(255, 255, 255, 0.5);\n            width: 40px;\n            height: 100%;\n            top: 0;\n            filter: blur(40px);\n            transform: translateX(-100px) skewX(-20deg);\n        }\n        &::after {\n            content: '';\n            display: block;\n            position: absolute;\n            background: rgba(255, 255, 255, 0.2);\n            width: 30px;\n            height: 100%;\n            top: 0;\n            filter: blur(5px);\n            transform: translateX(-100px) skewX(-15deg);\n        }\n        &::before, &::after {\n            transform: translateX(300px) skewX(-15deg);\n            transition: 0.7s;\n        }\n        @keyframes TransitioningBackground {\n            0% {\n                background-position: 1% 0%;\n            }\n            50% {\n                background-position: 99% 100%;\n            }\n            100% {\n                background-position: 1% 0%;\n            }\n        }\n        img {\n            transform: scale(2.3) translateY(-8px) translateX(-4px) skew(3.5deg);\n            transition: 1.75s ease;\n            -webkit-filter: drop-shadow(10px 10px 10px #929191);\n            filter: drop-shadow(7px 7px 7px #696969);\n            object-fit: cover;\n            cursor: pointer;\n        }\n        h3 {\n            transform: scale(2.5) translateY(-13px) skew(3deg);\n            transition: 1.8s ease;\n            color: whitesmoke;\n            z-index: 0;\n            font-weight: 400px;\n            text-shadow: \n                1px 1px 1px #919191,\n                1px 2px 1px #919191,\n                1px 3px 1px #919191,\n                1px 4px 1px #919191,\n                1px 5px 1px #919191,\n                1px 18px 6px rgba(16,16,16,0.4),\n                1px 22px 10px rgba(16,16,16,0.2),\n                1px 25px 35px rgba(16,16,16,0.2),\n                1px 30px 60px rgba(16,16,16,0.4);\n        }\n    }\n    &:not(hover) {\n        transition: 1.8s ease;\n        img, h3 {\n            transition: 0.4s ease;\n        }\n    }\n\n    img {\n        object-fit: cover;\n        width: 12vh;\n        height: 12vh;\n    }\n    h3 {\n        letter-spacing: 3px;\n        color: #a39090;\n    }\n    @media screen and (max-width: 768px) {\n        &:hover {\n            pointer-events: none;\n        }\n        &:not(hover) {\n            pointer-events: none;\n        }\n    }\n"]))),B=Object(S.a)(C.a.div)(i||(i=Object(g.a)(["\n    display: flex;\n    position: absolute;\n    justify-content: center;\n    margin: 0.7rem;\n    margin-top: 0;\n    margin-left: 0;\n    width: 100%;\n    top: -4.5%;\n    padding: 0.7rem 0rem 0rem 0rem;\n    background: #ee8080;\n    input {\n        width: 10rem;\n        height: 1rem;\n        border-radius: 0px 15px 15px 15px;\n        margin: 1rem;\n        margin-top: 2rem;\n    }\n    .search {\n        color: lightblue;\n        margin-left: 0.5rem;\n        font-size: 30px;\n        outline: none;\n        &:hover{\n            transform: scale(1.3);\n            color: #fdec88;\n            transition: 0.5s ease;\n        }\n    }\n    @media screen and (max-width: 768px) {\n        position: relative;\n        width: 100%;\n        left: 0rem;\n        margin: 0rem;\n        padding: 1rem 0rem 1rem 0rem;\n        .input {\n            -webkit-appearance: none;\n            -webkit-border-radius: 0;\n            width: 8.5rem;\n            height: 1.5rem;\n            margin: 0.1rem;\n            margin-top: 0rem;\n            background: #e3f8ff;\n            font-size: 16px;\n            border-radius: 0rem 15px 15px 15px;\n        }\n        .search {\n            //-webkit-appearance: none;\n            //-webkit-border-radius: 0;\n            color: white;\n            align-items: center;\n            width: 4rem;\n            transform: translateY(3px);\n            -webkit-tap-highlight-color: transparent;\n        }\n    }\n"]))),H=S.a.input(s||(s=Object(g.a)(["\n    outline: none;\n    border: none;\n    padding: 0.5rem;\n    &:hover {\n        background:#ffeb7a;\n        transition: 1s;\n        transform: scale(1.1)\n    }\n"]))),L=S.a.div(c||(c=Object(g.a)(["\n    padding-top: 1rem;\n    display: flex;\n    justify-content: center;\n    padding-bottom: 2rem;\n    background: #ee8080;\n"]))),G=Object(S.a)(C.a.button)(p||(p=Object(g.a)(["\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    width: 6rem;\n    outline: none;\n    border: none;\n    padding: 0.5rem;\n    height: 50px;\n    font-size: 30px;\n    color: #fd6d6d;\n    border-radius: 10px;\n    margin: 0rem 1.5rem 2rem 1.5rem;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    &:hover {\n        background:#91d7e0;\n        color: white;\n        transition: 0.25s;\n    }\n    &:not(hover) {\n        transition: 0.25s;\n    }\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: row;\n        text-align: center;\n        color: #fd6d6d;\n        height: 60px;\n        width: 6rem;\n        margin: 0rem 1.5rem 2rem 1.5rem;\n        margin-top: 0.5rem;\n        justify-content: center;\n        font-size: 40px;\n        border-radius: 10px;\n        background: #eeeeee;\n        outline: none;\n        -webkit-tap-highlight-color: transparent;\n    }\n"]))),J=function(n){var e=n.pokeData,t=n.nextPage,a=n.prevPage,r=n.setShowDetail,o=n.showDetails,i=Object(O.e)(),s=Object(h.useState)(""),c=Object(k.a)(s,2),p=c[0],d=c[1],l=Object(h.useState)("Search Pokemon!"),b=Object(k.a)(l,2),x=b[0],m=b[1],u=Object(h.useState)([]),g=Object(k.a)(u,2),f=g[0],v=g[1],S=function(n){n.preventDefault(),function(){var n=Object(w.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("https://pokeapi.co/api/v2/pokemon?limit=1118");case 2:e=n.sent,v(e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),f.map((function(n){return p===n.name?(document.body.style.overflow="auto",i.push("/".concat(p,"/").concat(n.url.substring(34,n.url.length-1),"/",0)),r(!o),document.body.style.position="fixed",d("")):n.name.includes(p)&&p.length>0&&(console.log("not the searched pokemon"),d(""),m("Not A Pokemon!"),setTimeout((function(){m("Search Pokemon!")}),2e3)),null}))};function T(){document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",r(!o)}return Object(I.jsxs)(N,{children:[Object(I.jsx)(B,{variants:D,initial:"hidden",animate:"show",children:Object(I.jsxs)("form",{onClick:S,onSubmit:S,children:[Object(I.jsx)(H,{name:"viewport",fontSize:"16px",content:"width=device-width, initial-scale=1, maximum-scale=1",className:"input",type:"text",value:p,placeholder:x,onChange:function(n){d(n.target.value.toLowerCase())}}),Object(I.jsx)(P.a,{className:"search",onClick:S,color:"white",icon:X.c})]})}),Object(I.jsx)(F,{variants:_,initial:"hidden",animate:"show",children:e.map((function(n,e){return Object(I.jsx)(z.b,{to:"/".concat(n.name,"/").concat(n.url.substring(34,n.url.length-1),"/").concat(e),onClick:T,children:Object(I.jsxs)(E,{className:"card",children:[Object(I.jsx)(C.a.h3,{children:"".concat(n.name)}),Object(I.jsx)(C.a.img,{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(n.url.substring(34,n.url.length-1),".png"),alt:"pokemon"})]})},e)}))}),Object(I.jsxs)(L,{children:[a&&Object(I.jsx)(G,{whileTap:{x:-60,scale:.7},className:"button1",onClick:a,children:Object(I.jsx)(P.a,{icon:X.a})}),t&&Object(I.jsx)(G,{whileTap:{x:60,scale:.7},className:"button2",onClick:t,children:Object(I.jsx)(P.a,{icon:X.b})})]})]})},R=t(393),A=t(122),M=t.n(A),U={particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#4016a1"},shape:{type:"image",stroke:{width:0,color:"#ffffff"},polygon:{nb_sides:5},image:{src:"https://iconape.com/wp-content/png_logo_vector/pokeball-logo.png",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:33,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#000000",opacity:1,width:1},move:{enable:!0,speed:1,direction:"top",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};function W(){return Object(I.jsx)(M.a,{style:{height:"100%",width:"100%",zIndex:"-1"},params:U})}var q,K=Object(S.a)(C.a.div)(d||(d=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    margin-top: -0.5rem;\n    z-index: 10;\n    transform: translateY(-450px);\n    p {\n        text-align: center;\n        width: 10vh;\n        font-size: 23px;\n        font-weight: bolder;\n        background: thistle;\n        padding: 1rem;\n        margin: 0rem 1rem 0rem 1rem;\n        border-radius: 25px;\n        box-shadow: inset 10px 10px 13px 0 rgba(0, 0, 0, 0.4), inset -10px -10px 8px 0 rgba(255, 255, 255, 0.3);\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n        //box-shadow: inset 10px 10px 7px 0 rgba(0, 0, 0, 0.2), inset -10px -10px 18px 0 rgba(255, 255, 255, 0.3);\n        color: #696969;\n    }\n"]))),Q=Object(S.a)(C.a.div)(l||(l=Object(g.a)(["\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    position: fixed;\n    top: 0;\n    left: 0; \n    right: 0;\n    bottom: 0;\n    width: 60%;\n    height: 80vh;\n    margin-left: 13rem;\n    //box-shadow: 0px -9px 30px 17px rgba(134, 117, 156, 0.849);\n    border-radius: 50px;\n    background: white;\n    //overflow-y: scroll;\n    &.none::-webkit-scrollbar {\n        width: 0rem;\n    }\n    overflow-y: scroll;\n    img {\n        z-index: 21;\n        animation: bounce 15s ease infinite;\n        animation-iteration-count: 1;\n        width: 50vh;\n        height: 50vh;\n        object-fit: cover;\n        -webkit-filter: drop-shadow(10px 10px 10px #929191);\n        filter: drop-shadow(7px 7px 7px #696969);\n        transform: scale(1.1) translateY(-450px) translateX(-4px) skew(3.5deg);\n    }\n    @keyframes bounce {\n        50% {\n            transform: translateX(-5%) translateY(-129.9%) scale(1.2) skewX(3.5deg)\n        }\n    }\n\n    h1 {\n        letter-spacing: 3px;\n        transform: translateY(-450px);\n        color: #696969;\n    }\n    h2 {\n        transform: translateY(-475px);\n    }\n    @media screen and (max-width: 768px) {\n        overflow: scroll;\n        margin-left: 0;\n        width: 100%;\n        height: 100%;\n        box-shadow: 0px -9px 30px 17px rgba(108, 170, 211, 0.849);\n        position: absolute;\n        z-index: 20;\n        //min-height: 70vh;\n        //body {\n       //   overflow-y: scroll;\n          //min-height: 100vh;\n        //  min-height: -webkit-fill-available;\n       // }\n        img {\n            object-fit: cover;\n            z-index: 21;\n            width: 35vh;\n            height: 35vh;\n            transform: translateY(-220px)\n        }\n        h1, h4{\n            transform: translateY(-170px)\n        }\n        h2 {\n            transform: translateY(-195px)\n        }\n        .types {\n            p {\n                margin: 0rem 0.5rem 0rem 0.5rem;\n            }\n            transform: translateY(-200px);\n            margin: 0rem;\n        }\n        @keyframes bounce {\n            50% {\n                transform: translateX(0%) translateY(-90.9%) scale(1.2) skewX(3.5deg)\n            }\n        }\n    }\n"]))),V=Object(S.a)(C.a.div)(b||(b=Object(g.a)(["\n    width: 100%;\n    min-height: 100vh;\n    background: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 5;\n"]))),Z=function(n){var e=n.pokeData,t=n.pathId,a=n.location,r=n.pokeType,o=n.setPokeType,i=n.showDetail,s=n.setShowDetail,c=Object(O.e)(),p=a.pathname,d=1*p[p.length-1];return void 0===t&&(t=1),Object(h.useEffect)((function(){return function(){var n=Object(w.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:e=n.sent,o(e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[d,t,o]),Object(I.jsx)(R.a,{children:i&&Object(I.jsx)(V,{className:"shadow",onClick:function(n){n.target.classList.contains("shadow")&&(document.body.style.overflow="auto",document.body.style.position="absolute",c.push("/"),s(!i))},children:Object(I.jsx)(Q,{className:"none",variants:T,initial:"hidden",animate:"show",exit:"exit",layoutId:d,children:e.map((function(n){p=n;var e=Y[r.types[0].type.name];return Object(I.jsxs)(C.a.div,{style:{background:"linear-gradient(to bottom, ".concat(e,", white)"),width:"100%",borderRadius:"50px",boxShadow:"7px 7px 30px #696969"},children:[Object(I.jsx)(W,{}),Object(I.jsx)("h1",{children:r.name.toUpperCase()}),Object(I.jsxs)(C.a.h2,{children:["#",t]}),Object(I.jsx)(C.a.img,{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),alt:"pokemon"}),Object(I.jsxs)(K,{className:"types",children:[Object(I.jsx)("p",{style:{backgroundColor:e},children:r.types[0].type.name}),r.types[1]&&Object(I.jsx)("p",{style:{backgroundColor:Y[r.types[1].type.name]},children:r.types[1].type.name})]}),Object(I.jsxs)("h4",{children:["HP:"," "+r.stats[0].base_stat]}),Object(I.jsxs)("h4",{children:["HEIGHT:"," "+r.height]}),Object(I.jsxs)("h4",{children:["WEIGHT:"," "+r.weight]}),Object(I.jsx)("p",{children:r.location_area})]})}))[d]})})})};var $=S.a.div(q||(q=Object(g.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  justify-content: center;\n  img {\n    position: absolute;\n    margin-top: 10rem;\n    object-fit: cover;\n  }\n  @media screen and (max-width: 768px) {\n    overflow: hidden;\n    //background: #f8dca8;\n    background: #ee8080;\n    img {\n      height: 20vh;\n      width: 20vh;\n      top: 10%;\n    }\n  }\n"]))),nn=function(){var n=Object(h.useState)(""),e=Object(k.a)(n,2),t=e[0],a=e[1],r=Object(h.useState)([]),o=Object(k.a)(r,2),i=o[0],s=o[1],c=Object(h.useState)(!1),p=Object(k.a)(c,2),d=p[0],l=p[1],b=Object(h.useState)(!0),x=Object(k.a)(b,2),m=x[0],u=x[1],g=Object(h.useState)(),f=Object(k.a)(g,2),v=f[0],S=f[1],z=Object(h.useState)(),T=Object(k.a)(z,2),D=T[0],_=T[1],Y=Object(h.useState)("https://pokeapi.co/api/v2/pokemon?limit=12?offset=12"),P=Object(k.a)(Y,2),X=P[0],N=P[1],F=Object(O.f)(),E=F.pathname.split("/")[2];function B(){N(v)}function H(){N(D)}return Object(h.useEffect)((function(){var n=function(){var n=Object(w.a)(j.a.mark((function n(){var e,t,a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.prev=1,n.next=4,y.a.get(X,{cancelToken:new y.a.CancelToken((function(n){return e=n}))});case 4:t=n.sent,a=t.data,S(a.next),_(a.previous),s(a.results),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:return u(!1),n.abrupt("return",(function(){return e()}));case 16:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();setTimeout((function(){n()}),2e3)}),[X]),m?Object(I.jsx)($,{children:Object(I.jsx)(C.a.img,{animate:{scale:[0,1.75,1.75,.5,4.5],rotate:[0,0,270,270,0],opacity:[1,1,1,.85,0],borderRadius:["20%","20%","50%","50%","20%"]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],repeat:1/0,repeatDelay:1},src:"https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-hd-png-5.png",alt:""})}):Object(I.jsxs)("div",{children:[Object(I.jsx)(O.a,{path:"/",render:function(){return Object(I.jsx)(J,{pathId:E,setPokeData:s,nextPage:v?B:null,setShowDetail:l,prevPage:D?H:null,pokeData:i,pokeType:t})}}),Object(I.jsx)(O.a,{path:["/pokemon/:pokemonId","/"],render:function(){return Object(I.jsx)(Z,{location:F,setShowDetail:l,showDetail:d,pokeData:i,pathId:E,pokeType:t,setPokeType:a})}})]})},en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,394)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),o(n),i(n)}))};u.a.render(Object(I.jsx)(x.a.StrictMode,{children:Object(I.jsx)(z.a,{basename:window.location.pathname||"",children:Object(I.jsx)(nn,{})})}),document.getElementById("root")),en()}},[[391,1,2]]]);
//# sourceMappingURL=main.d6a7998c.chunk.js.map