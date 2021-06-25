import { Movie } from "../Models/MovieModel";


export interface IDataApi {
    getAllMovies(): Promise<Movie[]>;
}