<template>
    <div class="category" :id="id">
        <div class="category__header">
            <UiButton
                :class="{
                    'category__open-button': true,
                    'category__open-button--rotated': isVisibleContent,
                }"
                @click="isVisibleContent = !isVisibleContent"
            >
                <template #icon>
                    <IconArrow class="category__arrow-icon"/>
                </template>
            </UiButton>

            <span class="category__title">{{title}}</span>

            <IndicatorsContainer
                v-if="indicators.length"
                :indicators="indicators"
            />

            <Description
                v-if="description"
                :text="description"
            />

            <ActionsContainer
                class="category__actions-container"
                @onEditClick="() => {}"
                @onDeleteClick="() => {}"
                @onMoveClick="() => {}"
            />
        </div>

        <div
            ref="content"
            class="category__content"
            :style="[
                `max-height: ${contentHeight}`
            ]"
        >
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import IconArrow from '~/components/icons/arrow.vue';
import UiButton from '~/components/button.vue';
import ActionsContainer from './components/actions-container.vue';
import Description from './components/description.vue';
import IndicatorsContainer from './components/indicators-container.vue';

export default {
    name: 'list-category',

    components: {
        IconArrow,
        UiButton,
        Description,
        ActionsContainer,
        IndicatorsContainer,
    },

    props: {
        id: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        indicators: {
            type: Array,
            default: () => [],
        },

        description: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            isVisibleContent: false,
        };
    },

    computed: {
        /** Вычисляем высоту контента */
        contentHeight(): string | number {
            if (this.isVisibleContent && this.$refs.content) {
                return `${this.$refs.content.scrollHeight}px`;
            }

            return '0px';
        }
    },
};
</script>

<style scoped lang="scss">
    .category {
        overflow: hidden;
        width: 100%;

        &__header {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 48px;
            border: 1px solid var(--list-item-border-color);
            padding: 0 var(--spacer-a) 0 var(--spacer-c);
            background-color: var(--white-color);
            gap: var(--spacer-c);
            // margin-top: -1px;
            z-index: 2;
        }

        &__open-button {
            min-width: 22px;
            min-height: 22px;
            transition: transform 0.3s linear;

            &--rotated {
                transform: rotate(180deg);
            }
        }

        &__arrow-icon {
            color: var(--blue-color);
        }

        &__title {
            font-weight: 500;
            font-size: 15px;
            line-height: 108%;
            white-space: nowrap;
        }

        &__actions-container {
            margin-left: auto;
        }

        &__content {
            position: relative;
            width: 100%;
            padding-left: var(--spacer-c);
            overflow: hidden;
            max-height: 0;
            will-change: max-height;
            transition: max-height 0.3s linear;
            z-index: 1;

            &--is-visible {
                max-height: 70px;
            }
        }
    }
</style>