import { useState, useEffect } from 'react';

// Hook that returns scroll attributes from event listener attached to a react ref
const useScroll = (ref) => {
  const [scroll, setScroll] = useState({ scrollTop: -1, scrollBottom: -1, scrollHeight: -1, prevScroll: null });

  const handleScroll = (event) => {
    const { scrollHeight, scrollTop } = event.target;
    const difference = scrollHeight - scrollTop;
    const scrollBottom = difference - window.innerHeight;
    setScroll((prevScroll) => {
      return { scrollTop, scrollHeight, scrollBottom, prevScroll }
    });
  }

  useEffect(() => {
    const node = ref?.current;
    node.addEventListener('scroll', handleScroll);
    return () => node.removeEventListener('scroll', handleScroll);
  }, [ref])

  return scroll;
}

export default useScroll;