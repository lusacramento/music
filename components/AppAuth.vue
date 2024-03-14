<template>
	<div
		id="modal"
		class="fixed z-10 inset-0 overflow-y-auto"
		:class="hiddenClass"
	>
		<div
			class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
		>
			<div class="fixed inset-0 transition-opacity">
				<div class="absolute inset-0 bg-gray-800 opacity-75"></div>
			</div>

			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen"
				>&#8203;</span
			>

			<div
				class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
			>
				<!-- Add margin if you want to see some of the overlay behind the modal-->
				<div class="py-4 text-left px-6">
					<!--Title-->
					<div class="flex justify-between items-center pb-4">
						<p class="text-2xl font-bold">
							{{ $t('auth.yourAccount') }}
						</p>
						<!-- Modal Close Button -->
						<div class="modal-close cursor-pointer z-50" @click="closeModal">
							<AppIcon icon="fas fa-times" class="" />
						</div>
					</div>

					<!-- Tabs -->
					<ul class="flex flex-wrap mb-4">
						<li class="flex-auto text-center">
							<a
								class="block rounded py-3 px-4 transition"
								href="#"
								@click.prevent="tab = 'login'"
								:class="{
									'hover:text-white text-white bg-blue-600': tab === 'login',
									'hover:text-blue-600': tab === 'register',
								}"
							>
								{{ $t('auth.login') }}
							</a>
						</li>
						<li class="flex-auto text-center">
							<a
								class="block rounded py-3 px-4 transition"
								href="#"
								@click.prevent="tab = 'register'"
								:class="{
									'hover:text-white text-white bg-blue-600': tab === 'register',
									'hover:text-blue-600': tab === 'login',
								}"
							>
								{{ $t('auth.register') }}
							</a>
						</li>
					</ul>

					<LoginForm v-if="tab === 'login'" />
					<RegisterForm v-else />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { defineRule, configure } from 'vee-validate'

	import {
		required,
		min,
		min_value as minValue,
		max,
		max_value as maxValue,
		alpha_spaces as alphaSpaces,
		email,
		confirmed,
		not_one_of as excluded,
	} from '@vee-validate/rules'

	defineRule('required', required)
	defineRule('tos', required)
	defineRule('min', min)
	defineRule('min_value', minValue)
	defineRule('max', max)
	defineRule('max_value', maxValue)
	defineRule('alpha-spaces', alphaSpaces)
	defineRule('email', email)
	defineRule('passwords_mismatch', confirmed)
	defineRule('excluded', excluded)
	defineRule('country_excluded', excluded)

	configure({
		generateMessage: (ctx) => {
			const messages = {
				required: `The field ${ctx.field} is required.`,
				min: `The field ${ctx.field} mis too short.`,
				max: `The field  ${ctx.field} is too long.`,
				alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces.`,
				email: `The field ${ctx.field} must bee a valid email.`,
				min_value: `The field${ctx.field} is too low.`,
				max_value: `The  field ${ctx.field} is too high.`,
				excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
				country_excluded: `Due to restrictions, we donot accept users from this location.`,
				passwords_mismatch: `The passwords don't match.`,
				tos: `You must accept the Terms of Service.`,
			}

			const message = messages[ctx.rule?.name as keyof typeof messages]
				? messages[ctx.rule?.name as keyof typeof messages]
				: `The field ${ctx.field} is invalid.`

			return message
		},

		validateOnBlur: true,
		validateOnChange: true,
		validateOnInput: false,
		validateOnModelUpdate: true,
	})

	const hiddenClass = computed(() => {
		return useMyModalStore().hiddenClass
	})

	const closeModal = function () {
		useMyModalStore().toogleIsOpened()
	}

	const tab = ref('login')
</script>
