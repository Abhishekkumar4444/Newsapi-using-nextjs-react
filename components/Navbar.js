import Link from "next/link";
import Head from "next/head";

function Navbar() {
  return (
    <div>
      <Head>
        <title>Navbar</title>
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
