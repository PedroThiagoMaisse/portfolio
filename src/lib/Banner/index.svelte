<main>
    <div class="bg">
        Bem vindo à um pedacinho do que eu faço,<br />
        Qualquer bug e dica pode ser direcionado para
        <a href="mailto:pedrothiagojosedasilva@gmail.com"
            >pedrothiagojosedasilva@gmail.com</a
        > <br />
        <spam style="font-size: 12px;">
            Release: <spam style="font-weight: bold;">1.0</spam></spam
        >
    </div>
    <div style="position: absolute; width: 100vw">
        <script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"></script>
        <section style="display: flex;">
            <svg
                style="position: absolute; left: calc(50% - 550px); z-index: -20"
                id="visual"
                viewBox="0 0 960 540"
                width="960"
                height="540"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                    <path
                    id="blob1"
                    d="M108.7 -95.9C146.7 -70.7 187.4 -35.4 195.3 7.9C203.1 51.1 178.3 102.3 140.3 134.8C102.3 167.3 51.1 181.1 5.9 175.3C-39.4 169.4 -78.7 143.7 -128.7 111.2C-178.7 78.7 -239.4 39.4 -247.5 -8.1C-255.6 -55.6 -211.3 -111.3 -161.3 -136.4C-111.3 -161.6 -55.6 -156.3 -10.1 -146.2C35.4 -136 70.7 -121 108.7 -95.9"
                    fill="#00376e"
                    ></path>
                </g>
                <g transform="translate(509.54377535978017 281.49390864595887)" style="visibility: hidden">
                    <path
                    id="blob2"
                    d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                    fill="#00376e"
                    ></path>
                </g>
            </svg>

            <svg
                style="position: absolute; left: calc(50% - 150px); z-index: -20"
                id="visual"
                viewBox="0 0 960 540"
                width="660"
                height="440"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                    <path
                    id="blob3"
                    d="M159.9 -150.9C193.9 -125.9 198.9 -62.9 186.7 -12.3C174.4 38.4 144.8 76.8 110.8 111.7C76.8 146.5 38.4 177.8 -16.1 193.9C-70.7 210 -141.4 211.1 -179.6 176.3C-217.8 141.4 -223.4 70.7 -210.2 13.2C-197 -44.3 -165 -88.6 -126.8 -113.6C-88.6 -138.6 -44.3 -144.3 9.3 -153.6C62.9 -162.9 125.9 -175.9 159.9 -150.9"
                    fill="#34278c"
                    ></path>
                </g>
                <g transform="translate(509.54377535978017 281.49390864595887)" style="visibility: hidden">
                    <path
                    id="blob4"
                    d="M108.7 -95.9C146.7 -70.7 187.4 -35.4 195.3 7.9C203.1 51.1 178.3 102.3 140.3 134.8C102.3 167.3 51.1 181.1 5.9 175.3C-39.4 169.4 -78.7 143.7 -128.7 111.2C-178.7 78.7 -239.4 39.4 -247.5 -8.1C-255.6 -55.6 -211.3 -111.3 -161.3 -136.4C-111.3 -161.6 -55.6 -156.3 -10.1 -146.2C35.4 -136 70.7 -121 108.7 -95.9"
                    fill="#34278c"
                    ></path>
                </g>
            </svg>

            <script>
            blob12 = KUTE.fromTo(
                '#blob1',
                { path: '#blob1' },
                { path: '#blob2' },
                { repeat: 999, duration: 6000, yoyo: true }
            ).start();

            blob34 = KUTE.fromTo(
                '#blob3',
                { path: '#blob3' },
                { path: '#blob4' },
                { repeat: 999, duration: 3000, yoyo: true }
            ).start();
            </script>
        </section>
    </div>

    <Clickables callout={array}></Clickables>
</main>

<script lang="ts">
    import Clickables from "./clickables.svelte";

    const array = [
        {
            color: "#65706F",
            text: "Com uma bagagem em vários frameworks, minha atuação sempre foi bem diversificada, abrangendo várias linguagens e conjuntos de tecnologias, tipo:",
            title: "Desenvolvimento Web",
            list: [
                {
                    text: "Esse portfolio;",
                    link: "https://pedrothiagomaisse.github.io/newPortfolio/",
                    tags: ["SvelteKit", "TS", "GitPages"],
                },
                {
                    text: "BRFCode, uma plataforma para auxiliar na validação em entregas;",
                    link: "https://BRFCode.com",
                    tags: ["JS", "Vue", "Node", "Azure"],
                },
                {
                    text: "MOrgan, um app de organização pessoal meu.",
                    link: "https://pedrothiagomaisse.github.io/MOrgan/",
                    tags: ["Svelte", "JS", "GitPages"],
                },
            ],
        },
        {
            color: "#697065",
            list: [
                {
                    text: "Olive, uma ferramenta para monitoramento de sistemas;",
                    link: "https://pedrothiagomaisse.github.io/olive/",
                    tags: ["Go", "MongoDB"],
                },
                {
                    text: "Commit Mapping, uma ferramenta para criar uma visualização de pushs feitos em outras ferramentas;",
                    link: "https://github.com/PedroThiagoMaisse/CommitMapping",
                    tags: ["Node", "JS", "GitHub Actions", "NPX"],
                },
                {
                    text: "Embarca Challenge, um desafio sobre manipulação de dados.",
                    link: "https://github.com/PedroThiagoMaisse/data-embarca-challange-public",
                    tags: [
                        "Python",
                        "AWS",
                        "GitHub Actions",
                        "Lambda",
                        "Serveless",
                    ],
                },
            ],
            text: "De vez em quando, surge aquela necessidade ou vontade de desenvolver uma ferramenta para dar uma mão no meu dia a dia ou simplificar algum processo, tipo:",
            title: "Tooling",
        },
        // {color: '#495351',list: [], text: 'Com o propósito de auxiliar bibliotecas e enriquecer o meu conhecimento, tenho me direcionado para contribuir em projetos OpenSource, como:', title: 'Contribuições Open Source'}
    ];
    

</script>

<style>
    .bg {
        text-align: center;
        padding-top: 190px;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.4) 100%
        );
        z-index: -2;
        position: absolute;
        width: 100%;
        height: calc(560px - 190px);
    }

    main {
        position: relative;
        width: 100%;
        height: 560px;
    }
</style>
