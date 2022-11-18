import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="w-full flex item-center justify-between px-10 py-6">
        <h1>
          <Link href="/">
            <span>Shiho&#x0027;s Site</span>
          </Link>
        </h1>
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
      </div>
    </header>
  );
};

export default Header;
