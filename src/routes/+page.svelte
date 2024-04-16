<script>
    import './app.css';
    import Appbar from '../lib/appbar/index.svelte'
    import Banner from '../lib/Banner/index.svelte'
    import About from '../lib/About/main.svelte'
    import Curriculum from '../lib/Curriculum/main.svelte'
    import Projects from '../lib/Projects/main.svelte'
    import Modals from '../lib/globals/modals.svelte'
    
</script>

<main>
    <!-- <Modals PageConstructList={[{title: "uepa", subTitle: "no", text: "aham", actionButtons: [{text: "testando", action: () => {console.log("1,2,3")}}], "type": "form"}]}></Modals> -->
    <Appbar />
    <div class="mainDiv" style=" padding: 0px 120px; height: calc(100vh - 54px);overflow-y: auto; overflow-x: hidden; width: calc(100% - 240px); text-align: center">
        <Banner />
        <About />
        <Projects />
        <Curriculum />  
        
    </div>
</main>

<style>

main{
    position: relative;
    width: 100%;
    min-height: 100vh;
}
</style>  