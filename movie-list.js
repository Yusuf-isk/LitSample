import {html,css,LitElement} from 'lit';
import './movie-cart';

class MovieList extends LitElement {

    static get styles() {
        return css`div
        .grid-container{display: grid;
            justify-content: space-evenly;
            grid-template-columns: 200px 200px 200px;
            gap: 10px;
            padding: 10px;}
        `
    }

    static get properties(){
        return {
           _movies: {type: Array},
          
        };
    }

    connectedCallback(){
        super.connectedCallback();
        if (!this._movies) {
            this.fetchPopularMovies();
             
        }
        
    }
    disconnectedCallback(){
        console.log("Dİsconnect");
        super.disconnectedCallback();

    }
    firstUpdated() {
        console.log('brewery-app firstUpdated');
        super.firstUpdated();
      }
    constructor(){
        super();
       
    }

 
    render(){
      
       return html`
        <div class = "container">
        <div class="grid-container"> 
        ${this._movies?.map(results => html`
          <div>
                    <movie-cart
                    .original_language = ${results.original_language}
                    .title = ${results.title}
                    .releasedate = ${results.releasedate}
                    .poster_path = ${"https://image.tmdb.org/t/p/w500"+results.poster_path}
                    .vote_average = ${results.vote_average}>
            </movie-cart>
            </div>
           
        ` ,)
        }
        </div>
        </div>
        `;


    }
    async fetchPopularMovies() {
        console.log("movies app fetching popular movies");
         await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9c1d8470673e7233c7592da1a8558351')
        .then(response => response.json()).then(movie => {this._movies = movie.results});
        
        // const jsonResponse = await response.json();
        // this._movies = jsonResponse;
        console.log('this._movies', this._movies)
        
    }

}
customElements.define('movie-list',MovieList);