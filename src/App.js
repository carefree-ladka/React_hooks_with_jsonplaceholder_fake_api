import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetUsers = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    //console.log(data);
    setName(data.name);
    setEmail(data.email);
  };

  useEffect(() => {
    const id = Math.floor(Math.random() * 10) + 1; //1 to 10
    fetUsers(id);
  }, []);
  return (
    <div className="App">
      <h1>Jsonplaceholder fake API</h1>

      <ul
        style={{
          listStyle: "none"
        }}
      >
        <li>{name}</li>
        <li>{email}</li>
      </ul>
    </div>
  );
}
