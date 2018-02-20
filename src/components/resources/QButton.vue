<template>
	<div class="q-button">
		<button class="btn sub-btn"><slot></slot><i v-if="qBtnIcon" :class="['glyphicon', qBtnIcon]"></i></button>
	</div>
</template>
<script>
	export default {
		name: 'q-button',
		props: ['q-btn-icon'],
	}
</script>
<style lang="sass" scoped>
	.q-button
		padding: 10px 0
	.sub-btn
	    border-radius: 15px
	    -moz-border-radius: 15px
	    -webkit-border-radius: 15px
	    cursor: pointer
	    width: 100%
	    padding: 10px
	    background: #2acf6c
	    color: #fff
	    font-weight: 700
	    -webkit-transition: all 500ms ease
	    -moz-transition: all 500ms ease
	    -o-transition: all 500ms ease
	    transition: all 500ms ease
	    text-align: center
	    text-transform: uppercase
	    font-size: 18px
	.q-button button:hover
		background: #7d7d7d
</style>