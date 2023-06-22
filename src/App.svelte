<script>
  import { translate } from './translator';
  let originalText = '';
  let translated = '';
  let emoji = ':egg:';

  function clickTranslate() {
    console.log(originalText);
    translated = translate(originalText, emoji);
    console.log(translated);
  }

  function copy() {
    navigator.clipboard.writeText(translated);
  }
</script>

<main>
  <h1>Text to emoji translator</h1>

  <div class="card">
    <label for="emoji">Emoji:</label>
    <input type="text" bind:value={emoji} />
  </div>
  <div class="card">
    <input class="text-input" type="text" bind:value={originalText} />
    <button on:click={clickTranslate}>
      Translate!
    </button>
  </div>
  {#if translated}
    <button on:click={copy}>Copy</button>

    <pre class="translated-emoji">{translated}</pre>
  {/if}
</main>

<style>
  .text-input {
    margin: 1rem;
  }
  .translated-emoji {
    white-space: pre;
    text-align: start;
  }
</style>
