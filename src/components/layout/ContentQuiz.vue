<template>
	<div class="content-quiz">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
		name: 'content-quiz',
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>