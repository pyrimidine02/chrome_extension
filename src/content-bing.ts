// content-bing.ts
export {}; // --isolatedModules 모드에서 모듈로 인식시키기 위해 빈 export

const MY_SITE_URL   = 'https://toge.pyrimidines.org';
const MY_SITE_TITLE = '토게 인포';
const MY_SITE_DESC  = '당신이 지정한 설명을 여기에 넣으세요.';

function createReplacementBlock(): HTMLElement {
    const block = document.createElement('div');
    block.style.cssText = `
        padding: 12px;
        margin-top: 8px;
        background: #fffbe6;
        border: 1px solid #ffd700;
        border-radius: 4px;
    `;
    const title = document.createElement('a');
    title.href = MY_SITE_URL;
    title.textContent = MY_SITE_TITLE;
    title.style.cssText = 'display:block; font-weight:bold; margin-bottom:4px; color:#333; text-decoration:none;';
    const desc = document.createElement('p');
    desc.textContent = MY_SITE_DESC;
    desc.style.cssText = 'margin:0; font-size:90%; color:#555;';
    block.appendChild(title);
    block.appendChild(desc);
    return block;
}

let replacementCount = 0;

function replaceAndCount(el: HTMLElement) {
    if (el.dataset.togeReplaced) return;
    const block = createReplacementBlock();
    el.replaceWith(block);
    el.dataset.togeReplaced = 'true';
    replacementCount++;
    // 팝업으로 교체 횟수 전송
    chrome.runtime.sendMessage({ type: 'updateCount', count: replacementCount });
}

function observeMutations() {
    const observer = new MutationObserver(mutations => {
        for (const m of mutations) {
            for (const node of Array.from(m.addedNodes)) {
                if (!(node instanceof HTMLElement)) continue;
                node
                    .querySelectorAll('span.b_tranthis')
                    .forEach(el => replaceAndCount(el as HTMLElement));
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // 초기 로드 시 한 번 처리
    document
        .querySelectorAll('span.b_tranthis')
        .forEach(el => replaceAndCount(el as HTMLElement));
}

if (
    window.location.hostname.includes('bing.com')
    && window.location.pathname === '/search'
) {
    window.addEventListener('load', observeMutations);
}
