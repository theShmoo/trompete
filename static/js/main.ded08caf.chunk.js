(this.webpackJsonptrompete=this.webpackJsonptrompete||[]).push([[0],{82:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=a(38),s=a(39),l=a(50),u=a(49),m=a(4),d=a(134),f=a(135),p=a(131),h=a(133),g=a(95),v=a(68),E=a(123),b=a(124),y=Object(v.a)({typography:{useNextVariants:!0},palette:{primary:{light:"#99d066",main:"#689f38",dark:"#387002",contrastText:"#000"},secondary:{light:"#819ca9",main:"#546e7a",dark:"#29434e",contrastText:"#fff"}}});var j=function(e){return function(t){return r.a.createElement(E.a,{theme:y},r.a.createElement(b.a,null),r.a.createElement(e,t))}},x=a(13),O=a(139),N=a(130),w=a(61),S=a.n(w),k=a(60),C=a.n(k),G="https://lagerjodel.firebaseio.com/databases/posts",T=G+".json",F={method:"GET",redirect:"follow"},D={"Content-Type":"application/json",Accept:"application/json"},P=Object(m.a)((function(e){return{form:{flexGrow:1},button:{margin:e.spacing(1)},textField:{flexGrow:1,padding:e.spacing(2)}}}))((function(e){var t=e.classes,a=e.user,n=e.onSend,i=r.a.useState(""),o=Object(x.a)(i,2),c=o[0],s=o[1],l=r.a.useState(!1),u=Object(x.a)(l,2),m=u[0],d=u[1],f=r.a.useState("Leere Trompete"),h=Object(x.a)(f,2),g=h[0],v=h[1],E=""!==g,b=function(){if(!E){var e={method:"POST",headers:D,body:JSON.stringify({user:a,text:c,time:Date.now()}),redirect:"follow"};fetch(T,e).then((function(e){e.ok?e.json().then((function(e){d(!0),s(""),n()})).catch((function(){v("Fehler beim Verarbeiten der Nachricht...")})):v("Mein Server mag diese Nachricht nicht...")})).catch((function(){v("Fehler beim Senden der Nachricht...")}))}};return r.a.createElement("form",{className:t.form},r.a.createElement(O.a,{id:"my-text",multiline:!0,error:E,className:t.textField,rowsMax:4,fullWidth:!0,value:c,onKeyPress:function(e){"Enter"===e.key&&(b(),e.preventDefault())},onChange:function(e){m&&d(!1),s(e.target.value),v(e.target.value?"":"Leere Trompete")}}),r.a.createElement(N.a,{variant:"contained",disabled:m||E,onClick:b,className:t.button,color:m?"secondary":"primary",endIcon:m?r.a.createElement(C.a,null):r.a.createElement(S.a,null)},"Send"),m?r.a.createElement(p.a,{variant:"body1",color:"primary"},"Gesendet!"):"")})),J=a(138),I=a(67),q=a.n(I),L=a(62),M=a.n(L),A=a(63),V=a.n(A),W=a(64),z=a.n(W),B=a(144),R=a(132),H=a(65),K=a.n(H),U=a(66),Q=a.n(U);function X(e){return e?Object.entries(e).map((function(e){return Object(x.a)(e,2)[1].up})).reduce((function(e,t){return e+(t?1:-1)}),0):0}var Y=Object(m.a)((function(e){return{root:{paddingLeft:e.spacing(1)},icon:{width:e.spacing(3),height:e.spacing(3),display:"block",marginLeft:"auto",marginRight:"auto"},votes:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}}))((function(e){var t=e.id,a=e.post,n=e.user,i=e.classes,o=a.votes,c=o?Object.entries(o).map((function(e){var t=Object(x.a)(e,2);return{id:t[0],data:t[1]}})):void 0,s=c?c.find((function(e){return e.data.user===n})):void 0,l=r.a.useState(s),u=Object(x.a)(l,2),m=u[0],d=u[1],f=G+"/"+t+"/votes",h=function(e){if(m){if(m.id&&m.data.up!==e){var t=JSON.parse(JSON.stringify(m));t.data.up=e,t.data.time=Date.now(),d(t),function(e,t){var a=f+"/"+m.id+"/.json",n={method:"PATCH",headers:D,body:JSON.stringify(e),redirect:"follow"};fetch(a,n).then((function(e){if(!e.ok)throw new Error("Whoops!")})).catch((function(){console.log("Fehler beim Senden des Votes...")}))}(t.data)}}else{var a={user:n,up:e,time:Date.now()};d({data:a}),function(e,t){var a=f+".json",n={method:"POST",headers:D,body:JSON.stringify(e),redirect:"follow"};fetch(a,n).then((function(t){if(!t.ok)throw new Error("Whoops!");t.json().then((function(t){d({data:e,id:t.name})}))})).catch((function(){console.log("Fehler beim Senden des Votes...")}))}(a)}},g="inherit",v="inherit",E=X(o);if(m){var b=m.data.up;g=b?"primary":"inherit",v=b?"inherit":"primary",s?s.data.up!==b&&(E+=b?2:-2):E+=b?1:-1}return r.a.createElement("div",{className:i.root},r.a.createElement(B.a,{className:i.icon},r.a.createElement(p.a,{variant:"caption",className:i.votes},E)),r.a.createElement(R.a,{className:i.icon,"aria-label":"upvote",size:"small",color:g,onClick:function(e){h(!0)}},r.a.createElement(K.a,null)),r.a.createElement(R.a,{className:i.icon,"aria-label":"downvote",size:"small",color:v,onClick:function(e){h(!1)}},r.a.createElement(Q.a,null)))})),Z=z()(V.a),$=function(e){var t=e.time;return r.a.createElement(J.a,{alignSelf:"flex-end"},r.a.createElement(p.a,{variant:"caption",color:"inherit"},r.a.createElement(M.a,{date:t,formatter:Z})))},_=function(e){var t=e.comments,a=t?t.length:0;return r.a.createElement(J.a,{flexGrow:1},r.a.createElement(N.a,{variant:"text",size:"small",color:"secondary",startIcon:r.a.createElement(q.a,null)},a," Kommentare"))},ee=Object(m.a)((function(e){return{root:{flexGrow:1},box:{margin:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(2),paddingBottom:e.spacing(1)},comments:{marginRight:e.spacing(0)}}}))((function(e){var t=e.id,a=e.post,n=e.user,i=e.classes,o=a.text,c=a.time,s=a.comments;return r.a.createElement(h.a,{item:!0,xs:12,sm:6,lg:4,className:i.root},r.a.createElement(g.a,{square:!0,elevation:2,className:i.box},r.a.createElement(J.a,{display:"flex"},r.a.createElement(J.a,{flexGrow:1},r.a.createElement(p.a,{variant:"h6",color:"inherit"},o)),r.a.createElement(J.a,null,r.a.createElement(Y,{post:a,id:t,user:n}))),r.a.createElement(J.a,{display:"flex",className:i.comments},r.a.createElement(_,{post:s}),r.a.createElement($,{time:c}))))})),te=a(129),ae=a(141),ne=a(136),re=a(140),ie=Object(m.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}}))((function(e){var t=e.classes,a=e.onChange,n=e.ordering,i=e.orderings,o=n.value,c=i.map((function(e,t){return r.a.createElement(ae.a,{value:e.value,key:t},e.name)}));return r.a.createElement(te.a,{className:t.formControl},r.a.createElement(re.a,{shrink:!0,id:"ordering-label"},"sortieren nach"),r.a.createElement(ne.a,{labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",value:o,onChange:function(e){var t=e.target.value,n=i.find((function(e){return t===e.value}));n&&a(n)}},c))})),oe=[{name:"Neueste",value:"newest"},{name:"Hottest",value:"hottest"}],ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{},error:"",ordering:oe[0]},e.handleOrderChange=function(t){e.setState({ordering:t})},e}return Object(s.a)(a,[{key:"setData",value:function(e){this.setState({data:e})}},{key:"componentDidMount",value:function(e){this.update()}},{key:"componentDidUpdate",value:function(e){this.props.refresh!==e.refresh&&this.update()}},{key:"update",value:function(){var e=this;fetch(T,F).then((function(e){return e.json()})).then((function(t){e.setData(t)}))}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.classes,n=this.state,i=n.data,o=n.ordering,c=o.value,s=Object.entries(i).map((function(e){var t=Object(x.a)(e,2);return{id:t[0],data:t[1]}})).sort((function(e,t){if("newest"===c)return t.data.time-e.data.time;if("hottest"===c){var a=X(e.data.votes);return X(t.data.votes)-a}return 0})).map((function(e,a){return r.a.createElement(ee,{id:e.id,post:e.data,user:t,key:e.id})}));return r.a.createElement(h.a,{className:a.root,container:!0,spacing:1},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(ie,{ordering:o,orderings:oe,onChange:this.handleOrderChange})),s)}}]),a}(r.a.Component),se=Object(m.a)((function(e){return{root:{flexGrow:1}}}))(ce),le=function(){return r.a.createElement("span",{role:"img","aria-label":"trompete",style:{margin:"1ex"}},"\ud83c\udfba")},ue=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={refreshFeed:!1},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(le,null),r.a.createElement(p.a,{variant:"h6",color:"inherit",className:t.flex},"Trompete"))),r.a.createElement(g.a,{square:!0,elevation:4,className:t.ui},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(P,{user:"-M8qkGNG5pSfIyxBcxPP",onSend:function(){e.setState((function(e){return{refreshFeed:!e.refreshFeed}}))}})))),r.a.createElement(h.a,{container:!0,spacing:2,className:t.main},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(se,{user:"-M8qkGNG5pSfIyxBcxPP",refresh:this.state.refreshFeed}))))}}]),a}(n.Component),me=j(Object(m.a)((function(e){return{root:{flexGrow:1},main:{padding:e.spacing(2),margin:e.spacing(1)},ui:{padding:e.spacing(2),margin:e.spacing(1)}}}))(ue));o.a.render(r.a.createElement(me,null),document.querySelector("#root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.ded08caf.chunk.js.map