import{_,o as t,c as o,b as n,t as h,F as i,r as p,d as c,e as g,f}from"./index-B5ZXVwfy.js";const y={props:{project:Object,technologies:Array},data(){return{projectTitle:this.project.title,additionalInfo:this.project.additionalInfo,links:this.project.links,technologyTitles:this.project.technologyTitles}},methods:{getTechIconUrl(a){const e=this.technologies.find(l=>l.title===a);return e?e.url:""}}},m={class:"project-card"},k={class:"project-image-container"},v=["src","alt"],P={class:"project-details"},b={class:"used-technologies"},T=["src","alt"],x={class:"buttons"},E=["href"];function I(a,e,l,j,r,u){return t(),o("div",m,[n("div",k,[n("img",{src:l.project.imageURL,alt:r.projectTitle},null,8,v)]),n("div",P,[n("h5",null,h(r.projectTitle),1),n("p",b,[(t(!0),o(i,null,p(r.technologyTitles,s=>(t(),o("img",{key:s,class:"small-devicon",src:u.getTechIconUrl(s),alt:s},null,8,T))),128))]),(t(!0),o(i,null,p(r.additionalInfo,s=>(t(),o("p",{key:s,class:"heartbefore additional-info"},h(s),1))),128)),n("div",x,[(t(!0),o(i,null,p(r.links,s=>(t(),o("a",{key:s.text,href:s.url,class:"project-button",target:"_blank",rel:"noopener noreferrer"},h(s.text),9,E))),128))])])])}const w=_(y,[["render",I],["__scopeId","data-v-a47c89f0"]]),L={data(){return{webGameProjects:c([]),otherProjects:c([]),commandLineProjects:c([]),technologies:c([]),dataUrl:"../data.json",dataHandlerError:c(!1),loading:c(!0)}},components:{TheProjectCard:w},async created(){try{const e=await(await fetch(this.dataUrl)).json();e&&(this.technologies=e.technologies,this.webGameProjects=e.projects.filter(l=>l.type==="Webgame"),this.otherProjects=e.projects.filter(l=>l.type==="Other"))}catch{this.dataHandlerError=!0}finally{this.loading=!1}}},U={key:0,class:"loading-container"},B={key:1,class:"error-container"},C={key:2,class:"projects-container"},H={key:3,class:"loading-container"},G={key:4,class:"error-container"},O={key:5,class:"projects-container"};function F(a,e,l,j,r,u){const s=f("TheProjectCard");return t(),o(i,null,[e[4]||(e[4]=n("h1",{class:"text-center"},"Web-game projects",-1)),r.loading?(t(),o("div",U,e[0]||(e[0]=[n("p",null,"Loading...",-1)]))):r.dataHandlerError?(t(),o("div",B,e[1]||(e[1]=[n("p",null,"Error loading projects. Please try again later.",-1)]))):(t(),o("div",C,[(t(!0),o(i,null,p(r.webGameProjects,d=>(t(),g(s,{key:d.id,project:d,technologies:r.technologies},null,8,["project","technologies"]))),128))])),e[5]||(e[5]=n("h1",{class:"text-center"},"Other projects",-1)),r.loading?(t(),o("div",H,e[2]||(e[2]=[n("p",null,"Loading...",-1)]))):r.dataHandlerError?(t(),o("div",G,e[3]||(e[3]=[n("p",null,"Error loading projects. Please try again later.",-1)]))):(t(),o("div",O,[(t(!0),o(i,null,p(r.otherProjects,d=>(t(),g(s,{key:d.id,project:d,technologies:r.technologies},null,8,["project","technologies"]))),128))]))],64)}const A=_(L,[["render",F],["__scopeId","data-v-fff661f5"]]);export{A as default};
