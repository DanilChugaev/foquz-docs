<template>
    <button
        :class="{
            'button': true,
            'button--has-border': hasBorder,
            'button--has-icon': hasIconSlot,
            'button--has-default': hasDefaultSlot,
        }"
        type="button"
    >
        <span v-if="hasIconSlot" class="button__icon">
            <slot name="icon"></slot>
        </span>

        <span v-if="hasDefaultSlot" class="button__text">
            <slot></slot>
        </span>
    </button>
</template>


<script lang="ts">
export default {
    name: 'ui-button',

    props: {
        hasBorder: {
            type: Boolean,
            default: true,
        }
    },

    computed: {
        /** Имеет ли кнопка содержимое в дефолтном слоте */
        hasDefaultSlot(): boolean {
            return Boolean(this.$slots.default);
        },

        /** Имеет ли кнопка содержимое в слоте icon */
        hasIconSlot(): boolean {
            return Boolean(this.$slots.icon);
        },
    },
};
</script>

<style scoped lang="scss">
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        line-height: 108%;
        color: var(--text-color);
        outline: none;
        cursor: pointer;
        border-radius: none;
        border: none;
        min-width: 30px;
        min-height: 30px;
        background-color: transparent;
        transition: transform 0.1s ease-out;

        &:active {
            transform: translateY(1px);
        }

        &__text,
        &__icon {
            display: flex;
            align-items: center;
        }

        &__text {
            padding: 0 var(--spacer-b);
        }

        &--has-border {
            border: 1px solid var(--button-border-color);
            border-radius: 50px;
        }

        &--has-icon.button--has-default {
            padding: 0 var(--spacer-b);
        }
    }
</style>
