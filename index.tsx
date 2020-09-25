import { Override, Data, useAnimation } from "framer";

var boxControl;
export function Box(): Override {
  boxControl = useAnimation();
  return {
    animate: boxControl,
  };
}

export function FrameName(props): Override {
  return {
    onTap: () => {
      boxControl.start({
        scale: 3,
      });
    },
  };
}
