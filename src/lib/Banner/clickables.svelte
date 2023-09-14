{#each callout as element, i (element)}
    <div class=hiddenDiv bind:this={element.elementText}>
        <button class=bd on:click={() => expand(i)}  aria-label="toggle {element.text}"/>
        <h1>{element.title}</h1>
        <p>{element.text}</p>
        <ul>
        {#each element.list as linha, i (linha)}
            <li style="padding-top: 4px; padding-bottom: 4px"> 
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

<script lang="ts">
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
            element.element.classList.remove('animationOpenTrigger')
            element.element.classList.add('animationCloseTrigger')
            
            openCardId = -1
        } else {
            openCardId = item
            element.element.classList.remove('hideText')
            element.elementText.classList.add('showText')
            element.element.classList.remove('animationCloseTrigger')
            element.element.classList.add('animationOpenTrigger')
        }
        await new Promise(r => setTimeout(r, 1000)) // Wait for the animation
        onGoing = false
    }
</script>


<style>
    p, li{
        margin-right: 120px;
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
        padding-right: 10vw;
        text-align: left;
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

    /* ANIMATION */

    .hideText{
        animation-name: hideTxt;
    }

    @keyframes hideTxt {
    0%   {opacity: 1;z-index: 4;}
    50%  {opacity: 0;z-index: 4;}
    100%  {opacity: 0;z-index: -10;}
    }

    .showText{
        animation-name: showTxt !important;
    }

    @keyframes showTxt {
    0%   {z-index: 4;}
    50%  {opacity: 0;z-index: 4;}
    100%  {opacity: 1;z-index: 4;}
    }

    .animationOpenTrigger{
        animation-name: animationOpen !important;
    }

    @keyframes animationOpen {
    0%   {height: 160px; width: 160px; z-index: 2;}
    50%  {right: calc(50% - 160px); bottom: calc(50% - 160px); height: 160px; width: 160px; color: rgba(255,255,255,0.5)}
    100%  {right: -16px; bottom: 0%; width: 100%; height: 100%; border-radius: 0px; z-index: 2;  color: rgba(255,255,255,0)}
    }

    .animationCloseTrigger{
        animation-name: animationClose !important;
    }

    @keyframes animationClose {
    0%  {right: -16px; bottom: 0%; width: 100%; height: 100%; border-radius: 0px; z-index: 2;color: rgba(255,255,255,0)}
    50%  {right: calc(50% - 160px); bottom: calc(50% - 160px); height: 160px; width: 160px; z-index: 2;color: rgba(255,255,255,0.5)}
    100%  {width: 160px; height: 160px; z-index: 1;}
    }
</style>