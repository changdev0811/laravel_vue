<!-- App component -->
<template>
    <div id="app">
        <Header />
        <Content-body />
        <Footer />
    </div>
</template>
<script>
    import Header from '@/components/layout/Header'
    import ContentBody from '@/components/layout/ContentBody'
    import Footer from '@/components/layout/Footer'

    export default {
        name: 'App',
        components: {
            Header,
            ContentBody,
            Footer,
        }
    }
</script>
<style lang="sass" scoped></style>
