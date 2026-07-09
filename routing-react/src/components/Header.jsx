import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>company name</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>home</Link>
          </li>
          <li>
            <Link to={'/about'}>about</Link>
          </li>
          <li>
            <Link to={'/contact'}>contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
