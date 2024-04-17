<main>
    <h1> Contato </h1>
    <div class="columns">
        <div>
            <p class="caller">
                Interessado(a) em algo que viu? <br> 
                Me chame em alguma rede social!
            </p>
            <button class="callerButton">
                Entre em contato
            </button>
        </div>
        <div class="links">
            {#each contacts as contact}
            <a href="{contact.link}" target="_blank">
                <button style="width: 92px; margin-bottom: 12px">
                    {contact.text}
                </button>
            </a>
            {/each}
        </div>
    </div>
</main>

<script lang="ts">
    const contacts = [
        {
            text: "LinkedIn",
            scale: 0.6,
            link: "https://www.linkedin.com/in/pedro-thiago-2536a01a0/",
        },
        
        {
            text: "Twitter",
            scale: 0.6,
            link: "https://twitter.com/Pe_ssimista?t=imMJY3HtbLoXNbqRl5bBzg&s=08"
        },
        
        {
            text: "GitHub",
            topOffset: '-0.5px',
            link: "https://github.com/PedroThiagoMaisse",
        },
        
        {
            text: "E-Mail",
            scale: 0.8,
            link: "mailto:pedrothiagojosedasilva@gmail.com"
        }

    ]
</script>


<style>
    .caller{
        font-size: 32px; 
        margin: 0px 0px 56px 0px; 
        font-weight: 600
    }

    h1{
        color: #5DABC7
    }
    .columns{
        display: flex;
        justify-content: space-between;
    }

    .links{
        display: flex; 
        flex-direction: column
    }

    button{
        padding: 12px;
        border-radius: 0px;
        background-color: #dcdee5;
        color: #333;
        outline: rgba(0, 0, 0, 1) solid 2px !important;
    }

    main{
        margin-left: 172px;
        margin-right: 172px;
        text-align: left;
        /* display: flex; */
        position: relative;
        color: #333;
    }

    .callerButton{
        height: 52px; 
        font-size: 20px; 
        margin-bottom: 12px
    }

    @media only screen and (max-width: 790px) {
        main{
            margin-left: 0px;
            margin-right: 0px;
        }
        .caller{
            font-size: 24px;
        }
        .callerButton{
            display: none;
            font-size: 16px;
        }
        .columns{
            display: flex;
            flex-direction: column;
            justify-content:start;
        }
        .links{
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }


</style>