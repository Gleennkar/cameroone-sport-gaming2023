import part5 from '../../images/Fundo.png';
import part4 from '../../images/Mask-group.png';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <img src={part5} alt="Center" />
      <img className="img" src={part4} alt="Top" />
      <h1 className="home-title">Cameroon E-sport Gaming 2023</h1>
      <p className="home-para">
        Tu es Gamer ? tu te send puissant, inscris-toi pour avoir la chance
        représenter le Cameroun à la coupe de monde de e-sports
      </p>
      <div>
        <button className="btn" type="button">Enrégistres-toi</button>
      </div>
    </div>
  );
}
export default Home;
