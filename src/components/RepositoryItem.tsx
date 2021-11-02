export function RepositoryItem(props: Repository.Props) {
  const repository = props.repository;
  
  return (
    <li>
      <strong>{repository.name ?? "dWithout name"}</strong>
      <p>{repository.description ?? "Without description"}</p>

      <a href={repository.html_url ?? "#"}>
        Acessar repositório
      </a>
    </li>
  );
};