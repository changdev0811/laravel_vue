<template>
	<div class="q-card" data-inputval="PP_REFI"  @mouseover="active = true" @mouseleave="active = false" v-bind:class="{on: active, off: !active}">
		<div class="row">
			<div class="q-card-media col-md-12 col-xs-3" >
				<img :src="loadImg" alt="refinance" class="img-responsive img-btn">
			</div>
			
			<div class="q-card-text col-md-12 col-xs-9 ">
				{{title}}
			</div>
		</div><!--row-->
	</div><!--/answer-->
</template>

<script>
	export default {
		name: 'q-card',
		props: ['title', 'imgSrc'],
		data() {
			return {
				active: false
			}
		},
		computed: {
			loadImg() {
				return require(`@/assets/${this.imgSrc}`)
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
	.q-card
		border-radius: 15px;
		-moz-border-radius: 15px;
		-webkit-border-radius: 15px;
		overflow: hidden
		background: #1bcc62
		margin-top: 15px
		margin-bottom: 15px

	.q-card.on
		background: #7d7d7d
		-webkit-transition: all 500ms ease
		-moz-transition: all 500ms ease
		-o-transition: all 500ms ease
		transition: all 500ms ease

	.q-card-media
		@include non-desktop
			display: inline-block
			vertical-align: middle
			float: none
	.q-card-text
		padding: 10px
		color: #fff
		font-weight: 700
		text-align: center
		text-transform: uppercase
		font-size: 16px
		-webkit-transition: all 500ms ease
		-moz-transition: all 500ms ease
		-o-transition: all 500ms ease
		transition: all 500ms ease
		@include non-desktop
			display: inline-block
			vertical-align: middle
			float: none
			width: auto
</style>