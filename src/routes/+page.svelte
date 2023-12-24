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
    <dialog open style="background-color: rgba(0,0,0,0); border-width: 0px; padding: 0px; z-index: 300">
        <Modals pageDetails={{title: "uepa", subTitle: "no", text: "aham", actionButtons: [{text: "testando", action: () => {console.log("1,2,3")}}]}}></Modals>
    </dialog>
<Appbar />
<div style=" padding: 0px; height: 100vh;overflow-y: auto; overflow-x: hidden; width: 100vw; text-align: center">
    <Banner />
    <About />
    <Curriculum />  
    <Projects />

</div>
</main>

<style>

main{
    position: relative;
    width: 100%;
    min-height: 100vh;
}
</style>  