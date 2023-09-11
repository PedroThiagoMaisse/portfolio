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
                        <a href="{line.link}">
                            <li style="margin-left: 16px;color: -webkit-link"> {line.text} </li>
                        </a>
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
            Title: "Desenvolvedor - Scrum Master",
            Start: "2023",
            End: "Atual",
            Tasks: [
                "Atuei como Scrum Master no CoE responsável pelos chatbots da empresa, somando 1,7M de Mensagens mensais, destaques:",
                {link: "https://blog.flashapp.com.br/think-work-flash-innovations-vencedores", text: "Theo recebe prêmio de inovação em atração e seleção;"},
                {link: "https://tiinside.com.br/31/03/2022/brf-avanca-na-jornada-digital-e-leva-assistente-virtual-para-oriente-medio/", text: "Flor é internacionalizada para atender países do Oriente Médio;"},
                {link: "https://www.linkedin.com/posts/brf_brf-nossapartepelotodo-inova%C3%A7%C3%A3o-activity-7013978684780916736-AlwE/?originalSubdomain=pt", text: "Flor é reconhecida pela Organização para a Cooperação e Desenvolvimento Econômico (OCDE);"},
                {link: "https://revista.consumidormoderno.com.br/premio-cm-2022-empresas-vencedoras/edicao-271/", text: "BRF ganha o prémio consumidor moderno 2022, com menção em seu discurso para os chatbots;"},
                {link: "https://inforchannel.com.br/2021/04/06/assistente-virtual-da-brf-fortalece-interacoes-com-clientes-da-sadia/", text: "Assistente virtual da BRF fortalece interações com os clientes da Sadia."},
                "Atuei como Tech Lead e desenvolvedor dentro de uma plataforma com 200k+ de usuários anuais",
                "Criei uma ferramenta de linha de comando para a padronização do desenvolvimento de componentes React para PowerBi e Sharepoint",
                "Desenvolvi conexões entre BI, SAP e SalesForce e criei uma solução para o acompanhamento de metas da diretoria"
            ]
        },
        {
            Company: "BRF Food - Digital Lab",
            Title: "Desenvolvedor Junior",
            Start: "2021",
            End: "2022",
            Tasks: [
                "Arquitetei e Construi soluções utilizando Node TS, React, Vue e C# com conexões com sistemas SAP e SalesForce",
                "Mentorei 20+ estagiários",
                "Auxiliei a squad responsável pelos chatbots da empresa em questões pontuais"
            ]
        },
        {
            Company: "BRF Food - Digital Lab",
            Title: "Estagiário",
            Start: "2021",
            End: "2022",
            Tasks: [
                "Desenvolvi aplicações web, desktop e mobile",
                "Auxiliei na entrega e manutenção de uma plataforma que alcançou 20k de usuários em seu primeiro mês, e 100k em seu primeiro ano",
                "Prestei apoio a outros estagiários"
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

</style>