<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Appbar from './lib/appbar/index.svelte'
  import Banner from './lib/Banner/index.svelte'
  import About from './lib/About/main.svelte'
  import Curriculum from './lib/Curriculum/main.svelte'
  import Projects from './lib/Projects/main.svelte'
</script>

<main>
  <Appbar />
  <div style=" padding: 0px; height: calc(100vh - 56px);overflow-y: auto; overflow-x: hidden; width: 100vw;">
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
