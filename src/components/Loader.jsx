import { Html, useProgress } from "@react-three/drei";

export const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div style={{
        width: 150,
        height: 10,
        backgroundColor: '#333',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(to right, #ff5f6d, #ffc371)'
        }} />
      </div>
      <p
        style={{
          fontSize: 14,
          fontWeight: 800,
          color: "#f1f1f1",
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}
