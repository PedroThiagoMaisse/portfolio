<main>
    <div class="bg">
        Bem vindo à um pedacinho do que eu faço,<br>
        qualquer bug e dica pode ser direcionado para <a href="mailto:pedrothiagojosedasilva@gmail.com">pedrothiagojosedasilva@gmail.com</a> <br>
         <spam style="font-size: 12px;"> Passos até o release da próxima versão: 13/15 </spam>
    </div>
    <img src="{BannerBlob}" alt="A blue wave in a grey background" style="position: absolute; left: 500px; z-index: -20">
    <img src="{BannerBlobin}" alt="A blue wave in a grey background" style="position: absolute; left: 250px; z-index: -20">

	<Clickables callout={array}></Clickables>
</main>

<script>
    import BannerBlob from '../../assets/Banner/banner-blob.svg'
    import BannerBlobin from '../../assets/Banner/banner-blobin.svg'
    import Clickables from "./clickables.svelte";

    const array = [
        {
            color: '#65706F', 
            text: 'Com uma bagagem em vários frameworks, minha atuação sempre foi bem diversificada, abrangendo várias linguagens e conjuntos de tecnologias, tipo:', 
            title: 'Desenvolvimento Web',
            list: [
                {text: 'Esse portfolio;', link: 'https://pedrothiagomaisse.github.io/newPortfolio/', tags: ['Svelte', 'JS']},
                {text: 'BRFCode, uma plataforma para auxiliar na validação em entregas;', link: 'https://BRFCode.com', tags: ['JS', 'Vue', 'Node']}
            ]
        },
        {
            color: '#697065',
            list: [
                {text: 'Commit Mapping, uma ferramenta para criar uma visualização dentro do github de pushs feitos em outras ferramentas', 
                link: 'https://github.com/PedroThiagoMaisse/CommitMapping', tags: ['Node', 'JS']},
            ], 
            text: 'De vez em quando, surge aquela necessidade ou vontade de desenvolver uma ferramenta para dar uma mão no meu dia a dia ou simplificar algum processo, tipo:', 
            title: 'CLI e Ferramentas'},
        {color: '#495351',list: [], text: 'Com o propósito de auxiliar bibliotecas e enriquecer o meu conhecimento, tenho me direcionado para contribuir em projetos OpenSource, como:', title: 'Contribuições Open Source'}
    ]
</script>


<style>
    .bg{
        text-align: center;
        padding-top: 190px;
        background-image:
        linear-gradient(
        rgba(0, 0, 0, 0) 60%, 
        rgba(0, 0, 0, 0.4) 100%
        );
        z-index: -2;
        position: absolute;
        width: 100%;
        height: calc(560px - 160px);
    }

    main{
        position: relative;
        width: 100%;
        height: 560px;
    }

</style>