// src/background.ts
import browser from 'webextension-polyfill'

// 설치 시 기본 설정
browser.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed')
    browser.storage.sync.set({ count: 0, themeColor: '#ff0000' })
})

// background.ts
chrome.runtime.onMessage.addListener((msg, _sender, _resp) => {
    if (msg.type === 'incrementCount') {
        chrome.storage.local.get({ count: 0 }, data => {
            const next = (data.count as number) + 1;
            chrome.storage.local.set({ count: next });
        });
    }
});



