import "./advice.css";

export default function Advice({ id, message, changeAdvice, isLocked }) {
  const diceSrc = "../../../public/images/icon-dice.svg";
  const pttrnWeb = "../../../public/images/pattern-divider-desktop.svg";
  const pttrnMobile = "../../../public/images/pattern-divider-mobile.svg";

  return (
    <section className="card">
      <small className="card__number">
        Advice <span>{id}</span>
      </small>
      <h1 className="card__title">{message}</h1>
      <picture>
        <source media="(max-width:500px)" srcSet={pttrnMobile} />
        <img src={pttrnWeb} alt="divider" />
      </picture>
      <button
        className={`card__dice ${isLocked ? "locked" : ""}`}
        type="button"
        onClick={() => changeAdvice()}
      >
        <img src={diceSrc} alt="roll dice!" />
      </button>
    </section>
  );
}
