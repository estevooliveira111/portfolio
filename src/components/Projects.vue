<template>
    
    <section class="container mx-auto sm:px-6 lg:px-8 my-6 lg:my-20" :id="anchor">

        <h1 class="text-5xl md:text-6xl font-bold text-left text-white flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="m-1" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>

            <span class="m-1">Projetos</span>
        </h1>

        <div class="xl:my-14 grid grid-cols-1 md:grid-cols-4 gap-4">

            <div v-for="project in projects" class="rounded bg-white overflow-hidden shadow-lg">
                <img class="w-full h-1/2" :src="project.img">
                
                <div class="px-6 py-4 text-black ">
                    <div class="font-bold mb-2">{{ project.title }}</div>
                    <p class="text-base">{{ project.description }}</p>

                    <span class="overflow-auto text-center">
                        <strong>link para o site: </strong>
                        <a target="_blank" class="text-sky-800" :href="project.link"> {{ project.link }}</a>
                    </span>

                </div>

                <div class="px-6 pt-4 p-8 mb-0 md:mb-8 pb-8">
                    <span v-for="tag in project.tags" class="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag }}</span>
                </div>

            </div>

        </div>

    </section>

</template>


<script>

    import ProjectsApi from '../../api/projects.json'

    export default {
        props: ['anchor'],

        data() {
            return {
                projects: []
            }
        },

        created() {
            this.projects = ProjectsApi
        },

    }

</script>