import React, { useEffect, useState } from "react";

function Api() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/apiproyectos/list')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setRepo(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return(
    <div className="card">
      {repo.map(int => {
        return(
          <div className="card-body"key={int.id}>
            <h2 className="card-title">{int.nombre}</h2>
            <img src={int.imagen} alt={int.nombre}/>
            <a href={int.link} target="_blank" rel="noreferrer noopener">GitHub</a>
          </div>
        )
      })}
    </div>
  );
}

export default Api;
