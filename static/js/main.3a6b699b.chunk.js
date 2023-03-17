(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),r=c(3),l=c(15),i=c(6),o=c(13),d=c(14),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},b=c(5);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(n||(n={}));var h=function(e){return{type:"filter/QUERY",payload:e}},O=function(e){return{type:"filter/TYPE",payload:e}},f={query:"",status:n.All},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/TYPE":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return Object(b.a)({},e)}},x="todos/SET",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===x?t.payload:e},p=Object(i.combineReducers)({currentTodo:j,filter:m,todos:v}),y=Object(i.createStore)(p,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),N=c(0),g=(c(23),c(24),r.b,r.c);var T=c(11),k=c.n(T),E=c(1),w=function(e){var t=e.renderedTodos,c=Object(r.b)(),n=g((function(e){return e.currentTodo}));return Object(E.jsx)(E.Fragment,{children:!!t.length&&t.map((function(e){var t=e.title,a=e.completed,s=e.id;return Object(E.jsxs)("tr",{"data-cy":"todo",children:[Object(E.jsx)("td",{className:"is-vcentered",children:s}),Object(E.jsx)("td",{className:"is-vcentered",children:a&&Object(E.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("td",{className:"is-vcentered is-expanded",children:Object(E.jsx)("p",{className:k()({"has-text-success":a},{"has-text-danger":!a}),children:t})}),Object(E.jsx)("td",{className:"has-text-right is-vcentered",children:Object(E.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(u(e))},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:k()("far",{"fa-eye":s!==(null===n||void 0===n?void 0:n.id)||!n},{"fa-eye-slash":s===(null===n||void 0===n?void 0:n.id)})})})})})]},s)}))})},C=function(){var e=g((function(e){return e.todos})),t=g((function(e){return e.filter.status})),c=g((function(e){return e.filter.query})),a=Object(N.useMemo)((function(){return function(e,t,c){var a=[];switch(e){case n.All:a=c;break;case n.Completed:a=c.filter((function(e){return e.completed}));break;case n.Active:a=c.filter((function(e){return!e.completed}));break;default:return c}return t&&(a=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),a}(t,c,e)}),[t,c]);return Object(E.jsxs)(E.Fragment,{children:[!a.length&&Object(E.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),!!a.length&&Object(E.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("th",{children:"Title"}),Object(E.jsx)("th",{children:" "})]})}),Object(E.jsx)("tbody",{children:Object(E.jsx)(w,{renderedTodos:a})})]})]})},S=function(){var e=Object(r.b)(),t=g((function(e){return e.filter.query}));return Object(E.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return function(e){e.preventDefault()}(e)},children:[Object(E.jsx)("p",{className:"control",children:Object(E.jsx)("span",{className:"select",children:Object(E.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){return function(t){var c=t.currentTarget.value;e(O(c))}(t)},children:[Object(E.jsx)("option",{value:n.All,children:"All"}),Object(E.jsx)("option",{value:n.Active,children:"Active"}),Object(E.jsx)("option",{value:n.Completed,children:"Completed"})]})})}),Object(E.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(E.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(t){return function(t){e(h(t.target.value))}(t)},value:t}),Object(E.jsx)("span",{className:"icon is-left",children:Object(E.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!t.length&&Object(E.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(E.jsx)("button",{"aria-label":"clear","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(h(""))}})})]})]})},A=c(4);function R(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(26);var _=function(){return Object(E.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(E.jsx)("div",{className:"Loader__content"})})},q=function(){var e=g((function(e){return e.currentTodo})),t=Object(N.useState)(null),c=Object(A.a)(t,2),n=c[0],a=c[1],s=Object(N.useState)(!1),l=Object(A.a)(s,2),i=l[0],o=l[1];Object(N.useEffect)((function(){var t;e&&(o(!0),(t=null===e||void 0===e?void 0:e.userId,R("/users/".concat(t))).then((function(e){a(e),o(!1)})))}),[e]);var d=Object(r.b)();return Object(E.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(E.jsx)("div",{className:"modal-background"}),Object(E.jsx)("div",{className:"modal-card",children:i?Object(E.jsx)(_,{}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("header",{className:"modal-card-head",children:[Object(E.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===e||void 0===e?void 0:e.id)}),Object(E.jsx)("button",{"aria-label":"delete",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){d({type:"currentTodo/REMOVE"})}})]}),Object(E.jsxs)("div",{className:"modal-card-body",children:[Object(E.jsx)("p",{className:"block","data-cy":"modal-title",children:null===e||void 0===e?void 0:e.title}),Object(E.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==e&&void 0!==e&&e.completed?Object(E.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(E.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(E.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===n||void 0===n?void 0:n.name})]})]})]})})]})},F=function(){var e=Object(r.b)(),t=g((function(e){return e.todos})),c=g((function(e){return e.currentTodo}));return Object(N.useEffect)((function(){R("/todos").then((function(t){return e(function(e){return{type:x,payload:e}}(t))}))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"section",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"box",children:[Object(E.jsx)("h1",{className:"title",children:"Todos:"}),Object(E.jsx)("div",{className:"block",children:Object(E.jsx)(S,{})}),Object(E.jsx)("div",{className:"block",children:t.length?Object(E.jsx)(C,{}):Object(E.jsx)(_,{})})]})})}),!!c&&Object(E.jsx)(q,{})]})},L=function(){return Object(E.jsx)(r.a,{store:y,children:Object(E.jsx)(l.a,{children:Object(E.jsx)(F,{})})})};s.a.render(Object(E.jsx)(L,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3a6b699b.chunk.js.map