<main>
    <div class="bg">
        Be aware that this is under construction! <br>
        Any Bug or improvement can be direct to <a href="mailto:pedrothiagojosedasilva@gmail.com">pedrothiagojosedasilva@gmail.com</a>
    </div>


	{#each array as element, i (element)}
        <p bind:this={element.elementText}>
          {element.text}  
        </p>

        <button 
            aria-label="toggle {element.text}"
            bind:this={element.element}
            class="card {'c' + i}" 
            on:click={() => expand(i)}
            style="
            background-color: {element.color};
            right: {i*200}px;"
        >
            {element.text}
        </button>
	{/each}




</main>

<script>
    const array = [
        {color: '#65706F', text: 'Web Development'},
        {color: '#697065', text: 'CLI and Tools'}
    ]

    let openCardId = -1

    function expand(item) {
        const element = array[item]
        if(item === openCardId) {
            element.elementText.classList.remove('showText')
            element.elementText.classList.add('hideText')
            openCardId = -1
            element.element.classList.remove('no')
            element.element.classList.add('yes')
        } else {
            openCardId = item
            element.element.classList.remove('hideText')
            element.elementText.classList.add('showText')
            element.element.classList.add('no')
        }
    }

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
        array.forEach(element => {
            observer.observe(element.element)
        });
    })  

</script>


<style>
    .showText{
        animation-name: showTxt !important;
    }

    @keyframes showTxt {
    0%   {}
    50%  {opacity: 0;}
    100%  {opacity: 1;}
    }

    .hideText{
        animation-name: hideTxt;
    }

    @keyframes hideTxt {
    0%   {opacity: 1;}
    50%  {opacity: 0;}
    100%  {opacity: 0;}
    }

    main p{
        opacity: 0;
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        z-index: 4;
        bottom: 52px;
        position: absolute;
        width: calc(100vw - 400px);
        font-size: 42px;
        font-family: 'Segoe UI';
    }

    @keyframes example {
    0%   {height: 160px; width: 160px; z-index: 2;}
    50%  {right: calc(50% - 160px); bottom: calc(50% - 160px); height: 160px; width: 160px;}
    100%  {right: -16px; bottom: 0%; width: 100%; height: 100%; border-radius: 0px; z-index: 2; }
    }

    @keyframes example2 {
    0%  {right: -16px; bottom: 0%; width: 100%; height: 100%; border-radius: 0px; z-index: 2;}
    50%  {right: calc(50% - 160px); bottom: calc(50% - 160px); height: 160px; width: 160px; z-index: 2;}
    100%  {width: 160px; height: 160px; z-index: 1;}
    }

    .yes{
        animation-name: example2 !important;
    }

    .no{
        animation-name: example !important;
    }

    .card{
        height: 160px;
        width: 160px;
        position: absolute;
        bottom: 56px;
        animation-timing-function: ease-in-out;
        animation-duration: 0.75s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        border-radius: 16px;
        margin-right: 16px;
    }

    .bg{
        text-align: center;
        padding-top: 160px;
        background-image: 
        linear-gradient(
        rgba(0, 0, 0, 0) 60%, 
        rgba(0, 0, 0, 0.9) 100%
        );
        z-index: -2;
        position: absolute;
        width: 100%;
        height: calc(560px - 160px);
    }

    main{
        position: relative;
        width: 100%;
        height: 560px;
    }

</style>