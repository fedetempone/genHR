import { useState, useEffect } from "react";
import { CaretCircleDoubleUp } from "@phosphor-icons/react";
import ScrollToTop from "./ScrollToTop";

const IconScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <>
            <ScrollToTop />
            <button
                onClick={handleClick}
                style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    outline: "none",
                    position: "fixed",
                    bottom: "10px",
                    right: "10px",
                    zIndex: 50,
                    cursor: "pointer",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: visible ? "auto" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CaretCircleDoubleUp
                    size={40}
                    weight="fill"
                    style={{ fill: "#CCCCCC" }}
                />
            </button>
        </>
    );
};

export default IconScrollToTop;
