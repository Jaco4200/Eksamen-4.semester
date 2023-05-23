<template>
<button
    class="disabled:opacity-50"
    :disabled="loading"
    type="submit"
    @click.prevent="onClick"
    :class="{'keep': loading || loadDone || loadErr || download }"
  >
    <span v-show="loading"><i class="fa-light fa-circle-notch fa-spin"></i> </span>
    <span v-show="loadDone"><i class="fa-light fa-check"></i> </span>
    <span v-show="loadErr"><i class="fa-light fa-exclamation-circle"></i> </span>
    <span v-show="download"><i class="fa-light fa-file-arrow-down"></i> </span>
    <span v-show="!loading && !loadDone && !loadErr "><h3> {{buttonText}}</h3> </span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props= defineProps({
    download: Boolean,
    onClick: Function,
    loading: [Boolean, String],
    loadErr: [Boolean, String],
    loadStonks: Boolean,
    loadDone: [Boolean, String],
    buttonText: String,
    button: String,
});
</script>
<style scoped>
img{
  position: absolute;
  overflow: none;
  bottom: 0%;
  left: 0%;
  width: 10%;
  height: 10%;
  z-index: 10000;
  
}
.activate {
  background-color: #28a745;
}
.deactivate {
  background-color: #dc3545;
}
</style>