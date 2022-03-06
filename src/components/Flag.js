import flag from '../assets/radaltflag.png';

function Flag(props) {
  if (props.poweron) {
    return null;
  }

  return (
    <img src={flag} class="scaleobjects" alt="flag" />
  );
}
export default Flag;