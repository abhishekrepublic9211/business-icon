<script lang="ts">
  import { loading } from '$lib/stores/loading';
</script>

{#if $loading}
  <div class="loading-bar"></div>
{/if}

<style>
  .loading-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #007bff; /* Or any color you prefer */
    z-index: 9999;
    animation: loading-animation 1s infinite linear;
  }

  @keyframes loading-animation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>
