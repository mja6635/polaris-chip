import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "";
    this.buttonTitle = "";
    this.link = "#";
    this.image = null;
    this.line = ""; 
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        background-color: white;
        margin: 24px;
        max-width: 350px;
        border-radius: 12px;
        border: solid black 8px;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      div {
        text-decoration-style:none;
        padding: 16px;
        width: auto;
      }

      a {
        border-radius: 8px;
        font-size: 16px;
        border-style: none;
        background-color: var(--my-card-change-bg, #be2528);
        color: white;
        padding: 8px;
        font-weight: bold;
        text-decoration: none;
      }

      a:hover {
        background-color: var(--my-card-change-hover, #f0e68c);
        color: white;
      }

      img {
        height: 250px;
        max-width: 390px;
        width: 100%;
        margin: auto;
      }

      details {
        padding-bottom: 16px;
        font-style: italic;
      }

      .card {
        width: 350px;
        border: 1px solid;
        border-radius: 8px;
        margin: 20px;
        padding: 20px;
      }

      .fancy {
        background-color: gold;
        border: 5px solid;
        margin: 65px;
        padding: 15px;
      }
    `;
  }

  render() {
    return html`
      <div>
        <img src="${this.image}" />
        <h3>${this.title}</h3>
        <p>${this.line}</p> 
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Click this</summary>
          <div>
            <slot></slot>
          </div>
        </details>
        <a href="${this.link}" target="_blank">${this.buttonTitle}</a>
      </div>
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    this.fancy = e.newState === "open";
  }

  static get properties() {
    return {
      title: { type: String },
      buttonTitle: { type: String },
      link: { type: String },
      image: { type: String },
      line: { type: String }, 
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
