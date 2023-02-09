<template>
    <div class="docs">
        <div class="docs__header">
            <h2 class="docs__title">Документы</h2>

            <div class="docs__actions">
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
            </div>
        </div>

        <div class="docs__container">
            <UiInput
                v-model="searchValue"
                class="docs__search"
            />

            <div class="docs__list-container">
                <div class="docs__list">
                    <CategoryItem
                        v-for="category in filteredCategories"
                        :key="category.id"
                        :id="category.id"
                        :title="category.title"
                        :indicators="category.indicators"
                        :description="category.description"
                    >
                        <ElementItem
                            v-for="element in category.elements"
                            :key="element.id"
                            :id="element.id"
                            :title="element.title"
                            :indicators="element.indicators"
                            :warning="element.warning"
                            :description="element.description"
                        />
                    </CategoryItem>
                </div>

                <div class="docs__list">
                    <ElementItem
                        v-for="element in filteredElements"
                        :key="element.id"
                        :id="element.id"
                        :title="element.title"
                        :indicators="element.indicators"
                        :warning="element.warning"
                        :description="element.description"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import IconPlus from '~/components/icons/plus.vue';
import IconBookmark from '~/components/icons/bookmark.vue';
import UiButton from '~/components/button.vue';
import UiInput from '~/components/input.vue';
import CategoryItem from '~/components/list/category.vue';
import ElementItem from '~/components/list/element.vue';

interface ElementItemInterface {
    id: string;
    title: string;
    indicators: string[];
    warning: string;
    description: string;
}

interface CategoryItemInterface {
    id: string;
    title: string;
    indicators: string[];
    description: string;
    elements: ElementItemInterface[];
}

export default {
    name: 'docs',

    components: {
        IconPlus,
        IconBookmark,
        UiButton,
        UiInput,
        CategoryItem,
        ElementItem,
    },

    data() {
        return {
            searchValue: '',
            categories: [
                {
                    id: 'c1',
                    title: 'Обязательные для всех',
                    indicators: ['#FF8D23', '#FFB800', '#FF238D'],
                    description: 'Документы, обязательные для всех сотрудников без исключения',
                    elements: [
                        {
                            id: 'e1',
                            title: 'Паспорт',
                            indicators: ['#00C2FF'],
                            warning: 'Обязательный',
                            description: 'Для всех',
                        },
                        {
                            id: 'e2',
                            title: 'ИНН',
                            indicators: [],
                            warning: 'Обязательный',
                            description: 'Для всех',
                        },
                    ],
                },
                {
                    id: 'c2',
                    title: 'Обязательные для трудоустройства',
                    indicators: [],
                    description: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от гражданства',
                    elements: [
                        {
                            id: 'e3',
                            title: 'Улучшенный паспорт',
                            indicators: ['#FF8D23'],
                            warning: 'Надо',
                            description: '',
                        },
                        {
                            id: 'e4',
                            title: 'Просто бумажка',
                            indicators: ['#FF8D23', '#FFB800', '#FF238D', '#00C2FF', '#8E9CBB', '#0066FF'],
                            warning: 'Надо',
                            description: '',
                        },
                    ],
                },
                {
                    id: 'c3',
                    title: 'Специальные',
                    indicators: [],
                    description: '',
                    elements: [
                        {
                            id: 'e5',
                            title: 'Специальный паспорт',
                            indicators: ['#00C2FF'],
                            warning: '',
                            description: 'Важный документ',
                        },
                        {
                            id: 'e6',
                            title: 'Просто бумажка',
                            indicators: ['#8E9CBB', '#0066FF'],
                            warning: 'Тоже надо',
                            description: '',
                        },
                        {
                            id: 'e7',
                            title: 'Супер бумажка',
                            indicators: ['#FFB800'],
                            warning: '',
                            description: '',
                        },
                    ],
                },
            ],
            elements: [
                {
                    id: 'e8',
                    title: 'Тестовое задание кандидата',
                    indicators: [],
                    warning: '',
                    description: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
                },
                {
                    id: 'e9',
                    title: 'Трудовой договор',
                    indicators: ['#0066FF', '#8E9CBB'],
                    warning: '',
                    description: '',
                },
                {
                    id: 'e10',
                    title: 'Мед. книжка',
                    indicators: [],
                    warning: '',
                    description: '',
                },
            ],
        };
    },

    computed: {
        filteredCategories(): CategoryItemInterface[] {
            if (this.searchValue) {
                return this.categories.filter(({title, elements}) => {
                    return title.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0
                    || elements.some((element) => element.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0);
                });
            }

            return this.categories;
        },

        filteredElements(): ElementItemInterface[] {
            if (this.searchValue) {
                return this.elements.filter(({title}) => {
                    return title.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0;
                });
            }

            return this.elements;
        },
    },
};
</script>

<style scoped lang="scss">
    .docs {
        padding: var(--spacer-f);

        &__header,
        &__actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__title {
            font-size: 22px;
            line-height: 108%;
            font-weight: 500;
            color: var(--text-color);
        }

        &__actions {
            gap: var(--spacer-b);
        }

        &__search {
            margin-top: var(--spacer-d);
            margin-bottom: var(--spacer-d);
        }

        &__container {
            width: 100%;
            max-width: 1190px;
        }

        &__list-container {
            display: flex;
            flex-direction: column;
            gap: var(--spacer-c);
        }
    }
</style>
