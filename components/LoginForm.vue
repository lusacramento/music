<template>
	<!-- Login Form -->
	<div
		class="text-white text-center font-bold p-4 mb-4"
		v-if="login_show_alert"
		:class="login_alert_variant"
	>
		{{ login_alert_msg }}
	</div>
	<VeeForm :validation-schema="loginSchema" @submit="login">
		<!-- Email -->
		<div class="mb-3">
			<label class="inline-block mb-2" for="email">Email</label>
			<VeeField
				id="email"
				name="email"
				type="email"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
				:placeholder="$t('loginForm.placeholder.email')"
				autocomplete="email"
			/>
			<VeeErrorMessage name="email" class="text-red-600" />
		</div>
		<!-- Password -->
		<div class="mb-3">
			<label for="password" class="inline-block mb-2">{{
				$t('loginForm.password')
			}}</label>
			<VeeField
				id="password"
				name="password"
				type="password"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
				:placeholder="$t('loginForm.placeholder.password')"
			/>
			<VeeErrorMessage name="password" class="text-red-600" />
		</div>
		<button
			type="submit"
			:disabled="login_in_submission"
			class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
		>
			{{ $t('loginForm.submit') }}
		</button>
	</VeeForm>
</template>

<script lang="ts" setup>
	import {
		Form as VeeForm,
		Field as VeeField,
		ErrorMessage as VeeErrorMessage,
	} from 'vee-validate'

	const loginSchema = {
		email: 'required|min:3|max:100|email',
		password: 'required|min:9|max:100',
	}

	const login_in_submission = ref(false)
	const login_show_alert = ref(false)
	const login_alert_variant = ref('bg-blue-500')
	const login_alert_msg = ref('Please wait! We are logging you in.')

	const login = async function (values: any) {
		login_show_alert.value = true
		login_in_submission.value = true

		login_alert_variant.value = 'bg-blue-500'
		login_alert_msg.value = 'Please wait! We are logging you in.'

		let response: any = ''
		response = await useMyUserStore().authenticate(values)
		if (response.code !== 'auth/invalid-credential') {
			showSuccessMessage()

			window.location.reload()
		} else showErrorMessage()
	}

	function showSuccessMessage() {
		login_alert_variant.value = 'bg-green-500'
		login_alert_msg.value = 'Success! You are now logged in!'
	}

	function showErrorMessage() {
		login_in_submission.value = false
		login_alert_variant.value = 'bg-red-500'
		login_alert_msg.value = 'Invalid login details.'
	}
</script>
