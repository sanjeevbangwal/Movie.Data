
export class Movie {
    constructor(
        public Language: string,
        public Location: string,
        public Plot: string,
        public Poster: string,
        public SoundEffects: {},
        public Stills: [],
        public Title: string,
        public imdbID: string,
        public listingType: string,
        public imdbRating: string,
    ) {}
}