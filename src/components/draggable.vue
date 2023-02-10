<template>
    <div
        :class="{
            'draggable': true,
            'draggable--is-draggable': isDraggable,
            'draggable--is-over': isOver,
        }"
        :data-id="id"
        :data-group="group"
        :draggable="isDraggable"
        @dragend="handleDragend"
        @dragover="handleDragover"
        @dragleave="handleDragleave"
        @mousedown="handleMousedown"
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
        parent: {
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
        handleMousedown(event) {
            this.isDraggable = event.target.dataset.role === 'move-button';

            if (this.isDraggable) {
                event.stopPropagation();
            }
        },

        handleDragend() {
            this.isDraggable = false;
        },

        handleDragover(event) {
            event.stopPropagation();

            if (this.group === document.querySelector('.draggable--is-draggable').dataset.group) {
                this.isOver = true;
            }
        },

        handleDragleave(event) {
            event.stopPropagation();

            clearTimeout(this.timerId);

            this.timerId = setTimeout(() => {
                this.isOver = false;
                const dataset = document.querySelector('.draggable--is-draggable').dataset;

                if (!this.isDraggable && this.group === dataset.group && this.id !== dataset.is) {

                    console.log('this.id', this.id);
                    console.log('this.group', this.group);
                    console.log('this.parent', this.parent);
                    console.log('dataset', dataset);


                    this.$emit('onchange', {
                        newPositionId: this.id,
                        oldPositionId: dataset.id,
                        group: dataset.group,
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
