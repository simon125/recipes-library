import { FC, useEffect, useState } from "react";

export const ScrollUpButton: FC = () => {
  const [showBtn, setShowBtn] = useState(false);

  const handleScrollChange = () => {
    if (window.scrollY * 1 > 50) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("scroll", handleScrollChange);
    return () =>
      window.document.removeEventListener("scroll", handleScrollChange);
  }, []);

  return (
    <button
      style={{
        position: "fixed",
        bottom: "5vh",
        right: "3vw",
        width: "fit-content",
        opacity: showBtn ? 1 : 0,
        transition: "opacity 0.4s",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ScrollUpButton
    </button>
  );
};
