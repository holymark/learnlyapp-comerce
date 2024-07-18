export interface Product {
    id: string;
    name: string;
    description: string;
    brand:string,
    price: number;
    imageURL: string;
  }
  
  export interface User {
    id: string;
    email: string;
    token: string;
  }
  
  export interface State {
    products: Product[];
    user: User | null;
  }
  
  export const state: State = {
    products: [],
    user: null
  };
  