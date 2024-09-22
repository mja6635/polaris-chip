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
        background-color: black;
        color: gold;
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
    `;
  }
  

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
