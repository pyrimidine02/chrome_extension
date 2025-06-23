// src/popup/Popup.tsx
import React, { useState, useEffect } from 'react'
import browser from 'webextension-polyfill'

const Popup: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        browser.storage.sync.get('count').then(res => {
            const countValue = (res.count as number) ?? 0
            setCount(countValue)
        })
    }, [])

    const increment = () => {
        const newCount = count + 1
        setCount(newCount)
        browser.storage.sync.set({ count: newCount })
    }

    return (
        <div>
            <h1>Popup</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Popup
