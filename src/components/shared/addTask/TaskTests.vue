<template>
    <div>
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
                    v-if="tests.length>1 && !readonly"
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
                v-for="testInput in test.inputs"
            >
                <div class="py-3 mr-5">
                    {{ test.inputs.indexOf(testInput)+1 }}.
                </div>
                <div class="card__input-type">
                    <v-select
                        class="pa-0 mr-5"
                        label="Тип"
                        :items="['Boolean', 'String', 'Number', 'Any']"
                        v-model="testInput.type"
                        :readonly="readonly"
                    />
                </div>
                <div class="card__input-value">
                    <v-text-field
                        :label="`Значение (${testInput.type || 'Выберите тип'})`"
                        v-if="testInput.type!=='Boolean'"
                        dense
                        outlined
                        v-model="testInput.value"
                        v-mask="getMask(testInput)"
                        :disabled="!testInput.type"
                        :readonly="readonly"
                    />
                    <v-select
                        label="Значение"
                        v-if="testInput.type==='Boolean'"
                        :items="[true, false]"
                        class="pa-0"
                        v-model="testInput.value"
                        :disabled="!testInput.type"
                        outlined
                        dense
                        :readonly="readonly"
                    />
                </div>

                <v-btn
                    v-if="test.inputs.length>1 && !readonly"
                    @click="test.inputs.splice(test.inputs.indexOf(testInput), 1)"
                    icon
                >
                    <v-icon>mdi-minus-circle</v-icon>
                </v-btn>
            </div>
            <v-btn
                v-if="!readonly"
                class="mb-5"
                @click="test.inputs.push({type: '', value: ''})"
                color="primary"
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
                        v-model="test.outputType"
                        :readonly="readonly"
                    />
                </div>
                <div class="card__input-value">
                    <v-text-field
                        :label="`Значение (${test.outputType || 'Выберите тип'})`"
                        v-if="test.outputType!=='Boolean'"
                        dense
                        outlined
                        v-model="test.outputValue"
                        v-mask="getMask(test.outputType)"
                        :disabled="!test.outputType"
                        :readonly="readonly"
                    />
                    <v-select
                        label="Значение"
                        v-if="test.outputType==='Boolean'"
                        :items="[true, false]"
                        class="pa-0"
                        v-model="test.outputValue"
                        :disabled="!test.outputType"
                        outlined
                        dense
                        :readonly="readonly"
                    />
                </div>
            </div>
        </v-card>

        <v-btn
            v-if="!readonly"
            class="mb-5"
            @click="addTest"
            color="primary"
        >
            <v-icon>mdi-plus-circle</v-icon>
             Добавить тест
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
        props: {
            readonly: Boolean,
            items: {
                type: Array,
            }
        },
        mounted() {
            if (!this.items) {
                this.addTest()
            } else {
                this.tests = this.items
            }
        },
        data() {
            return {
                numberMask: currencyMask,
                tests: [],
            }
        },
        methods: {
            addTest() {
                this.tests.push({
                    inputs: [
                        { type: "", value: "" },
                    ],
                    outputType: "",
                    outputValue: "",
                })
            },
            getMask(type) {
                return type === 'Number' ?
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