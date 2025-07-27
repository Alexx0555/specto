import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Experience } from './components/Experience';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Specs from './components/Specs';
import InTheBox from './components/InTheBox';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={8} damping={0.1} distance={1}>
            <Experience />
            <Scroll html style={{ width: '100%' }}>
              <div className="scroll-content">
                <Hero />
                <Features />
                <Specs />
                <InTheBox />
                <Testimonials />
                <FAQ />
                <Footer />
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;



