import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/ReusableCard";
function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/directors")
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])

  const directorList = directors.map(director => <Card key={director.id} name={director.name} movies={director.movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>

        <h1>Directors Page</h1>
        <article>{directorList} </article>
      </main>
    </>
  );
}

export default Directors;