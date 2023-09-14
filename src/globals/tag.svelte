
{#if tagArray}
    {#each tagArray as tag, i (tag)}
        <spam style="background-color: {tagColors[tag]}" class=tag> {tag} </spam>
    {/each}  
{/if}


<script lang="ts">
    export let tagArray

    const tagColors = {
        Go: '#4a9099',
        Svelte: '#F73C00',
        JS: '#D8B42D',
        Node: '#D8B42D',
        Vue: '#4BB483'
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