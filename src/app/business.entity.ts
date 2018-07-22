export interface Business {
    id: number;
    name: string;
    img: string;
    city: string;
    category: string;
    dateCreation?: Date;
    description: string;
    jobs: string[];
    tecnologies: string[];
    socialNetwork: string[];
    webside: string;
}
