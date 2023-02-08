<template>
    <div class="app-container">
        <header class="app-container__header">
            <h1 class="app-container__title">Тестовое задание Foquz</h1>

            <nav class="app-container__nav">
                <router-link class="app-container__link" to="/docs">Документы</router-link>

                <router-link class="app-container__link" to="/">ТЗ</router-link>

                <router-link class="app-container__link" to="/ui">UI</router-link>
            </nav>
        </header>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
export default {
    name: 'App',
};
</script>

<style lang="scss">
    @import "./assets/scss/index.scss";

    .app-container {
        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            padding: 0 var(--spacer-d);
        }

        &__nav {
            margin-left: 100px;
        }

        &__link {
            color: var(--text-color);

            & + .app-container__link {
                margin-left: var(--spacer-b);
            }

            &:hover {
                color: var(--link-hover-color);
            }
        }
    }
</style>
