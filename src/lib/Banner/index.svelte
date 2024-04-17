<main>
    <div style="position: absolute; width: 100vw;">
        <script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"></script>
        <section style="display: flex;">
            <svg
                style="position: absolute; left: calc(50% - 550px);"
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
                    fill="#463B47"
                    ></path>
                </g>
                <g transform="translate(509.54377535978017 281.49390864595887)" style="visibility: hidden">
                    <path
                    id="blob2"
                    d="M142.2 -148.1C186.4 -98.1 225.7 -49 205.6 -20.1C185.5 8.8 106 17.7 61.8 50C17.7 82.3 8.8 138.2 -28 166.2C-64.8 194.2 -129.6 194.3 -165 162C-200.3 129.6 -206.2 64.8 -196.5 9.7C-186.8 -45.5 -161.6 -91 -126.3 -141C-91 -191 -45.5 -245.5 1.8 -247.3C49 -249 98.1 -198.1 142.2 -148.1"
                    fill="#463B47"
                    ></path>
                </g>
            </svg>

            <svg
                style="position: absolute; left: calc(50% - 150px);"
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
                    fill="#72675B"
                    ></path>
                </g>
                <g transform="translate(509.54377535978017 281.49390864595887)" style="visibility: hidden">
                    <path
                    id="blob4"
                    d="M113.6 -117.3C138.1 -89.1 142.5 -44.5 136.4 -6.1C130.3 32.3 113.6 64.6 89.1 101.2C64.6 137.9 32.3 179 -7.5 186.5C-47.4 194 -94.8 168.1 -144.8 131.4C-194.8 94.8 -247.4 47.4 -228.1 19.3C-208.8 -8.8 -117.7 -17.7 -67.7 -45.8C-17.7 -74 -8.8 -121.5 17.9 -139.4C44.5 -157.2 89.1 -145.4 113.6 -117.3"
                    fill="#72675B"
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
                { path: '#blob4' },
                { path: '#blob3' },
                { repeat: 999, duration: 4000, yoyo: true }
            ).start();
            </script>
        </section>
    </div>
    <div class="bg">
        <p>
            Bem vindo à um pedacinho do que eu faço,<br />
            Qualquer bug e dica pode ser direcionado para
            <a href="mailto:pedrothiagojosedasilva@gmail.com">
                pedrothiagojosedasilva@gmail.com
            </a>
        </p>
    </div>
</main>

<script lang="ts">
</script>

<style>
    .bg {
        text-align: center;
        padding-top: 190px;
        position: absolute;
        width: 100%;
        height: calc(620px - 190px);
        font-size: 20px;
    }

    main {
        position: relative;
        width: 100%;
        height: 620px;
        background-color: #242424;
    }

    @media only screen and (max-width: 790px) {
        .bg{
            font-size: 18px;
        }
        main{
            height: 520px;
        }
    }
</style>
