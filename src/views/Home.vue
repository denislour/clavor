<template>
    <Navbar />
    <div class="h-screen flex flex-row flex-wrap">
        <Sidebar />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';

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
