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
                    <li> {line} </li>
                {/each}
                </ul>
            </div>
        {/each}
    </div>

    <img src="{LayersBot}" alt="stacked multi-color waves to segregate the section" style="margin-top: -2px;"/>
</main>

<script>
    import LayersTop from '../../assets/layersTop.svg'
    import LayersBot from '../../assets/layersBot.svg'
    
    const jobs = [
        {
            Company: "BRF Food - Aceleração Digital",
            Title: "Desenvolvedor - Scrum Master",
            Start: "2023",
            End: "Atual",
            Tasks: [
                "Atuei como Tech Lead e desenvolvedor dentro de uma plataforma com 200k+ de usuários anuais",
                "Atuei como Scrum Master em uma squad responsável por chatbots, somando 1,2M de Mensagens mensais",
                "Criei de uma CLI para a padronização do desenvolvimento de componentes React para PowerBi e Sharepoint",
                "Desenvolvi conexões entre BI, SAP, SalesForce e DataBricks e criei uma página para o acompanhamento de metas da diretoria Tech"
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
        width: 600px;
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