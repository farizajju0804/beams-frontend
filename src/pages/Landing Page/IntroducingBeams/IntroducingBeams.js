import "./IntroducingBeams.css";
const IntroducingBeams = () => {
  return (
    <section className="introducing-beams">
      <div className="image-grp">
        <img className="bulb-img-1-icon"
          alt="Bulb"
          src="Assets/images/Bulb-Img.png"
        />
        <img className="brain-img-1-icon"
          alt="Brain"
          src="Assets/images/Brain-Img.png"
        />
      </div>
      <div className="intro-beams-wrapper">
      <div className="introducing">Introducing</div>
      <div className="beams-wrapper">
        Beams
      </div>
      </div>
      
      <div className="beams-content">{`Lorem ipsum dolor sit amet consectetur. Nullam curabitur mi enim risus dolor id. Odio nec dui tempus malesuada cras. Turpis mi sit pretium congue sodales ultricies. Sit tincidunt a id odio aenean. Enim non nisl dolor scelerisque quis ullamcorper massa ut. Sit nulla cras mauris amet turpis. Sodales rutrum elit enim tristique commodo ultricies tincidunt pharetra. Id consequat sed id integer velit. `}</div>
      {/* <img className="book-1-icon" alt="Book" src="Assets/images/Book.png" /> */}
    </section>
  );
};

export default IntroducingBeams;
