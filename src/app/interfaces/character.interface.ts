export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    status: string;
    origin: {
        name:string;
        
    }
    location: {
        name:string;
        url:string;
    }
    created: string;
}

