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

    </div>
</template>

<script lang="ts">
import IconPlus from '~/components/icons/plus.vue';
import IconBookmark from '~/components/icons/bookmark.vue';
import UiButton from '~/components/button.vue';

export default {
    name: 'docs',

    components: {
        IconPlus,
        IconBookmark,
        UiButton,
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
    }
</style>
