<script setup lang="ts">
import SideBar from '~/components/GlobalComponents/SideBar.vue';

</script>

<template>
   <div class="flex">
    <!-- Sidebar Component -->
    <SideBar class="" />

    <!-- Main Content -->
    <main class="flex-1 p-4">
      <slot />
    </main>
  </div>
  </template>