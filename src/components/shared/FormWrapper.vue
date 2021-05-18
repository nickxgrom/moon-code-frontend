<template>
    <div class="wrapper">
        <div class="form">
            <h2>{{ title }}</h2>
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FormWrapper",
        props: {
            title: String,
        }
    }
</script>

<style scoped>
    .wrapper {
        text-align: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .form {
        width: 30%;
        margin: 0 auto;
        padding: 16px 30px;
        border-radius: 8px;
        background: #343a40;
    }

    h2 {
        text-align: center;
    }
</style>