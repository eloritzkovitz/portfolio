import { LinkType } from "./link";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  thumbnail: string;
  color?: string;
  links?: LinkType[];
  involvement: string[];
  screenshots: string[];
}