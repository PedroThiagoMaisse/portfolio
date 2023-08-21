{#each callout as element, i (element)}
    <div class=hiddenDiv bind:this={element.elementText} >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class=bd on:click={() => expand(i)} />
        <h1>{element.title}</h1>
        <p>{element.text}</p>
        <ul>
        {#each element.list as linha, i (linha)}
            <li> 
                <a href="{linha.link}" style="font-size: 15px"> {linha.text}  </a> 
                <Tag tagArray="{linha.tags}"></Tag>
                
            </li>
        {/each}
        </ul>
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

<script>
    export let callout
    import Tag from "../../globals/tag.svelte";

    let openCardId = -1

    let onGoing = false

    async function expand(item) {
        if (onGoing) {return false}
        onGoing = true
        const element = callout[item]
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
        await new Promise(r => setTimeout(r, 1000))
        onGoing = false
    }
</script>


<style>
    .tag{
        text-align: center;
        line-height: 100%;
        padding: 4px 4px 4px 5px;
        font-size: 14px;
        margin-left: 8px;
        border-radius: 4px

    }

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

    .bd{
        position: absolute;
        left: -10vw;
        top: -52px;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0, 0.2);
        z-index: -10
    }

    .hiddenDiv{
        overflow: hidden;
        width: 100%;
        height: 100%;
        opacity: 0;
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        z-index: -10;
        padding-top: 52px;
        position: absolute;
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
</style>