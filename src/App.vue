<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const layout = computed(() => {
    return router.currentRoute.value.meta.layout + '-layout';
});
</script>
