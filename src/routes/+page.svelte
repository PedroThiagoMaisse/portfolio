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
    <div class="mainDiv" style=" padding: 0px 120px; height: calc(100vh - 54px);overflow-y: auto; overflow-x: hidden; width: calc(100% - 240px); text-align: center">
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
        <div style="background-color: #333; width: 100vw; height: 24px; position: relative; left: -120px"></div>
    </div>
</main>

<style>

section{
    margin: 40px 0px 40px 0px;
}

main{
    position: relative;
    width: 100%;
    min-height: 100vh;
}
</style>  