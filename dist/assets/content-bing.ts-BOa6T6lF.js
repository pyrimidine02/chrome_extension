(function(){const a="https://toge.pyrimidines.org",d="토게 인포",i="당신이 지정한 설명을 여기에 넣으세요.";function l(){const t=document.createElement("div");t.style.cssText=`
        padding: 12px;
        margin-top: 8px;
        background: #fffbe6;
        border: 1px solid #ffd700;
        border-radius: 4px;
    `;const e=document.createElement("a");e.href=a,e.textContent=d,e.style.cssText="display:block; font-weight:bold; margin-bottom:4px; color:#333; text-decoration:none;";const o=document.createElement("p");return o.textContent=i,o.style.cssText="margin:0; font-size:90%; color:#555;",t.appendChild(e),t.appendChild(o),t}let r=0;function c(t){if(t.dataset.togeReplaced)return;const e=l();t.replaceWith(e),t.dataset.togeReplaced="true",r++,chrome.runtime.sendMessage({type:"updateCount",count:r})}function u(){new MutationObserver(e=>{for(const o of e)for(const n of Array.from(o.addedNodes))n instanceof HTMLElement&&n.querySelectorAll("span.b_tranthis").forEach(s=>c(s))}).observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll("span.b_tranthis").forEach(e=>c(e))}window.location.hostname.includes("bing.com")&&window.location.pathname==="/search"&&window.addEventListener("load",u);
})()
