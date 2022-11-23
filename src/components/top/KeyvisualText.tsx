import { useTypewriter, Cursor } from "react-simple-typewriter";

const KeyvisualText = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to",
      "My portfolio site!",
      "ようこそ",
      "私のポートフォリオサイトへ！",
      "欢迎来到我的作品集网站!",
      "Bienvenue sur",
      "mon site de portfolio!",
      "Добро пожаловать",
      "на мой сайт портфолио!",
    ],
    loop: false,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="App">
      <h2 className="w-full max-w-5xl mx-auto text-2xl leading-normal md:leading-snug md:text-5xl px-5 md:px-10 font-bold dark:text-white">
        <span>{text}</span>
        <Cursor cursorStyle="_" />
      </h2>
    </div>
  );
};

export default KeyvisualText;
