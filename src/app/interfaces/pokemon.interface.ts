export interface fetchAllPokemonResponse{
    count: number;
    next: number;
    previous: number;
    results: smallPokemon[];
}

export interface smallPokemon {
    name: string;
    url: string;
}

export interface Pokemon {
    id: string;
    name: string;
    pic: string;
}