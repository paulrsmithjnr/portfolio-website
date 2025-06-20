import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Points as PointsImpl } from "three";

interface StarsProps {
  [key: string]: any;
}

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<PointsImpl>(null!);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
      setTimeout(() => {
        setOpacity(1);
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      className="w-full h-auto absolute inset-0 z-[-1]"
      style={{
        opacity: opacity,
        transition: "opacity 10s ease-in-out"
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
