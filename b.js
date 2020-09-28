var boxControl;

function Box() {
  boxControl = useAnimation();
  return {
    animate: boxControl,
  };
}

function FrameName(props) {
  return {
    onTap: () => {
      boxControl.start({
        scale: 3,
      });
    },
  };
}
