import pic1 from '../../../images/image-1.png';
import pic2 from '../../../images/image-16.png';

import './Competitions.css';

function Competitions() {
  return (
    <div className="competition">
      <h2>Les jeux en compétitions</h2>
      <img className="game1" src={pic1} alt="Game 1" />
      <img className="game2" src={pic2} alt="Game 2" />
    </div>
  );
}
export default Competitions;
