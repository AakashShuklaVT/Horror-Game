import Experience from './components/Experience'
import { audioManager } from './utils/AudioManager'

// Preload the audio files
audioManager.load('footsteps', '/audios/footstep.mp3', { loop: true, volume: 0.5 })

export default function App() {
    return (
        <>
            <Experience />
        </>
    )
}
