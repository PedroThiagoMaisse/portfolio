<main>
    <h1> Projetos </h1>

    <div class="scrollarea" bind:this={projectList}>
    <div class="projectList show">
        {#each projects as item, index (index)}
            <button
            style="
                background-size: cover;
                background-image: linear-gradient( rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),url('{item.img}')
            "
            class="skipPattern"
            aria-label="get more details from: {item.name}"
            on:click={() => window.open(item.link, "_blank")}
            >
                <p class="lastEdit">
                    {item.lastEdit}
                </p>
                <p class="projectName">
                    {item.name}
                </p>
                <p class="mainText">
                    {item.text}
                </p>
                <div class="tagwrapper">
                    <div class="tags">
                        <Tag tagArray="{item.tags}"></Tag>
                    </div>
                </div>
               
            </button>
        {/each}
    </div>
    </div>
    <button class="sideScroll left" on:click={() => {scrollList(-300, -300)}}> {"<"} </button>
    <button class="sideScroll right" on:click={() => {scrollList(300, 300)}}> {">"} </button>
</main>

<script lang="ts">
    import brfcodeImg from '../../assets/brfcode.png'
    import Tag from '../globals/tag.svelte';
    interface element {
        element: any,
        name: string, 
        tags: Array<string>, 
        img: string, 
        text: string,
        link: string,
        lastEdit: string
    }
    let projectList: any = undefined

    function scrollList(x,y){
        projectList.scrollBy(x,y)
    }

    const projects : Array<element> = [
        {
            element: undefined,
            name: 'Esse portfólio', 
            tags: ['Svelte', 'TS', 'GitHub Actions', 'GitPages'], 
            img: '', 
            text: 'Página construída com foco em presentabilidade e rapidez',
            link: 'https://github.com/PedroThiagoMaisse/portfolio',
            lastEdit: 'Abril, 2024'
        },
        {
            element: undefined,
            name: 'Morgan', 
            tags: ['Svelte', 'JS', 'GitPages'], 
            img: '', 
            text: 'Um editor e publicador de textos',
            link: 'https://github.com/PedroThiagoMaisse/MOrgan',
            lastEdit: 'Dezembro, 2023'
        },
        {
            element: undefined,
            name: 'CommitMapping', 
            tags: ['Node', 'JS', 'NPM/NPX', 'GitHub Actions'], 
            img: '', 
            text: 'Ferramenta para mapeamento de commits locais',
            link: 'https://github.com/PedroThiagoMaisse/commitMapping',
            lastEdit: 'Janeiro, 2024'
        },
        {
            element: undefined,
            name: 'Olive', 
            tags: ['Go', 'MongoDB'], 
            img: '', 
            text: 'Ferramenta para monitoramento de outros sitemas',
            link: 'https://github.com/PedroThiagoMaisse/olive',
            lastEdit: 'Dezembro, 2023'
        },
        {
            element: undefined,
            name: 'BRFCode',
            img: brfcodeImg,
            text: "BRFCode, uma plataforma para auxiliar na validação em entregas",
            link: "https://BRFCode.com",
            tags: ["JS", "Vue", "Node", "Azure"],
            lastEdit: 'Dezembro 2023'
        },
    ]
</script>


<style>
    p{
        margin: 8px;
    }
    h1{
        color: #BA5DC7 !important;  
    }
    .tagwrapper{
        height: 32px;
    }
    .mainText{
        font-size: 16px;
        text-align: center;
        padding: 0px 8px
        /* align-items:baseline; */
    }
    .projectName{
        line-height: 120%;
        font-size: 24px;
        font-weight: 600;
        color: #FFF;
    }
    .lastEdit{
        transition: 1s;
        line-height: 100%;
        opacity: 0;
    }
    .tags{
        margin-top: 16px;
        transition: 1s;
        opacity: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .sideScroll{
        outline: rgba(0, 0, 0, 0.6) solid 2px;
        position: absolute;
        top: 292px;
        width: 48px;
        height: 48px;
        border-radius: 48px;
        font-size: 24px;
        background-color: #dcdee5;
        color: #333;
    }

    .sideScroll.left{
        left: calc(-172px - 100px);
    }

    .sideScroll.right{
        right: calc(-172px - 100px);
    }

    .projectList button{
        margin-left: 16px;
        opacity: 1;
        position: relative;
        height: 460px;
        width: 300px;
        border-radius: 16px;
        background-size: cover;
    }

    button:hover,
    button:focus,
    button:focus-visible{
        outline: rgba(250, 250, 250, 0.6) solid 2px;
        backdrop-filter: blur(20px);
    }

    button:hover .tags,
    button:focus .tags,
    button:focus-visible .tags,
    button:hover .lastEdit,
    button:focus .lastEdit,
    button:focus-visible .lastEdit{
        opacity: 1;
    }

    .scrollarea{
        scroll-behavior: smooth !important;
        display: flex;
        width: 100vw;
        overflow-x: scroll;
        position: relative;
        left: calc(-172px - 120px);

    }

    .projectList{
        margin-top: 16px;
        margin-bottom: 16px;
        padding-left: 80px;
        padding-right: 80px;
        width: fit-content;
        display: flex;
    }

    main{
        margin-left: 172px;
        margin-right: 172px;
        text-align: left;
        position: relative;
    }

    @media only screen and (max-width: 790px) {
        main {
            margin-left: 0px;
            margin-right: 0px;
        }
        h1{
            font-size: 28px;
        }

        .projectList{
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

        .scrollarea{
            padding-right: 0px;
            margin-right: 0px;
            min-width: calc(100vw + 20px) !important;
            left: 0px;
        }

        .sideScroll.left{
            left: calc(-10px);
        }

        .sideScroll.right{
            right: calc(-10px);
        }

        .sideScroll{
            top: 170px;
            width: 32px;
            height: 32px;
            font-size: 16px;
        }

        .projectList button{
            height: 230px;
            min-width: 150px;
            margin-bottom: 20px;
            padding: 2px;
        }

        .mainText{
            font-size: 12px;
            padding: 6px;
        }

        .projectName{
            margin: 6px 4px;
            font-size: 16px;
        }

        .projectList{
            width: calc(100vw - 16px);
        }

        .tags{
            opacity: 1;
        }
    }

</style>