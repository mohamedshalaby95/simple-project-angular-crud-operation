



export interface User {
  id: number;
  name: string;
  email: string;
  phone:number;
  address: Address;

}
export interface Address {
  street: string;
  suite: string;
  city: string;

}
