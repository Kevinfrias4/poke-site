(this["webpackJsonppoke-site"]=this["webpackJsonppoke-site"]||[]).push([[0],{391:function(n,e,t){"use strict";t.r(e);var a,r,o,i,s,c,p,d,l,b=t(0),x=t.n(b),h=t(118),m=t.n(h),u=t(20),g=t(16),f=t.n(g),j=t(41),w=t(28),k=t(36),v=t.n(k),O=t(12),y=t(22),S=t(40),C=t(392),z={hidden:{y:500},show:{y:70,transition:{type:"spring",bounce:.3,duration:1.5}},exit:{y:900,transition:{duration:.75}}},D={hidden:{y:-20,opacity:0},show:{opacity:1,y:0,transition:{duration:1.75,staggerChildren:.5}},exit:{x:-500,opacity:0,transition:{duration:.75}}},_={fire:"#eeb7b7",grass:"#defde0",electric:"#f3e4a0",water:"#def3fd",ground:"#f4e7da",rock:"#d5d5d4",fairy:"#fceaff",poison:"#c9aae9",bug:"#deebb3",dragon:"#97b3e6",psychic:"#e0a2d0",flying:"#c8d9fd",fighting:"#cfa1a1",normal:"#F5F5F5",dark:"#9a9bb1",steel:"#bcc4d3",ghost:"#a598ca",ice:"#c3ebe7"},T=t(60),Y=t(61),X=t(4),P=Object(y.a)(C.a.div)(a||(a=Object(u.a)(["\n    margin: 0rem;\n    padding: 0rem;\n    @media screen and (max-width: 768px) {\n        background: #ffd890;\n        background: #ee8080;\n    }\n"]))),I=Object(y.a)(C.a.div)(r||(r=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));\n    //400px\n    grid-column-gap: 0rem;\n    grid-row-gap: 0.1rem;\n    a {\n        cursor: default;\n        text-decoration: none;\n    }\n    overflow-x: hidden;\n    width: 100%;\n    height: 100%;\n    margin-top: 1.5rem;\n    padding-bottom: 2.5rem;\n    //background: #ffffff;\n    @media screen and (max-width: 768px) {\n        background: #ffffff;\n        //background: #b7f0c5;\n        height: 100%;\n        width: 100%;\n        justify-content: center;\n        margin-left: 0rem;\n        margin-top: 0rem;\n        overflow-x: hidden;\n        padding-bottom: 1rem;\n        -webkit-tap-highlight-color: transparent;\n        scroll-behavior: smooth;\n    }\n"]))),N=Object(y.a)(C.a.div)(o||(o=Object(u.a)(["\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 80%;\n    box-shadow: 0 3px 15px rgba(163, 163, 163, 0.5);\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    border-radius: 35px;\n    border-width: 5px;\n    padding: 0rem 0rem 2rem 0rem;\n    margin: 1.5rem 0rem 0rem 1.5rem;\n    //overflow: hidden;\n    background: #eeeded;\n    //background: rgba( 205, 205, 205, 0.2);\n    //box-shadow: 0 8px 12px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    //border: 2px solid rgba( 255, 255, 255, 0.18 );\n    //background: linear-gradient(to bottom right, thistle, lightblue, white);\n    &.card:hover {\n        background: linear-gradient(to bottom right,hotpink, white, hotpink);\n        transform: scale(0.9);\n        transition: 1.6s ease;\n        //border: none;\n        //border-radius: 50%;\n        position: relative;\n        //overflow: hidden;\n        //background Color shift\n        background-image: (linear-gradient(270deg, #8e9ac2, #42579a));\n        background-size: 400% 400%;\n        animation: TransitioningBackground 3.5s ease infinite;\n        //animation-iteration-count: 1;\n        &::before {\n            content: '';\n            display: block;\n            position: absolute;\n            background: rgba(255, 255, 255, 0.5);\n            width: 40px;\n            height: 100%;\n            top: 0;\n            filter: blur(40px);\n            transform: translateX(-100px) skewX(-20deg);\n        }\n        &::after {\n            content: '';\n            display: block;\n            position: absolute;\n            background: rgba(255, 255, 255, 0.2);\n            width: 30px;\n            height: 100%;\n            top: 0;\n            filter: blur(5px);\n            transform: translateX(-100px) skewX(-15deg);\n        }\n        &::before, &::after {\n            transform: translateX(300px) skewX(-15deg);\n            transition: 0.7s;\n        }\n        @keyframes TransitioningBackground {\n            0% {\n                background-position: 1% 0%;\n            }\n            50% {\n                background-position: 99% 100%;\n            }\n            100% {\n                background-position: 1% 0%;\n            }\n        }\n\n        img {\n            transform: scale(2.3) translateY(-8px) translateX(-4px) skew(3.5deg);\n            transition: 1.75s ease;\n            -webkit-filter: drop-shadow(10px 10px 10px #929191);\n            filter: drop-shadow(7px 7px 7px #696969);\n            object-fit: cover;\n            cursor: pointer;\n        }\n        h3 {\n            transform: scale(2.5) translateY(-13px) skew(3deg);\n            transition: 1.8s ease;\n            color: whitesmoke;\n            z-index: 0;\n            font-weight: 400px;\n            text-shadow: \n                1px 1px 1px #919191,\n                1px 2px 1px #919191,\n                1px 3px 1px #919191,\n                1px 4px 1px #919191,\n                1px 5px 1px #919191,\n                1px 6px 1px #919191,\n                1px 7px 1px #919191,\n                //1px 8px 1px #919191,\n                //1px 9px 1px #919191,\n                //1px 10px 1px #919191,\n                1px 18px 6px rgba(16,16,16,0.4),\n                1px 22px 10px rgba(16,16,16,0.2),\n                1px 25px 35px rgba(16,16,16,0.2),\n                1px 30px 60px rgba(16,16,16,0.4);\n        }\n    }\n\n    &:not(hover) {\n        transition: 1.8s ease;\n        img, h3 {\n            transition: 0.4s ease;\n        }\n    }\n    \n    img {\n        object-fit: cover;\n        width: 12vh;\n        height: 12vh;\n    }\n    h3 {\n        color: grey;\n    }\n    @media screen and (max-width: 768px) {\n        &:hover {\n            pointer-events: none;\n        }\n        &:not(hover) {\n            pointer-events: none;\n        }\n    }\n"]))),F=y.a.div(i||(i=Object(u.a)(["\n    display: flex;\n    position: absolute;\n    justify-content: center;\n    margin: 0rem;\n    //width: 100%;\n    left: 44%;\n    top: -4.5%;\n    padding: 0.7rem 0rem 0.7rem 0rem;\n    input {\n        width: 10rem;\n        height: 1rem;\n        border-radius: 0px 15px 15px 15px;\n        margin: 1rem;\n    }\n    .search {\n        color: lightblue;\n        margin-left: 0.5rem;\n        font-size: 30px;\n        &:hover{\n            color: gold;\n        }\n    }\n    @media screen and (max-width: 768px) {\n        position: relative;\n        width: 100%;\n        left: 0rem;\n        margin: 0rem;\n        .input {\n            -webkit-appearance: none;\n            -webkit-border-radius: 0;\n            width: 7rem;\n            height: 1rem;\n            margin: 0.1rem;\n            margin-top: 0rem;\n            background: #e3f8ff;\n            font-size: 13px;\n            border-radius: 0rem 15px 15px 15px;\n        }\n        .search {\n            color: white;\n            align-items: center;\n            width: 4rem;\n            transform: translateY(3px)\n        }\n    }\n"]))),E=y.a.input(s||(s=Object(u.a)(["\n    outline: none;\n    border: none;\n    padding: 0.5rem;\n    &:hover {\n        background:gold;\n        transition: 1s;\n        transform: scale(1.1)\n    }\n"]))),B=y.a.button(c||(c=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    outline: none;\n    border: none;\n    padding: 0.5rem;\n    margin-top: 0.5rem;\n    margin-left: 15rem;\n    &:hover {\n        background:gold;\n        transition: 1s;\n        transform: scale(1.1)\n    }\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: row;\n        -webkit-appearance: none;\n        -webkit-border-radius: 0;\n        text-align: center;\n        height: 40px;\n        width: 3rem;\n        margin: 0rem;\n        margin-top: 0.5rem;\n        justify-content: center;\n        font-size: 20px;\n        border-radius: 10px;\n        background: #eeeeee;\n    }\n"]))),H=function(n){var e=n.pokeData,t=n.nextPage,a=n.prevPage,r=n.setShowDetail,o=n.showDetails;function i(){document.body.style.overflow="hidden",r(!o)}var s=Object(O.e)(),c=Object(b.useState)(""),p=Object(w.a)(c,2),d=p[0],l=p[1],x=Object(b.useState)([]),h=Object(w.a)(x,2),m=h[0],u=h[1],g=function(n){n.preventDefault(),function(){var n=Object(j.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.get("https://pokeapi.co/api/v2/pokemon?limit=1118");case 2:e=n.sent,u(e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),m.map((function(n){return d===n.name?(document.body.style.overflow="auto",s.push("/".concat(d,"/").concat(n.url.substring(34,n.url.length-1),"/",0)),r(!o),l("")):console.log("not the searched pokemon"),null}))};return Object(X.jsxs)(P,{variants:D,initial:"hidden",animate:"show",children:[Object(X.jsx)(F,{children:Object(X.jsxs)("form",{onClick:g,onSubmit:g,children:[Object(X.jsx)(E,{name:"viewport",fontSize:"16px",content:"width=device-width, initial-scale=1, maximum-scale=1",className:"input",type:"text",value:d,placeholder:"Search Pokemon!",onChange:function(n){l(n.target.value.toLowerCase())}}),Object(X.jsx)(T.a,{className:"search",onClick:g,color:"white",icon:Y.c})]})}),Object(X.jsxs)(I,{children:[e.map((function(n,e){return Object(X.jsx)(S.b,{to:"/".concat(n.name,"/").concat(n.url.substring(34,n.url.length-1),"/").concat(e),onClick:i,children:Object(X.jsxs)(N,{className:"card",children:[Object(X.jsx)(C.a.h3,{children:"".concat(n.name)}),Object(X.jsx)(C.a.img,{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(n.url.substring(34,n.url.length-1),".png"),alt:"pokemon"})]})},e)})),Object(X.jsxs)(F,{children:[a&&Object(X.jsx)(B,{className:"button",onClick:a,children:Object(X.jsx)(T.a,{icon:Y.a})}),t&&Object(X.jsx)(B,{className:"button",onClick:t,children:Object(X.jsx)(T.a,{icon:Y.b})})]})]})]})},L=t(393),G=t(122),J=t.n(G),R={particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#4016a1"},shape:{type:"circle",stroke:{width:1,color:"#ffffff"},polygon:{nb_sides:5},image:{src:"https://iconape.com/wp-content/png_logo_vector/pokeball-logo.png",width:100,height:100}},opacity:{value:.6313181133058181,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:20,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#000000",opacity:.4,width:1},move:{enable:!0,speed:3,direction:"top-right",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};function M(){return Object(X.jsx)(J.a,{params:R})}var U,W=Object(y.a)(C.a.div)(p||(p=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    margin-top: -0.5rem;\n    z-index: 10;\n    transform: translateY(-450px);\n    p {\n        text-align: center;\n        width: 10vh;\n        font-size: 23px;\n        font-weight: bolder;\n        background: thistle;\n        padding: 1rem;\n        margin: 0rem 1rem 0rem 1rem;\n        border-radius: 25px;\n        box-shadow: inset 10px 10px 13px 0 rgba(0, 0, 0, 0.4), inset -10px -10px 8px 0 rgba(255, 255, 255, 0.3);\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n        //box-shadow: inset 10px 10px 7px 0 rgba(0, 0, 0, 0.2), inset -10px -10px 18px 0 rgba(255, 255, 255, 0.3);\n        color: #696969;\n    }\n"]))),q=Object(y.a)(C.a.div)(d||(d=Object(u.a)(["\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    position: fixed;\n    top: 0;\n    left: 0; \n    right: 0;\n    bottom: 0;\n    width: 60%;\n    height: 80vh;\n    margin-left: 13rem;\n    //box-shadow: 0px -9px 30px 17px rgba(134, 117, 156, 0.849);\n    border-radius: 50px;\n    background: white;\n    overflow-y: scroll;\n    &.none::-webkit-scrollbar {\n        width: 0rem;\n    }\n    img {\n        animation: bounce 15s ease infinite;\n        animation-iteration-count: 1;\n        width: 50vh;\n        height: 50vh;\n        object-fit: cover;\n        -webkit-filter: drop-shadow(10px 10px 10px #929191);\n        filter: drop-shadow(7px 7px 7px #696969);\n        transform: scale(1.1) translateY(-450px) translateX(-4px) skew(3.5deg);\n    }\n    @keyframes bounce {\n        50% {\n            transform: translateX(-5%) translateY(-129.9%) scale(1.2) skewX(3.5deg)\n        }\n    }\n\n    h1 {\n        transform: translateY(-450px);\n        color: #696969;\n    }\n    h2 {\n        transform: translateY(-475px);\n    }\n    @media screen and (max-width: 768px) {\n        overflow: hidden;\n        margin-left: 0;\n        width: 100%;\n        height: 100%;\n        box-shadow: 0px -9px 30px 17px rgba(108, 170, 211, 0.849);\n        position: fixed;\n        z-index: 20;\n        body {\n            overflow-y: hidden;\n        }\n        img {\n            width: 35vh;\n            height: 35vh;\n            transform: translateY(-220px)\n        }\n        h1, h4{\n            transform: translateY(-170px)\n        }\n        h2 {\n            transform: translateY(-195px)\n        }\n        .types {\n            p {\n                margin: 0rem 0.5rem 0rem 0.5rem;\n            }\n            transform: translateY(-200px);\n            margin: 0rem;\n        }\n        @keyframes bounce {\n            50% {\n                transform: translateX(0%) translateY(-90.9%) scale(1.2) skewX(3.5deg)\n            }\n        }\n    }\n"]))),A=Object(y.a)(C.a.div)(l||(l=Object(u.a)(["\n    width: 100%;\n    min-height: 100vh;\n    background: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 5;\n"]))),K=function(n){var e=n.pokeData,t=n.pathId,a=n.location,r=n.pokeType,o=n.setPokeType,i=n.showDetail,s=n.setShowDetail,c=Object(O.e)(),p=a.pathname,d=1*p[p.length-1];return void 0===t&&(t=1),Object(b.useEffect)((function(){return function(){var n=Object(j.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:e=n.sent,o(e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[d,t,o]),Object(X.jsx)(L.a,{children:i&&Object(X.jsx)(A,{className:"shadow",onClick:function(n){n.target.classList.contains("shadow")&&(document.body.style.overflow="auto",c.push("/"),s(!i))},children:Object(X.jsx)(q,{className:"none",variants:z,initial:"hidden",animate:"show",exit:"exit",layoutId:d,children:e.map((function(n,e){p=e;var a=_[r.types[0].type.name];return Object(X.jsxs)(C.a.div,{style:{background:"linear-gradient(to bottom, ".concat(a,", white)"),width:"100%",borderRadius:"50px",boxShadow:"7px 7px 30px #696969"},children:[Object(X.jsx)(M,{}),Object(X.jsx)("h1",{children:r.name.toUpperCase()}),Object(X.jsxs)(C.a.h2,{children:["#",t]}),Object(X.jsx)(C.a.img,{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),alt:"pokemon"}),Object(X.jsxs)(W,{className:"types",children:[Object(X.jsx)("p",{style:{backgroundColor:a},children:r.types[0].type.name}),r.types[1]&&Object(X.jsx)("p",{style:{backgroundColor:_[r.types[1].type.name]},children:r.types[1].type.name})]}),Object(X.jsxs)("h4",{children:["HP:"," "+r.stats[0].base_stat]}),Object(X.jsxs)("h4",{children:["HEIGHT:"," "+r.height]}),Object(X.jsxs)("h4",{children:["WEIGHT:"," "+r.weight]}),Object(X.jsx)("p",{children:r.location_area})]})}))[d]})})})};var Q=y.a.div(U||(U=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  justify-content: center;\n  img {\n    position: absolute;\n    margin-top: 10rem;\n    object-fit: cover;\n  }\n  @media screen and (max-width: 768px) {\n    overflow: hidden;\n    //background: #f8dca8;\n    //background: #9ce7af;\n    img {\n      height: 20vh;\n      width: 20vh;\n      top: 10%;\n    }\n  }\n"]))),V=function(){var n=Object(b.useState)(""),e=Object(w.a)(n,2),t=e[0],a=e[1],r=Object(b.useState)([]),o=Object(w.a)(r,2),i=o[0],s=o[1],c=Object(b.useState)(!1),p=Object(w.a)(c,2),d=p[0],l=p[1],x=Object(b.useState)(!0),h=Object(w.a)(x,2),m=h[0],u=h[1],g=Object(b.useState)(),k=Object(w.a)(g,2),y=k[0],S=k[1],z=Object(b.useState)(),D=Object(w.a)(z,2),_=D[0],T=D[1],Y=Object(b.useState)("https://pokeapi.co/api/v2/pokemon?limit=12?offset=12"),P=Object(w.a)(Y,2),I=P[0],N=P[1],F=Object(O.f)(),E=F.pathname.split("/")[2];function B(){N(y)}function L(){N(_)}return Object(b.useEffect)((function(){var n=function(){var n=Object(j.a)(f.a.mark((function n(){var e,t,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.prev=1,n.next=4,v.a.get(I,{cancelToken:new v.a.CancelToken((function(n){return e=n}))});case 4:t=n.sent,a=t.data,S(a.next),T(a.previous),s(a.results),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:return u(!1),n.abrupt("return",(function(){return e()}));case 16:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();setTimeout((function(){n()}),2e3)}),[I]),m?Object(X.jsx)(Q,{children:Object(X.jsx)(C.a.img,{animate:{scale:[0,1.75,1.75,.5,4.5],rotate:[0,0,270,270,0],opacity:[1,1,1,.85,0],borderRadius:["20%","20%","50%","50%","20%"]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],repeat:1/0,repeatDelay:1},src:"https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-hd-png-5.png",alt:""})}):Object(X.jsxs)("div",{children:[Object(X.jsx)(O.a,{path:"/",render:function(){return Object(X.jsx)(H,{pathId:E,setPokeData:s,nextPage:y?B:null,setShowDetail:l,prevPage:_?L:null,pokeData:i,pokeType:t})}}),Object(X.jsx)(O.a,{path:["/pokemon/:pokemonId","/"],render:function(){return Object(X.jsx)(K,{location:F,setShowDetail:l,showDetail:d,pokeData:i,pathId:E,pokeType:t,setPokeType:a})}})]})},Z=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,394)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),o(n),i(n)}))};m.a.render(Object(X.jsx)(x.a.StrictMode,{children:Object(X.jsx)(S.a,{basename:window.location.pathname||"",children:Object(X.jsx)(V,{})})}),document.getElementById("root")),Z()}},[[391,1,2]]]);
//# sourceMappingURL=main.845ad556.chunk.js.map