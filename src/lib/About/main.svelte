<main>
    <div class="imageColumn">
        <div class="imageDiv">
            <div class="imageOutline"></div>
            <div class="image"></div>
            <p> Me, very happy with the meal that i just eated, Curitiba - 2023 </p>
        </div>
    </div>

    <div class="textColumn">
        <h1> Lorum iPsum aaaa </h1>
        <p> Nulla facilisi. Nam posuere malesuada ligula a pellentesque. Nunc imperdiet, nulla ac ullamcorper efficitur, nisi lorem congue sapien, a dapibus est est vitae mi. Vivamus viverra risus fringilla purus convallis semper. Quisque efficitur pretium consectetur. Pellentesque sit amet mauris id magna sagittis laoreet. Pellentesque quis sollicitudin massa.</p>
        <h1> Fusce sit amet est </h1>
        <p>    Fusce sit amet est felis. ibh tortor cursus nunc, a sollicitudin neque libero quis tellus. Phasellus rutrum diam vel volutpat gravida. Integer rhoncus, ante in laoreet consequat, sapien ex rhoncus magna, ac interdum velit magna eget ipsum. Cras nec facilisis lacus. Suspendisse mauris nibh, volutpat et sem eget, ornare dictum leo. </p>
        <h1 class="quote"> "Imagine some really cool text here" </h1>
        <p class="quote">   writed by somebody that i care about. </p>
   
    </div>
</main>

<script>
    
</script>


<style>
    .quote{
        text-align: right !important;
        left: calc(20% - 32px) !important;
        width: 80%;
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