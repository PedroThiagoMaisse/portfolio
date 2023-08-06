<main>
    <div class="imageColumn">
        <div class="imageDiv">
            <div class="imageOutline"></div>
            <div class="image"></div>
            <p> Me, very happy with the meal that i just eated, Curitiba - 2023 </p>
        </div>
    </div>

    <div class="textColumn">
        <h1> Eu! </h1>
        <p> Desenvolvedor com um pitinho de conhecimento sobre gestão de projeto, artes gráficas, litetura, música, matemática... a maior constância que tive até hoje foi a vontade de aprender e de estar sempre me desafiando.</p>
        <h1> Engenharia </h1>
        <p>  Por causa dessas vontades, a escolha de ir para o caminho de engenharia foi natural (demorei 4 anos p/ começar a faculdade certa), assim como a desição de sempre me manter apreendendor Design Patternns, Stacks, Linguagens e Sistemas totalmente novos.</p>
        <h1 class="quote" style="margin-top: 32px"> "... excelente líder, motivador, põe a mão na massa para descomplicar qualquer conceito como DEV." </h1>
        <p class="quote">   Wesley Santos, Coordenador de Markenting. </p>
   
    </div>
</main>

<script>
    
</script>


<style>
    h1.quote{
        font-size: 30px;
    }
    .quote{
        text-align: right !important;
        left: calc(10% - 32px) !important;
        width: 90%;
    }

    .textColumn h1{
        position: relative;
        left: 48px;
        text-align: left;
        margin-bottom: 0px;
        margin-top: 16px;
    }

    .textColumn p{
        margin-bottom: 0px;
        margin-top: 0px;
        position: relative;
        padding: 16px;
        text-align: left;

    }

    .imageDiv p{
        margin: 0px;
        padding: 0px;
        position: absolute;
        top: 368px;
        width: 360px;
        color: white;
        font-weight: 200;
        font-family: 'Segoe UI';
        
    }

    .imageDiv{
        position: relative;
        left: calc(50% - 200px);
        top: calc(50% - 150px);
        transform: rotate3d(0, 1, -0.1, 15deg);
    }

    .imageOutline{
        border-radius: 16px;
        position: absolute;
        width: 360px;
        height: 360px;
        background-color: gray;
        opacity: 0.15;
    }

    .image{
        background-size: cover;
        border-radius: 16px;
        position: absolute;
        width: 360px;
        height: 360px;
        background-image: url('../../assets/avatar.webp');
        transform: translate(12px, 8px);
    }

    .imageColumn{
        width: 40%;
        height: 100%;
    }

    .textColumn{
        padding-top: 24px;
        width: 60%;
        height: 100%;
    }

    main{
        display: flex;
        position: relative;
        width: 100%;
        height: 560px;
    }

</style>