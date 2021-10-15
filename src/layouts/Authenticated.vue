<template>
    <Navbar />
    <div class="h-screen flex flex-row flex-wrap">
        <Sidebar />
        <slot />
    </div>
</template>
<script setup>
import Navbar from '../components/base/Navbar.vue';
import Sidebar from '../components/base/Sidebar.vue';
</script>
