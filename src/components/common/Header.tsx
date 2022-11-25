import Image from "next/image";
import Link from "next/link";
import ChangeThemeButton from "./ChangeThemeButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white dark:bg-baseColor01">
      <div className="w-full flex item-center justify-between px-5 md:px-10 py-2 md:py-3">
        <h1 className="w-12 md:w-20">
          <Link href="/">
            <Image
              src={"/images/common/logo.png"}
              width="391"
              height="303"
              alt="Shiho's Portfolio"
            />
          </Link>
        </h1>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="font-bold text-lg transition-all duration-300 hover:opacity-60 dark:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="font-bold text-lg transition-all duration-300 hover:opacity-60 dark:text-white"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="font-bold text-lg transition-all duration-300 hover:opacity-60 dark:text-white"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/article"
                  className="font-bold text-lg transition-all duration-300 hover:opacity-60 dark:text-white"
                >
                  Qiita
                </Link>
              </li>
            </ul>
          </nav>
          <ChangeThemeButton />
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};

export default Header;
