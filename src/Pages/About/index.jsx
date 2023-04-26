import aboutPageImg from "../../assets/about-img-page.jpg";
import AboutDatas from "../../datas/About";
import Dropdown from "../../Components/Dropdown";

function Contact() {
  return (
    <div className="about-page-container">
      <img src={aboutPageImg} alt="ceci décris une montagne" />
      <div className="dropdown-container">
        {AboutDatas.map((element, index) => (
          <Dropdown
            key={`${element.title}-${index}`}
            title={element.title}
            text={element.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
