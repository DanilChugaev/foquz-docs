<template>
    <div class="ui">
        <h2>UI элементы</h2>
        <p>При достаточном кол-ве времени могу подключить сторибук в проект и разрабатывать с помощью него изолированные компоненты</p>

        <div class="container">
            <IconPlus />
            <IconBookmark />
            <IconLoop />
            <IconClose />
            <IconArrow />
            <IconEdit />
            <IconDelete />
            <IconMove />
        </div>

        <div class="container">
            <Indicator color="#FF8D23" />
            <Indicator color="#FFB800" />
            <Indicator color="#FF238D" />
            <Indicator color="#00C2FF" />
            <Indicator color="#8E9CBB" />
            <Indicator color="#0066FF" />
        </div>

        <div class="container">
            <UiButton>
                <template #icon>
                    <IconBookmark />
                </template>
            </UiButton>

            <UiButton>
                <template #icon>
                    <IconPlus slot="icon"/>
                </template>
                <template #default>
                    Новый тип
                </template>
            </UiButton>

            <UiButton>
                <template #icon>
                    <IconPlus slot="icon"/>
                </template>
                <template #default>
                    Новый Документ
                </template>
            </UiButton>

            <UiButton :has-border="false">
                <template #icon>
                    <IconClose />
                </template>
            </UiButton>

            <UiButton>
                <template #icon>
                    <IconArrow />
                </template>
            </UiButton>

            <UiButton :has-border="false">
                <template #icon>
                    <IconEdit />
                </template>
            </UiButton>

            <UiButton :has-border="false">
                <template #icon>
                    <IconDelete />
                </template>
            </UiButton>

            <UiButton :has-border="false">
                <template #icon>
                    <IconMove />
                </template>
            </UiButton>
        </div>

        <div class="container">
            <UiInput
                v-model="value"
                placeholder="Просто поиск"
            />
            <p>{{ value }}</p>
        </div>

        <div class="container container--vertical">
            <CategoryItem
                :key="category.id"
                :id="category.id"
                :title="category.title"
                :indicators="category.indicators"
                :description="category.description"
            >
                <ElementItem
                    :key="element.id"
                    :id="element.id"
                    :title="element.title"
                    :indicators="element.indicators"
                    :warning="element.warning"
                    :description="element.description"
                />
            </CategoryItem>
        </div>
    </div>
</template>

<script lang="ts">
import IconPlus from '~/components/icons/plus.vue';
import IconBookmark from '~/components/icons/bookmark.vue';
import IconLoop from '~/components/icons/loop.vue';
import IconClose from '~/components/icons/close.vue';
import IconArrow from '~/components/icons/arrow.vue';
import IconEdit from '~/components/icons/edit.vue';
import IconDelete from '~/components/icons/delete.vue';
import IconMove from '~/components/icons/move.vue';
import Indicator from '~/components/indicator.vue';
import UiButton from '~/components/button.vue';
import UiInput from '~/components/input.vue';
import CategoryItem from '~/components/list/category.vue';
import ElementItem from '~/components/list/element.vue';

export default {
    name: 'ui',

    components: {
        IconPlus,
        IconBookmark,
        IconLoop,
        IconClose,
        IconArrow,
        IconEdit,
        IconDelete,
        IconMove,
        Indicator,
        UiButton,
        UiInput,
        CategoryItem,
        ElementItem,
    },

    data() {
        return {
            value: '',
            category: {
                id: 'c1',
                title: 'Обязательные для всех',
                indicators: ['#FF8D23', '#FFB800', '#FF238D'],
                description: 'Документы, обязательные для всех сотрудников без исключения',
            },
            element: {
                id: 'e3',
                title: 'Улучшенный паспорт',
                indicators: ['#FF8D23'],
                warning: 'Надо',
                description: '',
            },
        };
    },
};
</script>

<style scoped lang="scss">
    .ui {
        padding: var(--spacer-f);
    }

    .container {
        display: flex;
        align-items: center;
        margin-top: var(--spacer-b);
        max-width: 1190px;

        &--vertical {
            flex-direction: column;
        }

        svg + svg,
        .indicator + .indicator {
            margin-left: var(--spacer-b);
        }
    }
</style>
