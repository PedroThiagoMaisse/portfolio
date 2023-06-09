<script lang="ts">
  import Appbar from './lib/appbar/index.svelte'
  import Banner from './lib/Banner/index.svelte'
  import About from './lib/About/main.svelte'
  import Curriculum from './lib/Curriculum/main.svelte'
  import Projects from './lib/Projects/main.svelte'
  import Dialog from './lib/Dialog/main.svelte'
</script>

<main>
  <Dialog />
  <Appbar />
  <div style=" padding: 0px; height: calc(100vh - 60px);overflow-y: auto; overflow-x: hidden; width: 100vw;">
    <Banner />
    <About />
    <Curriculum />  
    <Projects />

  </div>
</main>

<style>

  main{
    width: 100%;
    min-height: 100vh;
  }
</style>
