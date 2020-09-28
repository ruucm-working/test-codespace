var boxControl;
function Box(): Override {
  boxControl = useAnimation();
  return {
    animate: boxControl,
  };
}

function FrameName(props): Override {
  return {
    onTap: () => {
      boxControl.start({
        scale: 3,
      });
    },
  };
}
