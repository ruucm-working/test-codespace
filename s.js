"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Box = Box;
exports.FrameName = FrameName;
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
