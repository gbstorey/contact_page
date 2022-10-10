import {
  Routes,
  Route,
  Link
} from "react-router-dom"

function Home() {
  return <>
  <h2>Home</h2>
  <nav>
        <Link to="/about">About</Link>
  </nav>
  <nav>
        <Link to="/users">Users</Link>
  </nav>
  </>;
}

function About() {
  return <>
  <h2>About</h2>
    <nav>
        <Link to="/">Home</Link>
    </nav>
  </>;
}

function Users() {
  return <>
  <h2>Users</h2>
    <nav>
        <Link to="/">Home</Link>
    </nav>
  </>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
}

