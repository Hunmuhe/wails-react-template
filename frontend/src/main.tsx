import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {
    BrowserRouter,
} from 'react-router-dom'

const app = createRoot(document.getElementById('root')!)

app.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)