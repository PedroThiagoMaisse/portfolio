
{#if tagArray}
    {#each tagArray as tag, i (tag)}
        <spam style="background-color: {tagColors[tag]}" class=tag> {tag} </spam>
    {/each}  
{/if}


<script lang="ts">
    export let tagArray: Array<string>

    const tagColors = {
        Go: '#4a9099',
        Svelte: '#F73C00',
        SvelteKit: '#F73C00',
        TS: '#333395',
        JS: '#caa829',
        Node: '#caa829',
        Vue: '#4BB483',
        AWS: '#e28000',
        Lambda: '#e28000',
        Python: '#1b3652',
        Serveless: '#be4a45',
        Azure: '#1066b3'
    }
</script>


<style>
    .tag{
        background-color: #555555;
        text-align: center;
        line-height: 100%;
        padding: 4px 4px 4px 5px;
        font-size: 14px;
        margin-left: 8px;
        margin-bottom: 4px;
        border-radius: 4px;
    }

</style>