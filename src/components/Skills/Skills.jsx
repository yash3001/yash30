import "./skills.scss";
import Item from "./Item";

export default function Skills({ menuOpen, setMenuOpen, dark }) {
  function check() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  return (
    <div
      className={"skills " + (dark && " skills-dark-mode ")}
      id="skills"
      onClick={check}
    >
      <div className="skills-header">
        <h1>My skills</h1>
      </div>
      <div className="skills-container">
        <Item
          name="Competitive Programming"
          image_link="./assets/competitive_programming_logo.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
        <Item
          name="C++/C"
          image_link="./assets/c++_logo.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
        <Item
          name="Python"
          image_link="./assets/python_logo.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
        <Item
          name="React Js"
          image_link="./assets/react_logo.svg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
        <Item
          name="Machine Learning"
          image_link="./assets/machine_learning_logo.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
        <Item
          name="Linux"
          image_link="./assets/linux_logo.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
        <Item
          name="JavaScript"
          image_link="./assets/javascript_logo.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
        <Item
          name="HTML/CSS"
          image_link="./assets/html_logo.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
        <Item
          name="Git"
          image_link="./assets/git_logo.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi corporis ab porro. Dignissimos, autem velit. Praesentium quas exercitationem commodi error voluptatem eveniet non, voluptas cum fugiat necessitatibus laudantium fuga!"
        />
      </div>
    </div>
  );
}
