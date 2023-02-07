<template>
    <div class="index">
        <p>
            Выполнено на основе собственного шаблона для разработки <a href="https://github.com/DanilChugaev/vite-vue3-ts-template">vite-vue3-ts-template</a>
        </p>

        <p>
            <a href="https://www.figma.com/file/W7qIKLBDyyRd4pHqy0KCOe/test-front?node-id=3031%3A5" target="__blank">
                Макет в figma
            </a>

            <a href="https://drive.google.com/file/d/1ndiZcNcRKCHjuagMkwuzW1BLZHt3xe6q/view" target="__blank">
                Скачать макет
            </a>
        </p>


        <h2>Общее</h2>

        <ol>
            <li>Для разработки использовать vue.js</li>
            <li>Действия должны быть плавными.</li>
            <li>Только для десктопа, адаптив в рамках этой задачи - не нужен.</li>
        </ol>

        <h2>Описание</h2>

        <ol>
            <li>
                <p>Нужно сделать вёрстку раздела *Документы*</p>
                <img src="https://api.monosnap.com/file/download?id=OvcPxTUlCR9ODYvjgH2FCLBugo4MqY" alt="Раздел *Документы*">
            </li>

            <li>
                <p>На первом уровне отображаются категории, которые можно свернуть и развернуть</p>
                <img src="https://api.monosnap.com/file/download?id=Bh6XyfVF5cAetlXLqyo8nwAN68McjT" alt="Список категорий">

                <p>На первом уровне также отображаются элементы, которые не относятся к категориям и отображаются внизу списка с категориями.</p>
                <img src="https://api.monosnap.com/file/download?id=Othwx39qWtvauiRTlXieEeHHa19VWk" alt="Элементы, не относящиеся к категориям">
            </li>

            <li>
                <p>Для каждого элемента в списке отображаются кнопки: *Удалить*, *Редактировать*, *Переместить*</p>
                <img src="https://api.monosnap.com/file/download?id=fnCas4tx2zyJpHYqFYleCRoc4Fk4Qz" alt="Кнопки: *Удалить*, *Редактировать*, *Переместить*">
            </li>

            <li>
                <p>В рамках задачи нужно добавить функционал "перемещения элемента в списке".</p>

                <ul>
                    <li>
                        <p>Категории можно перемещать только между собой</p>
                        <p>Таким образом, с помощью перемещения можно менять порядок</p>
                        <img src="https://api.monosnap.com/file/download?id=GgbaR8Cdvx1sBvmoURzoWogMMaUoRo" alt="Перемещение категорий">
                    </li>

                    <li>
                        <p>Элементы внутри категории можно перемещать как внутри самой категории, так и между категориями и вытаскивать в список без категории</p>
                        <img src="https://api.monosnap.com/file/download?id=IRpbY9H4muOFQfc4uns56mBEVlfUAj" alt="Перемещение между категориями">
                    </li>

                    <li>
                        <p>Перетаскивать элементы в списке можно при клике на кнопку *Переместить*</p>
                        <img src="https://api.monosnap.com/file/download?id=FkDR93Ek6f3cGf0PpkRkCNAOnjGrya" alt="Кнопка для перемещения категорий">
                    </li>
                </ul>
            </li>

            <li>
                <p>Также нужно добавить поиск по подстроке по названиям категорий и названиям элементов в категории</p>
                <img src="https://api.monosnap.com/file/download?id=YFFyP50noSM8751qnK2a8gZNJ5H2dJ" alt="Поиск по строке">

                <ul>
                    <li>
                        <p>Поиск должен работать на ввод символов</p>
                    </li>
                    <li>
                        <p>При вводе хотя бы одного символа показывать кнопку "Сбросить" ("крестик")</p>
                        <img src="https://api.monosnap.com/file/download?id=BRFGl4AbHLL6aGFoNCtnzYJSLaFsPu" alt="Появление крестика">
                    </li>
                </ul>
            </li>
        </ol>
  </div>
</template>

<script lang="ts">
export default {
    name: 'index',
};
</script>

<style scoped lang="stylus">
    // в реальном проекте в целях сохранения производительности рендеринга стили напрямую на теги не навешиваются
    .index {
        padding: var(--spacer-d);

        h2 {
            margin: var(--spacer-d) 0;
        }

        ol, ul {
            padding-left: var(--spacer-x);
            margin: var(--spacer-c) 0;
        }

        p {
            margin: var(--spacer-c) 0;
        }

        a {
            color: var(--text-color);

            & + a {
                margin-left: var(--spacer-b)
            }

            &:hover {
                color: var(--link-hover-color);
            }
        }

        img {
            max-width: 70%;
        }
    }
</style>
