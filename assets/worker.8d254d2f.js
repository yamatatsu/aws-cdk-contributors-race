(function(){"use strict";const e=1500,s=500,r=50,t=self;setTimeout(function(){t.postMessage({type:"eventForFirstUpdate"})},r);const o=setInterval(()=>{t.postMessage({type:"intervalForSort"})},s),a=setInterval(()=>{t.postMessage({type:"intervalForUpdate"})},e);t.onmessage=async n=>{n.data==="done"&&(clearInterval(a),clearInterval(o))}})();
