<main>
    <div class="bg">
    </div>



    <div class="card {conc === 0 ? 'no' : 'yes'} one" on:click={expand} id="one">
    </div>

    <div class="card two">
    </div>

    <div class="card three">
    </div>



</main>

<script>
let conc = 1

const expand = () => {
    conc = conc === 1 ? 0 : 1
}
</script>


<style>
    .one{
        position: absolute;
        bottom: 56px;
        right: 400px;
    }

    .two{
        position: absolute;
        bottom: 56px;
        right: 200px;
    }

    .three{
        position: absolute;
        bottom: 56px;
        right: 0px;
    }

    .no{
        transform: translate(416px, 10%);
        border-radius: 0px !important;
        position: absolute;
        width: 100% !important;
        height: 100% !important;
        background-color: blueviolet !important;
    }

    .yes{
        background-color: chartreuse !important;
    }


    .card{
        transition: 0.9s;
        border-radius: 16px;
        min-width: 160px;
        width: 160px;
        height: 160px;
        background-color: blue;
        margin-right: 16px;
    }

    .bg{ 
        z-index: -1;
        position: absolute;
        /* background-color: brown; */
        width: 100%;
        height: 100%;
    }

    main{
        position: relative;
        width: 100%;
        height: 560px;
        background-color: aliceblue;
    }

</style>