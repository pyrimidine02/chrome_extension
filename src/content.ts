import browser from 'webextension-polyfill'

// 페이지 로드되면 테두리 색 변경
window.addEventListener('load', () => {
    browser.storage.sync.get('themeColor').then(res => {
        document.body.style.border = `4px solid ${res.themeColor || '#ff0000'}`
    })
})

// 제네릭 인자로 응답 타입 선언
browser.runtime
    .sendMessage('GET_THEME')
    .then(res => {
        const { themeColor } = res as { themeColor?: string }
        console.log('Theme from background:', themeColor)
    })

