import logo from "./logo.png"
import ik from "./ik.png"
function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar">
        
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        
      </div>

      <div className="reg">
        
        <button>Sign in</button>
        <button>Sign up</button>
        <img className="ik" src={ik}/>
        
      </div>
    </header>
  );
}

export default Header;