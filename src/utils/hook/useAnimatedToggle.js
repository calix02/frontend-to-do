import { useState } from "react";

export default function useAnimatedToggle(initial = false) {
  const [isVisible, setIsVisible] = useState(initial);
  const [animation, setAnimation] = useState("");

  const toggle = () => {
    if (!isVisible) {
      setIsVisible(true);
      setAnimation("fade-in");
    } else {
      setAnimation("fade-out");
    }
  };

  const handleEnd = () => {
    if (animation === "fade-out") {
      setIsVisible(false);
    }
  };

  return { isVisible, animation, toggle, handleEnd, setAnimation,setIsVisible };
}
