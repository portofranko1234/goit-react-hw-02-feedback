(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),o=n.n(r),s=n(4),i=n(5),l=n(6),d=n(8),b=n(7),u=n(0);function j(e){var t=e.message;return Object(u.jsx)("p",{children:t})}var h=j;j.defaultProps={message:"No message value"};var v=function(e){var t=e.good,n=e.bad,a=e.neutral,c=e.total,r=e.percentage;return Object(u.jsx)("div",{children:c>0?Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",a]}),Object(u.jsxs)("li",{children:["Bad: ",n]}),Object(u.jsxs)("li",{children:["Total: ",c]}),Object(u.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]}):Object(u.jsx)(h,{message:"No feedback given"})})},O=v;v.defaultProps={good:0,bad:0,total:0,neutral:0,positivePercentage:0};var g=function(e){var t=e.onLeaveFeedback;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",name:"good",onClick:t,children:"Good"}),Object(u.jsx)("button",{type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(u.jsx)("button",{type:"button",name:"bad",onClick:t,children:"Bad"})]})};function x(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{className:"section",children:[t&&Object(u.jsx)("h2",{className:"sectionTitle",children:t}),n]})}x.defaultProps={title:""};var f=x,k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState((function(e){return Object(s.a)({},t.target.name,e[t.target.name]+1)}))},e}return Object(l.a)(n,[{key:"totalFeedbackCounter",value:function(){var e=this.state,t=e.good+e.neutral+e.bad;return t||0}},{key:"positiveFeedbackPercentageCounter",value:function(){var e=this.state.good;return Math.round(e/this.totalFeedbackCounter()*100)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.totalFeedbackCounter(),r=this.positiveFeedbackPercentageCounter();return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{title:"Please leave feedback",children:Object(u.jsx)(g,{onLeaveFeedback:this.handleIncrement})}),Object(u.jsx)(f,{title:"Statistics",children:Object(u.jsx)(O,{good:t,neutral:n,bad:a,total:c,percentage:r})})]})}}]),n}(a.Component);o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dc9466cc.chunk.js.map