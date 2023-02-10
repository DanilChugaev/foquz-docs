<template>
    <div class="element">
        <span class="element__title">{{title}}</span>

        <IndicatorsContainer
            v-if="indicators.length"
            :indicators="indicators"
        />

        <span
            v-if="warning"
            class="element__warning"
        >
            {{warning}}
        </span>

        <Description
            v-if="description"
            :text="description"
        />

        <ActionsContainer
            class="element__actions-container"
            @onEditClick="() => {}"
            @onDeleteClick="() => {}"
        />
    </div>
</template>

<script lang="ts">
import ActionsContainer from './components/actions-container.vue';
import Description from './components/description.vue';
import IndicatorsContainer from './components/indicators-container.vue';

export default {
    name: 'list-element',

    components: {
        ActionsContainer,
        Description,
        IndicatorsContainer,
    },

    props: {
        title: {
            type: String,
            required: true,
        },

        indicators: {
            type: Array,
            default: () => [],
        },

        warning: {
            type: String,
            default: '',
        },

        description: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scoped lang="scss">
    .element {
        display: flex;
        align-items: center;
        width: 100%;
        height: 35px;
        border: 1px solid var(--list-item-border-color);
        padding: 0 var(--spacer-a) 0 var(--spacer-c);
        background-color: var(--white-color);
        gap: var(--spacer-c);

        & + .element {
            margin-top: -1px;
        }

        &__title {
            font-weight: 400;
            font-size: 13px;
            line-height: 108%;
            white-space: nowrap;
        }

        &__warning {
            color: var(--pink-color);
            font-weight: 400;
            font-size: 11px;
            line-height: 108%;
        }

        &__actions-container {
            margin-left: auto;
        }
    }
</style>
