<main>
    <div class="bg">
    </div>


	{#each array as element, i (element)}
        <p style="opacity:{openCardId === (i) ? '1': '0'}">
          {element.text}  
        </p>

        <button 
            class="card {openCardId === i ? 'no' : ''} {'c' + i}" 
            on:click={() => expand(i)}
            style="
            background-color: {element.color};
            right: {i*200}px;"
        >
        </button>
	{/each}




</main>

<script>
    const array = [
        {color: 'rgba(0, 255, 0, 0.8)', text: 'one'},
        {color: 'rgba(0, 0, 255, 0.8)', text: 'two'},
        {color: 'rgba(255, 0, 0, 0.8)', text: 'three'}
    ]

    let openCardId = -1

    function expand(item) {
        openCardId = openCardId === item ? -1 : item
    }
</script>


<style>
    main p{
        z-index: 3;
        transition: 1s;
        bottom: 52px;
        position: absolute;
        width: calc(100vw - 400px);
        font-size: 42px;
        font-family: 'Segoe UI';
    }

    @keyframes example {
    0%   {height: 160px; width: 160px;}
    50%  {right: calc(50% - 160px); bottom: calc(50% - 160px); height: 160px; width: 160px;}
    100%  {right: -16px; bottom: 0%; width: 100%; height: 100%; border-radius: 0px; z-index: 0; }
    }

    @keyframes example2 {
    0%  {right: -16px; bottom: 0%; width: 100%; height: 100%; border-radius: 0px; }
    50%  {right: calc(50% - 160px); bottom: calc(50% - 160px); height: 160px; width: 160px;}
    100%  {width: 160px;
        height: 160px; z-index: 1;}
    }

    .no{
        animation-name: example !important;
    }

    .card{
        position: absolute;
        bottom: 56px;
        animation-timing-function: ease-in-out;
        animation-name: example2;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        border-radius: 16px;
        margin-right: 16px;
    }

    .bg{ 
        background-image: 
        linear-gradient(
        rgba(0, 0, 0, 0) 60%, 
        rgba(0, 0, 0, 0.9) 100%
        ),
        url(https://i.pinimg.com/originals/8f/ef/aa/8fefaa44f99928585b65d34e05556590.png);
        z-index: -2;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    main{
        position: relative;
        width: 100%;
        height: 560px;
    }

</style>