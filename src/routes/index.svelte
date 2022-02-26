<script lang="ts">
  import { onMount } from 'svelte';
  import dayjs from 'dayjs';

  let format = 'h:mm:ss A';
  let time: string = dayjs().format(format);

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('24hour')) {
      format = 'HH:mm:ss';
    }
  });

  setInterval(() => {
    time = dayjs().format(format);
  }, 100)
</script>

<style>
  .main {
    font-family: 'Courier New', Courier, monospace;
    background: none;
    background-color: transparent;
    position: fixed;
    width: 100vw;
    height: 100vh;
    font-size: calc(10vw + 10vh);
    text-align: center;
    background: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="main">
  <p>{time}</p>
</div>
