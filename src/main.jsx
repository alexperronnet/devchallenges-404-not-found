import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<StrictMode></StrictMode>)
