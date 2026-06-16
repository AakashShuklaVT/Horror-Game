import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import './App.css'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111' }}>
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Experience />
      </Canvas>
    </div>
  )
}
