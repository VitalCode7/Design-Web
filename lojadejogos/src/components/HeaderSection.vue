<template>
    <header>
        <h1><router-link to="/">Loja de jogos</router-link> </h1>
        <nav>
            <ol>
                <li><router-link to="/jogos">Jogos</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
            </ol>
        </nav>
    </header>
</template>
<style scoped> 
    ol{
        list-style-type: none;
        text-decoration: none;
    }
</style>