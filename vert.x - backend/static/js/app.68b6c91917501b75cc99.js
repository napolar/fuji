webpackJsonp([1],{"7zck":function(t,a){},E3tx:function(t,a){},NHnr:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=r("7+uW"),n=r("mtWM"),s=r.n(n),i="http://localhost:8080/";function o(){return{Authorization:"Bearer "+localStorage.getItem("fuji-token")}}var c=function(t){return s.a.get(i+t,{headers:o()})},l=function(t,a){return s.a.post(i+t,a,{headers:o()})},d={name:"App",data:function(){return{user:{id:null,username:"",email:"",money:0,zone_id:null},title:"Bienvenue Mr Tolstoï",snackbar_show:!1,snackbar_text:"",snackbar_color:"success",loading_money:!1,drawer:!1,clipped:!0,items:[{icon:"fas fa-home",title:"Accueil",link:"/"},{icon:"fab fa-angrycreative",title:"Nos produits",link:"/products"},{icon:"fas fa-shopping-bag",title:"Mes Commandes",link:"/orders"}]}},methods:{getMoney:function(){var t=this;this.loading_money=!0,c("get_money").then(function(a){t.user.money+=500,t.snackbar_show=!0,t.snackbar_text="Vous avez reçu une généreuse dotation de 500€ !",t.snackbar_color="success",t.loading_money=!1}).catch(function(a){t.snackbar_show=!0,t.snackbar_text="Erreur lors de la liaison serveur",t.snackbar_color="error",t.loading_money=!1})}},beforeCreate:function(){localStorage.setItem("fuji-token",document.getElementsByName("auth-token")[0].getAttribute("content"))},mounted:function(){var t=this;c("who_am_i").then(function(a){t.user=a.data}).catch(function(a){t.snackbar_show=!0,t.snackbar_text="Erreur lors de la liaison au serveur",t.snackbar_color="error"})}},v={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-app",[r("v-navigation-drawer",{attrs:{dark:"","enable-resize-watcher":"",fixed:"",app:"",persistent:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[r("v-list",t._l(t.items,function(a,e){return r("v-list-tile",{key:e,attrs:{to:a.link}},[r("v-list-tile-action",[r("v-icon",{domProps:{innerHTML:t._s(a.icon)}})],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s(a.title)}})],1)],1)}))],1),t._v(" "),r("v-toolbar",{attrs:{dark:"",app:""}},[r("v-toolbar-side-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[t._v(" Bienvenue "+t._s(t.user.username))]),t._v(" "),r("v-spacer"),t._v(" "),t._l(t.items,function(a,e){return r("v-tooltip",{key:e,attrs:{bottom:""}},[r("v-btn",{attrs:{slot:"activator",icon:"",large:"",to:a.link},slot:"activator"},[r("v-icon",[t._v(t._s(a.icon))])],1),t._v(" "),r("span",[t._v(t._s(a.title))])],1)}),t._v(" "),r("v-tooltip",{attrs:{bottom:""}},[r("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n        "+t._s(t.user.money)+" €\n      ")]),t._v(" "),r("span",[t._v("Mon Argent")])],1),t._v(" "),r("v-tooltip",{attrs:{bottom:""}},[r("v-btn",{attrs:{slot:"activator",icon:"",href:"http://localhost:8080/"},slot:"activator"},[r("v-icon",[t._v("fas fa-power-off")])],1),t._v(" "),r("span",[t._v("Déconnection")])],1)],2),t._v(" "),r("v-content",[r("v-snackbar",{attrs:{timeout:4e3,bottom:"",right:"",color:t.snackbar_color},model:{value:t.snackbar_show,callback:function(a){t.snackbar_show=a},expression:"snackbar_show"}},[t._v("\n      "+t._s(t.snackbar_text)+"\n    ")]),t._v(" "),r("transition",{attrs:{name:"page",mode:"out-in"}},[r("router-view")],1),t._v(" "),r("v-btn",{attrs:{large:"",dark:"",fab:"",fixed:"",bottom:"",left:"",id:"Money"},on:{click:function(a){t.getMoney()}}},[t.loading_money?r("v-progress-circular",{attrs:{indeterminate:"",dark:"",value:30}}):r("v-icon",{attrs:{color:"white"}},[t._v("far fa-money-bill-alt")])],1)],1),t._v(" "),r("v-footer",{attrs:{app:"",dark:""}},[r("v-spacer"),t._v(" "),r("div",{staticClass:"body-2",staticStyle:{padding:"10px 10px"}},[t._v("© 2018 with\n      "),r("v-icon",{attrs:{color:"primary"}},[t._v("favorite")]),t._v(" by Fel, Sage, Van Rell")],1)],1)],1)},staticRenderFns:[]};var u=r("VU/8")(d,v,!1,function(t){r("RJdQ")},null,null).exports,f=r("/ocq"),_={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[r("v-jumbotron",{attrs:{height:"90vh",src:"../../static/images/wave.jpeg",gradient:"to bottom right, rgba(31,31,33, .1), rgba(31,31,33, .5)",dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{xs12:"","text-xs-left":""}},[r("h3",{staticClass:"display-2"},[r("strong",[t._v("Fuji")])]),t._v(" "),r("h4",{staticClass:"display-1"},[t._v("La première marque recyclable")])]),t._v(" "),r("v-flex",{attrs:{xs12:"","text-xs-center":""}},[r("v-btn",{staticClass:"bouton-appel",attrs:{color:"primary",depressed:"",large:"",to:"/products"}},[t._v("\n                        Embarquez\n                    ")])],1)],1)],1)],1),t._v(" "),r("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[r("v-flex",{staticClass:"primary bandeau white--text",attrs:{xs12:""}},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticStyle:{"vertical-align":"middle"},attrs:{xs8:"","md-7":"","offset-md1":""}},[r("h4",{staticClass:"display-1"},[r("strong",[t._v("Joyeux Anniversaire")])]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"headline"},[t._v("Pour son anniversaire, Fuji vous offre 15% sur tout le magasin !")]),t._v(" "),r("v-btn",{staticClass:"big-button elevation dark"},[t._v("\n                            Découvrir\n                        ")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",id:"683d3690-e1ab-45db-97b8-9484a1649262","data-name":"Layer 1",height:"330px",viewBox:"0 0 839.2 727.08"}},[r("defs",[r("linearGradient",{attrs:{id:"89bbdcf5-814f-445d-9d3e-b835a9e3988b",x1:"484.88",y1:"578.23",x2:"600.81",y2:"578.23",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"gray","stop-opacity":"0.25"}}),t._v(" "),r("stop",{attrs:{offset:"0.54","stop-color":"gray","stop-opacity":"0.12"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"gray","stop-opacity":"0.1"}})],1),t._v(" "),r("linearGradient",{attrs:{id:"1a6f3992-5825-4187-85b9-fb55ca803b83",x1:"615.75",y1:"530.72",x2:"651.5",y2:"530.72","xlink:href":"#89bbdcf5-814f-445d-9d3e-b835a9e3988b"}}),t._v(" "),r("linearGradient",{attrs:{id:"573de093-6af1-4ab3-932c-9e7f72f49645",x1:"745.48",y1:"595.56",x2:"780.02",y2:"595.56","xlink:href":"#89bbdcf5-814f-445d-9d3e-b835a9e3988b"}}),t._v(" "),r("linearGradient",{attrs:{id:"acf24d19-87bc-4cad-9346-f74a977c4433",x1:"634.32",y1:"509.85",x2:"634.32",y2:"96.02","xlink:href":"#89bbdcf5-814f-445d-9d3e-b835a9e3988b"}}),t._v(" "),r("linearGradient",{attrs:{id:"6f986e28-ee02-4c37-906f-8450bb16da28",x1:"637.11",y1:"586.77",x2:"637.11",y2:"513.3","xlink:href":"#89bbdcf5-814f-445d-9d3e-b835a9e3988b"}}),t._v(" "),r("linearGradient",{attrs:{id:"96b175d5-5e64-4663-918e-24aaa3155285",x1:"454.92",y1:"727.08",x2:"454.92",y2:"487.86","xlink:href":"#89bbdcf5-814f-445d-9d3e-b835a9e3988b"}})],1),t._v(" "),r("title",[t._v("happy birthday")]),t._v(" "),r("g",{attrs:{opacity:"0.5"}},[r("rect",{attrs:{x:"124.18",y:"129.51",width:"3.33",height:"18.87",fill:"#47e6b1"}}),t._v(" "),r("rect",{attrs:{x:"304.58",y:"215.97",width:"3.33",height:"18.87",transform:"translate(351.25 -167.3) rotate(90)",fill:"#47e6b1"}})]),t._v(" "),r("g",{attrs:{opacity:"0.5"}},[r("rect",{attrs:{x:"242.55",y:"540.19",width:"3.33",height:"18.87",fill:"#47e6b1"}}),t._v(" "),r("rect",{attrs:{x:"422.95",y:"626.65",width:"3.33",height:"18.87",transform:"translate(880.29 125.01) rotate(90)",fill:"#47e6b1"}})]),t._v(" "),r("g",{attrs:{opacity:"0.5"}},[r("rect",{attrs:{x:"76.86",y:"321",width:"3.33",height:"18.87",fill:"#47e6b1"}}),t._v(" "),r("rect",{attrs:{x:"257.26",y:"407.46",width:"3.33",height:"18.87",transform:"translate(495.42 71.51) rotate(90)",fill:"#47e6b1"}})]),t._v(" "),r("g",{attrs:{opacity:"0.5"}},[r("rect",{attrs:{x:"659.86",width:"3.33",height:"18.87",fill:"#47e6b1"}}),t._v(" "),r("rect",{attrs:{x:"840.26",y:"86.46",width:"3.33",height:"18.87",transform:"translate(757.42 -832.49) rotate(90)",fill:"#47e6b1"}})]),t._v(" "),r("g",{attrs:{opacity:"0.5"}},[r("rect",{attrs:{x:"97.97",y:"46.93",width:"3.33",height:"18.87",fill:"#47e6b1"}}),t._v(" "),r("rect",{attrs:{x:"278.37",y:"133.39",width:"3.33",height:"18.87",transform:"translate(242.45 -223.67) rotate(90)",fill:"#47e6b1"}})]),t._v(" "),r("path",{attrs:{d:"M345.5,559.31a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4,4.08,4.08,0,0,1-4.93,2.27,2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,345.5,559.31Z",transform:"translate(-180.4 -86.46)",fill:"#4d8af0",opacity:"0.5"}}),t._v(" "),r("path",{attrs:{d:"M329,738.66a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4A4.08,4.08,0,0,1,318,734.6a2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,329,738.66Z",transform:"translate(-180.4 -86.46)",fill:"#4d8af0",opacity:"0.5"}}),t._v(" "),r("path",{attrs:{d:"M936,341.66a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4A4.08,4.08,0,0,1,925,337.6a2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,936,341.66Z",transform:"translate(-180.4 -86.46)",fill:"#4d8af0",opacity:"0.5"}}),t._v(" "),r("path",{attrs:{d:"M908.53,531a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4,4.08,4.08,0,0,1-4.93,2.27,2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,908.53,531Z",transform:"translate(-180.4 -86.46)",fill:"#4d8af0",opacity:"0.5"}}),t._v(" "),r("path",{attrs:{d:"M929,153.67a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4,4.08,4.08,0,0,1-4.93,2.27,2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,929,153.67Z",transform:"translate(-180.4 -86.46)",fill:"#4d8af0",opacity:"0.5"}}),t._v(" "),r("path",{attrs:{d:"M993.22,645.72a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4,4.08,4.08,0,0,1-4.93,2.27,2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,993.22,645.72Z",transform:"translate(-180.4 -86.46)",fill:"#4d8af0",opacity:"0.5"}}),t._v(" "),r("circle",{attrs:{cx:"6.66",cy:"257.78",r:"6.66",fill:"#f55f44",opacity:"0.5"}}),t._v(" "),r("circle",{attrs:{cx:"749.83",cy:"146.09",r:"6.66",fill:"#f55f44",opacity:"0.5"}}),t._v(" "),r("circle",{attrs:{cx:"446.92",cy:"395.96",r:"7.5",fill:"#f55f44",opacity:"0.5"}}),t._v(" "),r("circle",{attrs:{cx:"446.92",cy:"395.96",r:"7.5",fill:"#f55f44",opacity:"0.5"}}),t._v(" "),r("circle",{attrs:{cx:"832.55",cy:"346.34",r:"6.66",fill:"#f55f44",opacity:"0.5"}}),t._v(" "),r("circle",{attrs:{cx:"294.17",cy:"47.27",r:"7.5",fill:"#47e6b1",opacity:"0.5"}}),t._v(" "),r("circle",{attrs:{cx:"721.49",cy:"621.41",r:"6.66",fill:"#f55f44",opacity:"0.5"}}),t._v(" "),r("path",{attrs:{d:"M487.1,468c-3.94,12.79,2,27.91,13.53,34.64,4.84,2.82,10.41,4.24,15.1,7.3,10.19,6.64,14.21,19.35,17.52,31.05,3.8,13.45,7.61,27.67,4.13,41.2-2.22,8.63-7.27,16.26-10.14,24.7a51.54,51.54,0,0,0-2.45,22c.42,3.94,1.4,8,4.1,10.94,3.9,4.2,10.18,4.83,15.82,5.84a76.78,76.78,0,0,1,55.2,42.74",transform:"translate(-180.4 -86.46)",fill:"none","stroke-miterlimit":"10","stroke-width":"2",stroke:"url(#89bbdcf5-814f-445d-9d3e-b835a9e3988b)"}}),t._v(" "),r("path",{attrs:{d:"M488.31,468c-3.94,12.79,2,27.91,13.53,34.64,4.84,2.82,10.41,4.24,15.1,7.3,10.19,6.64,14.21,19.35,17.52,31.05,3.8,13.45,7.61,27.67,4.13,41.2-2.22,8.63-7.27,16.26-10.14,24.7a51.54,51.54,0,0,0-2.45,22c.42,3.94,1.4,8,4.1,10.94,3.9,4.2,10.18,4.83,15.82,5.84a76.78,76.78,0,0,1,55.2,42.74",transform:"translate(-180.4 -86.46)",fill:"none",stroke:"#535461","stroke-miterlimit":"10","stroke-width":"2"}}),t._v(" "),r("path",{attrs:{d:"M637.45,372.4c-9.72,13.55-19.81,28.12-20.64,44.78-1.27,25.59,19.2,46.52,28.34,70.46a83.74,83.74,0,0,1-2.81,65.5c-4.46,9.22-10.82,18.38-10,28.59.47,6.23,3.59,11.9,6.1,17.63a99.4,99.4,0,0,1-5.77,89.75",transform:"translate(-180.4 -86.46)",fill:"none","stroke-miterlimit":"10","stroke-width":"2",stroke:"url(#1a6f3992-5825-4187-85b9-fb55ca803b83)"}}),t._v(" "),r("path",{attrs:{d:"M638.65,372.4C628.94,386,618.85,400.53,618,417.18c-1.27,25.59,19.2,46.52,28.34,70.46a83.74,83.74,0,0,1-2.81,65.5c-4.46,9.22-10.82,18.38-10,28.59.47,6.23,3.59,11.9,6.1,17.63a99.4,99.4,0,0,1-5.77,89.75",transform:"translate(-180.4 -86.46)",fill:"none",stroke:"#535461","stroke-miterlimit":"10","stroke-width":"2"}}),t._v(" "),r("path",{attrs:{d:"M773.83,494.28l4.7,38.31c.62,5.09,1.15,10.64-1.58,15-2.59,4.11-7.45,6.07-11.23,9.11-12.41,10-11.28,29.11-7,44.45s10.44,31.82,4.49,46.58c-2.46,6.09-6.8,11.22-10,16.94a51.87,51.87,0,0,0-6.2,32.18",transform:"translate(-180.4 -86.46)",fill:"none","stroke-miterlimit":"10","stroke-width":"2",stroke:"url(#573de093-6af1-4ab3-932c-9e7f72f49645)"}}),t._v(" "),r("path",{attrs:{d:"M775,494.28l4.7,38.31c.62,5.09,1.15,10.64-1.58,15-2.59,4.11-7.45,6.07-11.23,9.11-12.41,10-11.28,29.11-7,44.45s10.44,31.82,4.49,46.58c-2.46,6.09-6.8,11.22-10,16.94a51.87,51.87,0,0,0-6.2,32.18",transform:"translate(-180.4 -86.46)",fill:"none",stroke:"#535461","stroke-miterlimit":"10","stroke-width":"2"}}),t._v(" "),r("g",{attrs:{opacity:"0.7"}},[r("path",{attrs:{d:"M895.7,336.82A113.6,113.6,0,0,0,747,228.83a136.45,136.45,0,0,0,1.45-19.27,113.53,113.53,0,0,0-226.78-8.14,113.6,113.6,0,0,0-148.76,108c0,57,42,138,96.65,152.35l8.51,4.86-4.62,15.83h27.36l-5.94-15.85,8.47-4.84c42.26-11.09,76.91-62,90.48-110.83a83,83,0,0,0,24.22,11l8.51,4.86L622,382.59h27.36l-5.94-15.85,8.47-4.84a79.21,79.21,0,0,0,18-7.31c7.31,54.78,46.2,121.66,95.41,134.57l8.51,4.86-4.62,15.83h27.36L790.59,494l8.47-4.84C853.75,474.81,895.7,393.78,895.7,336.82Z",transform:"translate(-180.4 -86.46)",fill:"url(#acf24d19-87bc-4cad-9346-f74a977c4433)"}})]),t._v(" "),r("polygon",{attrs:{points:"324.76 390.14 298.28 390.14 302.92 374.26 318.8 374.26 324.76 390.14",fill:"#f55f44"}}),t._v(" "),r("path",{attrs:{d:"M601.12,309.16c0,60.68-49.19,149.57-109.86,149.57s-109.86-88.9-109.86-149.57a109.86,109.86,0,0,1,219.73,0Z",transform:"translate(-180.4 -86.46)",fill:"#f55f44"}}),t._v(" "),r("polygon",{attrs:{points:"318.8 374.92 302.92 374.92 293.65 369.63 328.07 369.63 318.8 374.92",fill:"#535461"}}),t._v(" "),r("path",{attrs:{d:"M451.55,223.78s-46.33,25.15-52.95,75.45",transform:"translate(-180.4 -86.46)",fill:"#fff",opacity:"0.1"}}),t._v(" "),r("polygon",{attrs:{points:"468.43 293.56 441.95 293.56 446.59 277.68 462.47 277.68 468.43 293.56",fill:"#4d8af0"}}),t._v(" "),r("path",{attrs:{d:"M744.79,212.58c0,60.68-49.19,149.57-109.86,149.57s-109.86-88.9-109.86-149.57a109.86,109.86,0,0,1,219.73,0Z",transform:"translate(-180.4 -86.46)",fill:"#6c63ff"}}),t._v(" "),r("polygon",{attrs:{points:"462.47 278.34 446.59 278.34 437.32 273.04 471.74 273.04 462.47 278.34",fill:"#535461"}}),t._v(" "),r("path",{attrs:{d:"M595.22,127.2s-46.33,25.15-52.95,75.45",transform:"translate(-180.4 -86.46)",fill:"#fff",opacity:"0.1"}}),t._v(" "),r("polygon",{attrs:{points:"610.89 416.71 584.41 416.71 589.05 400.82 604.93 400.82 610.89 416.71",fill:"#3ad29f"}}),t._v(" "),r("path",{attrs:{d:"M887.25,335.72c0,60.68-49.19,149.57-109.86,149.57S667.52,396.4,667.52,335.72a109.86,109.86,0,1,1,219.73,0Z",transform:"translate(-180.4 -86.46)",fill:"#3ad29f"}}),t._v(" "),r("polygon",{attrs:{points:"604.93 401.48 589.05 401.48 579.78 396.19 614.2 396.19 604.93 401.48",fill:"#535461"}}),t._v(" "),r("path",{attrs:{d:"M737.68,250.34s-46.33,25.15-52.95,75.45",transform:"translate(-180.4 -86.46)",fill:"#fff",opacity:"0.1"}}),t._v(" "),r("g",{attrs:{opacity:"0.5"}},[r("path",{attrs:{d:"M696.81,521.89c-6.37-6.39-15.66-8.93-26.16-7.16-9.82,1.66-19.65,7-27.67,15a32.34,32.34,0,0,0-5.79,7.94,32.41,32.41,0,0,0-5.74-8.23h0C623.57,521.29,613.83,515.8,604,514c-10.46-2-19.79.43-26.28,6.71s-9.15,15.53-7.53,26.05c1.52,9.84,6.7,19.75,14.59,27.88,16.58,17.11,49.67,10.43,51.07,10.13l.41-.09,1.27.29c1.4.32,34.37,7.57,51.24-9.25,8-8,13.37-17.81,15.07-27.63C705.69,537.58,703.18,528.29,696.81,521.89Zm-66.52,53c-8,1.08-27.93,2.54-37.82-7.67-6.36-6.57-10.52-14.41-11.71-22.1-1.08-7,.48-13,4.42-16.78a14.78,14.78,0,0,1,5.39-3.3,22.24,22.24,0,0,1,11.52-.58c7.64,1.43,15.36,5.83,21.72,12.4C633.7,547,631.62,566.92,630.29,574.88Zm63.11-28.61c-1.32,7.66-5.61,15.44-12.09,21.89-10.07,10-30,8.23-37.95,7-1.19-8-2.93-27.89,7.14-37.93,6.48-6.45,14.27-10.72,21.93-12a22.24,22.24,0,0,1,11.51.78,14.78,14.78,0,0,1,5.34,3.4C693.14,533.29,694.6,539.27,693.4,546.27Z",transform:"translate(-180.4 -86.46)",fill:"url(#6f986e28-ee02-4c37-906f-8450bb16da28)"}})]),t._v(" "),r("path",{attrs:{d:"M639.1,582.59l-3.15.66c-1.34.28-33,6.67-48.87-9.7-7.54-7.78-12.5-17.26-14-26.68-1.56-10.07,1-18.92,7.2-24.93s15.13-8.29,25.14-6.42c9.37,1.75,18.69,7,26.23,14.79h0c15.86,16.37,8.48,47.82,8.16,49.15ZM592.57,526.1a14.14,14.14,0,0,0-5.16,3.16c-3.76,3.65-5.26,9.35-4.23,16.06,1.14,7.35,5.12,14.86,11.21,21.15,9.47,9.77,28.54,8.37,36.19,7.34,1.27-7.61,3.27-26.63-6.2-36.4h0c-6.09-6.28-13.47-10.5-20.79-11.86A21.28,21.28,0,0,0,592.57,526.1Z",transform:"translate(-180.4 -86.46)",fill:"#6c63ff"}}),t._v(" "),r("path",{attrs:{d:"M634.42,582.73l-.7-3.14c-.3-1.34-7.14-32.91,9-49h0c7.68-7.65,17.08-12.74,26.48-14.33,10-1.7,18.93.73,25,6.85s8.5,15,6.77,25c-1.62,9.39-6.74,18.78-14.42,26.43-16.14,16.09-47.69,9.15-49,8.85ZM681.92,527a21.28,21.28,0,0,0-11-.75c-7.34,1.24-14.79,5.33-21,11.5h0c-9.64,9.61-8,28.65-6.83,36.29,7.63,1.16,26.68,2.89,36.31-6.71,6.2-6.18,10.3-13.62,11.57-21,1.15-6.69-.25-12.42-3.95-16.13A14.14,14.14,0,0,0,681.92,527Z",transform:"translate(-180.4 -86.46)",fill:"#6c63ff"}}),t._v(" "),r("g",{attrs:{opacity:"0.5"}},[r("polygon",{attrs:{points:"608.43 487.86 301.42 487.86 301.42 549.29 317.37 549.29 317.37 727.08 592.48 727.08 592.48 549.29 608.43 549.29 608.43 487.86",fill:"url(#96b175d5-5e64-4663-918e-24aaa3155285)"}})]),t._v(" "),r("rect",{attrs:{x:"320.85",y:"506.43",width:"268.15",height:"217.63",fill:"#535461"}}),t._v(" "),r("rect",{attrs:{x:"429.66",y:"545.29",width:"50.52",height:"178.76",fill:"#6c63ff"}}),t._v(" "),r("rect",{attrs:{x:"320.85",y:"494.77",width:"268.15",height:"54.41",opacity:"0.1"}}),t._v(" "),r("rect",{attrs:{x:"305.31",y:"490.88",width:"299.24",height:"54.41",fill:"#535461"}}),t._v(" "),r("rect",{attrs:{x:"429.66",y:"490.88",width:"50.52",height:"54.41",fill:"#6c63ff"}})])])],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-jumbotron",{attrs:{height:"500px",src:"../../static/images/inna.jpg",gradient:"to bottom right, rgba(31,31,33, .1), rgba(31,31,33, .5)",dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{xs12:"","text-xs-left":""}},[r("h3",{staticClass:"display-2"},[r("strong",[t._v("Selection")])]),t._v(" "),r("h4",{staticClass:"display-1"},[t._v("Découvrez notre selection pour l'hiver")])])],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-jumbotron",{attrs:{height:"500px",src:"../../static/images/street.jpeg",gradient:"to bottom right, rgba(31,31,33, .1), rgba(31,31,33, .5)",dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{xs12:"","text-xs-left":""}},[r("h3",{staticClass:"display-2"},[r("strong",[t._v("Streetwear")])]),t._v(" "),r("h4",{staticClass:"display-1"},[t._v("Domptez le style urbain")])])],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-jumbotron",{attrs:{height:"600px",src:"../../static/images/audacieux.jpg",gradient:"to bottom right, rgba(31,31,33, .1), rgba(31,31,33, .5)",dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{xs12:"","text-xs-left":""}},[r("h3",{staticClass:"display-2"},[r("strong",[t._v("Audacieux")])]),t._v(" "),r("h4",{staticClass:"display-1"},[t._v("Un eco branding environmental")])]),t._v(" "),r("v-flex",{attrs:{xs12:"","text-xs-center":""}},[r("v-btn",{staticClass:"big-button elevation",attrs:{color:"brown"}},[t._v("\n                                Embarquez\n                            ")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=r("VU/8")({name:"home",data:function(){return{}}},_,!1,function(t){r("qFyE")},"data-v-4a95f57e",null).exports,h=r("Gu7T"),p=r.n(h),b={name:"produits",data:function(){return{products:[],commande:[],loading_commande:!1,loading_produit:!0,snackbar_show:!1,snackbar_text:"",snackbar_color:"error",api_url:i}},mounted:function(){var t=this;c("products").then(function(a){t.products=a.data,setTimeout(function(){t.loading_produit=!1},500)})},methods:{product_to_url:function(t){return i+"static/produits/"+t.id+".png"},commande_sum:function(){var t=0;return this.commande.map(function(a){return t+=a.prix*a.quantite}),t},add_produit:function(t){if(this.commande.find(function(a){return a.id==t})){this.commande.find(function(a){return a.id==t}).quantite++,this.commande=[].concat(p()(this.commande))}else{var a=this.products.find(function(a){return a.id==t});a.quantite=1,this.commande=[].concat(p()(this.commande),[a])}},remove_product:function(t){this.commande=this.commande.filter(function(a){return a.id!=t})},add_order:function(){var t=this;this.loading_commande=!0,l("orders",{order:this.commande}).then(function(a){t.commande=[],t.loading_commande=!1,t.snackbar_color="success",t.snackbar_text="Votre commande à bien été enregistré !",t.snackbar_show=!0}).catch(function(a){t.loading_commande=!1,t.snackbar_color="error",t.snackbar_text="Erreur lors de la liaison avec le serveur !",t.snackbar_show=!0})}}},g={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"ma-1 pa-0"},[r("v-snackbar",{attrs:{timeout:3e3,bottom:"",right:"",color:t.snackbar_color},model:{value:t.snackbar_show,callback:function(a){t.snackbar_show=a},expression:"snackbar_show"}},[t._v("\n        "+t._s(t.snackbar_text)+"\n    ")]),t._v(" "),t._m(0),t._v(" "),r("transition-group",{attrs:{mode:"out-in",name:"appear"}},[t.loading_produit?r("div",{key:2,staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:100,dark:""}})],1):r("div",{key:1,staticClass:"container-produits",class:t.commande.length?"":"full"},[r("v-container",{staticStyle:{"max-width":"1600px",margin:"auto"},attrs:{"grid-list-md":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.products,function(a){return r("v-flex",{key:a.id,attrs:{xs6:"",md4:""}},[r("v-card",{key:a.id},[r("v-card-media",{attrs:{src:t.product_to_url(a),height:"200px"}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(a.nom))]),t._v(" "),r("div",{attrs:{"text-xs-right":""}},[r("p",[t._v(t._s(a.prix)+" €")])])])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(r){t.add_produit(a.id)}}},[t._v("Ajouter")])],1)],1)],1)}))],1)],1)]),t._v(" "),r("div",{staticClass:"container-commande",class:t.commande.length?"open":""},[r("v-container",{attrs:{fluid:""}},[t.commande.length?r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-list",{attrs:{subheader:""}},[r("v-subheader",[t._v("Commande")]),t._v(" "),r("transition-group",{attrs:{name:"slide"}},t._l(t.commande,function(a,e){return r("v-list-tile",{key:e,attrs:{avatar:""},on:{click:function(t){}}},[r("v-list-tile-avatar",[r("img",{attrs:{src:t.product_to_url(a)}})]),t._v(" "),r("v-list-tile-content",[t._v("\n                                    "+t._s(a.quantite)+"\n                                ")]),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                                        "+t._s(a.nom)+"\n                                    ")])],1),t._v(" "),r("v-list-tile-content",[t._v("\n                                    "+t._s(a.prix)+" €\n                                ")]),t._v(" "),r("v-list-tile-action",[r("v-btn",{attrs:{flat:"",icon:""},on:{click:function(r){t.remove_product(a.id)}}},[r("v-icon",[t._v("cancel")])],1)],1)],1)}))],1),t._v(" "),r("v-divider"),t._v(" "),r("v-flex",{staticClass:"title ma-2 pa-2",attrs:{xs12:"","text-xs-right":""}},[r("strong",[t._v("Total : "+t._s(t.commande_sum())+" €")])]),t._v(" "),r("v-btn",{attrs:{block:"",loading:t.loading_commande,color:"primary",dark:""},on:{click:function(a){t.add_order()}}},[t._v("Commander")])],1)],1):t._e()],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{staticClass:"display-3 mb-3"},[a("strong")])}]};var x=r("VU/8")(b,g,!1,function(t){r("nVy7")},"data-v-258bc4b5",null).exports,y={name:"orders",data:function(){return{headers:[{text:"Vos dernières commandes",align:"left",sortable:!1,value:"id"},{text:"Nombre d'articles",value:"number",sortable:!1},{text:"Prix",value:"number",sortable:!1}],commandes:[],products:[],loading_commandes:!0,loading_products:!0,snackbar_show:!1,snackbar_text:"",snackbar_color:"error"}},mounted:function(){var t=this;c("orders").then(function(a){t.commandes=a.data,t.loading_commandes=!1}),c("products").then(function(a){t.products=a.data,t.loading_products=!1})},methods:{get_order_price:function(t){var a=this,r=0;return t.map(function(t){r+=a.products.find(function(a){return a.id==t.product_id}).prix*t.quantite}),r}}},k={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"ma-1 pa-0"},[r("v-snackbar",{attrs:{timeout:3e3,bottom:"",right:"",color:t.snackbar_color},model:{value:t.snackbar_show,callback:function(a){t.snackbar_show=a},expression:"snackbar_show"}},[t._v("\n    "+t._s(t.snackbar_text)+"\n  ")]),t._v(" "),t._m(0),t._v(" "),r("transition-group",{attrs:{mode:"out-in",name:"appear"}},[t.loading_products||t.loading_commandes?r("div",{key:2,staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:100,dark:""}})],1):r("div",{key:1},[r("v-data-table",{staticClass:"elevation table-order",attrs:{headers:t.headers,items:t.commandes,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(a){return[r("router-link",{attrs:{to:"/orders/"+a.item.id,tag:"tr"}},[r("td",[t._v(t._s(a.item.id))]),t._v(" "),r("td",[t._v(t._s(a.item.lines.length))]),t._v(" "),r("td",[t._v(t._s(t.get_order_price(a.item.lines))+" €")])])]}}])})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{staticClass:"display-3 mb-3"},[a("strong")])}]};var w=r("VU/8")(y,k,!1,function(t){r("E3tx")},"data-v-7b35b830",null).exports,C={name:"order",data:function(){return{loading_commandes:!0,loading_products:!0,commande:{},products:[],headers:[{text:"Article",align:"left",sortable:!1,value:"image"},{text:"Quantité",value:"number",sortable:!1},{text:"Prix",value:"number",sortable:!1}]}},methods:{get_order_price:function(t){var a=this,r=0;return t.map(function(t){r+=a.products.find(function(a){return a.id==t.product_id}).prix*t.quantite}),r},product_to_url:function(t){return i+"static/produits/"+t+".png"},get_product_name:function(t){return this.products.find(function(a){return a.id==t}).nom},get_line_price:function(t){return this.products.find(function(a){return a.id==t.product_id}).prix*t.quantite}},mounted:function(){var t=this;c("orders/"+this.$route.params.id).then(function(a){t.commande=a.data,t.loading_commandes=!1}),c("products").then(function(a){t.products=a.data,t.loading_products=!1})}},M={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"ma-1 pa-0"},[r("transition-group",{attrs:{mode:"out-in",name:"appear",tag:"div"}},[t.loading_products||t.loading_commandes?r("div",{key:2,staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:100,dark:""}})],1):r("v-card",{key:1,staticClass:"order-card mt-4"},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"title mb-0"},[t._v("Commande "+t._s(t.commande.id))])])]),t._v(" "),r("v-card-text",[r("v-list",{attrs:{subheader:""}},[r("v-subheader",[t._v("Détails de la commande")]),t._v(" "),r("transition-group",{attrs:{name:"slide"}},t._l(t.commande.lines,function(a,e){return r("v-list-tile",{key:e,attrs:{avatar:""},on:{click:function(t){}}},[r("v-list-tile-avatar",[r("img",{attrs:{src:t.product_to_url(a.product_id)}})]),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                                    "+t._s(t.get_product_name(a.product_id))+"\n                                ")])],1),t._v(" "),r("v-list-tile-content",[t._v("\n                                "+t._s(a.quantite)+"\n                            ")]),t._v(" "),r("v-list-tile-content",[t._v("\n                                "+t._s(t.get_line_price(a))+" €\n                            ")])],1)})),t._v(" "),r("v-divider"),t._v(" "),r("h3",{staticClass:"title align-right mr-3 mt-3"},[r("strong",[t._v("Total : "+t._s(t.get_order_price(t.commande.lines))+"€")])])],1)],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{icon:"",color:"primary",to:"/orders"}},[r("v-icon",[t._v("keyboard_arrow_left")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var E=r("VU/8")(C,M,!1,function(t){r("jrco")},"data-v-6da9c99a",null).exports,A={name:"test",data:function(){return{name:"Fanny",newElem:"",list:[]}},mounted:function(){var t=this;c("products").then(function(a){console.log(a.data),a.data.map(function(a){return t.list.push(a.nom)})})}},F={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("v-container",[r("h1",[t._v("Bonjour "+t._s(t.name))]),t._v(" "),r("ul",t._l(t.list,function(a){return r("li",{key:a},[t._v(t._s(a))])})),t._v(" "),r("v-text-field",{model:{value:t.newElem,callback:function(a){t.newElem=a},expression:"newElem"}}),t._v(" "),r("v-btn",{attrs:{depressed:"",small:""},on:{click:function(a){t.addElement()}}},[t._v("Ajouter")])],1)],1)},staticRenderFns:[]},j=r("VU/8")(A,F,!1,null,null,null).exports;e.a.use(f.a);var Z=new f.a({routes:[{path:"/",name:"Home",component:m},{path:"/products",name:"Produits",component:x},{path:"/orders",name:"Commandes",component:w},{path:"/orders/:id",name:"Commande",component:E},{path:"/test",name:"Test",component:j}]}),q=r("3EgV"),z=r.n(q);r("7zck");e.a.use(z.a,{theme:{primary:"#6772e5",secondary:"#7F6CF9",accent:"#E5E9F2",dark:"#32325d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),e.a.config.productionTip=!1,new e.a({el:"#app",router:Z,components:{App:u},template:"<App/>"})},RJdQ:function(t,a){},jrco:function(t,a){},nVy7:function(t,a){},qFyE:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.68b6c91917501b75cc99.js.map