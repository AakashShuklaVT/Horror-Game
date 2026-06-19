import { useState, useEffect } from 'react';
import { audioManager } from '../utils/AudioManager';

export function useScareEffects() {
    const [shakeIntensity, setShakeIntensity] = useState(0)
    const [isFlickering, setIsFlickering] = useState(false)
    const [showDoll, setShowDoll] = useState(false)

    useEffect(() => {
        const handleShake = (e) => {
            setShakeIntensity(e.detail.intensity)
            setTimeout(() => {
                setShakeIntensity(0)
            }, e.detail.duration)
        }
        window.addEventListener('shake', handleShake)

        const handleFlicker = (e) => {
            setIsFlickering(true)
            setTimeout(() => {
                setIsFlickering(false)
            }, e.detail.duration)
        }
        window.addEventListener('flicker', handleFlicker)

        const handleJumpscare = () => {
            setShowDoll(true)
            audioManager.play('spooky') 
            setTimeout(() => {
                setShowDoll(false)
            }, 600) // Much faster, flash-like jumpscare (600ms)
        }
        window.addEventListener('jumpscare', handleJumpscare)

        return () => {
            window.removeEventListener('shake', handleShake)
            window.removeEventListener('flicker', handleFlicker)
            window.removeEventListener('jumpscare', handleJumpscare)
        }
    }, [])

    return { shakeIntensity, isFlickering, showDoll }
}
