class Arboles extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = document.createElement('template');
        template.innerHTML = `
        <div id="app">
            <div class="">
                <router-link to="/movies">Angular Movies</router-link>
                <router-link to="/gearshare">Gear Share </router-link>
            </div>

            <div class="top-nav">

            </div>

            <div class="content">            
                <router-view></router-view>
            </div>
            
            <div class="footer">

            </div>            
        </div>
        `
        // <button id="login">login</button>
        shadowRoot.appendChild(template.content.cloneNode(true));
    }


    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        this.id = "arboles-app";
        console.log('made it here!');

        const Foo = { template: '<div>foo</div>' }
        const Bar = { template: '<div>bar</div>' }


        const routes = [
            { path: '/foo', component: Foo },
            { path: '/bar', component: Bar }
        ]

        const router = new VueRouter({
        routes // short for `routes: routes`
        })


        const app = new Vue({
        router,
        computed: {
            username () {
              return this.$route.params.username
            }
          },
          methods: {
            goBack () {
              window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
            }
          }
        }).$mount(this.shadowRoot.querySelector('#app'))    
                            
    }

    login() {
        login();
    }

}

customElements.define('arboles-app', Arboles);

export { Arboles }
