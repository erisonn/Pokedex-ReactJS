import { useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = (next, callback) => {
  const [isBottom, setisBottom] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    if (!isBottom) return;
    if(next) {
        callback()
    };
  }, [isBottom, callback, next])

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isBottom) return;
    setisBottom(true)
  }, [isBottom])

  return [isBottom, setisBottom]
}

export default useInfiniteScroll;