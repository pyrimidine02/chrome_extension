// src/App.tsx
import React from 'react'
import Popup from './popup/Popup'
import Options from './options/Options'

// 공통 레이아웃
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
        <header style={{ marginBottom: 16, textAlign: 'center' }}>
            <h1>My Extension</h1>
        </header>
        <main>{children}</main>
    </div>
)

const App: React.FC = () => {
    const title = document.title.trim()
    let Page: React.ReactNode

    if (title === 'Popup') {
        Page = <Popup />
    } else if (title === 'Options') {
        Page = <Options />
    } else {
        Page = <div>알 수 없는 페이지: {title}</div>
    }

    return <Layout>{Page}</Layout>
}

export default App
