<main>
    <div class="projectList show">
        {#each projects as item, index (index)}
            <button class="hidden" style="transition-delay: {index * 200}ms;" bind:this={item.element}>
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

    <button> Get in Contact </button>
</main>

<script>
    const projects = [
        {name: 'This portfolio', tags: ['svelte', 'TS']},
        {name: 'This portfolio', tags: ['svelte', 'TS']},
        {name: 'This portfolio', tags: ['svelte', 'TS']},
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
        background-image: 
        linear-gradient(
        rgba(0, 0, 0, 0) 60%, 
        rgba(0, 0, 0, 0.9) 100%
        ),
        linear-gradient(
        rgba(250, 250, 250, 1) 0%, 
        rgba(250, 250, 250, 1) 100%
        )
        ;
    }



    .projectList{
        justify-content: space-evenly;
        display: flex;
        margin-bottom: 52px;
    }

    main{
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

</style>