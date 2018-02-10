<template>
	<div class="header">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-md-offset-1">
					<img src="@/assets/img/logo.png" class="logo">
				</div>
				<div class="col-md-4">
				<a href="tel:2132711381">
					<div class="row">
						<div class="col-xs-3 text-right">
							<img src="@/assets/img/callnow.png" class="call-now img-responsive">
						</div>
						<div class="col-xs-9">
							<div class="call-now-title">Call us Now!</div>
							<div class="call-now-num">213-271-1381</div>
						</div>
					</div>
					</a>
				</div>
			</div>
		</div>
	</div><!--/header-->
</template>
<script>
	export default {
		name: 'Header',
	}
</script>
<style lang="sass" scoped>
	.header
		padding: 30px
		background: #efefef
	.logo
		height: 50px
		width: auto
	.call-now
		margin-top: 10px
		display: inline-block
	.call-now-title, .call-now-num
		font-weight: bold
		font-size: 24px
	.call-now-title
		color: #333
	.call-now-num
		color: #60A922
</style>