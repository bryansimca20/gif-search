(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),s=a(2),l=a(3),o=a(5),m=a(4),u=(a(22),a(6)),h=a.n(u),f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSearch(e.query.value),t.currentTarget.reset()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"is-hidden",htmlFor:"search"},"Search"),r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(t){return e.query=t},placeholder:"Search..."}),r.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},r.a.createElement("i",{className:"material-icons icn-search"},"search")))}}]),a}(n.Component),g=function(e){return r.a.createElement("li",{className:"gif-wrap"},r.a.createElement("img",{src:e.url,alt:""}))},d=function(e){return r.a.createElement("li",{className:"no-gifs"},r.a.createElement("i",{className:"material-icons icon-gif"},"sentiment_very_dissatisfied"),r.a.createElement("h3",null,"Sorry, no GIFs match your search."))},p=function(e){var t,a=e.data;return t=a.length>0?a.map((function(e){return r.a.createElement(g,{url:e.images.fixed_height.url,key:e.id})})):r.a.createElement(d,null),r.a.createElement("ul",{className:"gif-list"},t)},E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).performSearch=function(t){h.a.get("http://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=32&api_key=dc6zaTOxFJmzC")).then((function(t){e.setState({gifs:t.data.data})})).catch((function(e){console.log("Error fetching and parsing data"+e)}))},e.state={gifs:[],loading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC").then((function(t){e.setState({gifs:t.data.data,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data"+e)}))}},{key:"render",value:function(){return console.log(this.state.gifs),r.a.createElement("div",null,r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",{className:"main-title"},"GifSearch"),r.a.createElement(f,{onSearch:this.performSearch}))),r.a.createElement("div",{className:"main-content"},this.state.loading?r.a.createElement("p",null," Loading ... "):r.a.createElement(p,{data:this.state.gifs})))}}]),a}(n.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c645c9b4.chunk.js.map