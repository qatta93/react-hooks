
import useHover from "react-use-hover";

const HoverExample = () => {
  const [isHovering, hoverProps] = useHover();
  return (
    <>
      <span {...hoverProps} aria-describedby="overlay">
        Hover me
      </span>
      {isHovering ? <div> Hey, you hover me! </div> : null}
    </>
  );
};

export default HoverExample