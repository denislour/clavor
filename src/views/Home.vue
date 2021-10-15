<template>
    <h1>aa123</h1>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const name = computed(() => {
    return store.state.user.name;
});
const newName = ref('');

function saveName() {
    store.dispatch('saveName', newName.value);
    newName.value = '';
    router.push('/about');
}
</script>
