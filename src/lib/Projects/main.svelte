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

<script lang="ts">
    import Tag from '../globals/tag.svelte';

    const projects = [
        {
            name: 'Esse portfólio', 
            tags: ['Svelte', 'JS', 'GitPages'], 
            img: '', 
            text: 'Página construída com foco na usabilidade e rapidez',
            link: 'https://github.com/PedroThiagoMaisse/newPortfolio'
        },
        {
            name: 'Morgan', 
            tags: ['Svelte', 'JS', 'GitPages'], 
            img: '', 
            text: 'Um jeito de unificar minhas informações em apenas um lugar',
            link: 'https://github.com/PedroThiagoMaisse/MOrgan'
        },
        {
            name: 'CommitMapping', 
            tags: ['Node', 'JS', 'NPM/NPX', 'GitHub Actions'], 
            img: '', 
            text: 'Ferramenta para mapear commits de projetos dentro do disco e commitar eles em outro projeto',
            link: 'https://github.com/PedroThiagoMaisse/commitMapping'
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
        max-width: 80%;
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

    @media only screen and (max-width: 790px) {
        h1{
            font-size: 32px;
        }

        .projectList button{
            margin-bottom: 20px;
            padding: 2px;
            width: 180px;
            height: 180px;
        }

        .mainText{
            font-size: 12px;
            padding: 6px;
        }

        .projectName{
            margin: 6px 0px;
            font-size: 18px;
        }

        .projectList{
            width: calc(100vw - 16px);
            flex-wrap: wrap;
        }

        .tags{
            bottom: 36px;
        }
    }

    @media only screen and (max-width: 590px) {
        .projectList button{
            width: 140px;
        }
    }

</style>