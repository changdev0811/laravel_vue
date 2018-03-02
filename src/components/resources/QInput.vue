<template>
	<div class="q-input">
		<div v-bind:class="{'input-group': qInputIcon}">
			<div v-if="qInputIcon" class="input-group-addon">
				<q-icon :name="qInputIcon"></q-icon>
			</div>
			<input v-if="onInput"
				type="text"
				:name="qName"
				class="form-control input-lg"
				:value="qValue"
				v-inputmask="qMask"
				:placeholder="qPlaceholder"
				v-validate="qValidate"
				data-vv-delay="500"
				:class="{'input': true, 'is-danger': errors.has(qName)}"
				@input="onInput"
			></input>
			<input v-else
				type="text"
				:name="qName"
				class="form-control input-lg"
				:value="qValue"
				v-inputmask="qMask"
				:placeholder="qPlaceholder"
				v-validate="qValidate"
				data-vv-delay="500"
				:class="{'input': true, 'is-danger': errors.has(qName)}"
			></input>
		</div>
		<span v-show="errors.has(qName)" class="help is-danger">{{ errors.first(qName) }}</span>
	</div>
</template>
<script>
	export default {
		name: 'q-input',
		props: ['q-name', 'q-mask', 'q-value', 'on-input', 'q-placeholder', 'q-validate', 'q-input-icon'],
	}
</script>
<style lang="sass" scoped></style>