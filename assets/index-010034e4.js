(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function M(){}function ke(t){return t()}function re(){return Object.create(null)}function Y(t){t.forEach(ke)}function je(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Z;function ce(t,e){return Z||(Z=document.createElement("a")),Z.href=e,t===Z.href}function Te(t){return Object.keys(t).length===0}function h(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function Le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function k(){return x(" ")}function xe(){return x("")}function te(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function $(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qe(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.data!==e&&(t.data=e)}function P(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let U;function K(t){U=t}function Se(){if(!U)throw new Error("Function called outside component initialization");return U}function ae(t){Se().$$.on_mount.push(t)}const W=[],X=[];let V=[];const ue=[],Pe=Promise.resolve();let oe=!1;function Ae(){oe||(oe=!0,Pe.then(Ee))}function ie(t){V.push(t)}const le=new Set;let H=0;function Ee(){if(H!==0)return;const t=U;do{try{for(;H<W.length;){const e=W[H];H++,K(e),Oe(e.$$)}}catch(e){throw W.length=0,H=0,e}for(K(null),W.length=0,H=0;X.length;)X.pop()();for(let e=0;e<V.length;e+=1){const n=V[e];le.has(n)||(le.add(n),n())}V.length=0}while(W.length);for(;ue.length;)ue.pop()();oe=!1,le.clear(),K(t)}function Oe(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ie)}}function ze(t){const e=[],n=[];V.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),V=e}const ee=new Set;let De;function O(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(ee.has(t))return;ee.add(t),De.c.push(()=>{ee.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ne(t,e){t.d(1),e.delete(t.key)}function se(t,e,n,s,l,i,r,f,a,o,c,u){let m=t.length,d=i.length,v=m;const p={};for(;v--;)p[t[v].key]=v;const y=[],L=new Map,q=new Map,S=[];for(v=d;v--;){const g=u(l,i,v),j=n(g);let w=r.get(j);w?s&&S.push(()=>w.p(g,e)):(w=o(j,g),w.c()),L.set(j,y[v]=w),j in p&&q.set(j,Math.abs(v-p[j]))}const A=new Set,E=new Set;function _(g){O(g,1),g.m(f,c),r.set(g.key,g),c=g.first,d--}for(;m&&d;){const g=y[d-1],j=t[m-1],w=g.key,G=j.key;g===j?(c=g.first,m--,d--):L.has(G)?!r.has(w)||A.has(w)?_(g):E.has(G)?m--:q.get(w)>q.get(G)?(E.add(w),_(g)):(A.add(G),m--):(a(j,r),m--)}for(;m--;){const g=t[m];L.has(g.key)||a(g,r)}for(;d;)_(y[d-1]);return Y(S),y}function N(t){t&&t.c()}function z(t,e,n,s){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),s||ie(()=>{const r=t.$$.on_mount.map(ke).filter(je);t.$$.on_destroy?t.$$.on_destroy.push(...r):Y(r),t.$$.on_mount=[]}),i.forEach(ie)}function D(t,e){const n=t.$$;n.fragment!==null&&(ze(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(t,e){t.$$.dirty[0]===-1&&(W.push(t),Ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,s,l,i,r,f=[-1]){const a=U;K(t);const o=t.$$={fragment:null,ctx:[],props:i,update:M,not_equal:l,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:re(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};r&&r(o.root);let c=!1;if(o.ctx=n?n(t,e.props||{},(u,m,...d)=>{const v=d.length?d[0]:m;return o.ctx&&l(o.ctx[u],o.ctx[u]=v)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](v),c&&Be(t,u)),m}):[],o.update(),c=!0,Y(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const u=qe(e.target);o.fragment&&o.fragment.l(u),u.forEach(C)}else o.fragment&&o.fragment.c();e.intro&&O(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),Ee()}K(a)}class R{$destroy(){D(this,1),this.$destroy=M}$on(e,n){if(!je(n))return M;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!Te(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J=[];function Fe(t,e=M){let n;const s=new Set;function l(f){if(B(t,f)&&(t=f,n)){const a=!J.length;for(const o of s)o[1](),J.push(o,t);if(a){for(let o=0;o<J.length;o+=2)J[o][0](J[o+1]);J.length=0}}}function i(f){l(f(t))}function r(f,a=M){const o=[f,a];return s.add(o),s.size===1&&(n=e(l)||M),f(t),()=>{s.delete(o),s.size===0&&n&&(n(),n=null)}}return{set:l,update:i,subscribe:r}}const Me=Fe({openDialog:"",options:{}});function Ne(t){let e,n,s,l;return{c(){e=b("main"),n=b("button"),n.textContent="Get in Contact",$(n,"class","contact")},m(i,r){T(i,e,r),h(e,n),s||(l=te(n,"click",t[0]),s=!0)},p:M,i:M,o:M,d(i){i&&C(e),s=!1,l()}}}function Ie(t){function e(){Me.set({openDialog:"contact",options:{}})}return[e]}class Ce extends R{constructor(e){super(),I(this,e,Ie,Ne,B,{})}}function Re(t){let e,n,s;return n=new Ce({}),{c(){e=b("main"),N(n.$$.fragment),$(e,"class","svelte-2u2wq5")},m(l,i){T(l,e,i),z(n,e,null),s=!0},p:M,i(l){s||(O(n.$$.fragment,l),s=!0)},o(l){F(n.$$.fragment,l),s=!1},d(l){l&&C(e),D(n)}}}class Ge extends R{constructor(e){super(),I(this,e,null,Re,B,{})}}function fe(t,e,n){const s=t.slice();return s[6]=e[n],s[7]=e,s[8]=n,s}function de(t,e){let n,s=e[6].text+"",l,i=e[7],r=e[8],f,a,o=e[6].text+"",c,u,m,d,v,p;const y=()=>e[2](n,i,r),L=()=>e[2](null,i,r),q=()=>e[3](a,i,r),S=()=>e[3](null,i,r);function A(){return e[4](e[8])}return{key:t,first:null,c(){n=b("p"),l=x(s),f=k(),a=b("button"),c=x(o),u=k(),$(n,"class","svelte-x8ypi8"),$(a,"aria-label",m="toggle "+e[6].text),$(a,"class",d="card "+("c"+e[8])+" svelte-x8ypi8"),P(a,"background-color",e[6].color),P(a,"right",e[8]*200+"px"),this.first=n},m(E,_){T(E,n,_),h(n,l),y(),T(E,f,_),T(E,a,_),h(a,c),h(a,u),q(),v||(p=te(a,"click",A),v=!0)},p(E,_){e=E,_&1&&s!==(s=e[6].text+"")&&Q(l,s),(i!==e[7]||r!==e[8])&&(L(),i=e[7],r=e[8],y()),_&1&&o!==(o=e[6].text+"")&&Q(c,o),_&1&&m!==(m="toggle "+e[6].text)&&$(a,"aria-label",m),_&1&&d!==(d="card "+("c"+e[8])+" svelte-x8ypi8")&&$(a,"class",d),_&1&&P(a,"background-color",e[6].color),_&1&&P(a,"right",e[8]*200+"px"),(i!==e[7]||r!==e[8])&&(S(),i=e[7],r=e[8],q())},d(E){E&&C(n),L(),E&&C(f),E&&C(a),S(),v=!1,p()}}}function He(t){let e,n,s,l=[],i=new Map,r=t[0];const f=a=>a[6];for(let a=0;a<r.length;a+=1){let o=fe(t,r,a),c=f(o);i.set(c,l[a]=de(c,o))}return{c(){e=b("main"),n=b("div"),n.innerHTML=`Be aware that this is under construction! <br/>
        Any Bug or improvement can be direct to <a href="mailto:pedrothiagojosedasilva@gmail.com">pedrothiagojosedasilva@gmail.com</a>`,s=k();for(let a=0;a<l.length;a+=1)l[a].c();$(n,"class","bg svelte-x8ypi8"),$(e,"class","svelte-x8ypi8")},m(a,o){T(a,e,o),h(e,n),h(e,s);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null)},p(a,[o]){o&3&&(r=a[0],l=se(l,o,f,1,a,r,i,e,ne,de,null,fe))},i:M,o:M,d(a){a&&C(e);for(let o=0;o<l.length;o+=1)l[o].d()}}}function Je(t,e,n){const s=[{color:"#65706F",text:"Web Development"},{color:"#697065",text:"CLI and Tools"}];let l=-1;function i(o){const c=s[o];o===l?(c.elementText.classList.remove("showText"),c.elementText.classList.add("hideText"),l=-1,c.element.classList.remove("no"),c.element.classList.add("yes")):(l=o,c.element.classList.remove("hideText"),c.elementText.classList.add("showText"),c.element.classList.add("no"))}ae(()=>{const o=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting?(u.target.classList.add("show"),u.target.classList.remove("hidden")):(u.target.classList.remove("show"),u.target.classList.add("hidden"))})});s.forEach(c=>{o.observe(c.element)})});function r(o,c,u){X[o?"unshift":"push"](()=>{c[u].elementText=o,n(0,s)})}function f(o,c,u){X[o?"unshift":"push"](()=>{c[u].element=o,n(0,s)})}return[s,i,r,f,o=>i(o)]}class We extends R{constructor(e){super(),I(this,e,Je,He,B,{})}}function Ve(t){let e;return{c(){e=b("main"),e.innerHTML=`<div class="imageColumn svelte-5j3loh"><div class="imageDiv svelte-5j3loh"><div class="imageOutline svelte-5j3loh"></div> 
            <div class="image svelte-5j3loh"></div> 
            <p class="svelte-5j3loh">Me, very happy with the meal that i just eated, Curitiba - 2023</p></div></div> 

    <div class="textColumn svelte-5j3loh"><h1 class="svelte-5j3loh">Eu!</h1> 
        <p class="svelte-5j3loh">Desenvolvedor com um pitinho de conhecimento sobre gestão de projeto, artes gráficas, litetura, música, matemática... a maior constância que tive até hoje foi a vontade de aprender e de estar sempre me desafiando.</p> 
        <h1 class="svelte-5j3loh">Engenharia</h1> 
        <p class="svelte-5j3loh">Por causa dessas vontades, a escolha de ir para o caminho de engenharia foi natural (demorei 4 anos p/ começar a faculdade certa), assim como a desição de sempre me manter apreendendor Design Patternns, Stacks, Linguagens e Sistemas totalmente novos.</p> 
        <h1 class="quote svelte-5j3loh" style="margin-top: 32px">&quot;... excelente líder, motivador, põe a mão na massa para descomplicar qualquer conceito como DEV.&quot;</h1> 
        <p class="quote svelte-5j3loh">Wesley Santos, Coordenador de Markenting.</p></div>`,$(e,"class","svelte-5j3loh")},m(n,s){T(n,e,s)},p:M,i:M,o:M,d(n){n&&C(e)}}}let Xe=class extends R{constructor(e){super(),I(this,e,null,Ve,B,{})}};const Ke="/newPortfolio/assets/layered-waves-a60cf8c1.svg",Qe="/newPortfolio/assets/layered-waves-out-8b16febb.svg";function me(t,e,n){const s=t.slice();return s[1]=e[n],s[3]=n,s}function he(t,e,n){const s=t.slice();return s[4]=e[n],s}function ge(t){let e,n=t[4]+"",s,l;return{c(){e=b("li"),s=x(n),l=k()},m(i,r){T(i,e,r),h(e,s),h(e,l)},p:M,d(i){i&&C(e)}}}function pe(t,e){let n,s,l,i=e[1].Title+"",r,f,a,o,c=e[1].Company+"",u,m,d=e[1].Start+"",v,p,y=e[1].End+"",L,q,S,A,E=e[1].Tasks,_=[];for(let g=0;g<E.length;g+=1)_[g]=ge(he(e,E,g));return{key:t,first:null,c(){n=b("div"),s=b("p"),l=b("spam"),r=x(i),f=k(),a=b("br"),o=k(),u=x(c),m=x(",  "),v=x(d),p=x(" - "),L=x(y),q=k(),S=b("ul");for(let g=0;g<_.length;g+=1)_[g].c();A=k(),$(l,"class","jobTitle svelte-1b0nvac"),$(n,"class","workCard svelte-1b0nvac"),this.first=n},m(g,j){T(g,n,j),h(n,s),h(s,l),h(l,r),h(l,f),h(s,a),h(s,o),h(s,u),h(s,m),h(s,v),h(s,p),h(s,L),h(n,q),h(n,S);for(let w=0;w<_.length;w+=1)_[w]&&_[w].m(S,null);h(n,A)},p(g,j){if(e=g,j&1){E=e[1].Tasks;let w;for(w=0;w<E.length;w+=1){const G=he(e,E,w);_[w]?_[w].p(G,j):(_[w]=ge(G),_[w].c(),_[w].m(S,null))}for(;w<_.length;w+=1)_[w].d(1);_.length=E.length}},d(g){g&&C(n),Le(_,g)}}}function Ue(t){let e,n,s,l,i,r,f,a=[],o=new Map,c,u,m,d=t[0];const v=p=>p[1];for(let p=0;p<d.length;p+=1){let y=me(t,d,p),L=v(y);o.set(L,a[p]=pe(L,y))}return{c(){e=b("main"),n=b("img"),l=k(),i=b("div"),r=b("h1"),r.textContent="Experiências de Trabalho Formais",f=k();for(let p=0;p<a.length;p+=1)a[p].c();c=k(),u=b("img"),ce(n.src,s=Ke)||$(n,"src",s),$(n,"alt","stacked multi-color waves to segregate the section"),$(n,"class","svelte-1b0nvac"),$(i,"class","svelte-1b0nvac"),ce(u.src,m=Qe)||$(u,"src",m),$(u,"alt","stacked multi-color waves to segregate the section"),$(u,"class","svelte-1b0nvac"),$(e,"class","svelte-1b0nvac")},m(p,y){T(p,e,y),h(e,n),h(e,l),h(e,i),h(i,r),h(i,f);for(let L=0;L<a.length;L+=1)a[L]&&a[L].m(i,null);h(e,c),h(e,u)},p(p,[y]){y&1&&(d=p[0],a=se(a,y,v,1,p,d,o,i,ne,pe,null,me))},i:M,o:M,d(p){p&&C(e);for(let y=0;y<a.length;y+=1)a[y].d()}}}function Ye(t){return[[{Company:"BRF Food - Aceleração Digital",Title:"Desenvolvedor - Scrum Master",Start:"2023",End:"Atual",Tasks:["Atuar como Tech Lead e desenvolvedor dentro de uma plataforma com 200k+ de usuários anuais","Atuar como Scrum Master em uma squad responsável por chatbots, somando 1,2M de Mensagens mensais","Criação de uma CLI/Framework para a padronização do desenvolvimento de componentes React para PowerBi e Sharepoint"]},{Company:"BRF Food - Digital Lab",Title:"Desenvolvedor Junior",Start:"2021",End:"2022",Tasks:["Arquitetar e Construir soluções utilizando Node TS, React, Vue e C# com conexões com sistemas SAP e SalesForce","Mentorar 20+ estagiários ","Auxiliar a squad responsável pelos chatbots da empresa em questões pontuais"]},{Company:"BRF Food - Digital Lab",Title:"Estagiário",Start:"2021",End:"2022",Tasks:["Desenvolver aplicações web, desktop e mobile.","Auxiliar na entrega e manutenção de uma plataforma que alcançou 20k de usuários em seu primeiro mês, e 100k em seu primeiro ano","Prestar apoio a outros estagiários."]}]]}let Ze=class extends R{constructor(e){super(),I(this,e,Ye,Ue,B,{})}};function _e(t,e,n){const s=t.slice();return s[2]=e[n],s[3]=e,s[4]=n,s}function ve(t,e,n){const s=t.slice();return s[5]=e[n],s}function be(t,e){let n,s=e[5]+"",l,i;return{key:t,first:null,c(){n=b("p"),l=x(s),i=k(),$(n,"class","tag svelte-1g0uv7q"),this.first=n},m(r,f){T(r,n,f),h(n,l),h(n,i)},p(r,f){e=r,f&1&&s!==(s=e[5]+"")&&Q(l,s)},d(r){r&&C(n)}}}function $e(t,e){let n,s,l=e[2].text+"",i,r,f,a=[],o=new Map,c,u,m=e[2].name+"",d,v,p,y=e[3],L=e[4],q=e[2].tags;const S=_=>_[5];for(let _=0;_<q.length;_+=1){let g=ve(e,q,_),j=S(g);o.set(j,a[_]=be(j,g))}const A=()=>e[1](n,y,L),E=()=>e[1](null,y,L);return{key:t,first:null,c(){n=b("button"),s=b("p"),i=x(l),r=k(),f=b("div");for(let _=0;_<a.length;_+=1)a[_].c();c=k(),u=b("p"),d=x(m),v=k(),$(s,"class","mainText svelte-1g0uv7q"),$(f,"class","tags svelte-1g0uv7q"),$(u,"class","projectName svelte-1g0uv7q"),$(n,"class","hidden svelte-1g0uv7q"),P(n,"transition-delay",e[4]*200+"ms"),P(n,"background-image","linear-gradient( rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url('"+e[2].img+"')"),$(n,"aria-label",p="get more details from: "+e[2].name),this.first=n},m(_,g){T(_,n,g),h(n,s),h(s,i),h(n,r),h(n,f);for(let j=0;j<a.length;j+=1)a[j]&&a[j].m(f,null);h(n,c),h(n,u),h(u,d),h(n,v),A()},p(_,g){e=_,g&1&&l!==(l=e[2].text+"")&&Q(i,l),g&1&&(q=e[2].tags,a=se(a,g,S,1,e,q,o,f,ne,be,null,ve)),g&1&&m!==(m=e[2].name+"")&&Q(d,m),g&1&&P(n,"transition-delay",e[4]*200+"ms"),g&1&&P(n,"background-image","linear-gradient( rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url('"+e[2].img+"')"),g&1&&p!==(p="get more details from: "+e[2].name)&&$(n,"aria-label",p),(y!==e[3]||L!==e[4])&&(E(),y=e[3],L=e[4],A())},d(_){_&&C(n);for(let g=0;g<a.length;g+=1)a[g].d();E()}}}function et(t){let e,n,s,l,i=[],r=new Map,f,a,o,c=t[0];const u=m=>m[4];for(let m=0;m<c.length;m+=1){let d=_e(t,c,m),v=u(d);r.set(v,i[m]=$e(v,d))}return a=new Ce({}),{c(){e=b("main"),n=b("h1"),n.textContent="(Quase) Todos os meus projetos",s=k(),l=b("div");for(let m=0;m<i.length;m+=1)i[m].c();f=k(),N(a.$$.fragment),$(l,"class","projectList show svelte-1g0uv7q"),$(e,"class","svelte-1g0uv7q")},m(m,d){T(m,e,d),h(e,n),h(e,s),h(e,l);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(l,null);h(e,f),z(a,e,null),o=!0},p(m,[d]){d&1&&(c=m[0],i=se(i,d,u,1,m,c,r,l,ne,$e,null,_e))},i(m){o||(O(a.$$.fragment,m),o=!0)},o(m){F(a.$$.fragment,m),o=!1},d(m){m&&C(e);for(let d=0;d<i.length;d+=1)i[d].d();D(a)}}}function tt(t,e,n){const s=[{name:"Esse portfolio (FE)",tags:["Svelte","JS","GitPages"],img:"",text:"Página Construída em Svelte, com foco na usabilidade e rapidez"},{name:"Esse portfolio (BE)",tags:["Go","MongoDB"],img:"",text:"o Backend (em Construção) para alimentar essa página"},{name:"CommitMapping",tags:["Node","JS","NPX"],img:"",text:"Uma CLI para encontrar todos os projetos dentro de um disco e commitar eles para uma página pública do gitHub"}];ae(()=>{const i=new IntersectionObserver(r=>{r.forEach(f=>{f.isIntersecting?(f.target.classList.add("show"),f.target.classList.remove("hidden")):(f.target.classList.remove("show"),f.target.classList.add("hidden"))})});s.forEach(r=>{i.observe(r.element)})});function l(i,r,f){X[i?"unshift":"push"](()=>{r[f].element=i,n(0,s)})}return[s,l]}let nt=class extends R{constructor(e){super(),I(this,e,tt,et,B,{})}};function ye(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function st(t){let e;return{c(){e=b("br")},m(n,s){T(n,e,s)},d(n){n&&C(e)}}}function we(t){let e,n=t[6].text+"",s,l,i,r,f;function a(){return t[3](t[6])}let o=t[8]%2&&st();return{c(){e=b("button"),s=x(n),l=k(),o&&o.c(),i=xe(),$(e,"class","svelte-1ztzx6")},m(c,u){T(c,e,u),h(e,s),T(c,l,u),o&&o.m(c,u),T(c,i,u),r||(f=te(e,"click",a),r=!0)},p(c,u){t=c},d(c){c&&C(e),c&&C(l),o&&o.d(c),c&&C(i),r=!1,f()}}}function lt(t){let e,n,s,l,i,r,f,a,o=t[1],c=[];for(let u=0;u<o.length;u+=1)c[u]=we(ye(t,o,u));return{c(){e=b("main"),n=b("dialog"),s=b("button"),s.textContent="close",l=k(),i=b("h1"),i.textContent="Get in Contact",r=k();for(let u=0;u<c.length;u+=1)c[u].c();$(s,"class","closeBtn svelte-1ztzx6"),$(i,"class","svelte-1ztzx6"),$(n,"class","svelte-1ztzx6")},m(u,m){T(u,e,m),h(e,n),h(n,s),h(n,l),h(n,i),h(n,r);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(n,null);t[4](n),f||(a=te(s,"click",t[2]),f=!0)},p(u,[m]){if(m&2){o=u[1];let d;for(d=0;d<o.length;d+=1){const v=ye(u,o,d);c[d]?c[d].p(v,m):(c[d]=we(v),c[d].c(),c[d].m(n,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=o.length}},i:M,o:M,d(u){u&&C(e),Le(c,u),t[4](null),f=!1,a()}}}function ot(t,e,n){let s,l;const i=[{text:"LinkedIn",link:"https://www.linkedin.com/in/pedro-thiago-2536a01a0/"},{text:"Twitter",link:"https://twitter.com/Pe_ssimista?t=imMJY3HtbLoXNbqRl5bBzg&s=08"},{text:"GitHub",link:"https://github.com/PedroThiagoMaisse"},{text:"E-Mail",link:"mailto:pedrothiagojosedasilva@gmail.com"}];ae(()=>{Me.subscribe(o=>{l=o,l.openDialog==="contact"&&(console.log(s),s.showModal())})});const r=()=>s.close(),f=o=>window.open(o.link,"_blank");function a(o){X[o?"unshift":"push"](()=>{s=o,n(0,s)})}return[s,i,r,f,a]}class it extends R{constructor(e){super(),I(this,e,ot,lt,B,{})}}function at(t){let e,n,s,l,i,r,f,a,o,c,u,m,d,v;return n=new it({}),l=new Ge({}),f=new We({}),o=new Xe({}),u=new Ze({}),d=new nt({}),{c(){e=b("main"),N(n.$$.fragment),s=k(),N(l.$$.fragment),i=k(),r=b("div"),N(f.$$.fragment),a=k(),N(o.$$.fragment),c=k(),N(u.$$.fragment),m=k(),N(d.$$.fragment),P(r,"padding","0px"),P(r,"height","calc(100vh - 60px)"),P(r,"overflow-y","auto"),P(r,"overflow-x","hidden"),P(r,"width","100vw"),$(e,"class","svelte-i9hngb")},m(p,y){T(p,e,y),z(n,e,null),h(e,s),z(l,e,null),h(e,i),h(e,r),z(f,r,null),h(r,a),z(o,r,null),h(r,c),z(u,r,null),h(r,m),z(d,r,null),v=!0},p:M,i(p){v||(O(n.$$.fragment,p),O(l.$$.fragment,p),O(f.$$.fragment,p),O(o.$$.fragment,p),O(u.$$.fragment,p),O(d.$$.fragment,p),v=!0)},o(p){F(n.$$.fragment,p),F(l.$$.fragment,p),F(f.$$.fragment,p),F(o.$$.fragment,p),F(u.$$.fragment,p),F(d.$$.fragment,p),v=!1},d(p){p&&C(e),D(n),D(l),D(f),D(o),D(u),D(d)}}}class rt extends R{constructor(e){super(),I(this,e,null,at,B,{})}}new rt({target:document.getElementById("app")});
