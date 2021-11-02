declare namespace Repository {
  export interface Item {
    name: string;
    description: string;
    html_url: string;
  };
  export interface Props {
    repository: Repository.Item;
  };
};