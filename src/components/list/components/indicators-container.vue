<template>
    <div class="indicators-container">
        <Indicator
            v-for="item in indicators"
            :key="item.id"
            :color="item"
        />
    </div>
</template>

<script lang="ts">
import Indicator from '~/components/indicator.vue';

export default {
    name: 'list-indicators-container',

    components: {
        Indicator,
    },

    props: {
        indicators: {
            type: Array,
            required: true,
        }
    },
};
</script>

<style scoped lang="scss">
    .indicators-container {
        display: flex;
        gap: var(--spacer-a);
    }
</style>
