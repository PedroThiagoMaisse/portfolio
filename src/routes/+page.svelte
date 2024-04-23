<script lang="ts">
    import './app.css';
    import Appbar from '../lib/appbar/index.svelte'
    import Banner from '../lib/Banner/index.svelte'
    import About from '../lib/About/main.svelte'
    import Curriculum from '../lib/Curriculum/main.svelte'
    import Projects from '../lib/Projects/main.svelte'
    import Modals from '../lib/globals/modals.svelte'
    import Contact from '../lib/Contact/index.svelte';

</script>

<main>
    
    <Appbar/>
    <!-- <Modals PageConstructList={[{title: "uepa", subTitle: "no", text: "aham", actionButtons: [{text: "testando", action: () => {console.log("1,2,3")}}], "type": "form"}]}></Modals> -->
    <div class="mainDiv">
        <section id="banner">
            <Banner/>
        </section>
        <section id="about">
            <About/>
        </section>
        <section id="projects">
            <Projects/>
        </section>
        <section id="curriculum">
            <Curriculum/>  
        </section>
        <section id="contact">
            <Contact/>  
        </section>
        <div class="footer"></div>
    </div>
</main>

<style>

section{
    margin: 0px 0px 72px 0px;
}

main{
    position: relative;
    width: 100%;
    min-height: 100vh;
}
.mainDiv{
    padding: 0px 120px; 
    width: calc(100% - 240px);
    height: calc(100vh - 54px);
    overflow-y: auto; 
    overflow-x: hidden; 
    text-align: left
}

.footer{
    background-color: #333;
    width: 100vw; 
    height: 24px; 
    position: relative; 
    left: -120px
}

@media only screen and (max-width: 790px) {
        .mainDiv{
            padding: 0px 20px;
            width: calc(100% - 40px);
            overflow: visible;
        }

        .footer{
            width: calc(180vw + 120px);
            padding: 0px;
            left: -20px;
        }
    }
</style>  