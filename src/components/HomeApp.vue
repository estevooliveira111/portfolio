<template>

    <section class="h-full text-center container sm:px-6 lg:px-8 xl:my-28" :id="anchor">

        <h1 class="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-[#06b6d4] to-sky-900 ">
            Estevão Nascimento
        </h1>

        <h2 class="text-5xl">Programador Web</h2>


        <div class="mt-4 flex justify-center">
            <ul class="md:flex">

                <li @click="copyLink('nascimento.estevo.00@gmail.com')" v-on:click="alert('Email copiado')" class="ml-0 sm:ml-8 p-4 flex justify-center border-2 border-white rounded hover:bg-white hover:text-black active:bg-sky-500 active:text-white">
                    <div class="flex justify-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-2 fill-white hover:fill-sky-500" viewBox="0 0 16 16">
                            <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                        </svg>
                        <span class="my-1">nascimento.estevo.00@gmail.com</span>
                    </div>
                </li>

                <li @click="copyLink('+5521980626968')" v-on:click="alert('Contato copiado')" class="ml-0 sm:ml-8 p-4 flex justify-center border-2 border-white rounded hover:bg-white hover:text-black active:bg-sky-500 active:text-white">
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="m-1 fill-white hover:fill-sky-500" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <span class="m-1 my-2">(21)9 8062-6968</span>
                    </div>
                </li>

                    <li class="ml-0 sm:ml-8 p-4 flex justify-center border-2 border-white rounded hover:bg-white hover:text-black active:bg-sky-500 active:text-white">
                        <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="m-1 fill-white hover:fill-sky-500" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                        </svg>
                        <span class="m-1 my-2">Rio de Janeiro - Tijuca, Brazil</span>
                    </div>
                </li>

            </ul>

        </div>

        <div class="mt-2 flex justify-center">
            <div class="flex justify-center">

                <a class="m-4" target="_blank" href="http://github.com/estevooliveira111/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="fill-blue-500" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>

                <a class="m-4" target="_blank" href="https://www.linkedin.com/in/estev%C3%A3o-nascimento-964416248/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="fill-blue-500" viewBox="0 0 16 16">
                        <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                </a>

            </div>
        </div>

        <div class="mt-2">
            <h3 class="text-2xl">Trabalho Atual:</h3>
            <p class="normal-case">Desenvolvedor Full Stack na Nozap Tecnologia</p>
        </div>

    </section>

    <div v-if="hasModal" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
            <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="p-4">
                <div class="flex items-start">
                    <div class="ml-3 w-0 flex-1 pt-0.5">
                        <p class="text-sm font-medium text-gray-900">{{ message }}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>


</template>

<script>

export default {

    props: ['anchor'],

    data() {
        return {
            message: String,
            hasModal: Boolean
        }
    },

    created() {
        this.hasModal = false
    },

    methods: {

        alert: function(message){
            this.hasModal = true
            this.message = message
            setInterval(() => {
                this.hasModal = false
            }, 2000);
        },

        copyLink: function (text) {
            this.$copyText(text)
        },
        
    },

}

</script>