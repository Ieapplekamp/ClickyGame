(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Jango","source":"https://serebii.net/swordshield/pokemon/782.png"},{"id":2,"name":"Moth","source":"https://serebii.net/swordshield/pokemon/873.png"},{"id":3,"name":"angry centipeed","source":"https://serebii.net/swordshield/pokemon/851.png"},{"id":4,"name":"scrag","source":"https://serebii.net/swordshield/pokemon/559.png"},{"id":5,"name":"chanda","source":"https://serebii.net/swordshield/pokemon/609.png"},{"id":6,"name":"bunny","source":"https://serebii.net/swordshield/pokemon/813.png"},{"id":7,"name":"drill","source":"https://serebii.net/swordshield/pokemon/530.png"},{"id":8,"name":"lucario","source":"https://serebii.net/swordshield/pokemon/448.png"},{"id":9,"name":"rat","source":"https://serebii.net/swordshield/pokemon/777.png"},{"id":10,"name":"sword","source":"https://www.serebii.net/swordshield/pokemon/681.png"},{"id":11,"name":"mim","source":"https://serebii.net/swordshield/pokemon/778.png"},{"id":12,"name":"dara","source":"https://serebii.net/swordshield/pokemon/554-g.png"},{"id":13,"name":"axu","source":"https://serebii.net/swordshield/pokemon/610.png"},{"id":14,"name":"goo","source":"https://serebii.net/swordshield/pokemon/706.png"},{"id":15,"name":"draga","source":"https://serebii.net/swordshield/pokemon/887.png"},{"id":16,"name":"eldi","source":"https://serebii.net/swordshield/pokemon/830.png"},{"id":17,"name":"ludi","source":"https://serebii.net/swordshield/pokemon/272.png"},{"id":18,"name":"mr mime","source":"https://serebii.net/swordshield/pokemon/866.png"},{"id":19,"name":"Tox","source":"https://www.serebii.net/swordshield/pokemon/849-l.png"},{"id":20,"name":"Cors","source":"https://serebii.net/Shiny/SWSH/864.png"}]')},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/pokeball.9d48ad1b.png"},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/dawn.9685d7c2.png"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(7),r=n.n(o),i=n(1),c=n(2),l=n(4),m=n(3),h=n(5),p=n(8);n(14);var d=function(e){return s.a.createElement("header",null,s.a.createElement("img",{className:"nav-img",src:n(15),alt:"pokeball"}),s.a.createElement("nav",{className:"navbar nav-p"},s.a.createElement("span",{className:"nav-p"},"Catch'Em All!"),s.a.createElement("span",{className:"scores"},"Caught: ",e.currentScore," | High Score: ",e.highScore)))},u=(n(16),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).dismissable=function(){!0===e.state.show?e.setState({show:!1}):e.setState({show:!0})},e.state={show:!0},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("this was triggered"),this.state.show?s.a.createElement("section",{className:"section-intro"},s.a.createElement("img",{className:"intro-pic",onClick:this.dismissable,src:n(17),alt:"dawn pic"}),s.a.createElement("p",null,"Click on an pokemon to earn points, but don't click on any more than once!",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),"Talk to Dawn to get started!")):null}}]),t}(a.Component));n(18);var g=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"pokemans-container"},e.Matches.map((function(t){return s.a.createElement("div",{className:"",key:t.name},s.a.createElement("img",{src:t.source,className:"pokemans",alt:t.name,onClick:e.gameLoop}))}))))},b=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},w=[],k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={Matches:p,currentScore:0,highScore:0},n.gameLoop=function(e){e.preventDefault();var t=e.target.getAttribute("alt");w.includes(t)?(n.setState({currentScore:0}),w=[]):(n.setState({currentScore:n.state.currentScore+1}),n.state.currentScore>=n.state.highScore&&n.setState({highScore:n.state.highScore+1}),w.push(t)),n.setState({Matches:b(n.state.Matches)})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d,{currentScore:this.state.currentScore,highScore:this.state.highScore}),s.a.createElement(u,null),s.a.createElement(g,{Matches:this.state.Matches,gameLoop:this.gameLoop}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c82f8271.chunk.js.map