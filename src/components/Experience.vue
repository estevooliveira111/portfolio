<template>

    <section class="py-10 bg-[#f1f5f9] my-4 container mx-auto sm:px-6 lg:px-8" :id="anchor">

        <h1 class="text-5xl md:text-6xl font-bold text-left text-black flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="m-1"
                viewBox="0 0 16 16">
                <path
                    d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path
                    d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
            </svg>

            <span class="m-1">Experiência</span>
        </h1>


        <div class="mt-8">



            <dl class="divide-y divide-gray-200">
                <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                    <dt class="text-base font-medium text-gray-900 md:col-span-5"><span>Grupo Easy</span> - Programador Web <span class="text-sky-500">2020 - 2022</span> </dt>
                    <dd class="mt-2 md:col-span-7 md:mt-0">
                        <p class="text-base text-gray-500">
                            <strong>Função:</strong> Criação, atualização e implementação de sistemas para empresa em gestão de pessoas. Automações de processos.
                            <br><br>
                            <strong>Local:</strong> Lisboa - Portugal
                        </p>
                    </dd>
                </div>
            </dl>

            <dl class="divide-y divide-gray-200">
                <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                    <dt class="text-base font-medium text-gray-900 md:col-span-5"><span>Nozap Tecnologia</span> - Programador Full Stack <span class="text-sky-500">2022</span> </dt>
                    <dd class="mt-2 md:col-span-7 md:mt-0">

                        <p class="text-base text-gray-500">
                            <strong>Função:</strong> Criação, de ERPs & CRMs. Soluções em IA, Criação de Aplicativos multiplataformas e automações de processos. 
                            <br><br>
                            <strong>Local:</strong> Rio de Janeino - Brasil
                        </p>

                    </dd>
                </div>
            </dl>

            <dl class="divide-y divide-gray-200">
                <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                    <dt class="text-base font-medium text-gray-900 md:col-span-5"><span>Freelancer</span> <span class="text-sky-500">Tempo Integral</span> </dt>
                    <dd class="mt-2 md:col-span-7 md:mt-0">
                        <p class="text-base text-gray-500">
                            <strong>Função: </strong>ERPs, CRMs, Aplicativos, Bots e E-commerce.
                        </p>
                    </dd>
                </div>
            </dl>


        </div>




    </section>

</template>

<script>

export default {
    props: ['anchor']
}

</script>