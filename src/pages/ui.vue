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
    },
};
</script>

<style scoped lang="scss">
    .ui {
        padding: var(--spacer-d);
    }

    .container {
        display: flex;
        align-items: center;
        margin-top: var(--spacer-b);

        svg + svg,
        .indicator + .indicator {
            margin-left: var(--spacer-b);
        }
    }
</style>
