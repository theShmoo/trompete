(this.webpackJsonptrompete=this.webpackJsonptrompete||[]).push([[0],{83:function(e,t,a){e.exports=a(94)},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=a(39),s=a(40),l=a(49),m=a(48),u=a(4),d=a(134),f=a(135),p=a(131),h=a(136),v=a(96),g=a(69),E=a(123),b=a(124),y=Object(g.a)({typography:{useNextVariants:!0},palette:{primary:{light:"#99d066",main:"#689f38",dark:"#387002",contrastText:"#000"},secondary:{light:"#819ca9",main:"#546e7a",dark:"#29434e",contrastText:"#fff"}}});var j=function(e){return function(t){return r.a.createElement(E.a,{theme:y},r.a.createElement(b.a,null),r.a.createElement(e,t))}},x=a(11),O=a(140),N=a(130),w=a(62),S=a.n(w),k=a(61),C=a.n(k),G="https://lagerjodel.firebaseio.com/databases/posts",T=G+".json",F={method:"GET",redirect:"follow"},P={"Content-Type":"application/json",Accept:"application/json"},D=function(e){var t=e.classes,a=e.user,n=e.onSend,o=e.postid,c=r.a.useState(""),i=Object(x.a)(c,2),s=i[0],l=i[1],m=r.a.useState(!1),u=Object(x.a)(m,2),d=u[0],f=u[1],h=r.a.useState("Leere Trompete"),v=Object(x.a)(h,2),g=v[0],E=v[1],b=""!==g,y=function(){if(!b){var e=o?G+"/"+o+"/comments.json":T,t={user:a,text:s,time:Date.now()},r={method:"POST",headers:P,body:JSON.stringify(t),redirect:"follow"};fetch(e,r).then((function(e){e.ok?e.json().then((function(e){f(!0),l(""),function(e,t){n(e,t)}(e.name,t)})).catch((function(){E("Fehler beim Verarbeiten der Nachricht...")})):E("Mein Server mag diese Nachricht nicht...")})).catch((function(){E("Fehler beim Senden der Nachricht...")}))}};return r.a.createElement("form",{className:t.form},r.a.createElement(O.a,{id:"my-text",multiline:!0,error:b,className:t.textField,rowsMax:4,fullWidth:!0,value:s,onKeyPress:function(e){"Enter"===e.key&&(y(),e.preventDefault())},onChange:function(e){d&&f(!1),l(e.target.value),E(e.target.value?"":"Leere Trompete")}}),r.a.createElement(N.a,{variant:"contained",disabled:d||b,onClick:y,className:t.button,color:d?"secondary":"primary",endIcon:d?r.a.createElement(C.a,null):r.a.createElement(S.a,null)},o?"Antworten":"Trompete!"),d?r.a.createElement(p.a,{variant:"body1",color:"primary"},"Gesendet!"):"")},J=Object(u.a)((function(e){return{form:{flexGrow:1},button:{margin:e.spacing(1)},textField:{flexGrow:1,padding:e.spacing(1)}}}))(D);D.defaultProps={comment:!1};var L=a(133),I=a(139),q=a(68),z=a.n(q),A=a(132),M=a(63),W=a.n(M),V=a(64),B=a.n(V);function K(e){return e?Object.entries(e).map((function(e){return Object(x.a)(e,2)[1].up})).reduce((function(e,t){return e+(t?1:-1)}),0):0}var H=Object(u.a)((function(e){return{root:{paddingLeft:e.spacing(1)},icon:{padding:0},votes:{}}}))((function(e){var t=e.id,a=e.post,n=e.user,o=e.parent,c=e.classes,i=a.votes,s=i?Object.entries(i).map((function(e){var t=Object(x.a)(e,2);return{id:t[0],data:t[1]}})):void 0,l=s?s.find((function(e){return e.data.user===n})):void 0,m=r.a.useState(l),u=Object(x.a)(m,2),d=u[0],f=u[1],h=o?G+"/"+o+"/comments/"+t+"/votes":G+"/"+t+"/votes",v=function(e){if(d){if(d.id&&d.data.up!==e){var t=JSON.parse(JSON.stringify(d));t.data.up=e,t.data.time=Date.now(),f(t),function(e,t){var a=h+"/"+d.id+"/.json",n={method:"PATCH",headers:P,body:JSON.stringify(e),redirect:"follow"};fetch(a,n).then((function(e){if(!e.ok)throw new Error("Whoops!")})).catch((function(){console.log("Fehler beim Senden des Votes...")}))}(t.data)}}else{var a={user:n,up:e,time:Date.now()};f({data:a}),function(e,t){var a=h+".json",n={method:"POST",headers:P,body:JSON.stringify(e),redirect:"follow"};fetch(a,n).then((function(t){if(!t.ok)throw new Error("Whoops!");t.json().then((function(t){f({data:e,id:t.name})}))})).catch((function(){console.log("Fehler beim Senden des Votes...")}))}(a)}},g="inherit",E="inherit",b=K(i);if(d){var y=d.data.up;g=y?"primary":"secondary",E=y?"secondary":"primary",l?l.data.up!==y&&(b+=y?2:-2):b+=y?1:-1}return r.a.createElement(I.a,{flexDirection:"column",display:"flex",alignItems:"center",className:c.root},r.a.createElement(p.a,{variant:"caption",className:c.votes},r.a.createElement(A.a,{className:c.icon,"aria-label":"upvote",size:"small",color:g,onClick:function(e){v(!0)}},r.a.createElement(W.a,{fontSize:"inherit"})),r.a.createElement(I.a,{display:"flex",justifyContent:"center",className:c.icon},b),r.a.createElement(A.a,{className:c.icon,"aria-label":"downvote",size:"small",color:E,onClick:function(e){v(!1)}},r.a.createElement(B.a,{fontSize:"inherit"}))))})),R=a(65),U=a.n(R),Q=a(66),X=a.n(Q),Y=a(67),Z=a.n(Y)()(X.a),$=function(e){var t=e.time;return r.a.createElement(I.a,{alignSelf:"flex-end"},r.a.createElement(p.a,{variant:"caption",color:"inherit"},r.a.createElement(U.a,{date:t,formatter:Z})))},_=a(52),ee=function(e){var t=e.comment,a=e.user,n=e.postid,o=e.classes,c=t.data,i=c.text,s=c.time;return r.a.createElement(I.a,{display:"flex",className:o.comment},r.a.createElement(I.a,{flexGrow:1},r.a.createElement($,{time:s}),r.a.createElement(p.a,{variant:"body1",color:"inherit"},i)),r.a.createElement(I.a,null,r.a.createElement(H,{post:t.data,id:t.id,parent:n,user:a})))},te=Object(u.a)((function(e){return{root:{flexGrow:1},comment:{borderLeft:"solid black 1px",paddingLeft:e.spacing(1),marginTop:e.spacing(1)}}}))((function(e){var t=e.user,a=e.post,n=e.postid,o=e.classes,c=r.a.useState(a.comments),i=Object(x.a)(c,2),s=i[0],l=i[1],m=(s?Object.entries(s).map((function(e){var t=Object(x.a)(e,2);return{id:t[0],data:t[1]}})):[]).map((function(e){return r.a.createElement(ee,{key:e.id,comment:e,user:t,postid:n,classes:o})}));return r.a.createElement(L.a,{item:!0,sx:12,className:o.root},r.a.createElement(J,{user:t,postid:n,onSend:function(e,t){l(Object(_.a)(Object(_.a)({},s),{},{[e]:t}))}}),m)})),ae=function(e){var t=e.comments,a=e.classes,n=e.onClick,o=t?Object.keys(t).length:0;return r.a.createElement(I.a,{flexGrow:1},r.a.createElement(N.a,{className:a.comment,variant:"text",size:"small",color:"secondary",onClick:n,startIcon:r.a.createElement(z.a,null)},r.a.createElement(p.a,{variant:"caption",color:"inherit"},1===o?o+" Kommentar":o+" Kommentare")))},ne=Object(u.a)((function(e){return{root:{flexGrow:1},box:{margin:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(2),paddingBottom:e.spacing(1)},comment:{margin:e.spacing(0),padding:e.spacing(0)}}}))((function(e){var t=e.id,a=e.post,n=e.user,o=e.classes,c=a.text,i=a.time,s=a.comments,l=r.a.useState(!1),m=Object(x.a)(l,2),u=m[0],d=m[1];return r.a.createElement(L.a,{item:!0,xs:12,className:o.root},r.a.createElement(v.a,{square:!0,elevation:2,className:o.box},r.a.createElement(I.a,{display:"flex"},r.a.createElement(I.a,{flexGrow:1},r.a.createElement(p.a,{variant:"h6",color:"inherit"},c)),r.a.createElement(I.a,null,r.a.createElement(H,{post:a,id:t,user:n}))),r.a.createElement(I.a,{display:"flex"},r.a.createElement(ae,{comments:s,classes:o,onClick:function(e){return d(!u)}}),r.a.createElement($,{time:i})),u?r.a.createElement(te,{post:a,postid:t,user:n}):""))})),re=a(129),oe=a(142),ce=a(137),ie=a(141),se=Object(u.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}}))((function(e){var t=e.classes,a=e.onChange,n=e.ordering,o=e.orderings,c=n.value,i=o.map((function(e,t){return r.a.createElement(oe.a,{value:e.value,key:t},e.name)}));return r.a.createElement(re.a,{className:t.formControl},r.a.createElement(ie.a,{shrink:!0,id:"ordering-label"},"sortieren nach"),r.a.createElement(ce.a,{labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",value:c,onChange:function(e){var t=e.target.value,n=o.find((function(e){return t===e.value}));n&&a(n)}},i))})),le=[{name:"Neueste",value:"newest"},{name:"Hottest",value:"hottest"}],me=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},error:"",ordering:le[0]},e.handleOrderChange=function(t){e.setState({ordering:t})},e}return Object(s.a)(a,[{key:"setData",value:function(e){this.setState({data:e})}},{key:"componentDidMount",value:function(e){this.update()}},{key:"componentDidUpdate",value:function(e){this.props.refresh!==e.refresh&&this.update()}},{key:"update",value:function(){var e=this;fetch(T,F).then((function(e){return e.json()})).then((function(t){e.setData(t)}))}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.classes,n=this.state,o=n.data,c=n.ordering,i=c.value,s=Object.entries(o).map((function(e){var t=Object(x.a)(e,2);return{id:t[0],data:t[1]}})).filter((function(e){return!0!==e.data.comment})).sort((function(e,t){if("newest"===i)return t.data.time-e.data.time;if("hottest"===i){var a=K(e.data.votes);return K(t.data.votes)-a}return 0})).map((function(e,a){return r.a.createElement(ne,{id:e.id,post:e.data,user:t,key:e.id})}));return r.a.createElement(L.a,{className:a.root,container:!0,spacing:1},r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement(se,{ordering:c,orderings:le,onChange:this.handleOrderChange})),s)}}]),a}(r.a.Component),ue=Object(u.a)((function(e){return{root:{flexGrow:1}}}))(me),de=function(){return r.a.createElement("span",{role:"img","aria-label":"trompete",style:{margin:"1ex"}},"\ud83c\udfba")},fe=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={refreshFeed:!1},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(de,null),r.a.createElement(p.a,{variant:"h5",className:t.flex},"Trompete"))),r.a.createElement(h.a,{spacing:2,fixed:!0,maxWidth:1200,className:t.main},r.a.createElement(v.a,{square:!0,elevation:4},r.a.createElement(p.a,{variant:"body1",className:t.description},"Trompete eine Nachricht an alle Pfadfinder!"),r.a.createElement(J,{user:"-M8qkGNG5pSfIyxBcxPP",onSend:function(t,a){e.setState((function(e){return{refreshFeed:!e.refreshFeed}}))}})),r.a.createElement(ue,{user:"-M8qkGNG5pSfIyxBcxPP",refresh:this.state.refreshFeed})))}}]),a}(n.Component),pe=j(Object(u.a)((function(e){return{flex:{flexGrow:1},root:{flexGrow:1},main:{padding:e.spacing(2),marginLeft:"auto",marginRight:"auto"},description:{padding:e.spacing(2)}}}))(fe));c.a.render(r.a.createElement(pe,null),document.querySelector("#root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.42e58f0e.chunk.js.map