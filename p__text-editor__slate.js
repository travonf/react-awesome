(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{eOeM:function(e,t,a){e.exports={wrapper:"wrapper___3jWZK",desc:"desc___3TCpi",box:"box___1h3n4"}},hB6z:function(e,t,a){"use strict";a.r(t);a("Znn+");var n=a("ZTPi"),r=a("ODXe"),l=a("cDcd"),c=a.n(l),i=a("wx14"),o=a("Q/jD"),s=a("cRT5"),d=[{type:"paragraph",children:[{text:"\u6bb5\u843d\u4e2d\u7684\u4e00\u884c\u6587\u672c\u3002"}]}],u=e=>{var t=c.a.useMemo((()=>Object(s["i"])(Object(o["j"])())),[]),a=c.a.useState(JSON.parse(localStorage.getItem("content"))||d),n=Object(r["a"])(a,2),l=n[0],i=n[1],u=c.a.useCallback((e=>{switch(e.element.type){case"code":return c.a.createElement(h,e);default:return c.a.createElement(b,e)}}),[]),m=c.a.useCallback((e=>c.a.createElement(p,e)),[]);return c.a.createElement("div",null,c.a.createElement(s["c"],{editor:t,value:l,onChange:e=>{i(e);var t=JSON.stringify(e);localStorage.setItem("content",t)}},c.a.createElement("div",null,c.a.createElement("button",{style:{color:"black"},onMouseDown:e=>{e.preventDefault(),v.toggleCodeBlock(t)}},"Code Block"),c.a.createElement("button",{style:{color:"black"},onMouseDown:e=>{e.preventDefault(),v.toggleBoldMark(t)}},"Bold")),c.a.createElement("hr",null),c.a.createElement(s["a"],{renderElement:u,renderLeaf:m,onKeyDown:e=>{console.log(e.key),"&"===e.key&&(e.preventDefault(),t.insertText("and")),e.ctrlKey&&"`"===e.key&&(e.preventDefault(),v.toggleCodeBlock(t)),e.ctrlKey&&"b"===e.key&&(e.preventDefault(),v.toggleBoldMark(t))}})))},m=u,h=e=>c.a.createElement("pre",e.attributes,c.a.createElement("code",null,e.children)),b=e=>c.a.createElement("p",e.attributes,e.children),p=e=>c.a.createElement("span",Object(i["a"])({},e.attributes,{style:{fontWeight:e.leaf.bold?"bold":"normal"}}),e.children),v={isBoldMarkActive(e){var t=o["a"].nodes(e,{match:e=>!0===e.bold,universal:!0}),a=Object(r["a"])(t,1),n=a[0];return!!n},isCodeBlockActive(e){var t=o["a"].nodes(e,{match:e=>"code"===e.type}),a=Object(r["a"])(t,1),n=a[0];return!!n},toggleBoldMark(e){var t=v.isBoldMarkActive(e);o["i"].setNodes(e,{bold:!t||null},{match:e=>o["h"].isText(e),split:!0})},toggleCodeBlock(e){var t=v.isCodeBlockActive(e);o["i"].setNodes(e,{type:t?null:"code"},{match:t=>o["a"].isBlock(e,t)})}},E=a("h4VS"),f=a("kDDq"),g=a("ftEq");function j(){var e=Object(E["a"])(["\n          flex: 1;\n          opacity: ",";\n          text-decoration: ",";\n\n          &:focus {\n            outline: none;\n          }\n        "]);return j=function(){return e},e}function O(){var e=Object(E["a"])(["\n          margin-right: 0.75em;\n        "]);return O=function(){return e},e}function y(){var e=Object(E["a"])(["\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n\n        & + & {\n          margin-top: 0;\n        }\n      "]);return y=function(){return e},e}var x=()=>{var e=Object(l["useState"])(C),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useCallback"])((e=>c.a.createElement(w,e)),[]),d=Object(l["useMemo"])((()=>k(Object(g["a"])(Object(s["i"])(Object(o["j"])())))),[]);return c.a.createElement(s["c"],{editor:d,value:a,onChange:e=>n(e)},c.a.createElement(s["a"],{renderElement:i,placeholder:"Get to work...",spellCheck:!0,autoFocus:!0}))},k=e=>{var t=e.deleteBackward;return e.deleteBackward=function(){var a=e.selection;if(a&&o["g"].isCollapsed(a)){var n=o["a"].nodes(e,{match:e=>"check-list-item"===e.type}),l=Object(r["a"])(n,1),c=l[0];if(c){var i=Object(r["a"])(c,2),s=i[1],d=o["a"].start(e,s);o["f"].equals(a.anchor,d)&&o["i"].setNodes(e,{type:"paragraph"},{match:e=>"check-list-item"===e.type})}}t(...arguments)},e},w=e=>{var t=e.attributes,a=e.children,n=e.element;switch(n.type){case"check-list-item":return c.a.createElement(N,e);default:return c.a.createElement("p",t,a)}},N=e=>{var t=e.attributes,a=e.children,n=e.element,r=Object(s["d"])(),l=Object(s["f"])(),d=n.checked;return c.a.createElement("div",Object(i["a"])({},t,{className:Object(f["css"])(y())}),c.a.createElement("span",{contentEditable:!1,className:Object(f["css"])(O())},c.a.createElement("input",{type:"checkbox",checked:d,onChange:e=>{var t=s["b"].findPath(r,n);o["i"].setNodes(r,{checked:e.target.checked},{at:t})}})),c.a.createElement("span",{contentEditable:!l,suppressContentEditableWarning:!0,className:Object(f["css"])(j(),d?.666:1,d?"none":"line-througn")},a))},C=[{children:[{text:"With Slate you can build complex block types that have their own embedded content and behaviors, like rendering checkboxes inside check list items!"}]},{type:"check-list-item",checked:!0,children:[{text:"Slide to the left."}]},{type:"check-list-item",checked:!0,children:[{text:"Slide to the right."}]},{type:"check-list-item",checked:!1,children:[{text:"Criss-cross."}]},{type:"check-list-item",checked:!0,children:[{text:"Criss-cross!"}]},{type:"check-list-item",checked:!1,children:[{text:"Cha cha real smooth\u2026"}]},{type:"check-list-item",checked:!1,children:[{text:"Let's go to work!"}]},{children:[{text:"Try it out for yourself!"}]}],M=x,D=a("Ff2n");function S(){var e=Object(E["a"])(["\n          position: relative;\n          padding: 1px 18px 17px;\n          margin: 0 -16px;\n          border-bottom: 2px solid #666;\n          margin-bottom: 20px;\n        "]);return S=function(){return e},e}function T(){var e=Object(E["a"])(["\n          & > * {\n            display: inline-block;\n          }\n\n          & > * + * {\n            margin-left: 15px;\n          }\n        "]);return T=function(){return e},e}function L(){var e=Object(E["a"])(["\n          font-size: 18px;\n          vertical-align: text-bottom;\n        "]);return L=function(){return e},e}function _(){var e=Object(E["a"])(["\n          cursor: pointer;\n          color: ",";\n        "]);return _=function(){return e},e}var B=c.a.forwardRef(((e,t)=>{var a=e.className,n=e.active,r=e.reversed,l=Object(D["a"])(e,["className","active","reversed"]);return c.a.createElement("span",Object(i["a"])({},l,{ref:t,className:Object(f["cx"])(a,Object(f["css"])(_(),r?n?"#666":"#fff":n?"#fff":"#666"))}))})),R=c.a.forwardRef(((e,t)=>{var a=e.className,n=Object(D["a"])(e,["className"]);return c.a.createElement("span",Object(i["a"])({},n,{ref:t,className:Object(f["cx"])("material-icons",a,Object(f["css"])(L()))}))})),I=c.a.forwardRef(((e,t)=>{var a=e.className,n=Object(D["a"])(e,["className"]);return c.a.createElement("div",Object(i["a"])({},n,{ref:t,className:Object(f["cx"])(a,Object(f["css"])(T()))}))})),F=c.a.forwardRef(((e,t)=>{var a=e.className,n=Object(D["a"])(e,["className"]);return c.a.createElement(I,Object(i["a"])({},n,{ref:t,className:Object(f["cx"])(a,Object(f["css"])(S()))}))})),q=["numbered-list","bulleted-list"],H=()=>{var e=Object(l["useState"])(Z),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useCallback"])((e=>c.a.createElement(U,e)),[]),d=Object(l["useCallback"])((e=>c.a.createElement(J,e)),[]),u=Object(l["useMemo"])((()=>Object(g["a"])(Object(s["i"])(Object(o["j"])()))),[]);return c.a.createElement(s["c"],{editor:u,value:a,onChange:e=>n(e)},c.a.createElement(F,null,c.a.createElement(W,{format:"bold",icon:"format_bold"}),c.a.createElement(W,{format:"italic",icon:"format_italic"}),c.a.createElement(W,{format:"underline",icon:"format_underline"}),c.a.createElement(W,{format:"code",icon:"code"}),c.a.createElement(K,{format:"heading-one",icon:"looks_one"}),c.a.createElement(K,{format:"heading-two",icon:"looks_two"}),c.a.createElement(K,{format:"block-quote",icon:"format_quote"}),c.a.createElement(K,{format:"numbered-list",icon:"format_list_numbered"}),c.a.createElement(K,{format:"bulleted-list",icon:"format_list_bulleted"})),c.a.createElement(s["a"],{renderElement:i,renderLeaf:d,placeholder:"Enter some rich text...",spellCheck:!0,autoFocus:!0}))},P=(e,t)=>{var a=z(e,t),n=q.includes(t);if(o["i"].unwrapNodes(e,{match:e=>q.includes(e.type),split:!0}),o["i"].setNodes(e,{type:a?"paragraph":n?"list-item":t}),!a&&n){var r={type:t,children:[]};o["i"].wrapNodes(e,r)}},V=(e,t)=>{var a=A(e,t);a?o["a"].removeMark(e,t):o["a"].addMark(e,t,!0)},z=(e,t)=>{var a=o["a"].nodes(e,{match:e=>e.type===t}),n=Object(r["a"])(a,1),l=n[0];return!!l},A=(e,t)=>{var a=o["a"].marks(e);return!!a&&!0===a[t]},U=e=>{var t=e.attributes,a=e.children,n=e.element;switch(n.type){case"heading-one":return c.a.createElement("h1",t,a);case"heading-two":return c.a.createElement("h2",t,a);case"block-quote":return c.a.createElement("blockquote",t,a);case"numbered-list":return c.a.createElement("ol",t,a);case"bulleted-list":return c.a.createElement("ul",t,a);case"list-item":return c.a.createElement("li",t,a);default:return c.a.createElement("p",t,a)}},J=e=>{var t=e.attributes,a=e.children,n=e.leaf;return n.bold&&(a=c.a.createElement("strong",null,a)),n.italic&&(a=c.a.createElement("em",null,a)),n.underline&&(a=c.a.createElement("u",null,a)),n.code&&(a=c.a.createElement("code",null,a)),c.a.createElement("span",t,a)},K=e=>{var t=e.format,a=e.icon,n=Object(s["h"])();return c.a.createElement(B,{active:z(n,t),onMouseDown:e=>{e.preventDefault(),P(n,t)}},c.a.createElement(R,null,a))},W=e=>{var t=e.format,a=e.icon,n=Object(s["h"])();return c.a.createElement(B,{active:A(n,t),onMouseDown:e=>{e.preventDefault(),V(n,t)}},c.a.createElement(R,null,a))},Z=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}],style:{borderLeft:"2px solid #ddd",marginLeft:0,marginRight:0,paddingLeft:10,color:"#aaa",fontStyle:"italic"}},{type:"paragraph",children:[{text:"Try is out for yourself!"}]}],Y=H;function Q(){var e=Object(E["a"])(["\n            padding: 20px;\n            border: 2px solid #ddd;\n          "]);return Q=function(){return e},e}function X(){var e=Object(E["a"])(["\n            margin: 8px 0;\n          "]);return X=function(){return e},e}function G(){var e=Object(E["a"])(["\n          box-shadow: 0 0 0 3px #ddd;\n          padding: 8px;\n        "]);return G=function(){return e},e}function $(){var e=Object(E["a"])(["\n  width: unset;\n"]);return $=function(){return e},e}var ee=()=>{var e=Object(l["useState"])(ie),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useMemo"])((()=>te(Object(g["a"])(Object(s["i"])(Object(o["j"])())))),[]);return c.a.createElement(s["c"],{editor:i,value:a,onChange:n},c.a.createElement(F,null,c.a.createElement(ce,null)),c.a.createElement(s["a"],{renderElement:e=>c.a.createElement(ne,e),placeholder:"Enter some text..."}))},te=e=>{var t=e.isVoid;return e.isVoid=e=>"editable-void"===e.type||t(e),e},ae=e=>{var t={text:""},a={type:"editable-void",children:[t]};o["i"].insertNodes(e,a)},ne=e=>{var t=e.attributes,a=e.children,n=e.element;switch(n.type){case"editable-void":return c.a.createElement(le,e);default:return c.a.createElement("p",t,a)}},re=Object(f["css"])($()),le=e=>{var t=e.attributes,a=e.children,n=(e.element,Object(l["useState"])("")),o=Object(r["a"])(n,2),s=o[0],d=o[1];return c.a.createElement("div",Object(i["a"])({},t,{contentEditable:!1}),c.a.createElement("div",{className:Object(f["css"])(G())},c.a.createElement("h4",null,"Name:"),c.a.createElement("input",{className:Object(f["css"])(X()),type:"text",value:s,onChange:e=>{d(e.target.value)}}),c.a.createElement("h4",null,"Left or right handed:"),c.a.createElement("input",{className:re,type:"radio",name:"handedness",value:"left"})," Left",c.a.createElement("br",null),c.a.createElement("input",{className:re,type:"radio",name:"handedness",value:"right"})," Right",c.a.createElement("h4",null,"Tell us about yourself:"),c.a.createElement("div",{className:Object(f["css"])(Q())},c.a.createElement(Y,null))),a)},ce=()=>{var e=Object(s["d"])();return c.a.createElement(B,{onMouseDown:t=>{t.preventDefault(),ae(e)}},c.a.createElement(R,null,"add"))},ie=[{type:"paragraph",children:[{text:"In addition to nodes that contain editable text, you can insert void nodes, which can also contain editable elements, inputs, or an entire other Slate editor."}]},{type:"editable-void",children:[{text:""}]},{type:"paragraph",children:[{text:""}]}],oe=ee,se=()=>{var e=Object(l["useState"])(be),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useMemo"])((()=>de(Object(s["i"])(Object(o["j"])()))),[]);return c.a.createElement(s["c"],{editor:i,value:a,onChange:e=>n(e)},c.a.createElement(s["a"],{renderElement:e=>c.a.createElement(ue,e),placeholder:"Enter some text..."}))},de=e=>{var t=e.isVoid;return e.isVoid=e=>"video"===e.type||t(e),e},ue=e=>{var t=e.attributes,a=e.children,n=e.element;switch(n.type){case"video":return c.a.createElement(me,e);default:return c.a.createElement("p",t,a)}},me=e=>{var t=e.attributes,a=e.children,n=e.element,r=Object(s["d"])(),l=n.url;return c.a.createElement("div",t,c.a.createElement("div",{contentEditable:!1},c.a.createElement("div",{style:{padding:"75% 0 0 0",position:"relative"}},c.a.createElement("iframe",{src:"".concat(l,"?title=0&byline=0&portrait=0"),frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),c.a.createElement(he,{url:l,onChange:e=>{var t=s["b"].findPath(r,n);o["i"].setNodes(r,{url:e},{at:t})}})),a)},he=e=>{var t=e.url,a=e.onChange,n=Object(l["useState"])(t),i=Object(r["a"])(n,2),o=i[0],s=i[1];return c.a.createElement("input",{value:o,onClick:e=>e.stopPropagation(),style:{marginTop:5,boxSizing:"border-box"},onChange:e=>{var t=e.target.value;s(t),a(t)}})},be=[{children:[{text:"In addition to simple image nodes, you can actually create complex embedded nodes. For example, this one contains an input element that lets you change the video being rendered!"}]},{type:"video",url:"https://player.vimeo.com/video/26689853",children:[{text:""}]},{children:[{text:"Try it out! This editor is built to handle Vimeo embeds, but you could handle any type."}]}],pe=se,ve=a("uFwe"),Ee=()=>{var e=Object(l["useState"])(je),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useMemo"])((()=>fe(Object(g["a"])(Object(s["i"])(Object(o["j"])())))),[]),d=Object(l["useCallback"])((e=>c.a.createElement(ge,e)),[]);return c.a.createElement(s["c"],{editor:i,value:a,onChange:n},c.a.createElement(s["a"],{renderElement:d,placeholder:"Enter a title...",spellCheck:!0,autoFocus:!0}))},fe=e=>{var t=e.normalizeNode;return e.normalizeNode=a=>{var n=Object(r["a"])(a,2),l=n[0],c=n[1];if(0===c.length){if(e.children.length<1){var i={type:"title",children:[{text:"Untitled"}]};o["i"].insertNodes(e,i,{at:c.concat(0)})}if(e.children.length<2){var s={type:"paragraph",children:[{text:""}]};o["i"].insertNodes(e,s,{at:c.concat(1)})}var d,u=Object(ve["a"])(o["c"].children(e,c));try{for(u.s();!(d=u.n()).done;){var m=d.value,h=Object(r["a"])(m,2),b=h[0],p=h[1],v=0===p[0]?"title":"paragraph";b.type!==v&&o["i"].setNodes(e,{type:v},{at:p})}}catch(E){u.e(E)}finally{u.f()}}return t([l,c])},e},ge=e=>{var t=e.attributes,a=e.children,n=e.element;switch(n.type){case"title":return c.a.createElement("h2",t,a);case"paragraph":return c.a.createElement("p",t,a);default:return c.a.createElement("div",t,a)}},je=[{type:"title",children:[{text:"Enforce Your Layout!"}]},{type:"paragraph",children:[{text:"This example shows how to enforce your layout with domain-specific constraints."}]}],Oe=Ee,ye=()=>c.a.createElement("div",null),xe=ye,ke=a("luuv"),we=a.n(ke),Ne=we.a.mock({code:200,"data|100":[{type:"heading",children:[{text:"@title"}]},{children:[{text:"@paragraph"}]}],mesg:"[\u6a21\u62df]\u6570\u636e\u83b7\u53d6\u6210\u529f"}),Ce=()=>{var e=Object(l["useState"])(Ne.data),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useMemo"])((()=>Object(s["i"])(Object(o["j"])())),[]),d=Object(l["useCallback"])((e=>c.a.createElement(Me,e)),[]);return c.a.createElement(s["c"],{editor:i,value:a,onChange:n},c.a.createElement(s["a"],{renderElement:d,spellCheck:!0,autoFocus:!0}))},Me=e=>{var t=e.attributes,a=e.children,n=e.element;switch(n.type){case"heading":return c.a.createElement("h1",t,a);default:return c.a.createElement("p",t,a)}},De=Ce,Se=a("vEJZ"),Te=a("ksnH"),Le=a.n(Te);function _e(){var e=Object(E["a"])(["\n            display: block;\n            max-width: 100%;\n            max-height: 20em;\n            box-shadow: ",";\n          "]);return _e=function(){return e},e}var Be=()=>{var e=Object(l["useState"])(ze),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useMemo"])((()=>Ie(Object(g["a"])(Object(s["i"])(Object(o["j"])())))),[]);return c.a.createElement(s["c"],{editor:i,value:a,onChange:n},c.a.createElement(F,null,c.a.createElement(Pe,null)),c.a.createElement(s["a"],{renderElement:e=>c.a.createElement(qe,e),placeholder:"Enter some text..."}))},Re=Be,Ie=e=>{var t=e.insertData,a=e.isVoid;return e.isVoid=e=>"image"===e.type||a(e),e.insertData=a=>{var n=a.getData("text/plain"),l=a.files;if(l&&l.length>0){var c,i=Object(ve["a"])(l);try{var o=function(){var t=c.value,a=new FileReader,n=t.type.split("/"),l=Object(r["a"])(n,1),i=l[0];"image"===i&&(a.addEventListener("load",(()=>{var t=a.result;Fe(e,t)})),a.readAsDataURL(t))};for(i.s();!(c=i.n()).done;)o()}catch(s){i.e(s)}finally{i.f()}}else Ve(n)?Fe(e,n):t(a)},e},Fe=(e,t)=>{var a={text:""},n={type:"image",url:t,children:[a]};o["i"].insertNodes(e,n)},qe=e=>{var t=e.attributes,a=e.children,n=e.element;switch(n.type){case"image":return c.a.createElement(He,e);default:return c.a.createElement("p",t,a)}},He=e=>{var t=e.attributes,a=e.children,n=e.element,r=Object(s["g"])(),l=Object(s["e"])();return c.a.createElement("div",t,c.a.createElement("div",{contentEditable:!1},c.a.createElement("img",{src:n.url,className:Object(f["css"])(_e(),r&&l?"0 0 0 3px #B4D5FF":"none")})),a)},Pe=()=>{var e=Object(s["d"])();return c.a.createElement(B,{onMouseDown:t=>{t.preventDefault();var a=window.prompt("Enter the URL of the image:");a&&Fe(e,a)}},c.a.createElement(R,null,"image"))},Ve=e=>{if(!e)return!1;if(!Le()(e))return!1;var t=new URL(e).pathname.split(".").pop();return Se.includes(t)},ze=[{type:"paragraph",children:[{text:"In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos."}]},{type:"image",url:"https://source.unsplash.com/kFrdX5IeQzI",children:[{text:""}]},{type:"paragraph",children:[{text:"This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your keyboard and paste it anywhere in the editor!"}]}],Ae=()=>{var e=Object(l["useState"])(Xe),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useMemo"])((()=>Ue(Object(g["a"])(Object(s["i"])(Object(o["j"])())))),[]);return c.a.createElement(s["c"],{editor:i,value:a,onChange:n},c.a.createElement(F,null,c.a.createElement(Qe,null)),c.a.createElement(s["a"],{renderElement:e=>c.a.createElement(Ye,e),placeholder:"Enter some text..."}))},Ue=e=>{var t=e.insertData,a=e.insertText,n=e.isInline;return e.insertData=a=>{var n=a.getData("text/plain");n&&Le()(n)?Ze(e,n):t(a)},e.insertText=t=>{t&&Le()(t)?Ze(e,t):a(t)},e.isInline=e=>"link"===e.type||n(e),e},Je=(e,t)=>{e.selection&&Ze(e,t)},Ke=e=>{var t=o["a"].nodes(e,{match:e=>"link"===e.type}),a=Object(r["a"])(t,1),n=a[0];return!!n},We=e=>{o["i"].unwrapNodes(e,{match:e=>"link"===e.type})},Ze=(e,t)=>{Ke(e)&&We(e);var a=e.selection,n=a&&o["g"].isCollapsed(a),r={type:"link",url:t,children:n?[{text:t}]:[]};n?o["i"].insertNodes(e,r):(o["i"].wrapNodes(e,r,{split:!0}),o["i"].collapse(e,{edge:"end"}))},Ye=e=>{var t=e.attributes,a=e.children,n=e.element;switch(n.type){case"link":return c.a.createElement("a",Object(i["a"])({},t,{href:n.url}),a);default:return c.a.createElement("p",t,a)}},Qe=()=>{var e=Object(s["h"])();return c.a.createElement(B,{active:Ke(e),onMouseDown:t=>{t.preventDefault();var a=window.prompt("Enter the URL of the link:");a&&Je(e,a)}},c.a.createElement(R,null,"link"))},Xe=[{children:[{text:"In addition to block nodes, you can create inline nodes, like "},{type:"link",url:"https://en.wikipedia.org/wiki/Hypertext",children:[{text:"hyperlinks"}]},{text:"!"}]},{children:[{text:"This example shows hyperlinks in action. "},{text:"It features two ways to add links. "},{text:"You can either add a link via the toolbar icon above, "},{text:"or if you want in on a little secret, "},{text:"copy a URL to your keyboard and paste it while a range of text is selected."}]}],Ge=Ae,$e=()=>c.a.createElement("div",null),et=$e,tt=()=>c.a.createElement("div",null),at=tt,nt=()=>c.a.createElement("div",null),rt=nt,lt=()=>c.a.createElement("div",null),ct=lt,it=()=>{var e=Object(l["useState"])(ot),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useMemo"])((()=>Object(g["a"])(Object(s["i"])(Object(o["j"])()))),[]);return c.a.createElement(s["c"],{editor:i,value:a,onChange:n},c.a.createElement(s["a"],{placeholder:"Enter some plain text..."}))},ot=[{children:[{text:"This is editable plain text, just like a <textarea>!"}]}],st=it,dt=()=>{var e=Object(l["useState"])(ut),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=Object(l["useMemo"])((()=>Object(s["i"])(Object(o["j"])())),[]);return c.a.createElement(s["c"],{editor:i,value:a,onChange:e=>n(e)},c.a.createElement(s["a"],{readOnly:!0,placeholder:"Enter some plain text..."}))},ut=[{children:[{text:"This is editable plain text, just like a <textarea>!"}]}],mt=dt,ht=()=>c.a.createElement("div",null),bt=ht,pt=()=>c.a.createElement("div",null),vt=pt,Et=()=>c.a.createElement("div",null),ft=Et,gt=a("eOeM"),jt=a.n(gt),Ot=[["\u2705\u7ec3\u4e60","Study","study",m],["\u2705\u53ea\u8bfb","Read-only","read-only",mt],["\u2705\u7eaf\u6587\u672c","Plain Text","plaintext",st,"showing the most basic case: a glorified <textarea>."],["\u2705\u5f85\u529e\u9879","Checklists","check-lists",M],["\u274e\u5bcc\u6587\u672c","Rich Text","richtext",Y,"showing the features you'd expect from a basic editor."],["\u274e\u53ef\u7f16\u8f91\u7a7a\u5143\u7d20","Editable Voids","editable-voids",oe],["\u274e\u94fe\u63a5","Links","links",Ge,"showing how wrap text in inline nodes with associated data."],["\u2705\u56fe\u7247","Images","images",Re,"showing how to use void (text-less) nodes to add images."],["\u2705\u5d4c\u5165","Embeds","embeds",pe],["\u2705\u5f3a\u5236\u5e03\u5c40","Forced Layout","forced-layout",Oe,"showing how to use constraints to enforce a document structure."],["\u2705\u8d85\u5927\u6587\u6863","Huge Document","huge-document",De],["\ud83d\udd33\u60ac\u505c\u5de5\u5177\u680f","Hovering Toolbar","hovering-toolbar",xe,"showing how a hovering toolbar can be implemented."],["\ud83d\udd33Markdown\u9884\u89c8","Markdown Preview","markdown-preview",et],["\ud83d\udd33Markdown\u5feb\u6377","Markdown Shortcuts","markdown-shortcuts",at,"showing how to add key handlers for Markdown-like shortcuts."],["\ud83d\udd33\u63d0\u53ca","Mentions","mentions",rt],["\ud83d\udd33\u89e3\u6790HTML","Paste HTML","paste-html",ct,"showing how to use an HTML serializer to handle pasted HTML."],["\ud83d\udd33\u68c0\u7d22\u9ad8\u4eae","Search Highlighting","search-highlighting",bt],["\ud83d\udd33\u4ee3\u7801\u9ad8\u4eae","Code Highlighting","code-highlighting",vt,"showing how to use decorations to dynamically format text."],["\ud83d\udd33\u8868\u683c","Tables","tables",ft,"showing how to nest blocks to render more advanced components."]],yt=()=>c.a.createElement("div",{className:jt.a.wrapper},c.a.createElement(n["a"],{type:"card",tabPosition:"left",defaultActiveKey:"editable-voids"},Ot.map((e=>{var t=Object(r["a"])(e,5),a=t[0],l=(t[1],t[2]),i=t[3];t[4];return c.a.createElement(n["a"].TabPane,{key:l,tab:a},c.a.createElement("div",{className:jt.a.box},c.a.createElement(i,null)))}))));t["default"]=yt}}]);