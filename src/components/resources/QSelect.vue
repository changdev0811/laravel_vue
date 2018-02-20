<template>
	<div class="q-select">
		<div v-bind:class="{'input-group': qSelectIcon}">
			<div v-if="qSelectIcon" class="input-group-addon">
				<q-icon :name="qSelectIcon"></q-icon>
			</div>
			
			<select
				:name="qName" 
				class="form-control input-lg"
				v-validate="qValidate"
				data-vv-delay="500"
				:class="{'input': true, 'is-danger': errors.has(qName)}"
			>
				<option v-for="option in options" :value="option.value">{{option.label}}</option>
			</select>
		</div>
		<span v-show="errors.has(qName)" class="help is-danger">{{ errors.first(qName) }}</span>
	</div>
</template>
<script>
	export default {
		name: 'q-select',
		props: ['options', 'q-select-icon', 'q-name', 'q-validate'],
	}
</script>
<style lang="sass" scoped>
</style>