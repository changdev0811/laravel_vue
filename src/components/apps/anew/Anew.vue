<template>
    <div class="anew">
        <div class="content-wrap">
        	<div class="content-title">Denied for a Mortgage?</div>
        	<router-view/>
        </div>
    </div>
</template>
<script>
	export default {
		name: 'anew',
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
	h3
	    display: inline-block
	    font-weight: 600
	    margin: 0px 20px 0px 0px
	.content-title
		font-weight: 600
		font-size: 40px
		color: #38B4CD
		text-align: center
		line-height: 1.1
		@include non-desktop
			font-size: 30px
</style>