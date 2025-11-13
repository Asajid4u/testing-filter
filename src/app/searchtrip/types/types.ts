
// export type Trip = {
//   id: string;
//   name: string;
//   age?: number;           
//   location?: string;
//   from?: string;
//   to?: string;
//   price?: string | number;         
//   rating?: number;
//   duration?: string | number;     
//   tags?: string[];
//   match?: number;
//   cover?: string;
// };

export type Trip = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  from: string;
  to: string;
  travelersNeeded: number;
  price: string;
  date: string;
  spotsLeft: number;
  host: {
    name: string;
    age: number;
    verified: boolean;
    location: string;
    rating: number;
    match: number;
    safeScore: number;
    category: string;
  };
  image: string;
};


export type Leader = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  from: string;
  to: string;
  travelersNeeded: number;
  price: string;
  date: string;
  spotsLeft: number;
  host: {
    name: string;
    age: number;
    verified: boolean;
    location: string;
    rating: number;
    match: number;
    safeScore: number;
    category: string;
  };
  image: string;
};

export type Agency = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  from: string;
  to: string;
  travelersNeeded: number;
  price: string;
  date: string;
  spotsLeft: number;
  host: {
    name: string;
    age: number;
    verified: boolean;
    location: string;
    rating: number;
    match: number;
    safeScore: number;
    category: string;
  };
  image: string;
};

// export type Leader = {
//   id: string;
//   name: string;
//   age?: number;
//   // maxAge?:number;
//   location?: string;
//   from?: string;
//   to?: string;
//   price?: string | number;
//   tags?: string[];
//   match?: number;
//   days?: string | number;
//   avatar?: string;
//   cover?: string;
//   rating: number;
  
// };



// export type Agency = {
//   id: string;
//   name: string;
//   // fields commonly used in your data (make optional if absent)
//   description?: string;
//   rating?: number;
//   trust?: string;
//   verified?: boolean;
//   tripsCount?: number;
//   travelersCount?: number;
//   years?: number;
//   tags?: string[];
//   avatar?: string;
//   cover?: string;
  
//   [key: string]: unknown;
// };

