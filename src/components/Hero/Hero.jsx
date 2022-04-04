import "./Hero.css";

function Hero() {
  return (
    <div className="bg-hero">
      <div className="bg-text-container">
        <div className="bg-text">
          <h1>25% OFF</h1>
          <h1>ALBUM DISTRIBUTION</h1>
        </div>
        <p className="bg-paragraph">Sale extended to April 4th!</p>
        <div className="bg-promo">
          <div className="bg-standard">
            <p className="bg-sty">STANDARD</p>
            <p className="bg-use">Use code</p>
            <p className="bg-march">Marchdeal22</p>
          </div>
          <div>
            <p className="bg-sty">PRO</p>
            <p className="bg-use"> Use code</p>
            <p className="bg-march">Marchdeal22Pro</p>
          </div>
        </div>
        <div>
          <button className="btn btn-warning bg-button">Save now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
