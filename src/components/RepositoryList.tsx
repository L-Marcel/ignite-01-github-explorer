import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

export function RepositoryList() {
  const [repositories, setRespositories] = useState<Repository.Item[]>([]);
  
  useEffect(() => {
    fetch("https://api.github.com/users/L-Marcel/repos")
    .then(res => res.json())
    .then(data => setRespositories(data));
  }, [setRespositories])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map(item => {
            return (
              <RepositoryItem key={item.name} repository={item}/>
            );
          })
        }   
      </ul>
    </section>
  );
};