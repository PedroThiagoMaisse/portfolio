<main>
    <div>
        <h1>
            Experiências de Trabalho
        </h1>

        {#each jobs as element, i (element)}
            <div class="workCard">
                <div>
                    <p>
                        <spam class="jobTitle"> {element.Title} </spam><br>
                        {element.Start} - {element.End}
                    </p>
                </div>
                <div>
                    <p>
                        {element.text}
                    </p>
                    <p class="lines">    
                        <Tag tagArray={element.Stack}/>
                    </p>
                </div>
                
            </div>
        {/each}
    </div>

</main>

<script lang="ts">
    import Tag from "$lib/globals/tag.svelte";

    const jobs = [
        {
            Company: "Azagros",
            Title: "Azagros - Product Team",
            Start: "Jun 2024",
            End: "Atual",
            Stack: [
                "TS",
                "AWS",
                "ECS",
                "S3",
                "Azure Pipelines",
                "PostgreSQL",
                "Docker",
                "Java",
                'Dart',
                'React'
            ],
            text: "Plataforma para acompanhamento de produtores agricolas e técnicos. Atuei na manutenção e expansão de front (web e mobile) e backend. Principais tecnologias da stack:"
        },
        {
            Company: "Sourtec",
            Title: "Sourtec",
            Start: "Outubro 2024",
            End: "Fev 2025",
            Stack: [
                "React",
                "Javascript",
                "Lambdas",
                "Go",
                "S3",
                "PostgreSQL"
            ],
            text: "Arquitetura, Design e Criação de uma plataforma de acompanhamento de dissecção de Dutos. Principais tecnologias da stack:"
        },
        {
            Company: "Embarca",
            Title: "Embarca - Dynamic Pricing",
            Start: "Dez 2023",
            End: "Jun 2024",
            Stack: [
                "Python",
                "AWS",
                "State Machines",
                "Airflow",
                "Elastic",
                "PostgreSQL",
                "Docker"
            ],
            text: "Ferramenta para obtenção de preços de mercado e atualização dos nossos preços seguindo uma série de regras de négocio. Trabalhei principalmente com a manutenção e incorporação de novas features do nosso 'backend'. Principais tecnologias da stack:"
        },
        {
            Company: "BRF - Aceleração Digital",
            Title: "BRF - CoE Chatbots",
            Start: "Maio 2022",
            End: "Dez 2023",
            Stack: [
                "Node",
                "TS",
                "IBM",
                "Watson Assistant",
                "Docker",
                "Azure",
                "MongoDB"
            ],
            text: "Centro de excelencia com o objetivo de centralizar a criação e manutenção dos bots corporativos da empresa, que somam mais de 4,4M de Mensagens mensais. Atuei com a organização do time, conexão com outras áreas e resolvimentos de bugs, assim como na criação de bots. Principais tecnologias da stack:"
        },
        {
            Company: "BRF Food - Digital Lab",
            Title: "BRF - Hub de Estagiários",
            Start: "Maio 2022",
            End: "Janeiro 2023",
            Stack: [
                "Next",
                "Vue",
                "React Native",
                "MySQL",
                "Node",
                "Agilididade",
                "Azure"

            ],
            text: "Hub de formação de estagiário que possibilitava o avanço de soft e hardskills focados em diversas formações do mundo tech. Atuei com a coordenação e acompanhamento dos 30+ estagiários do programa, assim como mentor de front, back e agilidade. Os grupos de estagiários eram:"
        },
        {
            Company: "BRF Food - Digital Lab",
            Title: "BRF - BRFCode",
            Start: "Abril 2021",
            End: "Fevereiro 2022",
            Stack: [
                "Vue",
                "MySQL",
                "React Native",
                "Node",
                "Azure"
            ],
            text: "Plataforma para acompanhamento e contagem de entregas totalmente interna da impresa. Minha atividade no projeto começou como desenvolvedor frontend e na finalização estava prestando como apoio ao backend e mobile. Principais tecnologias da stack:"
        }

    ]

</script>


<style>
    .lines{
        color: #fafafa;
        font-size: 14px; 
        line-height: 100%;
        width: 100%;
    }
    h1{
        color: #c6975e
    }

    p{
        margin-top: 0px;
        font-size: 18px;
        font-weight: 200;
    }
    .jobTitle{
        color: #c6975e;
        font-size: 22px;
        font-weight: 600;
    }

    .workCard{
        display: flex;
        padding: 2px;
        margin: auto;
        text-align: left;
        margin-bottom: 48px;
        margin-top: 48px;
    }

    .workCard div{
        width: 50%;
    }

    main div{
        color: black;
        justify-content: center;
        margin-top: -8px;
        width: 100%;
    }

    main{
        margin-left: 172px;
        margin-right: 172px;
        text-align: left;
        margin-top: 12px;
        position: relative;
        margin-bottom: 64px;
    }

    @media only screen and (max-width: 790px) {
        main{
            padding: 0px;
            margin-right: 0px;
            margin-left: 0px;
        }
        h1{
            font-size: 20px;
        }
        .jobTitle{
            font-size: 18px;
        }
        .workCard div{
            width: 100%;
        }


        .workCard{
            display: flex;
            flex-direction: column;
        }

        .workCard, p{
            font-size: 12px;
            max-width: 100%;
        }
        .lines{
            font-size: 10px;
        }
    }

</style>