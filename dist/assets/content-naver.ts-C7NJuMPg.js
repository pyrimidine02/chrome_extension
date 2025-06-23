(function(){const r=/^https:\/\/search\.naver\.com\/search\.naver\?/,s="https://toge.pyrimidines.org",i="토게 인포",a="빠르고 정확한 정보 제공";function d(){const e=document.createElement("div");e.style.cssText=`
    padding: 12px;
    margin-bottom: 16px;
    background: #e8f5e9;
    border: 1px solid #66bb6a;
    border-radius: 4px;
  `;const t=document.createElement("a");t.href=s,t.textContent=i,t.style.cssText=`
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
    color: #2e7d32;
    text-decoration: none;
  `;const n=document.createElement("p");return n.textContent=a,n.style.cssText=`
    margin: 0;
    font-size: 90%;
    color: #4e342e;
  `,e.appendChild(t),e.appendChild(n),e}(function(){if(!r.test(window.location.href))return;let e=0;const t=document.getElementById("main_pack");t&&Array.from(t.querySelectorAll("li.bx")).forEach(o=>{const c=d();o.replaceWith(c),e++});const n=document.getElementById("sub_pack");n&&(n.innerHTML='<div style="padding:12px; font-style:italic;">준비중</div>'),chrome.runtime.sendMessage({type:"naverCount",count:e})})();
})()
