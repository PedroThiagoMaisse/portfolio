<section style="z-index: 100;">
    <h1>{pageDetails.title}</h1>
    <h3>{pageDetails.subTitle}</h3>
    <p>{pageDetails.text}</p>

    <div style="display: flex;">
        {#each pageDetails.actionButtons as button}
            <button on:click={button.action}>
                {button.text}
            </button>
        {/each}
    </div>
    

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

}
export let pageDetails: PageConstruct


</script>

<style>
    section{
        width: 500px;
        height: 500px;
        background-color: aliceblue;
        color: black;
    }
</style>