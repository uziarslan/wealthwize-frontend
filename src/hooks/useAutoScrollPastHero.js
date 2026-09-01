import { useLayoutEffect, useRef } from "react";

export const useAutoScrollPastHero = () => {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (window.location.hash) return;

    contentRef.current?.scrollIntoView?.({
      behavior: "auto",
      block: "start",
    });
  }, []);

  return contentRef;
};
