import { useState } from "react";
import TechStack from "./TechStack";

const About = () => {
  const [showCv, setShowCv] = useState(false);

  return (
    <div id="about" className="lg:px-60 px-5 bg-blue-50">
      <h1 className="text-center m-5 text-green-700">{'<'}About{'/>'}</h1>
      <img
        src="profile-pic.png"
        alt="Portrait profile picture"
        width={300}
        height={300}
        className="object-contain rounded-lg mx-auto my-10 drop-shadow-lg"
      />
      <article className="text-xl">
        <p>
          My name is Zvi Haffner and I am a Junior Software Developer based in
          Manchester.
        </p>
        <br />
        <p>
          My journey into the tech world really kicked off when I joined
          Northcoders, an intensive bootcamp that gave me the skills and
          confidence to start building real-world applications.
        </p>
        <br />
        <p>
          Whether it's crafting a sleek front-end with React or getting my hands
          dirty with back-end work in Node.js and SQL, I’m all about creating
          software that not only works well but feels intuitive to use.
        </p>
        <br />
        <p>
          Before I found my passion in coding, I spent a lot of time studying,
          earning a BSc in Liberal Arts with a top GPA. I’ve also got a
          background in Jewish law, which might sound a bit different from
          coding, but it’s actually where I developed a love for problem-solving
          and deep thinking—skills I now apply every day as a developer.
        </p>
        <br />
        <p>
          If you’re curious about my work or just want to chat about tech, feel
          free to connect with me on LinkedIn or check out my projects on
          GitHub. Let’s connect and maybe even build something cool together!
        </p>
      </article>
      <div className="flex justify-center my-5">
        <button
          onClick={() => setShowCv(!showCv)}
          className="green_button"
        >
          {showCv ? "HIDE " : "SHOW "}CV
        </button>
      </div>
      {showCv ? (
        <div
          style={{ width: "100%", height: "600px" }}
          className="flex justify-center items-center mx-auto mb-5"
        >
          <embed
            src="/zvihaffner-cv.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      ) : null}
      <TechStack/>
    </div>
  );
};

export default About;
