import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      className="flex items-center justify-center w-6 md:w-7 h-6 md:h-7 border border-gray-300 rounded-full mr-10 md:mr-0 md:ml-6"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <>
          {theme === "dark" ? (
            <BsMoonStars size={14} color={"#fff"} />
          ) : (
            <BsSun size={16} />
          )}
        </>
      )}
    </button>
  );
};

export default ChangeThemeButton;
