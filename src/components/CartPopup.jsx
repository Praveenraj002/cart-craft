/* eslint-disable react/prop-types */
// CartPopup.js
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const CartPopup = ({ closePopup }) => {
  const styles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    onRest: () => {
      // Close the popup after animation completes
      closePopup();
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      closePopup();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [closePopup]);

  return (
    <animated.div
      style={styles}
      className="fixed bottom-0 left-0 right-0 bg-green-500 text-white text-center 
                 py-2 font-semibold z-100"
    >
      Item added to cart!
    </animated.div>
  );
};

export default CartPopup;
