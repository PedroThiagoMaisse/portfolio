<script lang="ts">
let count: number = 0
const increment = () => {
    count += 1
}
</script>

<main>
<button on:click={increment}>
    count is {count}
</button>

</main>


<style>
    main{
        padding: 8px;
        width: calc(100% - 16px);
        display: flex;
        justify-content: right;
        background-color: #333;
        height: 40px;
        
    }


</style>
