

<main>
    <button
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
</main>

<script lang="ts">
    export let item: {
        name: string,
        link: string|URL|undefined,
        lastEdit: string,
        text: string,
        tags: Array<string>,
        img: string,
    }
    import Tag from "$lib/globals/tag.svelte";
</script>


<style>
    button:before{
        background-image: var(--url, linear-gradient( rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),url());
        content:'';
        position:absolute;
        z-index:-1;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background-size: 460px auto;
        filter:blur(1px);
        transition: 1s;
        border-radius: 16px;
        outline: none;
    }
    button{
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0);
        margin-left: 16px;
        opacity: 1;
        position: relative;
        height: 460px;
        width: 300px;
        border-radius: 16px;
        background-size: cover;
    }
    main{
        width: 100%;
        padding: 0px;
        margin-left: 0px !important;
        margin-right: 0px !important;
    }
    p{
        margin: 8px;
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


    button:hover,
    button:focus,
    button:focus-visible{
        outline: rgba(250, 250, 250, 0.6) solid 2px;
    }

    button:hover:before,
    button:focus:before,
    button:focus-visible:before{
        filter:blur(4px);
    }

    button:hover .tags,
    button:focus .tags,
    button:focus-visible .tags,
    button:hover .lastEdit,
    button:focus .lastEdit,
    button:focus-visible .lastEdit{
        opacity: 1;
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

        .mainText{
            font-size: 12px;
            padding: 6px;
        }

        .projectName{
            margin: 6px 4px;
            font-size: 16px;
        }

        .tags{
            opacity: 1;
        }
    }

</style>