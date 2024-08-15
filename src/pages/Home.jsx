import { useState } from 'react';
import Typewriter from '../components/Typewriter';
// import Typewriter from '../components/Typewriter';

export default function Home() {

    return (
    <div className="has-text-centered customFont">
        <Typewriter 
          words={['Hello, my name is Mitra.', 'I am a passionate full-stack developer.', 'Welcome to my website.']}
          loop={1}
          typeSpeed={100}
          cursor={true}
          cursorStyle= "|"
          cursorBlinking={true}
        />
    </div>

    )
} 