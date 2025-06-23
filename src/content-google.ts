// content-google.ts
export {}; // --isolatedModules 모드에서 모듈로 인식시키기 위해 빈 export

const MY_SITE_URL   = 'https://toge.pyrimidines.org';
const MY_SITE_TITLE = '토게 인포';
const MY_SITE_DESC  = '당신이 지정한 설명을 여기에 넣으세요.';

// 새 블록 생성 함수
function createReplacementBlock(): HTMLElement {
    const block = document.createElement('div');
    block.style.cssText = `
    padding: 12px;
    margin-bottom: 16px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  `;
    block.innerHTML = `
    <a href="${MY_SITE_URL}" target="_blank" style="text-decoration:none;color:#1a0dab">
      <h3 style="margin:0 0 4px;font-size:18px;">${MY_SITE_TITLE}</h3>
      <div style="font-size:14px;color:#006621;margin-bottom:4px;">${MY_SITE_URL}</div>
      <p style="margin:0;font-size:13px;color:#545454;">${MY_SITE_DESC}</p>
    </a>
  `;
    return block;
}

// 블록을 교체하고 메시지 전송해 카운트 증가
function replaceAndCount(el: Element) {
    el.remove();
    const newBlock = createReplacementBlock();
    const container = document.querySelector('#search') as HTMLElement | null;
    if (container) {
        container.prepend(newBlock);
    } else {
        document.body.prepend(newBlock);
    }
    // background에 메시지 보내기
    chrome.runtime.sendMessage({ type: 'incrementCount' });
}

// MutationObserver 로 새로 생기는 .MjjYud 탐지
function observeMutations() {
    const observer = new MutationObserver(muts => {
        for (const m of muts) {
            for (const node of Array.from(m.addedNodes)) {
                if (!(node instanceof Element)) continue;
                // 노드 자체가 대체 대상일 때
                if (node.matches('div.MjjYud')) {
                    replaceAndCount(node);
                }
                // 자식 중에 대체 대상이 있을 때
                node.querySelectorAll('div.MjjYud').forEach(el => replaceAndCount(el));
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // 초기 페이지 로드 시에도 한 번 실행
    document.querySelectorAll('div.MjjYud').forEach(el => replaceAndCount(el));
}

if (window.location.hostname.includes('google') && window.location.pathname === '/search') {
    window.addEventListener('load', observeMutations);
}
