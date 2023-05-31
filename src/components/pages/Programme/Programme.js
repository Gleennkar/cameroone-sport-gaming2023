import './Programme.css';

function Programme() {
  return (
    <div className="programme">
      <h2>Comment devenir Gamer Pros ? </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
        Ut enim
      </p>
      <form className="form">
        <label htmlFor="choixJeu">
          Choix du jeu:
          <input type="text" id="choixJeu" />
        </label>
        <label htmlFor="nomPrenom">
          Nom et prénom:
          <input type="text" id="nomPrenom" />
        </label>
        <label htmlFor="email">
          Adresse mail:
          <input type="email" id="email" />
        </label>
        <label htmlFor="nombreJoueurs">
          Nombre de joueurs:
          <input type="number" id="nombreJoueurs" />
        </label>
        <label htmlFor="localisation">
          Localisation:
          <input type="text" id="localisation" />
        </label>
        <button type="submit">Enregistrez vous</button>
      </form>
    </div>
  );
}
export default Programme;
