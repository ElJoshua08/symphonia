export interface Plan {
  name: string;
  description: string;
  price: Price;
  features: Feature[];
  buy?: string;
}

export interface Price {
  base: number | string;
  units?: string[];
}

export interface Feature {
  included: boolean;
  description: string;
}
