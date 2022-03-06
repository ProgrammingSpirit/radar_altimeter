import needle from '../assets/radaltneedle.png';

function Needle(props) {
  let rotDeg;
  let style;
  let rotDegback;
  if (props.altVal <= 500) {
    rotDeg = (0.36 * props.altVal);
  }
  else if (props.altVal <= 1500) {
    rotDeg = (0.09 * (props.altVal - 500)) + 180;
  }
  rotDeg = rotDeg.toString();

  if (props.powVal) {
    style = {
      transform: "rotate(" + rotDeg + "deg)"
    };
    rotDegback = rotDeg;
  }
  else {
    style = {
      transform: "rotate(" + rotDegback + "deg)"
    };
  }

  return (
    <img src={needle} class="scaleobjects" style={style} alt="needle" />
  );

}

export default Needle;