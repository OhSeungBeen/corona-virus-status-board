(this["webpackJsonpblack-dashboard-react"]=this["webpackJsonpblack-dashboard-react"]||[]).push([[0],{21:function(e,a){const t=[],l=[];fetch("/domesticStatusByCity").then(e=>e.json()).then(e=>{const a=e,r=[];for(let t in a)r.push([t,a[t]]);r.sort((e,a)=>a[1]-e[1]),r.forEach(e=>{t.push(e[0]),l.push(e[1])})});let r={data:function(e){let a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(72,72,176,0.1)"),a.addColorStop(.4,"rgba(72,72,176,0.0)"),a.addColorStop(0,"rgba(119,52,169,0)"),{labels:t,datasets:[{label:"\ud655\uc9c4\ud658\uc790",fill:!0,backgroundColor:a,hoverBackgroundColor:a,borderColor:"#d048b6",borderWidth:1,borderDash:[],borderDashOffset:0,data:l}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}};const n=[],o=[],s=[],c=[],i=[],m=[],d=[];fetch("/domesticStatus/dailyData").then(e=>e.json()).then(e=>{for(let a in e)"0"!==a&&(i.push(e[a].confirmator-e[a-1].confirmator),m.push(e[a].isolate-e[a-1].isolate),d.push(e[a].dead-e[a-1].dead),n.push(e[a].confirmator),o.push(e[a].isolate),s.push(e[a].dead),c.push(e[a].date.substring(5,10)))});let p={data1:function(e){let a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(72,72,176,0.1)"),a.addColorStop(.4,"rgba(72,72,176,0.0)"),a.addColorStop(0,"rgba(119,52,169,0)"),{datasets:[{label:"\ud655\uc9c4\uc790",type:"line",data:i,fill:!0,backgroundColor:a,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,yAxisID:"y-axis-2"},{type:"bar",label:"\ub204\uc801\ud655\uc9c4\uc790",data:n,fill:!0,backgroundColor:a,hoverBackgroundColor:a,borderColor:"#d048b6",borderWidth:1,borderDash:[],borderDashOffset:0,yAxisID:"y-axis-1"}]}},data2:function(e){let a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(72,72,176,0.1)"),a.addColorStop(.4,"rgba(72,72,176,0.0)"),a.addColorStop(0,"rgba(119,52,169,0)"),{datasets:[{label:"\uaca9\ub9ac\ud5e4\uc81c",type:"line",data:m,fill:!0,backgroundColor:a,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,yAxisID:"y-axis-2"},{type:"bar",label:"\ub204\uc801 \uaca9\ub9ac\ud5e4\uc81c",data:o,fill:!0,backgroundColor:a,hoverBackgroundColor:a,borderColor:"#d048b6",borderWidth:1,borderDash:[],borderDashOffset:0,yAxisID:"y-axis-1"}]}},data3:function(e){let a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(72,72,176,0.1)"),a.addColorStop(.4,"rgba(72,72,176,0.0)"),a.addColorStop(0,"rgba(119,52,169,0)"),{datasets:[{label:"\uc0ac\ub9dd\uc790",type:"line",data:d,fill:!0,backgroundColor:a,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,yAxisID:"y-axis-2"},{type:"bar",label:"\ub204\uc801 \uc0ac\ub9dd\uc790",data:s,fill:!0,backgroundColor:a,hoverBackgroundColor:a,borderColor:"#d048b6",borderWidth:1,borderDash:[],borderDashOffset:0,yAxisID:"y-axis-1"}]}},options:{maintainAspectRatio:!1,responsive:!0,legend:{display:!0},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"label",intersect:0,position:"nearest"},scales:{xAxes:[{barPercentage:.5,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"},labels:c}],yAxes:[{type:"linear",display:!0,position:"right",id:"y-axis-1",gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:10,fontColor:"#9a9a9a"},labels:{show:!0}},{type:"linear",display:!0,position:"left",id:"y-axis-2",gridLines:{display:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"},labels:{show:!0}}]}}};const u=[],g=[],h={};fetch("/globalStatusByCountry").then(e=>e.json()).then(e=>{for(let a in e)"date"!==a&&"Korea, South"!==a&&"numbers"!==a&&(u.push(a),g.push(e[a]));h.numbers=e.numbers});let b={data:function(e){let a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(72,72,176,0.1)"),a.addColorStop(.4,"rgba(72,72,176,0.0)"),a.addColorStop(0,"rgba(119,52,169,0)"),{labels:u,datasets:[{label:"\ud655\uc9c4\ud658\uc790",fill:!0,backgroundColor:a,hoverBackgroundColor:a,borderColor:"#d048b6",borderWidth:1,borderDash:[],borderDashOffset:0,data:g}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}};e.exports={domesticStatusChart:r,domesticStatusDailyChart:p,globalStatusByCountryChart:b,countryNumbers:h,dailyConfirmator:i,dailyIsolate:m,dailyDead:d,dailyInspectionSum:[],dailyInspection:[],dailyInspectionNegative:[]}},242:function(e,a,t){e.exports=t(540)},339:function(e,a){},341:function(e,a){},374:function(e,a){},375:function(e,a){},537:function(e,a,t){},538:function(e,a,t){},539:function(e,a,t){},540:function(e,a,t){"use strict";t.r(a);var l=t(1),r=t.n(l),n=t(28),o=t.n(n),s=t(35),c=t(543),i=t(544),m=t(240),d=t(542),p=t(48),u=t(2),g=t.n(u),h=t(3);class b extends r.a.Component{constructor(e){super(e),this.updateColor=()=>{window.innerWidth<993&&this.state.collapseOpen?this.setState({color:"bg-white"}):this.setState({color:"navbar-transparent"})},this.toggleCollapse=()=>{this.state.collapseOpen?this.setState({color:"navbar-transparent"}):this.setState({color:"bg-white"}),this.setState({collapseOpen:!this.state.collapseOpen})},this.toggleModalSearch=()=>{this.setState({modalSearch:!this.state.modalSearch})},this.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"}}componentDidMount(){window.addEventListener("resize",this.updateColor)}componentWillUnmount(){window.removeEventListener("resize",this.updateColor)}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.o,{className:g()("navbar-absolute",this.state.color),expand:"lg"},r.a.createElement(h.j,{fluid:!0},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement("div",{className:g()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),r.a.createElement(h.p,{href:"#pablo",onClick:e=>e.preventDefault()},this.props.brandText)),r.a.createElement("button",{"aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navigation","data-toggle":"collapse",id:"navigation",type:"button",onClick:this.toggleCollapse},r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),r.a.createElement(h.i,{navbar:!0,isOpen:this.state.collapseOpen},r.a.createElement(h.n,{className:"ml-auto",navbar:!0},r.a.createElement(h.l,{className:"search-bar"},r.a.createElement(h.b,{color:"link","data-target":"#searchModal","data-toggle":"modal",id:"search-button",onClick:this.toggleModalSearch},r.a.createElement("i",{className:"tim-icons icon-zoom-split"}),r.a.createElement("span",{className:"d-lg-none d-md-block"},"Search"))),r.a.createElement(h.s,{nav:!0}),r.a.createElement(h.s,{nav:!0}),r.a.createElement("li",{className:"separator d-lg-none"}))))),r.a.createElement(h.m,{modalClassName:"modal-search",isOpen:this.state.modalSearch,toggle:this.toggleModalSearch},r.a.createElement("div",{className:"modal-header"},r.a.createElement(h.k,{id:"inlineFormInputGroup",placeholder:"SEARCH",type:"text"}),r.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSearch},r.a.createElement("i",{className:"tim-icons icon-simple-remove"})))))}}var E=b;class f extends r.a.Component{render(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(h.j,{fluid:!0},r.a.createElement("div",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," made with"," ",r.a.createElement("i",{className:"tim-icons icon-heart-2"})," by \uc624 \uc2b9 \ube48 for a better web.")))}}var C,y=f,N=t(142),v=t(541);class S extends r.a.Component{constructor(e){super(e),this.linkOnClick=()=>{document.documentElement.classList.remove("nav-open")},this.activeRoute.bind(this)}activeRoute(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}componentDidMount(){navigator.platform.indexOf("Win")>-1&&(C=new p.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&C.destroy()}render(){const e=this.props,a=e.bgColor,t=e.routes,l=e.rtlActive,n=e.logo;let o=null,s=null;return void 0!==n&&(void 0!==n.outterLink?(o=r.a.createElement("a",{href:n.outterLink,className:"simple-text logo-mini",target:"_blank",onClick:this.props.toggleSidebar},r.a.createElement("div",{className:"logo-img"},r.a.createElement("img",{src:n.imgSrc,alt:"react-logo"}))),s=r.a.createElement("a",{href:n.outterLink,className:"simple-text logo-normal",target:"_blank",onClick:this.props.toggleSidebar},n.text)):(o=r.a.createElement(N.a,{to:n.innerLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},r.a.createElement("div",{className:"logo-img"},r.a.createElement("img",{src:n.imgSrc,alt:"react-logo"}))),s=r.a.createElement(N.a,{to:n.innerLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},n.text))),r.a.createElement("div",{className:"sidebar",data:a},r.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},null!==o||null!==s?r.a.createElement("div",{className:"logo"},s):null,r.a.createElement(h.n,null,t.map((e,a)=>e.redirect?null:r.a.createElement("li",{className:this.activeRoute(e.path)+(e.pro?" active-pro":""),key:a},r.a.createElement(v.a,{to:e.layout+e.path,className:"nav-link",activeClassName:"active",onClick:this.props.toggleSidebar},r.a.createElement("i",{className:e.icon}),r.a.createElement("p",null,l?e.rtlName:e.name)))))))}}S.defaultProps={rtlActive:!1,bgColor:"primary",routes:[{}]};var k=S;class x extends l.Component{constructor(e){super(e),this.handleClick=()=>{"dropdown show-dropdown"===this.state.classes?this.setState({classes:"dropdown show-dropdown show"}):this.setState({classes:"dropdown show-dropdown"})},this.activateMode=e=>{switch(e){case"light":document.body.classList.add("white-content");break;default:document.body.classList.remove("white-content")}},this.state={classes:"dropdown show-dropdown"}}render(){return r.a.createElement("div",{className:"fixed-plugin"},r.a.createElement("div",{className:this.state.classes},r.a.createElement("div",{onClick:this.handleClick},r.a.createElement("i",{className:"fa fa-cog fa-2x"})),r.a.createElement("ul",{className:"dropdown-menu show"},r.a.createElement("li",{className:"header-title"},"SIDEBAR BACKGROUND"),r.a.createElement("li",{className:"adjustments-line"},r.a.createElement("div",{className:"badge-colors text-center"},r.a.createElement("span",{className:"primary"===this.props.bgColor?"badge filter badge-primary active":"badge filter badge-primary","data-color":"primary",onClick:()=>{this.props.handleBgClick("primary")}})," ",r.a.createElement("span",{className:"blue"===this.props.bgColor?"badge filter badge-info active":"badge filter badge-info","data-color":"blue",onClick:()=>{this.props.handleBgClick("blue")}})," ",r.a.createElement("span",{className:"green"===this.props.bgColor?"badge filter badge-success active":"badge filter badge-success","data-color":"green",onClick:()=>{this.props.handleBgClick("green")}})," ")),r.a.createElement("li",{className:"adjustments-line text-center color-change"},r.a.createElement("span",{className:"color-label"},"LIGHT MODE")," ",r.a.createElement("span",{className:"badge light-badge mr-2",onClick:()=>this.activateMode("light")})," ",r.a.createElement("span",{className:"badge dark-badge ml-2",onClick:()=>this.activateMode("dark")})," ",r.a.createElement("span",{className:"color-label"},"DARK MODE")," "),r.a.createElement("li",null))))}}var w=x,D=t(92),O=t(21);class B extends r.a.Component{constructor(e){super(e),this.state={domesticStatus:{},dailyDate:"data1"}}setDaily(e){this.setState({dailyDate:e})}componentDidMount(){fetch("/domesticStatus").then(e=>e.json()).then(e=>{e.Mortality=(e.dead/e.confirmator*100).toFixed(2),e.confirmator=e.confirmator.toLocaleString(),e.isolate=e.isolate.toLocaleString(),e.dead=e.dead.toLocaleString(),e.inspection=e.inspection.toLocaleString(),e.inspectionSum=e.inspectionSum.toLocaleString(),e.inspectionNegative=e.inspectionNegative.toLocaleString(),this.setState({domesticStatus:e})})}render(){return console.log("render()"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(h.q,null,r.a.createElement(h.h,{lg:"3",xs:"6",className:"pl5 pr5"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\ud655\uc9c4\ud658\uc790"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-single-02 text-danger"})," ",this.state.domesticStatus.confirmator,"\uba85"," ",r.a.createElement("span",{className:"daily-span "},"(+",O.dailyConfirmator[O.dailyConfirmator.length-1],")"))))),r.a.createElement(h.h,{lg:"3",xs:"6",className:"pl5 pr5"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\ud655\uc9c4\ud658\uc790 \uaca9\ub9ac\ud574\uc81c"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-single-02 text-success"})," ",this.state.domesticStatus.isolate,"\uba85"," ",r.a.createElement("span",{className:"daily-span "},"(+",O.dailyIsolate[O.dailyIsolate.length-1],")"))))),r.a.createElement(h.h,{lg:"3",xs:"6",className:"pl5 pr5"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\uc0ac\ub9dd\uc790"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-alert-circle-exc text-danger"})," ",this.state.domesticStatus.dead,"\uba85"," ",r.a.createElement("span",{className:"daily-span "},"(+",O.dailyDead[O.dailyDead.length-1],")"))))),r.a.createElement(h.h,{lg:"3",xs:"6",className:"pl5 pr5"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\uc0ac\ub9dd\ub960"),r.a.createElement(h.g,{tag:"h3"},this.state.domesticStatus.Mortality," %"," ")))),r.a.createElement(h.h,{lg:"4",className:"pl5 pr5"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\ucd1d \uac80\uc0ac\uc218"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-zoom-split "})," ",this.state.domesticStatus.inspectionSum,"\uba85"," ")))),r.a.createElement(h.h,{lg:"4",xs:"6",className:"pl5 pr5"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\uac80\uc0ac\uc9c4\ud589"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-refresh-02 text-info"})," ",this.state.domesticStatus.inspection,"\uba85"," ")))),r.a.createElement(h.h,{lg:"4",xs:"6",className:"pl5 pr5"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\uacb0\uacfc \uc74c\uc131"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-single-02 text-success"})," ",this.state.domesticStatus.inspectionNegative,"\uba85"," "))))),r.a.createElement("p",{className:"information"},"* (+ / - ) \uc9c8\ubcd1\uad00\ub9ac\ubcf8\ubd80 \uc804\uc77c \ubc1c\ud45c \ub300\ube44 \ubcc0\ud654\ub7c9",r.a.createElement("br",null),"* \uc0ac\ub9dd\ub960 : (\uc0ac\ub9dd\uc790 / \ud655\uc9c4\ud658\uc790) * 100"),r.a.createElement(h.q,null,r.a.createElement(h.h,{lg:"12"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("i",{className:"tim-icons icon-chart-bar-32 text-primary mr10"}),r.a.createElement("h5",{className:"card-category display-content"},"\uc2dc\ub3c4\ubcc4 \ubc1c\uc0dd\ub3d9\ud5a5")),r.a.createElement(h.e,null,r.a.createElement("div",{className:"chart-area"},r.a.createElement(D.b,{data:O.domesticStatusChart.data,options:O.domesticStatusChart.options})))))),r.a.createElement(h.q,null,r.a.createElement(h.h,{lg:"12"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement(h.q,null,r.a.createElement(h.h,{className:"text-left",sm:"6"},r.a.createElement("i",{className:"tim-icons icon-chart-bar-32 text-primary mr10"}),r.a.createElement("h5",{className:"card-category display-content"},"\uc77c\uc77c \ubc1c\uc0dd\ub3d9\ud5a5")),r.a.createElement(h.h,{sm:"6"},r.a.createElement(h.c,{className:"btn-group-toggle float-right","data-toggle":"buttons"},r.a.createElement(h.b,{tag:"label",className:g()("btn-simple",{active:"data1"===this.state.dailyDate}),color:"info",id:"0",size:"sm",onClick:()=>this.setDaily("data1")},r.a.createElement("input",{defaultChecked:!0,className:"d-none",name:"options",type:"radio"}),r.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"\ud655\uc9c4\uc790"),r.a.createElement("span",{className:"d-block d-sm-none"},"\ud655\uc9c4\uc790")),r.a.createElement(h.b,{color:"info",id:"1",size:"sm",tag:"label",className:g()("btn-simple",{active:"data2"===this.state.dailyDate}),onClick:()=>this.setDaily("data2")},r.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),r.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"\uaca9\ub9ac\ud574\uc81c"),r.a.createElement("span",{className:"d-block d-sm-none"},"\uaca9\ub9ac\ud574\uc81c")),r.a.createElement(h.b,{color:"info",id:"2",size:"sm",tag:"label",className:g()("btn-simple",{active:"data3"===this.state.dailyDate}),onClick:()=>this.setDaily("data3")},r.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),r.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"\uc0ac\ub9dd\uc790"),r.a.createElement("span",{className:"d-block d-sm-none"},"\uc0ac\ub9dd\uc790")))))),r.a.createElement(h.e,null,r.a.createElement("div",{className:"chart-area"},r.a.createElement(D.a,{data:O.domesticStatusDailyChart[this.state.dailyDate],options:O.domesticStatusDailyChart.options})))))),r.a.createElement("p",{className:"information"},"\ucd9c\ucc98: \uc9c8\ubcd1\uad00\ub9ac\ubcf8\ubd80")))}}var L=B;class M extends r.a.Component{render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(h.q,null,r.a.createElement(h.h,{md:"12"},r.a.createElement(h.a,{color:"info"},r.a.createElement("b",{className:"information-alert"},"\u318d\uac1c\uc694"),r.a.createElement("br",null),"\ucf54\ub85c\ub098 \ubc14\uc774\uc774\ub7ec\uc2a4(CoV)\ub294 \uc0ac\ub78c\uacfc \ub2e4\uc591\ud55c \ub3d9\ubb3c\uc5d0 \uac10\uc5fc\ub420 \uc218 \uc788\ub294 \ubc14\uc774\ub7ec\uc2a4\ub85c\uc11c \uc720\uc804\uc790 \ud06c\uae30 27~32kb\uc758 RNA \ubc14\uc774\ub7ec\uc2a4",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("b",{className:"information-alert"},"\u318d\ubd84\ub958"),r.a.createElement("br",null),"\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4\uacfc\uc5d0\ub294 4\uac1c\uc758 \uc18d(\uc54c\ud30c, \ubca0\ud0c0, \uac10\ub9c8, \ub378\ud0c0)\uc774 \uc788\uc74c",r.a.createElement("br",null),"\uc54c\ud30c\u2024\ubca0\ud0c0 : \uc0ac\ub78c\uacfc \ub3d9\ubb3c\uc5d0\uac8c \uac10\uc5fc",r.a.createElement("br",null),"\uac10\ub9c8\u2024\ub378\ud0c0 : \ub3d9\ubb3c\uc5d0\uac8c \uac10\uc5fc",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("b",{className:"information-alert"},"\u318d\ud615\ud0dc"),r.a.createElement("br",null),"\ud615\ud0dc\ub294 \ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4\uc758 \uba85\uba85\uacfc \uac19\uc774 \uc804\uc790\ud604\ubbf8\uacbd \uad00\ucc30\uc2dc \uad6c\ud615 \uc678\ubd80 spike \ub2e8\ubc31\uc9c8\uc774 \ud2b9\uc9d5\uc801\uc778 \ud06c\ub77c\uc6b4\ud615\ud0dc",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",{className:"information-alert"},"\u318d\uc0ac\ub78c\uac10\uc5fc \ucf54\ub85c\ub098"),r.a.createElement("br",null),"\ubc14\uc774\ub7ec\uc2a4 \uc0ac\ub78c\uac10\uc5fc \ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4\ub294 \ud604\uc7ac\uae4c\uc9c0 6\uc885\ub958\uac00 \uc54c\ub824\uc838 \uc788\uc74c",r.a.createElement("br",null),"\uac10\uae30\ub97c \uc77c\uc73c\ud0a4\ub294 \uc720\ud615(229E, OC43, NL63, HKU1)",r.a.createElement("br",null),"\uc911\uc99d\ud3d0\ub834\uc744 \uc77c\uc73c\ud0ac \uc218 \uc788\ub294 \uc720\ud615(SARS-CoV, MERS-CoV)",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("b",{className:"information-alert"},"\u318d\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4 \ubd84\ub958\ud45c"),r.a.createElement(h.r,{className:"tablesorter information-table",responsive:!0},r.a.createElement("thead",{className:"text-primary"},r.a.createElement("tr",null,r.a.createElement("th",null,"\uc18d(genus)"),r.a.createElement("th",null,"\uc0ac\ub78c-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4"),r.a.createElement("th",null,"\uc0ac\ub78c \uc774\uc678\uc5d0 \uac10\uc5fc\ud558\ub294 \ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"\uc54c\ud30c-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4(alphacoronavirus)"),r.a.createElement("td",null,"229E, NL63"),r.a.createElement("td",null,"\ub3fc\uc9c0 \uc720\ud589\uc131 \uc124\uc0ac \ubc14\uc774\ub7ec\uc2a4(porcine epidemic diarrhea virus : PEDV), (\ub3fc\uc9c0) \uc804\uc5fc\uc131 \uc704\uc7a5\uc5fc \ubc14\uc774\ub7ec\uc2a4 (transmissible gastroenteritis virus : TGEV), \uac1c\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4(canine coronavirus : CCoV), \uace0\uc591\uc774 \ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4 (feline coronavirus : FCoV), Miniopterus bat(\ubc15\uc950) coronavirus 1, Miniopterus bat(\ubc15\uc950) coronavirus HKU8, Rhinolophus bat(\ubc15\uc950) coronavirus HKU2, Scotophilus bat(\ubc15\uc950) coronavirus 512")),r.a.createElement("tr",null,r.a.createElement("td",null,"\ubca0\ud0c0-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4(betacoronavirus)"),r.a.createElement("td",null,"OC43, HKU1, SARS-CoV, MERS-CoV"),r.a.createElement("td",null,"\ub3fc\uc9c0 \ud608\uad6c \uc751\uc9d1\uc131\ub1cc\ucc99\uc218\uc5fc \ubc14\uc774\ub7ec\uc2a4(porcine hemagglutinating encephalomyelitis virus : PHEV), \uc6b0\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4(bovine coronavirus : BCoV), \ub9d0\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4 (equine coronavirus : EqCoV), \uc950\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4(murine coronavirus : MuCoV),Tylonycteris bat(\ubc15\uc950) coronavirus HKU4, Pipistrellus bat(\ubc15\uc950) coronavirus HKU5,Rousettus bat(\ubc15\uc950) coronavirus HKU9")),r.a.createElement("tr",null,r.a.createElement("td",null,"\uac10\ub9c8-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4(gammacoronavirus)"),r.a.createElement("td",null,"\uc5c6\uc74c"),r.a.createElement("td",null,"\uc0c8\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4(Avian coronavirus),\ud770\uc0c9 \ub3cc\uace0\ub798(Beluga whale)-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4 SW1")),r.a.createElement("tr",null,r.a.createElement("td",null,"\ub378\ud0c0-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4(deltacoronavirus)"),r.a.createElement("td",null,"\uc5c6\uc74c"),r.a.createElement("td",null,"\uc81c\uc8fc\uc9c1\ubc15\uad6c\ub9ac(Bulbul)-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4 HKU11, \uac1c\ub625\uc9c0\ube60\uadc0(Thrush)-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4 HKU12, \ud0a8\ubc14\ub77c(Munia)-\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4 HKU13")))),r.a.createElement("br",null),r.a.createElement("b",{className:"information-alert"},"\u318d\ucf54\ub85c\ub098\ubc14\uc774\ub7ec\uc2a4\uac10\uc5fc\uc99d-19(COVID-19) \uc815\ubcf4"),r.a.createElement("br",null),"(\ubcd1\uc6d0\uccb4) \ucf54\ub85c\ub098\ubc14\uc774\ub7ec\uc2a4\uac10\uc5fc\uc99d-19(COVID-19)",r.a.createElement("br",null),"(\uac10\uc5fc\uc6d0) \ub3d9\ubb3c\ub85c \ucd94\uc815\ud558\uace0 \uc870\uc0ac\uc911",r.a.createElement("br",null),"(\uc804\ud30c\uacbd\ub85c)",r.a.createElement("br",null),"\ub3d9\ubb3c \u2192 \uc0ac\ub78c \u2192 \uc0ac\ub78c \uc804\ud30c \ucd94\uc815",r.a.createElement("br",null),"\uc0ac\ub78c\uac04 \uc804\ud30c\ub294 \ube44\ub9d0(\ud638\ud761\uae30 \ubd84\ube44\ubb3c) \uc804\ud30c \ucd94\uc815",r.a.createElement("br",null),"\uac00\uc871\uac04, \uc758\ub8cc\uae30\uad00 \ub0b4 2\ucc28\uac10\uc5fc \ud655\uc778",r.a.createElement("br",null),"(\uc784\uc0c1\uc99d\uc0c1) \ubc1c\uc5f4, \ud638\ud761\uae30\uc99d\uc0c1(\uae30\uce68, \ud638\ud761\uace4\ub780), \ud3d0\ub834",r.a.createElement("br",null)))),r.a.createElement("p",{className:"information"},"\ucd9c\ucc98: \uc9c8\ubcd1\uad00\ub9ac\ubcf8\ubd80")))}}var A=M,H=t(239),P=t(143),R=t(241),j=t(144),W=t.n(j);function I(...e){const a=(t=0)=>(e=>{const a=[];for(let t=0;t<e;t++)a.push(t);return a})(e[t]).map(l=>Object(R.a)({},(()=>{const e=Math.random();return{firstName:W.a.generate({words:1,numbers:0}),lastName:W.a.generate({words:1,numbers:0}),age:Math.floor(30*Math.random()),visits:Math.floor(100*Math.random()),progress:Math.floor(100*Math.random()),status:e>.66?"relationship":e>.33?"complicated":"single"}})(),{subRows:e[t+1]?a(t+1):void 0}));return a()}function F({columns:e,data:a}){const t=Object(P.useTable)({columns:e,data:a,initialState:{pageIndex:0}},P.usePagination),l=t.getTableProps,n=t.getTableBodyProps,o=t.headerGroups,s=t.prepareRow,c=t.page,i=t.canPreviousPage,m=t.canNextPage,d=t.pageOptions,p=t.pageCount,u=t.gotoPage,g=t.nextPage,h=t.previousPage,b=t.state.pageIndex;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",Object.assign({class:"table tablesorter"},l()),r.a.createElement("thead",{className:"text-primary"},o.map(e=>r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(e=>r.a.createElement("th",Object.assign({className:"text-center"},e.getHeaderProps()),e.render("Header")))))),r.a.createElement("tbody",n(),c.map((e,a)=>(s(e),r.a.createElement("tr",e.getRowProps(),e.cells.map(e=>r.a.createElement("td",Object.assign({className:"text-center"},e.getCellProps()),e.render("Cell")))))))),r.a.createElement("div",{class:"text-align-center mt10 mb10"},r.a.createElement("button",{class:"pagination-button btn btn-primary ",onClick:()=>u(0),disabled:!i},"<<")," ",r.a.createElement("button",{class:"pagination-button btn btn-primary ",onClick:()=>h(),disabled:!i},"<")," ",r.a.createElement("strong",null,b+1," / ",d.length)," ",r.a.createElement("button",{class:"pagination-button btn btn-primary ",onClick:()=>g(),disabled:!m},">")," ",r.a.createElement("button",{class:"pagination-button btn btn-primary",onClick:()=>u(p-1),disabled:!m},">>")),r.a.createElement("div",{class:"text-align-center"},r.a.createElement("strong",null,"Go to page")," ",r.a.createElement("input",{class:"form-control",type:"number",defaultValue:b+1,onChange:e=>{const a=e.target.value?Number(e.target.value)-1:0;u(a)},style:{width:"70px",display:"inline"}})," "))}var T=function(){const e=Object(l.useState)([]),a=Object(H.a)(e,2),t=a[0],n=a[1];return Object(l.useEffect)(()=>{fetch("/globalStatusByCountry").then(e=>e.json()).then(e=>{let a=1;const t=[];for(let l in e)"date"!==l&&"Korea, South"!==l&&"numbers"!==l&&t.push({number:a++,counrty:l,confirmator:"".concat(Number(e[l]).toLocaleString(),"\uba85")});n(t)})},[]),console.log(I(20)),console.log(t),r.a.createElement(F,{columns:[{Header:"\ubc88\ud638",accessor:"number"},{Header:"\uad6d\uac00",accessor:"counrty"},{Header:"\ud655\uc9c4\ud658\uc790",accessor:"confirmator"}],data:t})};class U extends r.a.Component{constructor(e){super(e),this.state={globalStatus:{}}}componentDidMount(){fetch("/globalStatus").then(e=>e.json()).then(e=>{const a=e;a.confirmator=a.confirmator.toLocaleString(),a.isolate=a.isolate.toLocaleString(),a.dead=a.dead.toLocaleString(),this.setState({globalStatus:a})})}render(){return console.log("render()"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(h.q,null,r.a.createElement(h.h,{lg:"3"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\ud655\uc9c4\ud658\uc790"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-single-02 text-danger"})," ",this.state.globalStatus.confirmator,"\uba85")))),r.a.createElement(h.h,{lg:"3"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\ud655\uc9c4\ud658\uc790 \uaca9\ub9ac\ud574\uc81c"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-single-02 text-success"})," ",this.state.globalStatus.isolate,"\uba85")))),r.a.createElement(h.h,{lg:"3"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\uc0ac\ub9dd\uc790"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-alert-circle-exc text-danger"})," ",this.state.globalStatus.dead,"\uba85")))),r.a.createElement(h.h,{lg:"3"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("h5",{className:"card-category"},"\ubc1c\uc0dd\uad6d"),r.a.createElement(h.g,{tag:"h3"},r.a.createElement("i",{className:"tim-icons icon-world text-danger"})," ",O.countryNumbers.numbers,"\uac1c\uad6d"))))),r.a.createElement(h.q,null,r.a.createElement(h.h,{lg:"12"},r.a.createElement(h.d,{className:"card-chart"},r.a.createElement(h.f,null,r.a.createElement("i",{className:"tim-icons icon-chart-bar-32 text-primary mr10"}),r.a.createElement("h5",{className:"card-category display-content"},"\ub098\ub77c\ubcc4 \ubc1c\uc0dd\ub3d9\ud5a5")),r.a.createElement(h.e,null,r.a.createElement(T,null)))))))}}var V=U,z=t(93);const K=Object(z.withScriptjs)(Object(z.withGoogleMap)(e=>r.a.createElement(z.GoogleMap,{defaultZoom:7,defaultCenter:{lat:36.4203004,lng:128.31796},defaultOptions:{scrollwheel:!1}})));class G extends r.a.Component{render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(h.q,null,r.a.createElement(h.h,{md:"12"},r.a.createElement(h.d,{className:"card-plain"},r.a.createElement(h.f,null,"\uc11c\ube44\uc2a4 \uc900\ube44 \uc911\uc785\ub2c8\ub2e4."),r.a.createElement(h.e,null,r.a.createElement("div",{id:"map",className:"map",style:{position:"relative",overflow:"hidden"}},r.a.createElement(K,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAPfPKg5VQGjvTQXY4ejFB09fNrZMB1pyg",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))))))))}}var q=G,Y=t(95);class J extends r.a.Component{constructor(e){super(e),this.state={width:"100%",height:"100%"}}componentDidMount(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(this.setState({width:"500px"}),this.setState({height:"300px"}))}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},"\uc2e4\uc2dc\uac04 YTN \ub274\uc2a4",r.a.createElement("br",null),r.a.createElement(Y.a,{url:"https://www.youtube.com/embed/U_sYIKWhJvk",allow:"fullscreen",width:this.state.width,height:this.state.height,styles:{bor:"25px"}}),r.a.createElement("br",null),"\uc2e4\uc2dc\uac04 KBS \ub274\uc2a4",r.a.createElement(Y.a,{url:"https://www.youtube.com/embed/zT656tdpm0Q",allow:"fullscreen",width:this.state.width,height:this.state.height}),r.a.createElement("br",null),"\uc2e4\uc2dc\uac04 \uc5f0\ud569\ub274\uc2a4TV",r.a.createElement(Y.a,{url:"https://www.youtube.com/embed/oul5ldEUbHk",allow:"fullscreen",width:this.state.width,height:this.state.height})))}}var Q,X=[{path:"/domesticStatus",name:"\ub300\ud55c\ubbfc\uad6d \ubc1c\uc0dd \ud604\ud669",icon:"tim-icons icon-molecule-40",component:L,layout:"/admin"},{path:"/globalStatus",name:"\uc804 \uc138\uacc4 \ubc1c\uc0dd \ud604\ud669 ",icon:"tim-icons icon-world",component:V,layout:"/admin"},{path:"/information",name:"\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4?",icon:"tim-icons icon-zoom-split",component:A,layout:"/admin"},{path:"/news",name:"\uc2e4\uc2dc\uac04 \ub274\uc2a4",icon:"tim-icons icon-tv-2",component:J,layout:"/admin"},{path:"/map",name:"\uc9c0\ub3c4\ub85c \uc54c\uc544\ubcf4\uae30",icon:"tim-icons icon-map-big",component:q,layout:"/admin"}];class _ extends r.a.Component{constructor(e){super(e),this.toggleSidebar=()=>{document.documentElement.classList.toggle("nav-open"),this.setState({sidebarOpened:!this.state.sidebarOpened})},this.getRoutes=e=>e.map((e,a)=>"/admin"===e.layout?r.a.createElement(m.a,{path:e.layout+e.path,component:e.component,key:a}):null),this.handleBgClick=e=>{this.setState({backgroundColor:e})},this.getBrandText=e=>{for(let a=0;a<X.length;a++)if(-1!==this.props.location.pathname.indexOf(X[a].layout+X[a].path))return X[a].name;return"Brand"},this.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")}}componentDidMount(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),Q=new p.a(this.refs.mainPanel,{suppressScrollX:!0});let e=document.querySelectorAll(".table-responsive");for(let a=0;a<e.length;a++)Q=new p.a(e[a])}}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&(Q.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}componentDidUpdate(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1){let e=document.querySelectorAll(".table-responsive");for(let a=0;a<e.length;a++)Q=new p.a(e[a])}document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(k,Object.assign({},this.props,{routes:X,bgColor:this.state.backgroundColor,logo:{outterLink:"/",text:"\ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4-19 \uc0c1\ud669\ud310"},toggleSidebar:this.toggleSidebar})),r.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},r.a.createElement(E,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),r.a.createElement(i.a,null,this.getRoutes(X)),-1!==this.props.location.pathname.indexOf("maps")?null:r.a.createElement(y,{fluid:!0}))),r.a.createElement(w,{bgColor:this.state.backgroundColor,handleBgClick:this.handleBgClick}))}}var Z=_;t(537),t(538),t(539);const $=Object(s.a)();o.a.render(r.a.createElement(c.a,{history:$},r.a.createElement(i.a,null,r.a.createElement(m.a,{path:"/admin",render:e=>r.a.createElement(Z,e)}),r.a.createElement(d.a,{from:"/",to:"/admin/domesticStatus"}))),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.ad5f88dd.chunk.js.map