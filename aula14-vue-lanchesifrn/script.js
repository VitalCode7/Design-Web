const {createApp, ref} = Vue;
        // Criação do objeto vue e chamada dos metodos
        const lanches = ["pão com queijo", "tapioca", "Cuscuz", "bolo", "bolacha"]
        const app = createApp({
            //crio uma nova aplicação de vue
            setup(){
                //onde se declara os dados e funções
                return {
                    mensagem: ref("Olá, Mundo!!"),
                    lanches
                    //variável reativa do vue
                }
            }
        })
        app.component('app-header', AppHeader);
        app.component('app-footer', AppFooter);

        app.mount("#app");
        //aqui a marcação é incluida na marcação que tem o id "app"