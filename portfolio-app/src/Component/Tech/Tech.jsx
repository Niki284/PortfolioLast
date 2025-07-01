import React from "react";
import data from "../../data/technologies.json";
import "./Tech.css"
// Import alle icons in één object
import img1 from "../../assets/logo-tech/image 1-1.svg";
import img2 from "../../assets/logo-tech/image 1-2.svg";
import img3 from "../../assets/logo-tech/image 1-3.svg";
import img4 from "../../assets/logo-tech/image 1-4.svg";
import img5 from "../../assets/logo-tech/image 1-5.svg";
import img6 from "../../assets/logo-tech/image 1-6.svg";
import img7 from "../../assets/logo-tech/image 1-7.svg";
import img8 from "../../assets/logo-tech/image 1.svg";

const iconMap = {
  "image 1-1.svg": img1,
  "image 1-2.svg": img2,
  "image 1-3.svg": img3,
  "image 1-4.svg": img4,
  "image 1-5.svg": img5,
  "image 1-6.svg": img6,
  "image 1-7.svg": img7,
  "image 1.svg": img8,
};

const TechSection = ({ title, items }) => (
  <div className="tech-content">
    <h2 className="contact--title">{title}</h2>
    {items.map((item, index) => (
      <div className="tech--info" key={index}>
        <img src={iconMap[item.icon]} alt={item.name} />
        <div className="tech--text">
          <p className="tech--name">{item.name}</p>
          {item.niveau && (
            <div className="tech--bar">
              <div className="tech--fill" style={{ width: item.niveau }}></div>
              <span className="tech--percent">{item.niveau}</span>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default function Tech() {
  return (
    <div className="tech">
      <TechSection title="Frameworks" items={data.frameworks} />
      <TechSection title="Taal" items={data.languages} />
    </div>
  );
}
