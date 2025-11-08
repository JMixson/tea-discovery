import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (location.startsWith("/tea/")) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

export default ScrollToTop;
