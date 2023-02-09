<template>
    <span class="description">
        {{text}}
    </span>
</template>

<script lang="ts">
export default {
    name: 'list-description',

    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
    .description {
        position: relative;
        font-weight: 400;
        font-size: 11px;
        line-height: 108%;
        width: 100%;
        max-width: 718px;
        color: var(--gray-blue-color);
        white-space: nowrap;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 20px;
            background: linear-gradient(270deg, var(--white-color) 0%, transparent 50%);
        }
    }
</style>
