(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){e.exports=a(75)},32:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),l=a.n(r),o=(a(32),a(6)),s=a(7),c=a(25),u=a(21),m=a(26),f=a(22),d=a(23),g=a.n(d),h=a(9),v=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getDataCV",value:function(){var e=h.urlHvAppApi;return g()({method:"get",url:"".concat(e,"dataCVPerson/p1"),headers:{"Content-Type":"application/json, text/plain, */*"},withCredentials:!1,timeout:5e3})}}]),e}(),p=a(2),b=new(function(){function e(){Object(o.a)(this,e),Object(p.f)(this,{socials:void 0})}return Object(s.a)(e,[{key:"setSocials",value:function(e){for(var t in e)for(var a in e[t])e[t][a].hasOwnProperty("name");this.socials=e}},{key:"getSocials",value:function(){return this.socials}}]),e}()),E=(a(54),function(e){var t=[];return function(){var e="",a=b.getSocials();for(var n in a)switch(n.toUpperCase()){case"BLOGGER":for(var r in a[n])if("url"===r){e=a[n][r];break}t.push(i.a.createElement("li",{key:n},i.a.createElement("a",{href:e,target:"_blank"},i.a.createElement("i",{className:"fab fa-blogger fa-2x",name:n}))));break;case"GITHUB":for(var l in a[n])if("url"===l){e=a[n][l];break}t.push(i.a.createElement("li",{key:n},i.a.createElement("a",{href:e,target:"_blank"},i.a.createElement("i",{className:"fab fa-github fa-2x",name:n}))));break;case"TWITTER":for(var o in a[n])if("url"===o){e=a[n][o];break}t.push(i.a.createElement("li",{key:n},i.a.createElement("a",{href:e,target:"_blank"},i.a.createElement("i",{className:"fab fa-twitter fa-2x",name:n}))))}}(),i.a.createElement("div",{className:"secSocials"},i.a.createElement("ul",null,t))}),k=(a(56),function(e){e.logo;return i.a.createElement("header",{className:"secHeader"},i.a.createElement("div",{className:"divHeaderImgProfile",onClick:function(){console.log("header",e)}},i.a.createElement("img",{className:"imgHeaderImgProfile",alt:e.altImg,src:e.urlImg})),i.a.createElement("h1",null,e.vName),i.a.createElement("h2",null,e.yourSelf),i.a.createElement("div",{className:"desc"},i.a.createElement("p",null,e.legend)),i.a.createElement(E,null))}),C=(a(19),function(e){var t=e.description,a=e.level,n=e.items,r=e.title,l=e.animation;return i.a.createElement("div",{className:function(){var e="bbulletin";return!0===l&&(e="bbulletin bbulletinAnimation"),e}()},i.a.createElement("h2",{className:"title"},r),i.a.createElement("p",{className:"level"},function(){for(var e=parseInt(a),t=[],n=1;n<=e;n++)t.push(i.a.createElement("i",{className:"fa fa-star"}));return t}()),i.a.createElement("p",null,t),i.a.createElement("ul",{className:"attributes"},function(){var e=[];if(void 0!==n&&null!==n)for(var t=0;t<=n.length-1;t++)e.push(i.a.createElement("li",{key:t},n[t]));return e}()))}),P=function(e){var t=e.data,a=e.animation;return i.a.createElement("div",{className:"bboard"},function(){var e=[];if(void 0!==t&&null!==t){for(var n in t)e.push(i.a.createElement(C,{animation:a,description:t[n].description,key:n,level:t[n].level,items:t[n].items,title:t[n].name})),console.log(n,t[n]);return e}}())},V=a(12);V.initializeApp({apiKey:"AIzaSyC_ijNJZOAxb96RxBfa-ULGEBXcmUlY8NE",authDomain:"mihv-333.firebaseapp.com",databaseURL:"https://mihv-333.firebaseio.com",projectId:"mihv-333",storageBucket:"mihv-333.appspot.com",messagingSenderId:"127491763235"});var y={storageRef:V.storage().ref()},N=a(9),w=a(24),I=a.n(w),j=(a(73),new v),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={dataCV:void 0,imgProfile:void 0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;j.getDataCV().then(function(t){return e.setState({dataCV:t.data}),b.setSocials(e.state.dataCV.websites),y.storageRef.child("imgProfile/".concat(N.defIdPerson,"/").concat(e.state.dataCV.imgProfile.url)).getDownloadURL()}).then(function(t){e.setState({imgProfile:t})}).catch(function(e){return console.log(e)})}},{key:"getNamePerson",value:function(){return void 0!==this.state.dataCV?this.state.dataCV.firtsName:"user"}},{key:"getUrlImgProfile",value:function(){var e=N.defUrlImgProfile;void 0!==this.state.dataCV&&void 0!==this.state.dataCV.imgProfile&&(this.state.dataCV.imgProfile.isFirebase?void 0!==this.state.dataCV.imgProfile.url&&null!==this.state.dataCV.imgProfile.url&&y.storageRef.child("imgProfile/".concat(N.defIdPerson,"/").concat(this.state.dataCV.imgProfile.url)).getDownloadURL().then(function(e){return e}).catch(function(e){return console.log(e)}):void 0!==this.state.dataCV.imgProfile.url&&null!==this.state.dataCV.imgProfile.url&&(e=this.state.dataCV.imgProfile.url)),console.log("getUrlImgProfile",e)}},{key:"getVisibleName",value:function(){return void 0!==this.state.dataCV?this.state.dataCV.visibleName:""}},{key:"getYourself",value:function(){return void 0!==this.state.dataCV?this.state.dataCV.nameYourselfProfessionally:""}},{key:"getLegend",value:function(){return void 0!==this.state.dataCV?this.state.dataCV.legend:""}},{key:"getSkills",value:function(){return void 0!==this.state.dataCV?this.state.dataCV.skills:null}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,{logo:I.a,altImg:this.getNamePerson(),urlImg:this.state.imgProfile,vName:this.getVisibleName(),yourSelf:this.getYourself(),legend:this.getLegend()}),i.a.createElement(P,{data:this.getSkills(),animation:!0}))}}]),t}(n.Component),S=Object(f.a)(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports={urlHvAppApi:"https://us-central1-mihv-333.cloudfunctions.net/app/",urlHVAppApiLocal:"https://us-central1-mihv-333.cloudfunctions.net/app/",defUrlImgProfile:"../res/imgProfile.png",defIdPerson:"p1"}}},[[27,2,1]]]);
//# sourceMappingURL=main.11f97482.chunk.js.map