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

const hey = {
  Box,
  FrameName,
};
