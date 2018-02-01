<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="content">
                        <question v-for="question in questions" v-show="question.show" :question-prop="question" :key="question.id" />
                        <question-results v-show="resultsVisibility" :questions-prop="questions"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Question from './components/Question'
import QuestionResults from './components/QuestionResults'
export default {
    name: 'App',
    computed: {
        questions() {
            return this.$store.getters.getQuestions
        },
        resultsVisibility() {
            return this.$store.getters.getResultsVisibility
        }
    },
    components: {
        Question,
        QuestionResults
    }
}
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

body{
    padding-top:40px;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
}

.content{
    background:#e6e6e6;
    padding:40px;
    border-radius:6px;
    font-size:16px;
    font-family:'Open sans', sans-serif;
}

h3{
    display:inline-block;
    font-weight:600;
    margin:0px 20px 0px 0px;
}

</style>
