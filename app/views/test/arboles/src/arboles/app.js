class Arboles extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = document.createElement('template');
        template.innerHTML = `
           <h1> Arboles Works </h1>
        `
        // <button id="login">login</button>
        shadowRoot.appendChild(template.content.cloneNode(true));


    }


    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        this.id = "arboles-app";

    }

    login() {
        login();
    }

}

customElements.define('arboles-app', Arboles);

export { Arboles }
