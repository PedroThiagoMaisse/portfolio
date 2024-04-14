<section style="z-index: 100;">
    {#each PageConstructList as element}
    <dialog open style="background-color: rgba(0,0,0,0); border-width: 0px; padding: 0px; z-index: 300" class="{element.type}">
        <h1>{element.title}</h1>
        <h3>{element.subTitle}</h3>
        <p>{element.text}</p>

        <div style="display: flex;">
            {#each element.actionButtons as button}
                <button on:click={() => {button.action}}>
                    {button.text}
                </button>
            {/each}
        </div>
    </dialog>
    {/each}
    

</section>

<script lang="ts">

interface PageConstruct {
    title: string
    subTitle: string
    text: string
    actionButtons: Array<{
        text: string,
        action: Function
    }>
    type: "warning" | "form" | "error"

}
export let PageConstructList: Array<PageConstruct>


</script>

<style>
    section{
        width: 500px;
        height: 500px;
        background-color: aliceblue;
        color: black;
    }
</style>