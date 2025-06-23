// src/options/Options.tsx
import React, { useState, useEffect } from 'react'
import browser from 'webextension-polyfill'

const Options: React.FC = () => {
    const [theme, setTheme] = useState<string>('#ff0000')

    useEffect(() => {
        browser.storage.sync.get('themeColor').then(res => {
            const themeColor = (res.themeColor as string) ?? '#ff0000'
            setTheme(themeColor)
        })
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value
        setTheme(newColor)
        browser.storage.sync.set({ themeColor: newColor })
    }

    return (
        <div>
            <h1>Options</h1>
            <label>
                Theme Color:{' '}
                <input type="color" value={theme} onChange={handleChange} />
            </label>
        </div>
    )
}

export default Options
