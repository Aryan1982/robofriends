(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(43)},30:function(e,a,t){},39:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(12),o=t.n(i),l=(t(30),t(13)),m=t(14),c=t(19),s=t(15),h=t(20),u=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5",type:"search",placeholder:"search robots",onChange:a}))},b=t(7),d=t(1),w=function(e){var a=e.name,t=(e.email,e.id);e.url;return r.a.createElement(b.a,null,r.a.createElement(d.c,null,r.a.createElement("a",{href:"/Blogs/".concat(t)},r.a.createElement("div",{className:"bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a))))))},g=function(e){var a=e.robots,t=a.map(function(e,t){return r.a.createElement(w,{key:t,id:a[t].id,name:a[t].name,email:a[t].email,url:a[t].url})});return r.a.createElement("div",null,t)},y=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},p=[{id:1,name:"Aryan",username:"aryan1245",email:"Aryan@gmail.com",url:"https://www.instagram.com/aryan_thakor2411/",specification:"Battery Charging Time :8hrs,\nSpeed: good enough,\nMemory:Unlimited(just need to be revised everyday)",hobby:"Preety good robot,Likes to stay updated"},{id:2,name:"Vinit",username:"Vinit1245",email:"Vinitgandhi@gmail.com",url:"https://www.instagram.com/vinit._.gandhi._.02/?hl=en",specification:"Battery Life: 16hrs,\nBattery Charging Time: 8hrs,\nSpeed: not bad,\nMemory: Gets formated after exam",hobby:"Hard working robot,Obsessed with coding specially C++"},{id:3,name:"Jenish",username:"Jenish1245",email:"JenishP@gmail.com",url:"https://www.instagram.com/_jenishpatel__/?hl=en",specification:"Battery Life: 16hrs,\nBattery Charging Time: 8hrs,\nSpeed: not bad,\nMemory: Gets formated after exam",hobby:"Very good working robot,Obsessed with Youtube"},{id:4,name:"Dhruv",username:"Dhurv1234",email:"tejas@gmail.com",url:"https://www.instagram.com/ptl_dhruv_4050/?hl=en",specification:"Battery Life: 16hrs,\nBattery Charging Time: 8hrs,\nSpeed: not bad,\nMemory: Gets formated after exam",hobby:"Very good working robot,Obsessed with ILETS"},{id:5,name:"Aryan",username:"aryan1245",email:"whatever@gmail.com",url:"https://www.youtube.com/watch?v=G5xSLbYMr-I"},{id:6,name:"Aryan",username:"aryan1245",email:"whatever@gmail.com",url:"https://www.youtube.com/watch?v=G5xSLbYMr-I"},{id:7,name:"Aryan",username:"aryan1245",email:"whatever@gmail.com",url:"https://www.youtube.com/watch?v=G5xSLbYMr-I"},{id:8,name:"Aryan",username:"aryan1245",email:"whatever@gmail.com",url:"https://www.youtube.com/watch?v=G5xSLbYMr-I"},{id:9,name:"Aryan",username:"aryan1245",email:"whatever@gmail.com",url:"https://www.youtube.com/watch?v=G5xSLbYMr-I"},{id:10,name:"Aryan",username:"aryan1245",email:"whatever@gmail.com",url:"https://www.youtube.com/watch?v=G5xSLbYMr-I"}],f=t(18),v=function(e){e.name,e.url,e.email;var a=Object(d.f)().id,t=w("https://aryan1982.github.io/robofriends/Blogs/"+a);Object(f.a)(t);var n=a-1;return r.a.createElement("div",null,r.a.createElement("div",{className:"bg-light-blue dib br3 pa6 ma4 bw3 shadow5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("h2",null,p[n].name),r.a.createElement("h4",null,p[n].hobby),r.a.createElement("h3",null,"Specifications"),r.a.createElement("h4",null,r.a.createElement("pre",null,p[n].specification)),r.a.createElement("a",{href:p[n].url},r.a.createElement("div",{className:"bg-blue dib1 br2 pa3 ma2 bw3 shadow5"},r.a.createElement("h3",null,"Check out the human version of this robot")))))},E=function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/Blogs/:id"},r.a.createElement(v,null)))))},C=(t(39),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:p,searchfield:""},e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robots.filter(function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"pa2 bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5"},"Home")),r.a.createElement(u,{searchChange:this.onSearchChange}),r.a.createElement(y,null,r.a.createElement(E,{robots:"robots"}),r.a.createElement(g,{robots:a})))}}]),a}(n.Component)),S=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,44)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,i=a.getLCP,o=a.getTTFB;t(e),n(e),r(e),i(e),o(e)})};t(41);o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null))),S()}},[[21,3,2]]]);
//# sourceMappingURL=main.6f00fa9a.chunk.js.map