(this["webpackJsonpcount-me-in"]=this["webpackJsonpcount-me-in"]||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),o=a(21),s=a.n(o),i=(a(61),a(22)),c=a(23),l=a(16),u=a(31),m=a(30),h=(a(62),a(53)),d=a.n(h),v=(a(63),a(64),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={date:new Date,days:0,hours:0,min:0,sec:0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(e,t){return{date:t.date}})),this.interval=setInterval((function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()}),1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.date!==e.date&&this.setState((function(e,t){return{date:t.date}})),this.interval=setInterval((function(){var e=t.calculateCountdown(t.props.date);e?t.setState(e):t.stop()}),1e3)}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"calculateCountdown",value:function(e){var t=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(t<=0)return!1;var a={years:0,days:0,hours:0,min:0,sec:0,millisec:0};return t>=31557600&&(a.years=Math.floor(t/31557600),t-=365.25*a.years*86400),t>=86400&&(a.days=Math.floor(t/86400),t-=86400*a.days),t>=3600&&(a.hours=Math.floor(t/3600),t-=3600*a.hours),t>=60&&(a.min=Math.floor(t/60),t-=60*a.min),a.sec=t,a}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.hours,n=e.min,o=e.sec;return r.a.createElement("div",null,r.a.createElement("h3",null,t," days, ",a," hrs, ",n," min, ",o," s remaining"))}}]),a}(r.a.Component)),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={date:new Date,eventname:"Enter event name"},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.onFormSubmit=n.onFormSubmit.bind(Object(l.a)(n)),n.handleTextChange=n.handleTextChange.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({startDate:e})}},{key:"handleTextChange",value:function(e){this.setState({eventname:e.target.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.setState((function(e,t){return{date:e.startDate,eventname:e.eventname}})),document.getElementById("event-text").classList.add("saved-text")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"event-group"},r.a.createElement("textarea",{id:"event-text",defaultValue:"Event name",onChange:this.handleTextChange})),r.a.createElement(d.a,{className:"date-picker",selected:this.state.startDate,onChange:this.handleChange,showTimeSelect:!0,dateFormat:"MMMM d, yyyy h:mm aa"}),r.a.createElement("button",{className:"btn btn-primary"},"Start Countdown"))),r.a.createElement(v,{date:this.state.date})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){e.exports=a(128)},61:function(e,t,a){},62:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.8968a0a3.chunk.js.map