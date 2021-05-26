<template>
    <div class="pa-8 pt-2">
        <v-card
            color="mc-dark"
            class="pa-4 mb-8"
            shaped
            v-for="test in tests"
            :key="tests.indexOf(test)+1"
        >
            <div class="d-flex justify-space-between">
                <v-card-title
                    class="ma-0 mb-3 pa-0"
                >
                    Test#{{ tests.indexOf(test)+1 }}
                </v-card-title>
                <v-btn
                    v-if="tests.length>1"
                    icon
                    @click="tests.splice(tests.indexOf(test), 1)"
                >
                    <v-icon>mdi-minus-circle</v-icon>
                </v-btn>
            </div>
            <v-card-subtitle class="pl-0">
                Входные данные
            </v-card-subtitle>
            <div
                class="d-flex justify-space-between"
                v-for="item in test.items"
            >
                <div class="py-3 mr-5">
                    {{ test.items.indexOf(item)+1 }}.
                </div>
                <div class="card__input-type">
                    <v-select
                        class="pa-0 mr-5"
                        label="Тип"
                        :items="['Boolean', 'String', 'Number', 'Any']"
                        v-model="item.type"
                    />
                </div>
                <div class="card__input-value">
                    <v-text-field
                        :label="`Значение (${item.type || 'Выерите тип'})`"
                        v-if="item.type!=='Boolean'"
                        dense
                        outlined
                        v-model="item.value"
                        v-mask="getMask(item)"
                        :disabled="!item.type"
                    />
                    <v-select
                        label="Значение"
                        v-if="item.type==='Boolean'"
                        :items="[true, false]"
                        class="pa-0"
                        v-model="item.value"
                        :disabled="!item.type"
                        outlined
                        dense
                    />
                </div>

                <v-btn
                    v-if="test.items.length>1"
                    @click="test.items.splice(test.items.indexOf(item), 1)"
                    icon
                >
                    <v-icon>mdi-minus-circle</v-icon>
                </v-btn>
            </div>
            <v-btn
                class="mb-5"
                @click="test.items.push({type: '', value: ''})"
                color="primary"
                :disabled="test.items.length>10"
            >
                <v-icon>mdi-plus-circle</v-icon>
                 Входные данные
            </v-btn>

            <v-card-subtitle class="pl-0">
                Выходные данные
            </v-card-subtitle>

            <div class="d-flex justify-space-between">
                <div class="card__input-type">
                    <v-select
                        class="pa-0 mr-5"
                        label="Тип"
                        :items="['Boolean', 'String', 'Number', 'Any']"
                        v-model="test.output.type"
                    />
                </div>
                <div class="card__input-value">
                    <v-text-field
                        :label="`Значение (${test.output.type || 'Выберите тип'})`"
                        v-if="test.output.type!=='Boolean'"
                        dense
                        outlined
                        v-model="test.output.value"
                        v-mask="getMask(test.output)"
                        :disabled="!test.output.type"
                    />
                    <v-select
                        label="Значение"
                        v-if="test.output.type==='Boolean'"
                        :items="[true, false]"
                        class="pa-0"
                        v-model="test.output.value"
                        :disabled="!test.output.type"
                        outlined
                        dense
                    />
                </div>
            </div>
        </v-card>

        <v-btn
            class="mb-5"
            @click="addTest"
            color="primary"
            :disabled="tests.length>4"
        >
            <v-icon>mdi-plus-circle</v-icon>
             Добавить тест
        </v-btn>
        <br>

        <v-btn @click="$emit('goBack')">Назад</v-btn>
        <v-btn
            color="success"
        >
            Далее
        </v-btn>
    </div>
</template>

<script>
    import createNumberMask  from 'text-mask-addons/dist/createNumberMask';
    const currencyMask = createNumberMask ({
        prefix: '',
        allowDecimal: true,
        thousandsSeparatorSymbol: ' ',
        allowNegative: true,
        integerLimit: 15,
    });
    export default {
        name: "TaskTest",
        components: {

        },
        data() {
            return {
                numberMask: currencyMask,
                tests: [
                    {
                        items: [
                            {
                                type: "",
                                value: ""
                            }
                        ],
                        output: {
                            type: "",
                            value: ""
                        }
                    }
                ],
            }
        },
        methods: {
            addTest() {
                this.tests.push({
                    items: [
                        { type: "", value: "" },
                    ],
                    output: {type: "", value: "", }
                })
            },
            getMask(item) {
                return item.type === 'Number' ?
                        this.numberMask
                        :'X'.repeat(255)
            }
        }
    }
</script>

<style scoped>
    .card__input-type {
        width: 40%;
    }

    .card__input-value {
        width: 60%;
    }
</style>