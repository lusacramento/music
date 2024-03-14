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
			<label class="inline-block mb-2">{{ $t('register.name') }}</label>
			<VeeField
				name="name"
				type="text"
				:rules="{ required: true }"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
				:placeholder="$t('register.placeholder.name')"
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
				:placeholder="$t('register.placeholder.email')"
			/>
			<VeeErrorMessage name="email" class="text-red-600" />
		</div>
		<!-- Age -->
		<div class="mb-3">
			<label class="inline-block mb-2">{{ $t('register.age') }}</label>
			<VeeField
				name="age"
				type="number"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
				:placeholder="$t('register.placeholder.age')"
			/>
			<VeeErrorMessage name="age" class="text-red-600" />
		</div>
		<!-- Password -->
		<div class="mb-3">
			<label class="inline-block mb-2">{{ $t('register.password') }}</label>
			<VeeField name="password" :bails="false" v-slot="{ field, errors }">
				<input
					type="password"
					class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
					:placeholder="$t('register.placeholder.password')"
					v-bind="field"
				/>
				<div class="text-red-600" v-for="error in errors" :key="error">
					{{ error }}
				</div>
			</VeeField>
		</div>
		<!-- Confirm Password -->
		<div class="mb-3">
			<label class="inline-block mb-2">{{
				$t('register.confirmPassword')
			}}</label>
			<VeeField
				name="confirm_password"
				type="password"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
				:placeholder="$t('register.placeholder.confirmPassword')"
			/>
			<VeeErrorMessage name="confirm_password" class="text-red-600" />
		</div>
		<!-- Country -->
		<div class="mb-3">
			<label class="inline-block mb-2">{{ $t('register.country') }}</label>
			<VeeField
				as="select"
				name="country"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
			>
				<option value="USA">{{ $t('countries.usa') }}</option>
				<option value="Mexico">{{ $t('countries.mexico') }}</option>
				<option value="Germany">{{ $t('countries.germany') }}</option>
				<option value="Antartica">{{ $t('countries.antartica') }}</option>
				<option value="South_America">
					{{ $t('countries.southAmerica') }}
				</option>
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
			<i18n-t class="inline-block" keypath="register.accept" tag="label"
				><a href="#">{{ $t('register.tos') }}</a></i18n-t
			>
			<VeeErrorMessage name="tos" class="text-red-600 block" />
		</div>
		<button
			type="submit"
			class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
			:disabled="reg_in_submission"
		>
			{{ $t('register.submit') }}
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
		releaseTrigger()
		resetDefaultValues()

		createUser()

		async function createUser() {
			try {
				await useMyUserStore().createUser(values)
				showSuccessMessage()

				window.location.reload()
			} catch (error) {
				showErrorMessage(error)
			}
		}
	}

	function releaseTrigger() {
		reg_show_alert.value = true
		reg_in_submission.value = true
	}

	function resetDefaultValues() {
		reg_alert_variant.value = 'bg-blue-500'
		reg_alert_msg.value = 'Please wait! You accont is being created.'
	}

	function showSuccessMessage() {
		reg_alert_variant.value = 'bg-green-500'
		reg_alert_msg.value = 'Success! Your account has been created!'
	}

	function showErrorMessage(error: any) {
		reg_alert_variant.value = 'bg-red-500'

		const messengeErrorResponse = error.customData._tokenResponse.error.message
		messengeErrorResponse === 'EMAIL_EXISTS'
			? (reg_alert_msg.value = 'This email is already registered!')
			: (reg_alert_msg.value =
					'An unexpected error occured. Please try again later.')
	}
</script>
