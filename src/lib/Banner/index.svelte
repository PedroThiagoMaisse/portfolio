<main>
    <div class="bg">
        Be aware that this is under construction! <br>
        Any Bug or improvement can be direct to <a href="mailto:pedrothiagojosedasilva@gmail.com">pedrothiagojosedasilva@gmail.com</a>
    </div>


	{#each array as element, i (element)}
        <div class=hiddenDiv bind:this={element.elementText}>
          <h1>{element.title}</h1>
          <p>{element.text}</p>
        </div>

        <button 
            aria-label="toggle {element.text}"
            bind:this={element.element}
            class="card {'c' + i}" 
            on:click={() => expand(i)}
            style="
            background-color: {element.color};
            right: {i*200}px;"
        >
            <spam class=contra> {element.title} </spam>
        </button>
	{/each}




</main>

<script>
    const array = [
        {color: '#65706F', text: 'Com conhecimento sobre Diversos frameworks, o  meu trabalho sempre foi bem dividido entre diversas línguas e stacks, como:', title: 'Desenvolvimento Web'},
        {color: '#697065', text: 'De tempos em tempos vem a necessidade ou vontade de criar uma ferramenta para auxiliar meu dia a dia ou facilitar algum fluxo, como:', title: 'CLI e Ferramentas'},
        {color: '#879694', text: 'Com o intuito de ajudar sistemas públicos e ampliar meu conhecimento, tenho tido contribuições há alguns projetos OpenSource, como:', title: 'Contribuições Open Source'}
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
</script>


<style>
    .showText{
        animation-name: showTxt !important;
    }

    @keyframes showTxt {
    0%   {z-index: 4;}
    50%  {opacity: 0;z-index: 4;}
    100%  {opacity: 1;z-index: 4;}
    }

    .hideText{
        animation-name: hideTxt;
    }

    @keyframes hideTxt {
    0%   {opacity: 1;z-index: 4;}
    50%  {opacity: 0;z-index: 4;}
    100%  {opacity: 0;z-index: -10;}
    }

    main .hiddenDiv{
        opacity: 0;
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        z-index: -10;
        top: 52px;
        position: absolute;
        width: calc(100vw - 400px);
        font-size: 16px;
        font-family: 'Segoe UI';
        padding-left: 10vw;
        text-align: left;
    }

    @keyframes example {
    0%   {height: 160px; width: 160px; z-index: 2;}
    50%  {right: calc(50% - 160px); bottom: calc(50% - 160px); height: 160px; width: 160px; color: rgba(255,255,255,0.5)}
    100%  {right: -16px; bottom: 0%; width: 100%; height: 100%; border-radius: 0px; z-index: 2;  color: rgba(255,255,255,0)}
    }

    @keyframes example2 {
    0%  {right: -16px; bottom: 0%; width: 100%; height: 100%; border-radius: 0px; z-index: 2;color: rgba(255,255,255,0)}
    50%  {right: calc(50% - 160px); bottom: calc(50% - 160px); height: 160px; width: 160px; z-index: 2;color: rgba(255,255,255,0.5)}
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