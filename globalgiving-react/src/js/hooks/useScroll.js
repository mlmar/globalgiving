import { useRef, useEffect } from 'react';

// Hook that returns scroll attributes from event listener attached to a react ref
// calls {callback} with argument {scrollRef.current} after every scroll event
// requires {ref} to scrollable element
const useScroll = (callback, ref) => {
  const scrollRef = useRef({ scrollTop: -1, scrollBottom: -1, scrollHeight: -1});

  useEffect(() => {
    const node = ref?.current;

    const handleScroll = (event) => {
      const { scrollHeight, scrollTop } = event.target;
      const difference = scrollHeight - scrollTop;
      const scrollBottom = difference - window.innerHeight;
      scrollRef.current = { scrollTop, scrollHeight, scrollBottom };
      callback(scrollRef.current);
    }

    node.addEventListener('scroll', handleScroll);
    return () => {
      node.removeEventListener('scroll', handleScroll);
    };
  }, [ref, callback]);
}

export default useScroll;