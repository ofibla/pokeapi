<template>
<TopBar></TopBar>
<RouterView></RouterView>
</template>

<script setup lang="ts">
import TopBar from './TopBar.vue';
import { RouterView } from 'vue-router';
</script>