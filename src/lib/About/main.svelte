<main>
    <div class="textColumn">
        <h1> Sobre </h1>
        <p> Meu nome é Pedro Thiago, Sou um desenvolvedor e freelancer de Curitiba, com um fundinho em gestão de projeto, literatura, música e matemática. 
        <br>Meu trabalho atual consiste em desenvolvimento full-time em uma start-up no setor logístico, além de manter minhas diversas paixões e interesses em segundo plano.
        </p>
        <!-- <h1> Engenharia </h1> -->
        <p> Por conta da minha diversificação em linguagens de programação, e da natureza fluída do mercado de Software,
            sempre estou correndo para me manter atualizado com novas bibliotecas, ferramentas e linguagens. 
        </p>
   
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
        margin-bottom: 18px;
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
        top: 36px;
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
        width: 35%;
        height: 100%;
    }

    .textColumn{
        width: 60%;
        height: 100%;
    }

    main{
        margin-top: 62px;
        margin-bottom: 62px;
        margin-left: 172px;
        margin-right: 172px;
        display: flex;
        justify-content: space-between;
        position: relative;
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