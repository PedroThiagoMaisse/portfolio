<main>
    <button class="contact" on:click={openContact}> Get in Contact </button>
</main>

<script>
    import {dialogObject} from '../../store'

    function openContact () {
        dialogObject.set({openDialog: 'contact', options: {}})
    }
</script>