// content-naver.ts

// 1) 이 한 줄로 모듈로 인식시킵니다.
export {};

// 2) URL 검사용 정규식
const NAVER_SEARCH_REGEX = /^https:\/\/search\.naver\.com\/search\.naver\?/;

// 3) 상수 정의
const MY_SITE_URL   = 'https://toge.pyrimidines.org';
const MY_SITE_TITLE = '토게 인포';
const MY_SITE_DESC  = '빠르고 정확한 정보 제공';

// 4) 대체 블록 생성 함수
function createReplacementBlock(): HTMLElement {
    const block = document.createElement('div');
    block.style.cssText = `
    padding: 12px;
    margin-bottom: 16px;
    background: #e8f5e9;
    border: 1px solid #66bb6a;
    border-radius: 4px;
  `;
    const title = document.createElement('a');
    title.href = MY_SITE_URL;
    title.textContent = MY_SITE_TITLE;
    title.style.cssText = `
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
    color: #2e7d32;
    text-decoration: none;
  `;
    const desc = document.createElement('p');
    desc.textContent = MY_SITE_DESC;
    desc.style.cssText = `
    margin: 0;
    font-size: 90%;
    color: #4e342e;
  `;
    block.appendChild(title);
    block.appendChild(desc);
    return block;
}

// 5) IIFE로 감싸서 early return 처리
(function() {
    if (!NAVER_SEARCH_REGEX.test(window.location.href)) {
        // 네이버 검색 페이지가 아니면 아무 것도 안 함
        return;
    }

    let replacedCount = 0;

    // main_pack 처리
    const mainPack = document.getElementById('main_pack');
    if (mainPack) {
        const items = Array.from(mainPack.querySelectorAll<HTMLElement>('li.bx'));
        items.forEach(item => {
            const newBlock = createReplacementBlock();
            item.replaceWith(newBlock);
            replacedCount++;
        });
    }

    // sub_pack 처리
    const subPack = document.getElementById('sub_pack');
    if (subPack) {
        subPack.innerHTML = `<div style="padding:12px; font-style:italic;">준비중</div>`;
    }

    // 팝업/백그라운드로 치환 횟수 전송
    chrome.runtime.sendMessage({
        type: 'naverCount',
        count: replacedCount
    });
})();
