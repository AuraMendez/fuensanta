<template>
    <div>
        <a :href="item.url" target="_blank">
            <img :src="item.img.url">
        </a>
    </div>
</template>

<script>

export default {
    props: {
        item: Object,
    },
}
</script>

<style scoped>
div {
    margin: 3rem 0;
    text-align: center;
}

a img {
    width: 100%;
    max-width: 600px;
}
</style>