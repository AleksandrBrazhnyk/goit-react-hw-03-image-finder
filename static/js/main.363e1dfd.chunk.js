(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},13:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__3Gbxx",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__1RwTp"}},14:function(e,t,a){e.exports={app:"App_app__1kX79",loader:"App_loader__2fptQ"}},17:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__20iVM"}},18:function(e,t,a){e.exports={button:"Button_button__3QF_k"}},23:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),s=a.n(c),o=(a(23),a(7)),i=a.n(o),l=a(9),u=a(10),h=a(3),m=a(4),p=a(6),g=a(5),b=a(16),d=a.n(b),j=a(8),f=a(1),y=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handlChange=function(t){var a=t.target;e.setState({query:a.value})},e.handlSubmit=function(t){t.preventDefault(),e.props.serviceSearchImages(e.state.query)},e.state={query:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(f.jsx)("header",{className:j.searchbar,children:Object(f.jsxs)("form",{className:j.searchForm,onSubmit:this.handlSubmit,children:[Object(f.jsx)("button",{type:"submit",className:j.searchFormButton,children:Object(f.jsx)("span",{className:j.searchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:j.searchFormInput,type:"text",autoComplete:"off",placeholder:"Search images and photos",value:e,onChange:this.handlChange})]})})}}]),a}(r.Component),v=a(17),O=a(12),x=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).beckdropRef=Object(r.createRef)(),e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBeckdrop=function(t){var a=e.beckdropRef.current;a&&t.target!==a||e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.largeImage;return Object(f.jsx)("div",{className:O.overlay,ref:this.beckdropRef,onClick:this.handleBeckdrop,onKeyPress:this.handleKeyPress,role:"presentation",children:Object(f.jsx)("img",{className:O.modal,src:e,alt:e})})}}]),a}(r.Component),_=a(13),I=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).onImageEnlarge=function(){e.setState({modal:!0})},e.onClose=function(){e.setState({modal:!1})},e.state={modal:!1},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.image,t=this.state.modal;return Object(f.jsx)(f.Fragment,{children:t?Object(f.jsx)(x,{largeImage:e.largeImageURL,onClose:this.onClose}):Object(f.jsx)("li",{className:_.imageGalleryItem,children:Object(f.jsx)("img",{src:e.webformatURL,alt:e.webformatURL,className:_.imageGalleryItemImage,onClick:this.onImageEnlarge,onKeyPress:this.onImageEnlarge,role:"presentation"})})})}}]),a}(r.Component),k=function(e){var t=e.images;return t.length>0&&Object(f.jsx)("ul",{className:v.imageGallery,children:t.map((function(e){return Object(f.jsx)(I,{image:e},e.id)}))})},S=a(18),w=function(e){var t=e.serviceSearchImages;return Object(f.jsx)("button",{type:"button",className:S.button,onClick:function(){t()},children:"Load more"})},C={key:"14890929-23ffdef91aab059ee79f68fac",perPage:12,imageType:"photo",orientation:"horizontal",page:1,query:"",fatchImages:function(){var e=this;return Object(u.a)(i.a.mark((function t(){var a,r,n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="q=".concat(e.query,"&page=").concat(e.page,"&key=").concat(e.key,"&image_type=").concat(e.imageType,"&orientation=").concat(e.orientation,"&per_page=").concat(e.perPage),t.next=3,fetch("https://pixabay.com/api/?"+a);case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.next=9,n.hits;case 9:return c=t.sent,t.abrupt("return",{hits:c});case 11:case"end":return t.stop()}}),t)})))()},searchQuery:function(e){this.query=e},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}},F=a(14),G=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).serviceSearchImages=function(){var t=Object(u.a)(i.a.mark((function t(a){var r,n,c,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.setState({isLoading:!0}),!a){t.next=12;break}return C.resetPage(),C.searchQuery(a),t.next=7,C.fatchImages();case 7:r=t.sent,n=r.hits,e.setState({images:Object(l.a)(n)}),t.next=19;break;case 12:return C.incrementPage(),t.next=15,C.fatchImages();case 15:c=t.sent,s=c.hits,o=[].concat(Object(l.a)(e.state.images),Object(l.a)(s)),e.setState({images:Object(l.a)(o)});case 19:e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),e.setState({error:!0});case 26:case"end":return t.stop()}}),t,null,[[0,23]])})));return function(e){return t.apply(this,arguments)}}(),e.state={images:[],isLoading:!1,error:!1},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=e.error;return Object(f.jsxs)("div",{className:F.app,children:[Object(f.jsx)(y,{serviceSearchImages:this.serviceSearchImages}),r&&Object(f.jsx)("p",{children:"Something terrible happened, but we are already fixing it"}),Object(f.jsx)(k,{images:t}),a&&Object(f.jsx)(d.a,{className:F.loader,type:"ThreeDots",color:"#3F51B5",height:100,width:100,timeout:3e3}),t.length>0&&Object(f.jsx)(w,{serviceSearchImages:this.serviceSearchImages})]})}}]),a}(r.Component);s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__jo466",searchForm:"Searchbar_searchForm__23jwf",searchFormButton:"Searchbar_searchFormButton__MrnjN",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__w1n27",searchFormInput:"Searchbar_searchFormInput__tpesZ"}}},[[46,1,2]]]);
//# sourceMappingURL=main.363e1dfd.chunk.js.map