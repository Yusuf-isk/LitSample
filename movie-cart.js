import {html, css, LitElement } from "lit";

class MovieCart extends LitElement {
    static get styles(){
        return css`div
        .card{   width: 100%;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                 transition: 0.3s;
                 border-radius: 5px;
                
            }
        .card:hover{box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);}
        .container{padding: 2px 16px;}
        
        img {border-radius: 5px 5px 0 0;}`;
    }

    static get properties() {
        return {
            original_language: String,
            title: String,
            releasedate: String,
            poster_path: String,
            vote_average: Number
        };
    }
    constructor() {
        super();
        this.original_language = "";
        this.title = "";
        this.releasedate = "";
        this.poster_path = "";
        this.vote_average = 0.0;
    }
    render() {
        return html`
        <div class="card">
            <img src=${this.poster_path} alt="Avatar" style="width:100%" />
            <div class="container">
            <h4><b>${this.title}</b></h4>
            <p>Average Vote: ${this.vote_average}</p>
            </div>
        </div>
        `;
    }


}
customElements.define('movie-cart',MovieCart);