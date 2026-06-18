import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KeyboardControls } from '@react-three/drei'

const CONTROLS = {
    forward: 'forward',
    backward: 'backward',
    left: 'left',
    right: 'right',
    jump: 'jump',
    torch: 'torch',
    print: 'print',
}

const keyMappings = [
    { name: CONTROLS.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: CONTROLS.backward, keys: ['ArrowDown', 'KeyS'] },
    { name: CONTROLS.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: CONTROLS.right, keys: ['ArrowRight', 'KeyD'] },
    { name: CONTROLS.jump, keys: ['Space'] },
    { name: CONTROLS.torch, keys: ['KeyT'] },
    { name: CONTROLS.print, keys: ['KeyP'] },
]

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <KeyboardControls map={keyMappings}>
            <App />
        </KeyboardControls>
    </StrictMode>,
)
