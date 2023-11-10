import {Link} from 'react-router-dom'
function Header() {
    const linkStyle = {
        margin: '20px',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold'
      };
    return (
      <div style={{padding:'20px', background: 'rgb(33, 33, 83)'}}>
        <img
		style={{ width: "154px", height: "20px"}}
		src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		alt="로고"/>

    <Link to="/movies" style={linkStyle}>영화</Link>
    <Link to="/tv" style={linkStyle}>TV 프로그램</Link>
    <Link to="/celebrity" style={linkStyle}>인물</Link>
      </div>
    )
  }
  
  export default Header