<main>
    <div>
        <h1>
            Experiências de Trabalho
        </h1>

        {#each jobs as element, i (element)}
            <div class="workCard">
                <div style="width: 50%;">
                    <p>
                        <spam class="jobTitle"> {element.Title} </spam><br>
                        {element.Start} - {element.End}
                    </p>
                </div>
                <div style="">
                    <p>
                        {element.text}
                    </p>
                    {#each element.Stack as line}
                    <p style="font-size: 14px; line-height: 100%">    
                        - {line}
                    </p>
                    {/each}
                </div>
                
            </div>
        {/each}
    </div>

</main>

<script lang="ts">
    const jobs = [
        {
            Company: "Embarca",
            Title: "Embarca - Dynamic Pricing",
            Start: "Dez 2023",
            End: "Atual",
            Stack: [
                "Python",
                "AWS",
                "State Machines",
                "Airflow",
                "Elastic"
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
                "TypeScript",
                "IBM Watson Assistent",
                "Docker",
                "Azure",
                "Mongo Db"
            ],
            text: "Centro de excelencia com o objetivo de centralizar a criação e manutenção dos bots corporativos da empresa, que somam mais de 4,4M de Mensagens mensais. Atuei com a organização do time, conexão com outras áreas e resolvimentos de bugs, assim na criação de bots emergenciais. Principais tecnologias da stack:"
        },
        {
            Company: "BRF Food - Digital Lab",
            Title: "BRF - Hub de Estagiários",
            Start: "Maio 2022",
            End: "Janeiro 2023",
            Stack: [
                "FrontEnd (Vue, React e Next)",
                "Backend (Node)",
                "Agildidade",
                "UX/UI",
                "Dados (Cientistas e Engenheiros)",
                "RPA"

            ],
            text: "Hub de formação de estagiário que possibilitava o avanço de soft e hardskills focados em diversas formações do mundo tech. Atuei com a coordenação e acompanhamento dos 30+ estagiários do programa, assim como mentor de front, back e agilidade. Os grupos de estagiários eram:"
        },
        {
            Company: "BRF Food - Digital Lab",
            Title: "BRF - BRFCode",
            Start: "Abril 2021",
            End: "Fevereiro 2022",
            Stack: [
                "Desenvolvi aplicações web, desktop e mobile",
                "Desenvolvi e Mantive uma plataforma que alcançou 100k de usuários em seu primeiro ano",
                "Refatorei códigos e ferramentas com ênfase em melhor manutenção e experiência"
            ],
            text: "Plataforma para acompanhamento e contagem de entregas (focadas em kits natalinos) totalmente interna da impresa. Minha atividade no projeto começou como desenvolvedor frontend e acabei me movendo para '"
        }

    ]

</script>


<style>
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
        font-size: 24px;
        font-weight: 600;
    }

    .workCard{
        display: flex;
        padding: 2px;
        margin: auto;
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