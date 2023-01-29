import React, {useEffect, useState} from "react";

function App() {

    const [datos, setDatos] = useState();

    const fetchApi = async() => {

    const url = 'https://jsonplaceholder.typicode.com/users'
    const resp = await fetch(url);
    const data  =await resp.json();
    //const users = data.map(users => users.id + ' ' + users.name);
    setDatos(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  
  console.log(datos);
  return ( 
    <>
      <h1>Usuarios</h1>
      <div>
        { !datos ? 'Cargando...' :
          datos.map(users =>{
            return <h4 key={users.id}>{users.id} {users.name}</h4>
          } )
        }
      </div>
    </>
  );
}

export default App;
