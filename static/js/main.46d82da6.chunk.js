(this["webpackJsonpcurrency-tracker"]=this["webpackJsonpcurrency-tracker"]||[]).push([[0],{39:function(e,c,t){},40:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),r=t(15),s=t.n(r),i=t(6),o=t(16),l=t.n(o),j=(t(39),t(40),t(0)),p=function(e){var c=e.image,t=e.name,n=e.symbol,a=e.price,r=e.volume,s=e.priceChange,i=e.marketcap;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:c,alt:"crypto"}),Object(j.jsx)("h1",{children:t}),Object(j.jsx)("p",{className:"coin-symbol",children:n})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["$",a]}),Object(j.jsxs)("p",{className:"coin-volume",children:["$",r.toLocaleString()]}),s<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[s.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[s.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt cap: $",i.toLocaleString()]})]})]})})};var d=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],d=s[1];Object(n.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var m=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){d(e.target.value)},placeholder:"Search"})})]}),Object(j.jsxs)("div",{className:"heading-row",children:[Object(j.jsx)("p",{children:"Coin"}),Object(j.jsx)("p",{children:"Symbol"}),Object(j.jsx)("p",{children:"Price"}),Object(j.jsx)("p",{children:"Volume(24h)"}),Object(j.jsx)("p",{children:"Rate(24h)"}),Object(j.jsx)("p",{children:"Marketcap"})]}),m.map((function(e){return Object(j.jsx)(p,{name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.46d82da6.chunk.js.map