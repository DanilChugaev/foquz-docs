<template>
    <span
        class="indicator"
        :style="[
            `background-color: ${color}`
        ]"
    ></span>
</template>

<script lang="ts">
export default {
    name: 'indicator',

    props: {
        color: {
            type: String,
            required: true,
        }
    },
};
</script>

<style scoped lang="scss">
    .indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;

        &:hover {
            border: 1px solid var(--black-color);
            box-shadow: 0 4px 4px var(--indicator-shadow-color);
        }
    }
</style>
