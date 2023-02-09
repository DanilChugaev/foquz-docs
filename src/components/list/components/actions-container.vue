<template>
    <div class="actions-container">
        <UiButton
            class="actions-container__edit-button"
            :has-border="false"
            @click="$emit('onEditClick', $event)"
        >
            <template #icon>
                <IconEdit class="actions-container__edit-icon"/>
            </template>
        </UiButton>

        <UiButton
            class="actions-container__delete-button"
            :has-border="false"
            @click="$emit('onDeleteClick', $event)"
        >
            <template #icon>
                <IconDelete class="actions-container__delete-icon"/>
            </template>
        </UiButton>

        <UiButton
            class="actions-container__move-button"
            :has-border="false"
            @click="$emit('onMoveClick', $event)"
        >
            <template #icon>
                <IconMove class="actions-container__move-icon"/>
            </template>
        </UiButton>
    </div>
</template>

<script lang="ts">
import IconEdit from '~/components/icons/edit.vue';
import IconDelete from '~/components/icons/delete.vue';
import IconMove from '~/components/icons/move.vue';
import UiButton from '~/components/button.vue';

export default {
    name: 'list-actions-container',

    components: {
        IconEdit,
        IconDelete,
        IconMove,
        UiButton,
    },
};
</script>

<style scoped lang="scss">
    .actions-container {
        display: flex;
        align-items: center;
        gap: var(--spacer-a);

        &__edit-icon,
        &__move-icon {
            color: var(--gray-blue-color);
        }

        &__delete-icon {
            color: var(--pink-color);
        }
    }
</style>
