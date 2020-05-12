import { Actor } from './actor.class';
import { Movie } from './movie.class';

export class Credit {
    id: number;
    actor: Actor;
    movie: Movie;
    role: string;
    

    constructor(id: number = 0, actor: Actor, movie: Movie, role: string = "") {
     
    }

}
