
<main>
    {#if tagArray}
        {#each tagArray as tag, i (tag)}
            <spam style="background-color: {tagColors[tag]}" class=tag>{tag}</spam>
        {/each}  
    {/if}
</main>


<script lang="ts">
    export let tagArray: Array<string>

    const tagColors = {
        Go: '#4a9099',
        MongoDB: '#1B6725',
        Svelte: '#F73C00',
        SvelteKit: '#F73C00',
        TS: '#333395',
        JS: '#caa829',
        Node: '#caa829',
        Vue: '#327959',
        AWS: '#e28000',
        Lambda: '#e28000',
        Python: '#1b3652',
        Serveless: '#be4a45',
        Azure: '#1066b3',
        Next: '#4dadc7',
        React: '#4dadc7',
        "React Native": '#4dadc7',
        Airflow: '#e43921',
        Elastic: '#cba707',
        PostgreSQL: '#306792',
        Docker: '#0dbcf4',
        IBM: "#333",
        MySQL: '#f29111'
    }
</script>


<style>
    main{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .tag{
        background-color: #555555;
        text-align: center;
        line-height: 120%;
        padding: 4px 4px 4px 5px;
        font-size: 14px;
        margin-left: 8px;
        margin-top: 2px;
        margin-bottom: 8px;
        border-radius: 4px;
    }

    @media only screen and (max-width: 790px) {
        .tag{
            padding: 2px 2px 2px 3px;
            font-size: 10px;
            margin-left: 4px;
            margin-bottom: 3px;
        }

    }
</style>