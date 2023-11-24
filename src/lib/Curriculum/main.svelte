<main>
    <img src="{LayersTop}" alt="stacked multi-color waves to segregate the section" style="margin-bottom: -2px;"/>
    <div>
        <h1>
            Experiências de Trabalho Formais
        </h1>

        {#each jobs as element, i (element)}
            <div class="workCard">
                <p>
                    <spam class="jobTitle"> {element.Title} </spam><br>
                    {element.Company},  {element.Start} - {element.End}
                </p>
                <ul>
                {#each element.Tasks as line}
                    {#if typeof line === 'object'}
                        <li class="iList" style="margin-left: 16px;color: rgb(68, 68, 165)"> 
                            <a href="{line.link}" style="color: inherit">{line.text}</a> 
                        </li>
                    {:else}
                        <li> {line} </li>
                    {/if}
                {/each}
                </ul>
            </div>
        {/each}
    </div>

    <img src="{LayersBot}" alt="stacked multi-color waves to segregate the section" style="margin-top: -2px;"/>
</main>

<script lang="ts">
    import LayersTop from '../../assets/layersTop.svg'
    import LayersBot from '../../assets/layersBot.svg'
    
    const jobs = [
        {
            Company: "BRF Food - Aceleração Digital",
            Title: "Desenvolvedor",
            Start: "2023",
            End: "Atual",
            Tasks: [
                "Atuei dentro do Centro de Excelência responsável pelos chatbots da empresa, somando 4,4M de Mensagens mensais, destaques:",
                {link: "https://blog.flashapp.com.br/think-work-flash-innovations-vencedores", text: "Theo recebe prêmio de inovação em atração e seleção;"},
                {link: "https://tiinside.com.br/31/03/2022/brf-avanca-na-jornada-digital-e-leva-assistente-virtual-para-oriente-medio/", text: "Flor é internacionalizada para atender países do Oriente Médio;"},
                {link: "https://www.linkedin.com/posts/brf_brf-nossapartepelotodo-inova%C3%A7%C3%A3o-activity-7013978684780916736-AlwE/?originalSubdomain=pt", text: "Flor é reconhecida pela Organização para a Cooperação e Desenvolvimento Econômico (OCDE);"},
                {link: "https://revista.consumidormoderno.com.br/premio-cm-2022-empresas-vencedoras/edicao-271/", text: "BRF ganha o prémio consumidor moderno 2022, com menção em seu discurso para os chatbots;"},
                {link: "https://inforchannel.com.br/2021/04/06/assistente-virtual-da-brf-fortalece-interacoes-com-clientes-da-sadia/", text: "Assistente virtual da BRF fortalece interações com os clientes da Sadia."},
                "Atuei como Tech Lead e desenvolvedor dentro de uma plataforma com 200k+ de usuários anuais",
                "Padronizei o desenvolvimento de ferramentas Microsoft",
                "Desenvolvi ferramentas para melhora de produtividade e diminuição de fluxos"
            ]
        },
        {
            Company: "BRF Food - Digital Lab",
            Title: "Desenvolvedor Junior",
            Start: "2021",
            End: "2022",
            Tasks: [
                "Desenvolvimento de uma solução financeira",
                "Mentorei 20+ estagiários e desenvolver material de apoio",
                "Auxiliei a squad responsável pelos chatbots da empresa",
                "Criação de ferramentas como Microserviços"
            ]
        },
        {
            Company: "BRF Food - Digital Lab",
            Title: "Estagiário",
            Start: "2021",
            End: "2022",
            Tasks: [
                "Desenvolvi aplicações web, desktop e mobile",
                "Desenvolvi e Mantive uma plataforma que alcançou 100k de usuários em seu primeiro ano",
                "Refatorei códigos e ferramentas com ênfase em melhor manutenção e experiência"
            ]
        }

    ]

</script>


<style>
    .jobTitle{
        font-size: 24px;
        font-weight: 600;
    }

    .workCard{
        margin: auto;
        min-width: 600px;
        max-width: 40%;
        text-align: left;
    }

    main div{
        color: black;
        justify-content: center;
        padding: 16px;
        margin-top: -8px;
        background-color: #DDD;
        width: 100%;
    }

    main img{
        aspect-ratio: 1280/200;
        width: 100%;
    }

    main{
        margin-top: 16px;
        position: relative;
        width: 100%;
        margin-bottom: 64px;
    }

    @media only screen and (max-width: 790px) {
        main{
            padding: 0px;
        }
        h1{
            font-size: 22px;
        }
        .workCard, p{
            font-size: 12px;
            max-width: 100%;
            width: calc(100vw - 80px);
        }
        li{
            width: calc(100vw - 88px);
        }
        .iList{
            width: calc(100vw - 108px);
        }
    }

</style>