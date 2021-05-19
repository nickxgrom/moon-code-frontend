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
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
    }

    .form {
        width: 500px;
        margin: 0 auto;
        padding: 16px 40px;
        border-radius: 8px;
        background: #22272e;
    }

    h2 {
        text-align: center;
    }
</style>