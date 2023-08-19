<main>
    <h1> (Quase) Todos os meus projetos </h1>

    <div class="projectList show">
        {#each projects as item, index (index)}
            <button 
            class="hidden" 
            style="
                transition-delay: {index * 200}ms;
                background-image: linear-gradient( rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url('{item.img}')
            " 
            bind:this={item.element} 
            aria-label="get more details from: {item.name}"
            on:click={() => window.open(item.link, "_blank")}
            >
                <p class="mainText">
                    {item.text}
                </p>
                <div class="tags">
                    <Tag tagArray="{item.tags}"></Tag>
                </div>
                <p class="projectName">
                    {item.name}
                </p>
            </button>
        {/each}
    </div>
</main>

<script>
    import Tag from '../../globals/tag.svelte';

    const projects = [
        {
            name: 'Esse portfólio', 
            tags: ['Svelte', 'JS', 'GitPages', 'Go', 'MongoDB'], 
            img: '', 
            text: 'Página construída com foco na usabilidade e rapidez',
            link: 'https://github.com/PedroThiagoMaisse/newPortfolio'
        },
        {
            name: 'CommitMapping', 
            tags: ['Node', 'JS', 'NPX'], 
            img: '', 
            text: 'CLI para encontrar projetos dentro do disco e commitar eles para um projeto pública do gitHub',
            link: 'https://github.com/PedroThiagoMaisse/newPortfolio'
        },
    ]

	import { onMount } from 'svelte';

    onMount(() =>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                    entry.target.classList.remove('hidden')
                } else{
                    entry.target.classList.remove('show')
                    entry.target.classList.add('hidden')


                }

            })

        })

        projects.forEach(element => {
            observer.observe(element.element)
        });
    })
</script>


<style>
    .mainText{
        font-size: 16px;
        position: relative;
        bottom: 42px;
        text-align: center;
        /* align-items:baseline; */
    }
    .projectName{
        position: absolute;
        bottom: 8px;
        font-size: 24px;
        font-weight: 600;
        color: #FFF;
    }
    .tags{
        display: flex;
        position: absolute;
        bottom: 64px;
        max-width: 100%;
        flex-wrap: wrap;
    }

    .projectList button{
        opacity: 1;
        transition: 1s;
        transition-timing-function: ease-in-out;
        position: relative;
        height: 240px;
        width: 240px;
        border-radius: 16px;
        background-size: cover;
    }



    .projectList{
        margin-top: 52px;
        justify-content: space-evenly;
        display: flex;
        margin-bottom: 52px;
    }

    main{
        margin-top: -52px;
        width: 100%;
        height: 560px;
    }

    .hidden{
        opacity: 0 !important;
        filter: blur(5px);
        transform: translateX(-100%);
    }

    .show{
        opacity: 1;
        filter: blur(0);
        transform: translateX(0);
    }

    .contact{
        border-style: solid;
        border-width: 2px;
        border-color: rgba(255, 255, 255, 0.3);
    }
</style>