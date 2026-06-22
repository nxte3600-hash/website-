"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeVehicleShowcase() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.45, 5.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const loader = new THREE.TextureLoader();
    const texture = loader.load("/vehicles/prince-hs.jpg");
    texture.colorSpace = THREE.SRGBColorSpace;

    const vehicle = new THREE.Mesh(
      new THREE.PlaneGeometry(4.2, 2.35, 24, 12),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true })
    );
    vehicle.position.y = -0.15;
    group.add(vehicle);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x38d7ff,
      transparent: true,
      opacity: 0.34,
      side: THREE.DoubleSide
    });
    const ringGeo = new THREE.TorusGeometry(1.75, 0.012, 12, 160);
    const rings = Array.from({ length: 4 }, (_, index) => {
      const ring = new THREE.Mesh(ringGeo, ringMaterial.clone());
      ring.rotation.x = Math.PI / 2;
      ring.rotation.y = index * 0.42;
      ring.scale.setScalar(1 + index * 0.34);
      group.add(ring);
      return ring;
    });

    const particleGeo = new THREE.BufferGeometry();
    const count = 520;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.2 + Math.random() * 2.5;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.3;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.22;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.018,
        transparent: true,
        opacity: 0.6
      })
    );
    scene.add(particles);

    const blueLight = new THREE.PointLight(0x38d7ff, 7, 8);
    blueLight.position.set(-2, 2, 3);
    scene.add(blueLight);
    const greenLight = new THREE.PointLight(0x51f0ac, 4, 8);
    greenLight.position.set(2.5, -1.2, 2);
    scene.add(greenLight);

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const onPointer = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.28;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.18;
    };
    mount.addEventListener("pointermove", onPointer);

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;
      group.rotation.y += (pointerX - group.rotation.y) * 0.035;
      group.rotation.x += (-pointerY - group.rotation.x) * 0.035;
      vehicle.position.y = -0.15 + Math.sin(t * 1.4) * 0.035;
      rings.forEach((ring, index) => {
        ring.rotation.z = t * (0.26 + index * 0.05);
        ring.material.opacity = 0.22 + Math.sin(t * 1.8 + index) * 0.08;
      });
      particles.rotation.y = t * 0.04;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      mount.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      texture.dispose();
      ringGeo.dispose();
      particleGeo.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-[420px] w-full md:h-[620px]" aria-label="3D animated vehicle showcase" />;
}
