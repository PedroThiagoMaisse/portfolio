<script lang="ts">
const sections = [
    {"name": "Sobre", "type": "scrollDown", "heigth": "200px", "id": "#about"},
    {"name": "Projetos", "type": "scrollDown", "heigth": "200px", "id": "#projects"},
    {"name": "Empregos", "type": "scrollDown", "heigth": "200px", "id": "#curriculum"},
    {"name": "Contato", "type": "scrollDown", "heigth": "200px", "id": "#contact"},
]

function scrollIntoView(id) {
		const el = document.querySelector(id)
		if (!el) return
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<main>
    <div class="line">
        {#each sections as element}
            <button type="button" on:click|preventDefault={() => {scrollIntoView(element.id)}}>
                {element.name.toUpperCase()}
            </button>
        {/each}
    </div>
</main>


<style>
    main{
        height: 40px;
        background-color: #dcdee5;
        padding: 8px 64px 8px 64px;
        width: calc(100% - 128px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .line{
        height: 40px;
        display: flex;
        justify-content: right;
    }

    button{
        border-radius: 0px;
        background-color: rgba(0, 0, 0, 0);
        color: #202020;
        margin-left: 12px;
        padding: 10px;
        font-size: 16px;
        line-height: 100%;
        height: 40px;
    }

    @media only screen and (max-width: 790px) {
        button{
            font-size: 12px;
            margin-left: 6px;
        }

        main{
            padding: 8px 24px;
            width: calc(100% - 48px);
        }
    }


</style>
