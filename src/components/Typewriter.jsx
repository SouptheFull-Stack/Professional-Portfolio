import { useTypewriter } from 'react-simple-typewriter';

const Typewriter = ({ words, loop, typeSpeed, cursor, cursorStyle, cursorBlinking }) => {
  const [typeEffect] = useTypewriter({
    words: words,
    loop: loop,
    typeSpeed: typeSpeed,
    cursor: cursor,
    cursorStyle: cursorStyle,
    cursorBlinking: cursorBlinking
  });

  return <h1 className='customFont'>{typeEffect}</h1>;
};

export default Typewriter;
