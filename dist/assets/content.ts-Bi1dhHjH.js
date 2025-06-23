(function(){const c="https://toge.pyrimidines.org",i="토게 인포",s="당신이 지정한 설명을 여기에 넣으세요.";function a(){const e=document.createElement("div");return e.style.cssText=`
    padding: 12px;
    margin-bottom: 16px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  `,e.innerHTML=`
    <a href="${c}" target="_blank" style="text-decoration:none;color:#1a0dab">
      <h3 style="margin:0 0 4px;font-size:18px;">${i}</h3>
      <div style="font-size:14px;color:#006621;margin-bottom:4px;">${c}</div>
      <p style="margin:0;font-size:13px;color:#545454;">${s}</p>
    </a>
  `,e}function r(e){e.remove();const o=a(),n=document.querySelector("#search");n?n.prepend(o):document.body.prepend(o),chrome.runtime.sendMessage({type:"incrementCount"})}function l(){new MutationObserver(o=>{for(const n of o)for(const t of Array.from(n.addedNodes))t instanceof Element&&(t.matches("div.MjjYud")&&r(t),t.querySelectorAll("div.MjjYud").forEach(d=>r(d)))}).observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll("div.MjjYud").forEach(o=>r(o))}window.location.hostname.includes("google")&&window.location.pathname==="/search"&&window.addEventListener("load",l);
})()
