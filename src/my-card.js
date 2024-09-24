import { LitElement, html, css } from 'lit';

/**
 Now it's your turn. Here's what we need to try and do:
 Get your HTML from your card working in here
 Get your CSS rescoped as needed to work here
*/

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      /* Card container styles */
      .card {
        width: 350px;
        border: 1px solid;
        border-radius: 8px;
        margin: 20px;
        padding: 20px;
      }

      /* Image styles inside the card */
      .card img {
        width: 100%;
        border-radius: 10px;
      }

      /* Heading (title) styles inside the card */
      .card h1 {
        text-align: center;
        font-size: 25px;
        margin: 20px;
      }

      /* Paragraph (description) styles inside the card */
      .card p {
        font-size: 16px;
        color: black;
        margin-bottom: 12px;
      }

      /* Fancy styling for special elements */
      .fancy {
        background-color: gold;
        border: 5px solid;
        margin: 65px;
        padding: 15px;
      }

      /* Button styles for the 'Details' button */
      .awesome-button {
        padding: 8px 25px;
        background-color: navy;
        color: grey;
        border-radius: 10px;
      }

      /* Media query for tablet devices */
      @media screen and (max-width: 800px) and (min-width: 500px) {
        .details-button {
          display: block;
        }
      }

      /* Media query for mobile devices */
      @media screen and (max-width: 500px) {
        .card {
          max-width: 300px;
        }
        .card img {
          width: 100%;
        }
        .card h1 {
          font-size: 20px;
        }
        .card p {
          font-size: 14px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="control-wrapper">
        <button class="duplicate">Clone Card</button>
        <button id="bg-change">Change background</button>
        <button id="change-image">Change image</button>
        <button id="change-title">Change title</button>
        <button id="delete-card">Delete card</button>
      </div>
  
      <div id="cardlist"> 
        <section class="card">
          <img class="card-image" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Cat_with_cute_eyes.jpeg" alt="Card image" />
          <div class="card-info">
            <h1 class="card-title"><i>This is my cat</i></h1>
            <p>Not only is this not my cat but this cat also hates codepen</p>
            <a href="https://hax.psu.edu" class="awesome-button">Details</a>
          </div>
        </section>
      </div>

      <div id="cardlist"> 
        <section class="card">
          <img class="card-image" src="https://deadline.com/wp-content/uploads/2022/08/Lebron-James.jpg?w=1000" alt="Card image" />
          <div class="card-info">
            <h1 class="card-title"><i>My Glorious King</i></h1>
            <p>If he tells me to jump, I say "How High"</p>
            <a href="https://allpoetry.com/poem/17718975-My-glorious-king--by-Lebronjames" class="awesome-button">Please Read</a>
          </div>
        </section>
      </div>

      <div id="cardlist"> 
        <section class="card">
          <img class="card-image" src="https://helios-i.mashable.com/imagery/articles/00crJ2ChE95JN4zloBxW5Sn/hero-image.fill.size_1200x675.v1719433368.png" alt="Card image" />
          <div class="card-info">
            <h1 class="card-title"><i>Is this the greatest moment in history?</i></h1>
            <p>Why does she have a podcast</p>
            <a href="https://www.youtube.com/@TalkTuahPod" class="awesome-button">Listen to it here</a>
          </div>
        </section>
      </div>

      <div id="cardlist"> 
        <section class="card">
          <img class="card-image" src="https://www.nytimes.com/games-assets/v2/assets/wordle/wordle_og_1200x630.png" alt="Card image" />
          <div class="card-info">
            <h1 class="card-title"><i>I play wordle in almost all of my classes</i></h1>
            <p>Only one class tho because it is once a day</p>
            <a href="https://www.nytimes.com/games/wordle/index.html" class="awesome-button">Play it here</a>
          </div>
        </section>
      </div>

      <div id="cardlist"> 
        <section class="card">
          <img class="card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Blank_US_Map%2C_Mainland_with_no_States.svg/2560px-Blank_US_Map%2C_Mainland_with_no_States.svg.png" alt="Card image" />
          <div class="card-info">
            <h1 class="card-title"><i>You have a serious gamer chair if you can get a 100% on this</i></h1>
            <p>Point to all states no boarders</p>
            <a href="https://www.sporcle.com/games/g/states" class="awesome-button">Good luck if you do it!</a>
          </div>
        </section>
      </div>
    `;
  }
  

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
