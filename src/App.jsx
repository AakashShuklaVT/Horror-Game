import Experience from './components/Experience'
import { audioManager } from './utils/AudioManager'

// Preload the audio files
audioManager.load('footsteps', '/audios/footstep.mp3', { loop: true, volume: 0.5 })
audioManager.load('creak', '/audios/wood-creak.webm', { loop: false, volume: 1.0 })
audioManager.load('spooky', '/audios/spooky.webm', { loop: false, volume: 1.0 })

export default function App() {
    return (
        <>
            <Experience />
        </>
    )
}
