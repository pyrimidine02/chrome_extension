// src/popup/index.tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import Popup from './Popup'

const container = document.getElementById('root')!
createRoot(container).render(<Popup />)
