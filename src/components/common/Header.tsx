import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="w-full flex item-center justify-between px-5 md:px-10 py-3 md:py-5">
        <h1 className="w-10 md:w-16">
          <Link href="/">
            <Image
              src={"/images/common/logo.png"}
              width="512"
              height="226"
              alt="Shiho's Portfolio"
            />
          </Link>
        </h1>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/profile"
                className="font-bold text-lg transition-all duration-300 hover:opacity-60"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="font-bold text-lg transition-all duration-300 hover:opacity-60"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/article"
                className="font-bold text-lg transition-all duration-300 hover:opacity-60"
              >
                Qiita
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <MobileMenu />
    </header>
  );
};

export default Header;
