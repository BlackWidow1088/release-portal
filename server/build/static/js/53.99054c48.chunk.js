(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{2278:function(e,n,a){"use strict";a.r(n);var t=a(252),l=a(253),r=a(255),u=a(254),i=a(256),s=a(3),o=a.n(s),c=a(102),d=a(2073),h=a(1987),f=a.n(h),b=(a(2014),o.a.lazy(function(){return a.e(40).then(a.bind(null,2273))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(34)]).then(a.bind(null,2235))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(48)]).then(a.bind(null,2268))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(30)]).then(a.bind(null,2236))}),o.a.lazy(function(){return Promise.all([a.e(1),a.e(28)]).then(a.bind(null,2237))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(11),a.e(54)]).then(a.bind(null,2241))}),o.a.lazy(function(){return a.e(35).then(a.bind(null,2276))}),o.a.lazy(function(){return a.e(13).then(a.bind(null,2274))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(44)]).then(a.bind(null,2270))}),o.a.lazy(function(){return Promise.all([a.e(1),a.e(33)]).then(a.bind(null,2245))}),o.a.lazy(function(){return a.e(41).then(a.bind(null,2246))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(5),a.e(55)]).then(a.bind(null,2271))}),o.a.lazy(function(){return a.e(45).then(a.bind(null,2247))}),o.a.lazy(function(){return a.e(36).then(a.bind(null,2248))}),o.a.lazy(function(){return a.e(20).then(a.bind(null,2249))}),o.a.lazy(function(){return a.e(21).then(a.bind(null,2250))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(5),a.e(56)]).then(a.bind(null,2272))}),o.a.lazy(function(){return a.e(37).then(a.bind(null,2251))}),o.a.lazy(function(){return Promise.all([a.e(1),a.e(29)]).then(a.bind(null,2252))}),o.a.lazy(function(){return Promise.all([a.e(1),a.e(12)]).then(a.bind(null,2253))}),o.a.lazy(function(){return a.e(38).then(a.bind(null,2254))}),o.a.lazy(function(){return Promise.all([a.e(2),a.e(49)]).then(a.bind(null,2275))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(9)]).then(a.bind(null,2277))}),o.a.lazy(function(){return a.e(39).then(a.bind(null,2255))}),o.a.lazy(function(){return a.e(42).then(a.bind(null,2256))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(46)]).then(a.bind(null,2257))}),o.a.lazy(function(){return a.e(43).then(a.bind(null,2258))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(47)]).then(a.bind(null,2259))}),o.a.lazy(function(){return a.e(25).then(a.bind(null,2260))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(26)]).then(a.bind(null,2261))}),o.a.lazy(function(){return Promise.all([a.e(4),a.e(59)]).then(a.bind(null,2262))}),o.a.lazy(function(){return a.e(60).then(a.bind(null,2263))}),o.a.lazy(function(){return Promise.all([a.e(2),a.e(17)]).then(a.bind(null,2269))}),o.a.lazy(function(){return a.e(27).then(a.bind(null,2264))}),o.a.lazy(function(){return a.e(31).then(a.bind(null,2265))}),o.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(10)]).then(a.bind(null,2098))})),p=(o.a.lazy(function(){return Promise.all([a.e(0),a.e(19),a.e(50)]).then(a.bind(null,2266))}),o.a.lazy(function(){return a.e(23).then(a.bind(null,2267))}),[{path:"/",exact:!0,name:"Release Portal"},{path:"/release/:id",name:"Release",component:b}]),m=a(257),y=a(5),z=a(260),g=(o.a.lazy(function(){return a.e(18).then(a.bind(null,2232))}),o.a.lazy(function(){return a.e(51).then(a.bind(null,2233))}),o.a.lazy(function(){return a.e(24).then(a.bind(null,2234))})),P=function(e){function n(e){var a;return Object(t.a)(this,n),(a=Object(r.a)(this,Object(u.a)(n).call(this,e))).loading=function(){return o.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(i.a)(n,e),Object(l.a)(n,[{key:"signOut",value:function(e){e&&e.preventDefault(),this.props.history.push("/login")}},{key:"componentDidMount",value:function(){var e=this;0===this.props.allReleases.length&&f.a.get("/api/release/all").then(function(n){n.data.forEach(function(n){e.props.updateNavBar({id:n.ReleaseNumber}),e.props.saveReleaseBasicInfo({id:n.ReleaseNumber,data:n})}),e.props.releaseChange({id:n.data[0].ReleaseNumber})},function(e){}),0===this.props.allTestCases.length&&f.a.get("/api/tcstatus").then(function(n){n.data.forEach(function(n){console.log("teceived item ",n),e.props.saveTestCase({id:n.TcID,data:n})})},function(e){})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(s.Suspense,{fallback:this.loading()},o.a.createElement(g,{user:this.props.currentUser,selectedReleaseNumber:this.props.selectedRelease.ReleaseNumber,releases:this.props.allReleases&&this.props.allReleases.map(function(e){return e.ReleaseNumber}),onReleaseChange:function(n){console.log(n),n?(e.props.releaseChange({id:n}),e.props.history.push("/release/".concat(n))):e.props.releaseChange({id:null})},onLogout:function(n){return e.signOut(n)}})),o.a.createElement("div",{className:"app-body"},o.a.createElement("main",{className:"main"},o.a.createElement(d.a,{fluid:!0},o.a.createElement(s.Suspense,{fallback:this.loading()},o.a.createElement(c.d,null,!this.props.currentUser&&o.a.createElement(c.a,{to:"/login"}),p.map(function(e,n){return e.component?o.a.createElement(c.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return o.a.createElement(e.component,n)}}):null}),o.a.createElement(c.a,{from:"/",to:this.props.selectedRelease?"/release/".concat(this.props.selectedRelease.ReleaseNumber):"/release/manage"})))))))}}]),n}(s.Component);n.default=Object(m.b)(function(e,n){return{currentUser:e.auth.currentUser,navigation:e.app.navs,allReleases:e.release.all,allTestCases:e.testcase.all,selectedRelease:Object(z.a)(e)}},{saveReleaseBasicInfo:y.ab,updateNavBar:y.cb,saveTestCase:y.bb,releaseChange:y.Y})(P)}}]);
//# sourceMappingURL=53.99054c48.chunk.js.map