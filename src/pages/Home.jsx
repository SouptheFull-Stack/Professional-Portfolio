import { useState } from 'react';
import Typewriter from '../components/Typewriter';
// import Typewriter from '../components/Typewriter';

export default function Home() {

    return (
    <div className="has-text-centered">
        <Typewriter 
          words={['Hello, my name is Mitra.', 'I am a passionate MERN stack developer.']}
          loop={1}
          typeSpeed={100}
          cursor={true}
          cursorStyle= "'|'"
          cursorBlinking={true}
        />
    </div>
    )
} 