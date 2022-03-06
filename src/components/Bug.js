import bug from '../assets/bug.png';

function Bug(props) {
  let rotDeg;
  if (props.bugVal <= 500) {
    rotDeg = (0.36 * props.bugVal);
  }
  else if (props.bugVal <= 1500) {
    rotDeg = (0.09 * (props.bugVal - 500)) + 180;
  }
  rotDeg = rotDeg.toString();

  let style = {
    transform: "rotate(" + rotDeg + "deg)"
  };

  return (
    <img src={bug} class="scaleobjects" style={style} alt="Bug" />
  );

}

export default Bug;