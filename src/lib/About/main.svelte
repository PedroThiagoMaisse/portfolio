<main>
    <div class="textColumn">
        <h1> Sobre </h1>
        <p> Desenvolvedor com um tiquinho de conhecimento sobre gestão de projeto, artes gráficas, literatura, música e matemática. 
            A maior constância que tive até hoje foi a vontade de aprender e de estar sempre me desafiando.</p>
        <h1> Engenharia </h1>
        <p>  Por influência dessas vontades, a escolha de ir para o caminho de engenharia foi natural (demorei 4 anos p/ começar a faculdade certa), assim como a decisão de sempre me atualizar sobre Design Patternns, Stacks, linguagens e sistemas totalmente novos.</p>
   
    </div>

    <div class="imageColumn">
        <div class="imageDiv">
            {#each outlineProgression as color, index}
                <div class="imageOutline" style="z-index: {outlineProgression.length - index} ;background-color: {color}; transform: translate(-{12 * (index + 1)}px, -{8 * (index + 1)}px)"></div>
            {/each}
            <div class="image" style="z-index: {outlineProgression.length + 1}"></div>
            <p> Eu, muito feliz com a comida que acabei de devorar, Curitiba - 2023 </p>
        </div>
    </div>
</main>

<script lang="ts">
const outlineProgression = [
    "#6b6c6f",
    "#9c9ea3",
    "#ced0d6",
]


</script>


<style>
    h1{
        color: #93C75D
    }

    .textColumn h1{
        position: relative;
        text-align: left;
        margin-bottom: 0px;
        margin-top: 28px;
    }

    .textColumn p{
        margin-bottom: 0px;
        margin-top: 0px;
        position: relative;
        text-align: left;
        font-size: 18px;
    }

    .imageDiv p{
        margin: 0px;
        padding: 0px;
        position: absolute;
        top: 368px;
        width: 360px;
        color: #333;
        font-weight: 400;
        font-size: 10px;
        font-family: 'Segoe UI';
        
    }

    .imageDiv{
        position: relative;
        left: calc(60% - 200px);
        top: 105px;
        transform: rotate3d(0, 1, -0.1, 15deg);
    }

    .imageOutline{
        border-radius: 16px;
        position: absolute;
        width: 360px;
        height: 360px;
    }

    .image{
        background-size: cover;
        border-radius: 16px;
        position: absolute;
        width: 360px;
        height: 360px;
        background-image: url('../../assets/avatar.webp');
    }

    .imageColumn{
        width: 50%;
        height: 100%;
    }

    .textColumn{
        width: 50%;
        height: 100%;
    }

    main{
        margin-left: 172px;
        margin-right: 172px;
        display: flex;
        position: relative;
        min-height: 560px;
        color: #333;
    }

    @media only screen and (max-width: 790px) {
        .imageColumn{
            display: none;
        }
        .textColumn{
            width: 90% !important;
        }

        .textColumn h1{
            font-size: 32px;
        }
    
        main{
            margin-left: 20px;
            margin-right: 20px;
        }

        .textColumn p{
            font-size: 14px;
        }
    }
</style>