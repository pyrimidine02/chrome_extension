// src/background.ts
import browser from 'webextension-polyfill'

browser.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed')
    browser.storage.sync.set({ count: 0, themeColor: '#ff0000' })
})

browser.runtime.onMessage.addListener((
    message: unknown,
    sender: browser.Runtime.MessageSender,
    sendResponse: (response?: any) => void
) => {
    if (message === 'GET_THEME') {
        browser.storage.sync
            .get('themeColor')
            .then(items => sendResponse((items.themeColor as string) ?? '#ff0000'))
            .catch(() => sendResponse('#ff0000'))
    }
    // 리턴 타입 주석을 제거했기 때문에 TS가 return true; 만으로
    // "이 함수는 항상 true를 반환한다"라고 추론합니다.
    return true
})
