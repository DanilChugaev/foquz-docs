<template>
    <div
        :class="{
            'draggable': true,
            'draggable--is-draggable': isDraggable,
            'draggable--is-over': isOver,
        }"
        :data-id="id"
        :data-group="group"
        :data-parentid="parentid"
        :draggable="isDraggable"
        @dragend="handleDragend"
        @dragover="handleDragover"
        @dragleave="handleDragleave"
        @mousedown="handleMousedown"
        @mouseup="handleMouseup"
    >
        <slot />
    </div>
</template>

<script lang="ts">
export default {
    name: 'draggable',

    props: {
        id: {
            type: String,
            required: true,
        },
        group: {
            type: String,
            required: true,
        },
        parentid: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            isDraggable: false,
            isOver: false,
            timerId: null,
        };
    },

    methods: {
        handleMousedown(event: MouseEvent): void {
            this.isDraggable = event.target.dataset.role === 'move-button';

            if (this.isDraggable) {
                event.stopPropagation();
            }
        },

        handleMouseup(): void {
            this.isDraggable = false;
        },

        handleDragend(): void {
            this.isDraggable = false;
        },

        handleDragover(event: Event): void {
            event.stopPropagation();

            const element = document.querySelector('.draggable--is-draggable');
            const dataset = element?.dataset;

            if (dataset && this.group === dataset.group) {
                this.isOver = true;
            }
        },

        handleDragleave(event: Event): void {
            event.stopPropagation();

            clearTimeout(this.timerId);

            this.timerId = setTimeout(() => {
                this.isOver = false;
                const element = document.querySelector('.draggable--is-draggable');
                const dataset = element?.dataset;

                if (!this.isDraggable && dataset && this.group === dataset.group && this.id !== dataset.is) {
                    this.$emit('onchange', {
                        newPositionId: this.id,
                        oldPositionId: dataset.id,
                        group: dataset.group,
                        oldParentid: dataset.parentid,
                        newParentid: this.parentid,
                    });
                }
            }, 100);
        },
    },
};
</script>

<style scoped lang="scss">
    .draggable {
        position: relative;

        &--is-draggable {
            opacity: 0.2;
        }

        &--is-over {
            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 5px;
                background-color: var(--blue-color);
                z-index: 2;
            }
        }
    }
</style>
