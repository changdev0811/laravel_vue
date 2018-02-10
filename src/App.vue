<!-- App component -->
<template>
    <div id="app">
        <Header />
        <Content />
        <Footer />
    </div>
</template>

<script>
/* Import Question component and QuestionResults component
/      Question component manages to display a question, hide itself and show the next question.
/      QuestionResults component manages to display the answers results after the last question.
*/
import Header from '@/components/layout/Header'
import Content from '@/components/layout/Content'
import Footer from '@/components/layout/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Content,
        Footer,
    }
}
</script>

<style>


</style>
