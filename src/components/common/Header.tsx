import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="w-full flex item-center justify-between px-10 py-5">
        <h1 className="w-16">
          <Link href="/">
            <Image
              src={"/images/common/logo.png"}
              width="512"
              height="226"
              alt="Shiho's Portfolio"
            />
          </Link>
        </h1>
        <nav className="flex items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/profile" className="font-bold">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/works" className="font-bold">
                Works
              </Link>
            </li>
            <li>
              <Link href="/article" className="font-bold">
                Qiita
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
