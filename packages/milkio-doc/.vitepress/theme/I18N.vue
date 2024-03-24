<script setup></script>

<template>
  <div class="enable-i18n">
    <slot />
  </div>
</template>

<style>
:not(.i18n-loaded) .enable-i18n {
  /* display: none; */
  opacity: 0;
}

.i18n-loaded .enable-i18n {
  /* display: block; */
  opacity: 1;
}

.lang-zh {
  display: none;
}
</style>
