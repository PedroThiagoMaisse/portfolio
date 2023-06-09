<main>
    <h1> (Almost) All My Projects </h1>

    <div class="projectList show">
        {#each projects as item, index (index)}
            <button 
            class="hidden" 
            style="
                transition-delay: {index * 200}ms;
                background-image: linear-gradient( rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url('{item.img}')
            " 
            bind:this={item.element} 
            aria-label="get more details from: {item.name}">
                <div class="tags">
                    {#each item.tags as tag (tag)}
                        <p class="tag"> {tag} </p>
                    {/each}
                </div>
                <p class="projectName">
                    {item.name}
                </p>
            </button>
        {/each}
    </div>

    <OpenContact />
</main>

<script>
    import OpenContact from '../Dialog/openContact.svelte';

    const projects = [
        {name: 'This portfolio', tags: ['Svelte', 'JS', 'GitPages'], img: './src/assets/projects/SSPort.png'},
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
        bottom: 52px;
    }

    .tags p{
        font-size: 16px;
        border-radius: 8px;
        margin-right: 16px;
        background-color: brown;
        padding: 6px;
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