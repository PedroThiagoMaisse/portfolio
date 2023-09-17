<main>
    {#each buttons as element, i}
        <button on:click={() => window.open(element.link, "_blank")}>
            {#if element.img}
                <img  
                width="40px" 
                height="40px" 
                src="{element.img}"
                style='scale: {element.scale}; margin-top: {element.topOffset}'
                alt="{element.text}"/> 
            {:else}
                {element.text}
            {/if}
         </button>
    {/each}
</main>

<script lang="ts">
    import img_linkedin from '../../assets/contact/in.png'
    import img_git from '../../assets/contact/git.png'
    import img_x from '../../assets/contact/x.png'
    import img_email from '../../assets/contact/email.png'

    const buttons = [
        {
            text: "LinkedIn",
            scale: 0.6,
            link: "https://www.linkedin.com/in/pedro-thiago-2536a01a0/",
            img: img_linkedin
        },
        
        {
            text: "X",
            img: img_x,
            scale: 0.6,
            link: "https://twitter.com/Pe_ssimista?t=imMJY3HtbLoXNbqRl5bBzg&s=08"
        },
        
        {
            text: "GitHub",
            topOffset: '-0.5px',
            link: "https://github.com/PedroThiagoMaisse",
            img: img_git
        },
        
        {
            text: "E-Mail",
            scale: 0.8,
            img: img_email,
            link: "mailto:pedrothiagojosedasilva@gmail.com"
        }

    ]
</script>

<style>
    main{
        display: flex;
        margin-right:24px;
    }

    button{
        box-shadow: 0px 0px 24px rgba(0,0,0,0.8);;
        z-index: 20;
        margin-left: 16px;
        border-radius: 22px;
        background-color: #2a2a2a;
        width: 40px;
        height: 40px;
        text-align: center;
        padding: 0px;
    }
</style>