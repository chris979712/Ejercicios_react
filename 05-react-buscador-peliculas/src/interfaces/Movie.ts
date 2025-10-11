export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface MoviesResponse {
    Search?: Movie[];
    Response: string;
    Error: string;
}