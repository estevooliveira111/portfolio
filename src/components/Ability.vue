<template>

    <section class="py-10 bg-[#f1f5f9] my-4 container mx-auto sm:px-6 lg:px-8" :id="anchor">
    
        <h1 class="mt-3 text-4xl md:text-6xl font-bold text-left text-black flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
            Competências
        </h1>

        <h1 class="mt-10 text-3xl md:text-3xl font-bold text-left text-black"> > Back-end</h1>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">

            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />

        </div>

        <h1 class="mt-3 text-3xl md:text-3xl font-bold text-left text-black"> > Front-end</h1>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">

            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />   
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />       
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />

        </div>

        <h1 class="mt-3 text-3xl md:text-3xl font-bold text-left text-black"> > Banco de Dados</h1>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">

            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />

        </div>

        <h1 class="mt-3 text-3xl md:text-3xl font-bold text-left text-black"> > Ferramentas</h1>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
            <img class="border-2 border-sky-600 p-2 md:p-5 bg-white rounded hover:bg-sky-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" />

        </div>

    </section>

</template>


<script>

export default {
    props: ['anchor']
}

</script>