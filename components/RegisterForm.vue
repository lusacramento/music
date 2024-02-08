<template>
	<!-- Registration Form -->
	<div
		class="text-white text-center font-bold p-4 rounded mb-4"
		v-if="reg_show_alert"
		:class="reg_alert_variant"
	>
		{{ reg_alert_msg }}
	</div>
	<VeeForm
		:validation-schema="schema"
		@submit="register"
		:initial-values="userData"
	>
		<!-- Name -->
		<div class="mb-3">
			<label class="inline-block mb-2">Name</label>
			<VeeField
				name="name"
				type="text"
				:rules="{ required: true }"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
				placeholder="Enter Name"
			/>
			<VeeErrorMessage name="name" class="text-red-600" />
		</div>
		<!-- Email -->
		<div class="mb-3">
			<label class="inline-block mb-2">Email</label>
			<VeeField
				name="email"
				type="email"
				:rules="{ required: true }"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
				placeholder="Enter Email"
			/>
			<VeeErrorMessage name="email" class="text-red-600" />
		</div>
		<!-- Age -->
		<div class="mb-3">
			<label class="inline-block mb-2">Age</label>
			<VeeField
				name="age"
				type="number"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
			/>
			<VeeErrorMessage name="age" class="text-red-600" />
		</div>
		<!-- Password -->
		<div class="mb-3">
			<label class="inline-block mb-2">Password</label>
			<VeeField name="password" :bails="false" v-slot="{ field, errors }">
				<input
					type="password"
					class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
					placeholder="Password"
					v-bind="field"
				/>
				<div class="text-red-600" v-for="error in errors" :key="error">
					{{ error }}
				</div>
			</VeeField>
		</div>
		<!-- Confirm Password -->
		<div class="mb-3">
			<label class="inline-block mb-2">Confirm Password</label>
			<VeeField
				name="confirm_password"
				type="password"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
				placeholder="Confirm Password"
			/>
			<VeeErrorMessage name="confirm_password" class="text-red-600" />
		</div>
		<!-- Country -->
		<div class="mb-3">
			<label class="inline-block mb-2">Country</label>
			<VeeField
				as="select"
				name="country"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
			>
				<option value="USA">USA</option>
				<option value="Mexico">Mexico</option>
				<option value="Germany">Germany</option>
				<option value="Antartica">Antartica</option>
				<option value="South_America">South America</option>
			</VeeField>
			<VeeErrorMessage name="country" class="text-red-600" />
		</div>
		<!-- TOS -->
		<div class="mb-3 pl-6">
			<VeeField
				name="tos"
				type="checkbox"
				class="w-4 h-4 float-left -ml-6 mt-1 rounded"
				value="1"
			/>
			<label class="inline-block">Accept terms of service</label>
			<VeeErrorMessage name="tos" class="text-red-600 block" />
		</div>
		<button
			type="submit"
			class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
			:disabled="reg_in_submission"
		>
			Submit
		</button>
	</VeeForm>
</template>

<script lang="ts" setup>
	import {
		Form as VeeForm,
		Field as VeeField,
		ErrorMessage as VeeErrorMessage,
	} from 'vee-validate'

	const schema = {
		name: 'required|min:3|max:100|alpha-spaces',
		email: 'required|min:3|max:100|email',
		age: 'required|min_value:18|max_value:120',
		password: 'required|min:9|max:100|excluded:password',
		confirm_password: 'passwords_mismatch:@password',
		country: 'required|country_excluded:Antartica,South_America',
		tos: 'tos',
	}

	const userData = { country: 'USA' }

	const reg_in_submission = ref(false)
	const reg_show_alert = ref(false)
	const reg_alert_variant = ref('bg-blue-500')
	const reg_alert_msg = ref('Please wait! You accont is being created.')

	const register = async function (values: any) {
		// release trigger
		reg_show_alert.value = true
		reg_in_submission.value = true

		// default reset
		reg_alert_variant.value = 'bg-blue-500'
		reg_alert_msg.value = 'Please wait! You accont is being created.'

		// firebase
		const createUser = useUser().createUser
		createUser(values.email, values.password)

		// apply changes
		reg_alert_variant.value = 'bg-green-500'
		reg_alert_msg.value = 'Success! Your account has been created!'
	}
</script>

<style></style>
