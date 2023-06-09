<main>
    <dialog bind:this={dialogElement}>
        <button on:click={() => dialogElement.close()} class=closeBtn> close </button>
        <h1>Get in Contact</h1>

        <button> Linkedin </button>
        <button> Twitter </button> <br>
        <button> GitHub </button>
        <button> E-Mail </button> <br>
    </dialog>

</main>

<script>
    let dialogElement
	import { onMount } from 'svelte';
    import {dialogObject} from '../../store'

    let dialogObj

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
        color: #242424;
        position: relative;
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        opacity: 0;
        scale: 0;
        transition: all 1s;
        border-radius: 16px;
        z-index: 10;
        width: 400px;
        height: 300px;
        background-color: #FAFAFA;
        box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.45);
    }

    dialog[open] {
        scale: 1;
        opacity: 1;
    }

</style>