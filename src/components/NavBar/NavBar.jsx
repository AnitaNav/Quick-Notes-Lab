import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './style.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/new">Add New Note</Link>
      <div>
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}