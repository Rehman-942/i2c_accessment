import './Navbar.css';

function Navbar() {
    const headings = ['About us', 'Registration', 'Careers']
    
  return (
    <div className="navbar-container">
      <div className='logo'>
        <img src='images/logo.png'></img>
      </div>
      <div className='pages'>
        <div className='headings'>
        {headings.map(heading=>{
            return <p>{heading}</p>
        })}
        </div>
        <button className='contact-us'>Contact us</button>
      </div>
    </div>
  );
}

export default Navbar;
