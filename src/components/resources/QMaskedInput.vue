<template>
	<div class="q-masked-input">
		<div v-bind:class="{'input-group': qMaskedInputIcon}">
			<div v-if="qMaskedInputIcon" class="input-group-addon">
				<q-icon :name="qMaskedInputIcon"></q-icon>
			</div>
			<masked-input
				type="text"
				:name="qName"
				class="form-control input-lg"
				v-model="maskedIn"
				:mask="qMask"
				:guide="qGuide"
				:placeholder="qPlaceholder"
				:placeholderChar="qPlaceholderChar"
				v-validate="qValidate"
				data-vv-delay="1000"
				:class="{'input': true, 'is-danger': errors.has(qName)}"
			></masked-input>
		</div>
		<span v-show="errors.has(qName)" class="help is-danger">{{ errors.first(qName) }}</span>
	</div>
</template>
<script>
	import MaskedInput from 'vue-text-mask'
	export default {
		name: 'q-masked-input',
		props: ['q-name', 'q-placeholder', 'q-guide', 'q-mask', 'q-placeholder-char', 'q-validate', 'q-masked-input-icon',],
		data() {
			return {
				maskedIn: '',
			}
		},
		components: {
			MaskedInput,
		}
	}
</script>
<style lang="sass" scoped></style>