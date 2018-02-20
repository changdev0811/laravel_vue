<template>
	<div class="content-body">
		<content-quiz />
		<content-notice />
	</div>
</template>
<script>
	import ContentQuiz from '@/components/layout/ContentQuiz'
	import ContentNotice from '@/components/layout/ContentNotice'
	export default {
		name: 'content-body',
		components: {
			ContentQuiz,
			ContentNotice,
		}
	}
</script>
<style lang="sass" scoped>
	.content-body
		padding-top: 40px
		padding-bottom: 140px
</style>