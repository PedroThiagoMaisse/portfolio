<main>
    <dialog bind:this={dialogElement}>
        <button on:click={() => dialogElement.close()} class=closeBtn> close </button>
        <h1>Get in Contact</h1>

        {#each buttons as element, i}
            <button on:click={() => window.open(element.link, "_blank")}> {element.text} </button> {#if i%2 } <br> {/if}
        {/each}
    </dialog>

</main>

<script>
    let dialogElement
	import { onMount } from 'svelte';
    import {dialogObject} from '../../store'

    let dialogObj

    const buttons = [
        {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/pedro-thiago-2536a01a0/"
        },
        
        {
            text: "Twitter",
            link: "https://twitter.com/Pe_ssimista?t=imMJY3HtbLoXNbqRl5bBzg&s=08"
        },
        
        {
            text: "GitHub",
            link: "https://github.com/PedroThiagoMaisse"
        },
        
        {
            text: "E-Mail",
            link: "mailto:pedrothiagojosedasilva@gmail.com"
        }

    ]

    onMount(() =>{
        dialogObject.subscribe(value => {
            dialogObj = value
            if (dialogObj.openDialog === 'contact') {
                console.log(dialogElement)
                dialogElement.showModal()}
        })
    })
</script>

<style>

    dialog h1{
        margin-top: 48px;
    }

    dialog button{
        background-color: #2a2a2a;
        width: 102px;
        margin-right: 8px;
        margin-bottom: 8px;
    }

    .closeBtn{
        position: absolute;
        right: 0px;
        top: 8px;
    }

    dialog{
        color: #FAFAFA;
        position: relative;
        opacity: 0;
        scale: 0;
        transition: all 1s;
        border-radius: 16px;
        border-color: #404040;
        z-index: 10;
        width: 400px;
        height: 300px;
        background-color: #656565;
        box-shadow: 20px 20px 20px 0 rgba(0, 0, 0, 0.6);
    }

    dialog[open] {
        scale: 1;
        opacity: 1;
    }

</style>