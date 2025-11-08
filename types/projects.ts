export type Style = 'moderne' | 'classique' | 'bois' | 'mixte';

export type City =
  | 'Ternat'
  | 'Dilbeek'
  | 'Bruxelles'
  | 'Asse'
  | 'Anderlecht'
  | 'Autre';

export type Material = 'bois' | 'laque' | 'inox' | 'pierre' | 'mélaminé';

export type Testimonial = {
  author: string;
  quote: string;
};

export type BeforeAfter = {
  before: string;
  after: string;
};

export type Project = {
  id: string;
  title: string;
  city: City | (string & {});
  style: Style;
  worktop: 'Quartz' | 'Stratifié' | 'Granite' | 'Bois' | 'Céramique';
  appliances: Array<'Bosch' | 'Siemens' | 'AEG' | 'Whirlpool' | 'Autre'>;
  materials: Material[];
  tech_difficulties: string[];
  year: number;
  images: string[];
  tags: string[];
  client_context?: string;
  constraints?: string[];
  solutions?: string[];
  result?: string;
  testimonial?: Testimonial;
  before_after?: BeforeAfter | null;
};
