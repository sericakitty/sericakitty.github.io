import{_ as j,o as e,c as o,b as c,t as _,F as i,r as d,d as l,e as f,f as m,p as y,g as T}from"./index-DntMWiRB.js";const b="/assets/tictactoe-DLYwL-li.webp",v={props:{project:Object,technologies:Array},data(){return{imageURL:"",projectTitle:this.project.title,additionalInfo:this.project.additionalInfo,links:this.project.links,technologyTitles:this.project.technologyTitles}},methods:{getTechIconUrl(r){const n=this.technologies.find(a=>a.title===r);return n?n.url:""},getProjectImageURL(){switch(this.projectTitle){case"Tic-Tac-Toe":return b;default:return""}}}},k={class:"project-card"},I={class:"project-image-container"},P=["src","alt"],w={class:"project-details"},L={class:"used-technologies"},x=["src","alt"],U={class:"buttons"},$=["href"];function R(r,n,a,g,s,h){return e(),o("div",k,[c("div",I,[c("img",{src:h.getProjectImageURL(),alt:s.projectTitle},null,8,P)]),c("div",w,[c("h5",null,_(s.projectTitle),1),c("p",L,[(e(!0),o(i,null,d(s.technologyTitles,t=>(e(),o("img",{key:t,class:"small-devicon",src:h.getTechIconUrl(t),alt:t},null,8,x))),128))]),(e(!0),o(i,null,d(s.additionalInfo,t=>(e(),o("p",{key:t,class:"heartbefore additional-info"},_(t),1))),128)),c("div",U,[(e(!0),o(i,null,d(s.links,t=>(e(),o("a",{key:t.text,href:t.url,class:"project-button",target:"_blank"},_(t.text),9,$))),128))])])])}const B=j(v,[["render",R],["__scopeId","data-v-e1801a40"]]),C={data(){return{webGameProjects:l([]),commandLineProjects:l([]),technologies:l([]),dataURL:"Public/data.json",dataHandleError:l(!1)}},components:{TheProjectCard:B},async created(){try{const n=await(await fetch(this.dataURL)).json();n&&(this.technologies=n.technologies,this.webGameProjects=n.projects.filter(a=>a.type==="Webgame"))}catch{this.dataHandleError=!0}}},p=r=>(y("data-v-08a49c87"),r=r(),T(),r),E=p(()=>c("h1",{class:"text-center"},"Web-game projects",-1)),G={class:"projects-container"},S={key:0},F=p(()=>c("p",{class:"text-center"},"Failed to load data",-1)),H=[F],D={key:1},W=p(()=>c("p",{class:"text-center"},"Loading projects...",-1)),A=[W],O={key:2};function V(r,n,a,g,s,h){const t=f("TheProjectCard");return e(),o(i,null,[E,c("div",G,[s.dataHandleError?(e(),o("div",S,H)):s.webGameProjects.length===0?(e(),o("div",D,A)):(e(),o("div",O,[(e(!0),o(i,null,d(s.webGameProjects,u=>(e(),m(t,{key:u.id,project:u,technologies:s.technologies},null,8,["project","technologies"]))),128))]))])],64)}const q=j(C,[["render",V],["__scopeId","data-v-08a49c87"]]);export{q as default};
