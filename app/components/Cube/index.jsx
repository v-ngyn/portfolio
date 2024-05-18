'use client';
import React, { useRef } from "react";
import { Canvas, useFrame} from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import styles from './style.module.scss';
import FakeGlowMaterial from './FakeGlowMaterial';

export default function index() {
    return (
        <div className={styles.main}>
            <Canvas>
                <ambientLight intensity={0.5}/>
                <directionalLight />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={10} fade={true} speed={1} />
                <mesh>
                    <Cube/>
                    <sphereGeometry args={[2]} />
                    <FakeGlowMaterial glowColor="#29C5F6" glowSharpness={0.2} opacity={0.7} />
                </mesh>
            </Canvas>
        </div>
    )
}

function Cube() {
    const mesh = useRef(null)

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.25;
        mesh.current.rotation.y += delta * 0.25;
        mesh.current.rotation.z += delta * 0.25;
    })

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={"#29C5F6"}/>
        </mesh>
    )
}