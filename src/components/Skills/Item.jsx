export default function Item({ image_link, name, description }) {
  return (
    <div className="skills-box">
      <div className="skills-title">
        <div className="skills-img">
          <img
            src={require(`${image_link}`).default}
            alt={name}
            className="skills-icon"
          />
        </div>
        <h3>{name}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}
