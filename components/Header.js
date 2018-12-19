import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/node/next/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="node/next/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
