/*! For license information please see fastclick.2c0d05aa.js.LICENSE */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fastclick"],{a0db:function(t,e,n){var i;(function(){"use strict";function o(t){var e;function n(t,e){return function(){return t.apply(e,arguments)}}this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.tapDelay=200,this.tapTimeout=700;for(var i=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,a=0,r=i.length;a<r;a++)o[i[a]]=n(o[i[a]],o);t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"===typeof t.onclick&&(e=t.onclick,t.addEventListener("click",(function(t){e(t)}),!1),t.onclick=null)}var a=["email","number","password","search","tel","text","url"];function r(){new o(document.body)}o.prototype.isInput=function(t){return"textarea"===t.tagName.toLowerCase()||-1!==a.indexOf(t.type)},o.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if("file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},o.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!0;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},o.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},o.prototype.focus=function(t){var e;t.focus(),t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type&&"email"!==t.type&&"number"!==t.type&&(e=t.value.length,t.setSelectionRange(e,e))},o.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},o.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},o.prototype.onTouchStart=function(t){var e,n;return t.targetTouches.length>1||(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],!!e.isContentEditable||(!(e!==document.activeElement||!this.isInput(e))||(n.identifier&&n.identifier===this.lastTouchIdentifier?(t.preventDefault(),!1):(this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e),this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0))))},o.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},o.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},o.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},o.prototype.onTouchEnd=function(t){var e,n,i,o,a=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,i=a.tagName.toLowerCase(),"label"===i)e=this.findControl(a),e&&(this.focus(a),a=e);else if(this.needsFocus(a))return t.timeStamp-n>100||window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,t),"select"!==i&&(this.targetElement=null,t.preventDefault()),!1);return o=a.fastClickScrollParent,!(!o||o.fastClickLastScrollTop===o.scrollTop)||(this.needsClick(a)||(t.preventDefault(),this.sendClick(a,t)),!1)},o.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},o.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},o.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},i=function(){if("loading"!==document.readyState)return r();document.addEventListener("DOMContentLoaded",r,!1)}.call(e,n,e,t),void 0===i||(t.exports=i)})()}}]);