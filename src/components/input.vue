<template>
    <div
        :class="{
            'input-container': true,
            'input-container--has-focus': hasFocus,
        }"
    >
        <IconLoop class="input-container__loop-icon"/>

        <input
            class="input-container__input"
            type="text"
            :value="modelValue"
            :placeholder="placeholder"
            @focus="hasFocus = true"
            @blur="hasFocus = false"
            @input="handleInput"
            @keyup.esc="handleKeyupEsc"
        >

        <UiButton
            :class="{
                'input-container__close-button': true,
                'input-container__close-button--is-active': modelValue,
            }"
            :has-border="false"
            @click="handleClickClose"
        >
            <template #icon>
                <IconClose class="input-container__close-icon"/>
            </template>
        </UiButton>
    </div>
</template>

<script lang="ts">
import IconLoop from '~/components/icons/loop.vue';
import IconClose from '~/components/icons/close.vue';
import UiButton from '~/components/button.vue';

export default {
    name: 'ui',

    components: {
        IconLoop,
        IconClose,
        UiButton,
    },

    props: {
        modelValue: {
            type: [String, Number],
            required: true,
        },
        placeholder: {
            type: [String, Number],
            default: 'Поиск',
        },
    },

    emits: ['update:modelValue'],

    data() {
        return {
            hasFocus: false,
        };
    },

    methods: {
        /** Очищение значения инпута при нажатии на Esc */
        handleKeyupEsc(): void {
            this.handleInput('');
        },

        /** Очищение значения инпута при нажатии на крестик */
        handleClickClose(): void {
            this.handleInput('');
        },

        /** Передача значения инпута предку */
        handleInput(value: string): void {
            if (value && value.target) {
                this.$emit('update:modelValue', value.target.value);
            } else {
                this.$emit('update:modelValue', '');
            }
        }
    },
};
</script>

<style scoped lang="scss">
    .input-container {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        max-width: 564px;
        overflow: hidden;
        padding-right: var(--spacer-f);
        border-bottom: 1px solid var(--input-main-color);
        transition: border-color 0.2s ease-out;

        &__loop-icon {
            color: var(--input-main-color);
            margin-right: var(--spacer-b);
        }

        &__close-icon {
            color: var(--pink-color);
        }

        &__close-button {
            position: absolute;
            right: 0;
            transition: opacity 0.2s ease-out;
            user-select: none;
            pointer-events: none;
            opacity: 0;

            &--is-active {
                user-select: auto;
                pointer-events: all;
                opacity: 1;
            }
        }

        &__input {
            border: none;
            outline: none;
            height: 40px;
            width: 100%;
            font-size: 15px;
            line-height: 100%;
            color: var(--text-color);
            background-color: transparent;
        }

        &--has-focus {
            border-bottom-color: var(--blue-color);
        }

        ::placeholder {
            color: var(--input-main-color);
            opacity: 1;
        }

        :-ms-input-placeholder {
            color: var(--input-main-color);
        }

        ::-ms-input-placeholder {
            color: var(--input-main-color);
        }
    }
</style>
