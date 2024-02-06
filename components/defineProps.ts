/* __placeholder__ */
// import { } from
const {
	defineProps,
	defineSlots,
	defineEmits,
	defineExpose,
	defineModel,
	defineOptions,
	withDefaults,
} = await import('vue')
// import { } from
const hiddenClass = computed(() => {
	return useMyModalStore().hiddenClass
})
const closeModal = function () {
	useMyModalStore().toogleIsOpened()
}
const schema = {
	name: 'required',
	email: '',
	age: '',
	password: '',
	confirm_password: '',
	country: '',
	tos: '',
}
let tab = ref('login')
const __VLS_componentsOption = {}
let __VLS_name!: 'AppAuth'
function __VLS_template() {
	let __VLS_ctx!: InstanceType<
		__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>
	> & {}
	/* Components */
	let __VLS_otherComponents!: NonNullable<
		typeof __VLS_internalComponent extends { components: infer C } ? C : {}
	> &
		typeof __VLS_componentsOption
	let __VLS_own!: __VLS_SelfComponent<
		typeof __VLS_name,
		typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })
	>
	let __VLS_localComponents!: typeof __VLS_otherComponents &
		Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
	let __VLS_components!: typeof __VLS_localComponents &
		__VLS_GlobalComponents &
		typeof __VLS_ctx
	/* Style Scoped */
	type __VLS_StyleScopedClasses = {}
	let __VLS_styleScopedClasses!:
		| __VLS_StyleScopedClasses
		| keyof __VLS_StyleScopedClasses
		| (keyof __VLS_StyleScopedClasses)[]
	/* CSS variable injection */
	/* CSS variable injection end */
	let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
		'AppIcon',
		typeof __VLS_localComponents,
		'AppIcon',
		'AppIcon',
		'AppIcon'
	> &
		__VLS_WithComponent<
			'VeeForm',
			typeof __VLS_localComponents,
			'VeeForm',
			'VeeForm',
			'VeeForm'
		> &
		__VLS_WithComponent<
			'VeeField',
			typeof __VLS_localComponents,
			'VeeField',
			'VeeField',
			'VeeField'
		> &
		__VLS_WithComponent<
			'VeeErrorMessage',
			typeof __VLS_localComponents,
			'VeeErrorMessage',
			'VeeErrorMessage',
			'VeeErrorMessage'
		>
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.div
	__VLS_intrinsicElements.span
	__VLS_intrinsicElements.span
	__VLS_intrinsicElements.p
	__VLS_intrinsicElements.p
	__VLS_components.AppIcon
	// @ts-ignore
	;[AppIcon]
	__VLS_intrinsicElements.ul
	__VLS_intrinsicElements.ul
	__VLS_intrinsicElements.li
	__VLS_intrinsicElements.li
	__VLS_intrinsicElements.li
	__VLS_intrinsicElements.li
	__VLS_intrinsicElements.a
	__VLS_intrinsicElements.a
	__VLS_intrinsicElements.a
	__VLS_intrinsicElements.a
	__VLS_intrinsicElements.form
	__VLS_intrinsicElements.form
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.label
	__VLS_intrinsicElements.input
	__VLS_intrinsicElements.input
	__VLS_intrinsicElements.input
	__VLS_intrinsicElements.input
	__VLS_intrinsicElements.input
	__VLS_intrinsicElements.input
	__VLS_intrinsicElements.input
	__VLS_intrinsicElements.button
	__VLS_intrinsicElements.button
	__VLS_intrinsicElements.button
	__VLS_intrinsicElements.button
	__VLS_components.VeeForm
	__VLS_components.VeeForm
	// @ts-ignore
	;[VeeForm, VeeForm]
	__VLS_components.VeeField
	// @ts-ignore
	;[VeeField]
	__VLS_components.VeeErrorMessage
	// @ts-ignore
	;[VeeErrorMessage]
	__VLS_intrinsicElements.select
	__VLS_intrinsicElements.select
	__VLS_intrinsicElements.option
	__VLS_intrinsicElements.option
	__VLS_intrinsicElements.option
	__VLS_intrinsicElements.option
	__VLS_intrinsicElements.option
	__VLS_intrinsicElements.option
	{
		const __VLS_0 = __VLS_intrinsicElements['div']
		const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0)
		const __VLS_2 = __VLS_1(
			{ ...{}, id: 'modal', class: 'fixed z-10 inset-0 overflow-y-auto' },
			...__VLS_functionalComponentArgsRest(__VLS_1),
		)
		;(
			({}) as (
				props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> &
					Record<string, unknown>,
			) => void
		)({ ...{}, id: 'modal', class: 'fixed z-10 inset-0 overflow-y-auto' })
		const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!
		let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>
		__VLS_ctx.hiddenClass
		{
			const __VLS_5 = __VLS_intrinsicElements['div']
			const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5)
			const __VLS_7 = __VLS_6(
				{
					...{},
					class:
						'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0',
				},
				...__VLS_functionalComponentArgsRest(__VLS_6),
			)
			;(
				({}) as (
					props: __VLS_FunctionalComponentProps<
						typeof __VLS_5,
						typeof __VLS_7
					> &
						Record<string, unknown>,
				) => void
			)({
				...{},
				class:
					'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0',
			})
			const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!
			let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>
			{
				const __VLS_10 = __VLS_intrinsicElements['div']
				const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10)
				const __VLS_12 = __VLS_11(
					{ ...{}, class: 'fixed inset-0 transition-opacity' },
					...__VLS_functionalComponentArgsRest(__VLS_11),
				)
				;(
					({}) as (
						props: __VLS_FunctionalComponentProps<
							typeof __VLS_10,
							typeof __VLS_12
						> &
							Record<string, unknown>,
					) => void
				)({ ...{}, class: 'fixed inset-0 transition-opacity' })
				const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!
				let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>
				{
					const __VLS_15 = __VLS_intrinsicElements['div']
					const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15)
					const __VLS_17 = __VLS_16(
						{ ...{}, class: 'absolute inset-0 bg-gray-800 opacity-75' },
						...__VLS_functionalComponentArgsRest(__VLS_16),
					)
					;(
						({}) as (
							props: __VLS_FunctionalComponentProps<
								typeof __VLS_15,
								typeof __VLS_17
							> &
								Record<string, unknown>,
						) => void
					)({ ...{}, class: 'absolute inset-0 bg-gray-800 opacity-75' })
					const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!
					let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>
				}
				__VLS_13.slots!.default
			}
			{
				const __VLS_20 = __VLS_intrinsicElements['span']
				const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20)
				const __VLS_22 = __VLS_21(
					{
						...{},
						class: 'hidden sm:inline-block sm:align-middle sm:h-screen',
					},
					...__VLS_functionalComponentArgsRest(__VLS_21),
				)
				;(
					({}) as (
						props: __VLS_FunctionalComponentProps<
							typeof __VLS_20,
							typeof __VLS_22
						> &
							Record<string, unknown>,
					) => void
				)({
					...{},
					class: 'hidden sm:inline-block sm:align-middle sm:h-screen',
				})
				const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!
				let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>
				__VLS_23.slots!.default
			}
			{
				const __VLS_25 = __VLS_intrinsicElements['div']
				const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25)
				const __VLS_27 = __VLS_26(
					{
						...{},
						class:
							'inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full',
					},
					...__VLS_functionalComponentArgsRest(__VLS_26),
				)
				;(
					({}) as (
						props: __VLS_FunctionalComponentProps<
							typeof __VLS_25,
							typeof __VLS_27
						> &
							Record<string, unknown>,
					) => void
				)({
					...{},
					class:
						'inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full',
				})
				const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!
				let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>
				{
					const __VLS_30 = __VLS_intrinsicElements['div']
					const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30)
					const __VLS_32 = __VLS_31(
						{ ...{}, class: 'py-4 text-left px-6' },
						...__VLS_functionalComponentArgsRest(__VLS_31),
					)
					;(
						({}) as (
							props: __VLS_FunctionalComponentProps<
								typeof __VLS_30,
								typeof __VLS_32
							> &
								Record<string, unknown>,
						) => void
					)({ ...{}, class: 'py-4 text-left px-6' })
					const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!
					let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>
					{
						const __VLS_35 = __VLS_intrinsicElements['div']
						const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35)
						const __VLS_37 = __VLS_36(
							{ ...{}, class: 'flex justify-between items-center pb-4' },
							...__VLS_functionalComponentArgsRest(__VLS_36),
						)
						;(
							({}) as (
								props: __VLS_FunctionalComponentProps<
									typeof __VLS_35,
									typeof __VLS_37
								> &
									Record<string, unknown>,
							) => void
						)({ ...{}, class: 'flex justify-between items-center pb-4' })
						const __VLS_38 = __VLS_pickFunctionalComponentCtx(
							__VLS_35,
							__VLS_37,
						)!
						let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>
						{
							const __VLS_40 = __VLS_intrinsicElements['p']
							const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40)
							const __VLS_42 = __VLS_41(
								{ ...{}, class: 'text-2xl font-bold' },
								...__VLS_functionalComponentArgsRest(__VLS_41),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_40,
										typeof __VLS_42
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'text-2xl font-bold' })
							const __VLS_43 = __VLS_pickFunctionalComponentCtx(
								__VLS_40,
								__VLS_42,
							)!
							let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>
							__VLS_43.slots!.default
						}
						{
							const __VLS_45 = __VLS_intrinsicElements['div']
							const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45)
							const __VLS_47 = __VLS_46(
								{
									...{ onClick: {} as any },
									class: 'modal-close cursor-pointer z-50',
								},
								...__VLS_functionalComponentArgsRest(__VLS_46),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_45,
										typeof __VLS_47
									> &
										Record<string, unknown>,
								) => void
							)({
								...{ onClick: {} as any },
								class: 'modal-close cursor-pointer z-50',
							})
							const __VLS_48 = __VLS_pickFunctionalComponentCtx(
								__VLS_45,
								__VLS_47,
							)!
							let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>
							let __VLS_50 = {
								click: __VLS_pickEvent(
									__VLS_49['click'],
									(
										{} as __VLS_FunctionalComponentProps<
											typeof __VLS_46,
											typeof __VLS_47
										>
									).onClick,
								),
							}
							__VLS_50 = { click: __VLS_ctx.closeModal }
							{
								const __VLS_51 = (
									{} as 'AppIcon' extends keyof typeof __VLS_ctx
										? { AppIcon: typeof __VLS_ctx.AppIcon }
										: typeof __VLS_resolvedLocalAndGlobalComponents
								).AppIcon
								const __VLS_52 = __VLS_asFunctionalComponent(
									__VLS_51,
									new __VLS_51({ ...{}, icon: 'fas fa-times', class: '' }),
								)
								;(({}) as { AppIcon: typeof __VLS_51 }).AppIcon
								const __VLS_53 = __VLS_52(
									{ ...{}, icon: 'fas fa-times', class: '' },
									...__VLS_functionalComponentArgsRest(__VLS_52),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_51,
											typeof __VLS_53
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, icon: 'fas fa-times', class: '' })
								const __VLS_54 = __VLS_pickFunctionalComponentCtx(
									__VLS_51,
									__VLS_53,
								)!
								let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>
							}
							__VLS_48.slots!.default
						}
						__VLS_38.slots!.default
					}
					{
						const __VLS_56 = __VLS_intrinsicElements['ul']
						const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56)
						const __VLS_58 = __VLS_57(
							{ ...{}, class: 'flex flex-wrap mb-4' },
							...__VLS_functionalComponentArgsRest(__VLS_57),
						)
						;(
							({}) as (
								props: __VLS_FunctionalComponentProps<
									typeof __VLS_56,
									typeof __VLS_58
								> &
									Record<string, unknown>,
							) => void
						)({ ...{}, class: 'flex flex-wrap mb-4' })
						const __VLS_59 = __VLS_pickFunctionalComponentCtx(
							__VLS_56,
							__VLS_58,
						)!
						let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>
						{
							const __VLS_61 = __VLS_intrinsicElements['li']
							const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61)
							const __VLS_63 = __VLS_62(
								{ ...{}, class: 'flex-auto text-center' },
								...__VLS_functionalComponentArgsRest(__VLS_62),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_61,
										typeof __VLS_63
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'flex-auto text-center' })
							const __VLS_64 = __VLS_pickFunctionalComponentCtx(
								__VLS_61,
								__VLS_63,
							)!
							let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>
							{
								const __VLS_66 = __VLS_intrinsicElements['a']
								const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66)
								const __VLS_68 = __VLS_67(
									{
										...{ onClick: {} as any },
										class: 'block rounded py-3 px-4 transition',
										href: '#',
									},
									...__VLS_functionalComponentArgsRest(__VLS_67),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_66,
											typeof __VLS_68
										> &
											Record<string, unknown>,
									) => void
								)({
									...{ onClick: {} as any },
									class: 'block rounded py-3 px-4 transition',
									href: '#',
								})
								const __VLS_69 = __VLS_pickFunctionalComponentCtx(
									__VLS_66,
									__VLS_68,
								)!
								let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>
								;({
									'hover:text-white text-white bg-blue-600':
										__VLS_ctx.tab === 'login',
									'hover:text-blue-600': __VLS_ctx.tab === 'register',
								})
								let __VLS_71 = {
									click: __VLS_pickEvent(
										__VLS_70['click'],
										(
											{} as __VLS_FunctionalComponentProps<
												typeof __VLS_67,
												typeof __VLS_68
											>
										).onClick,
									),
								}
								__VLS_71 = {
									click: ($event) => {
										__VLS_ctx.tab = 'login'
										// @ts-ignore
										;[hiddenClass, closeModal, tab, tab, tab]
									},
								}
								__VLS_69.slots!.default
							}
							__VLS_64.slots!.default
						}
						{
							const __VLS_72 = __VLS_intrinsicElements['li']
							const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72)
							const __VLS_74 = __VLS_73(
								{ ...{}, class: 'flex-auto text-center' },
								...__VLS_functionalComponentArgsRest(__VLS_73),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_72,
										typeof __VLS_74
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'flex-auto text-center' })
							const __VLS_75 = __VLS_pickFunctionalComponentCtx(
								__VLS_72,
								__VLS_74,
							)!
							let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>
							{
								const __VLS_77 = __VLS_intrinsicElements['a']
								const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77)
								const __VLS_79 = __VLS_78(
									{
										...{ onClick: {} as any },
										class: 'block rounded py-3 px-4 transition',
										href: '#',
									},
									...__VLS_functionalComponentArgsRest(__VLS_78),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_77,
											typeof __VLS_79
										> &
											Record<string, unknown>,
									) => void
								)({
									...{ onClick: {} as any },
									class: 'block rounded py-3 px-4 transition',
									href: '#',
								})
								const __VLS_80 = __VLS_pickFunctionalComponentCtx(
									__VLS_77,
									__VLS_79,
								)!
								let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>
								;({
									'hover:text-white text-white bg-blue-600':
										__VLS_ctx.tab === 'register',
									'hover:text-blue-600': __VLS_ctx.tab === 'login',
								})
								let __VLS_82 = {
									click: __VLS_pickEvent(
										__VLS_81['click'],
										(
											{} as __VLS_FunctionalComponentProps<
												typeof __VLS_78,
												typeof __VLS_79
											>
										).onClick,
									),
								}
								__VLS_82 = {
									click: ($event) => {
										__VLS_ctx.tab = 'register'
										// @ts-ignore
										;[tab, tab, tab]
									},
								}
								__VLS_80.slots!.default
							}
							__VLS_75.slots!.default
						}
						__VLS_59.slots!.default
					}
					{
						const __VLS_83 = __VLS_intrinsicElements['form']
						const __VLS_84 = __VLS_elementAsFunctionalComponent(__VLS_83)
						const __VLS_85 = __VLS_84(
							{ ...{} },
							...__VLS_functionalComponentArgsRest(__VLS_84),
						)
						;(
							({}) as (
								props: __VLS_FunctionalComponentProps<
									typeof __VLS_83,
									typeof __VLS_85
								> &
									Record<string, unknown>,
							) => void
						)({ ...{} })
						const __VLS_86 = __VLS_pickFunctionalComponentCtx(
							__VLS_83,
							__VLS_85,
						)!
						let __VLS_87!: __VLS_NormalizeEmits<typeof __VLS_86.emit>
						__VLS_directiveFunction(__VLS_ctx.vShow)(__VLS_ctx.tab === 'login')
						{
							const __VLS_88 = __VLS_intrinsicElements['div']
							const __VLS_89 = __VLS_elementAsFunctionalComponent(__VLS_88)
							const __VLS_90 = __VLS_89(
								{ ...{}, class: 'mb-3' },
								...__VLS_functionalComponentArgsRest(__VLS_89),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_88,
										typeof __VLS_90
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3' })
							const __VLS_91 = __VLS_pickFunctionalComponentCtx(
								__VLS_88,
								__VLS_90,
							)!
							let __VLS_92!: __VLS_NormalizeEmits<typeof __VLS_91.emit>
							{
								const __VLS_93 = __VLS_intrinsicElements['label']
								const __VLS_94 = __VLS_elementAsFunctionalComponent(__VLS_93)
								const __VLS_95 = __VLS_94(
									{ ...{}, class: 'inline-block mb-2' },
									...__VLS_functionalComponentArgsRest(__VLS_94),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_93,
											typeof __VLS_95
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block mb-2' })
								const __VLS_96 = __VLS_pickFunctionalComponentCtx(
									__VLS_93,
									__VLS_95,
								)!
								let __VLS_97!: __VLS_NormalizeEmits<typeof __VLS_96.emit>
								__VLS_96.slots!.default
							}
							{
								const __VLS_98 = __VLS_intrinsicElements['input']
								const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98)
								const __VLS_100 = __VLS_99(
									{
										...{},
										type: 'email',
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
										placeholder: 'Enter Email',
									},
									...__VLS_functionalComponentArgsRest(__VLS_99),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_98,
											typeof __VLS_100
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									type: 'email',
									class:
										'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
									placeholder: 'Enter Email',
								})
								const __VLS_101 = __VLS_pickFunctionalComponentCtx(
									__VLS_98,
									__VLS_100,
								)!
								let __VLS_102!: __VLS_NormalizeEmits<typeof __VLS_101.emit>
							}
							__VLS_91.slots!.default
						}
						{
							const __VLS_103 = __VLS_intrinsicElements['div']
							const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103)
							const __VLS_105 = __VLS_104(
								{ ...{}, class: 'mb-3' },
								...__VLS_functionalComponentArgsRest(__VLS_104),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_103,
										typeof __VLS_105
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3' })
							const __VLS_106 = __VLS_pickFunctionalComponentCtx(
								__VLS_103,
								__VLS_105,
							)!
							let __VLS_107!: __VLS_NormalizeEmits<typeof __VLS_106.emit>
							{
								const __VLS_108 = __VLS_intrinsicElements['label']
								const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108)
								const __VLS_110 = __VLS_109(
									{ ...{}, class: 'inline-block mb-2' },
									...__VLS_functionalComponentArgsRest(__VLS_109),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_108,
											typeof __VLS_110
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block mb-2' })
								const __VLS_111 = __VLS_pickFunctionalComponentCtx(
									__VLS_108,
									__VLS_110,
								)!
								let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>
								__VLS_111.slots!.default
							}
							{
								const __VLS_113 = __VLS_intrinsicElements['input']
								const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113)
								const __VLS_115 = __VLS_114(
									{
										...{},
										type: 'password',
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
										placeholder: 'Password',
									},
									...__VLS_functionalComponentArgsRest(__VLS_114),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_113,
											typeof __VLS_115
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									type: 'password',
									class:
										'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
									placeholder: 'Password',
								})
								const __VLS_116 = __VLS_pickFunctionalComponentCtx(
									__VLS_113,
									__VLS_115,
								)!
								let __VLS_117!: __VLS_NormalizeEmits<typeof __VLS_116.emit>
							}
							__VLS_106.slots!.default
						}
						{
							const __VLS_118 = __VLS_intrinsicElements['button']
							const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118)
							const __VLS_120 = __VLS_119(
								{
									...{},
									type: 'submit',
									class:
										'block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700',
								},
								...__VLS_functionalComponentArgsRest(__VLS_119),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_118,
										typeof __VLS_120
									> &
										Record<string, unknown>,
								) => void
							)({
								...{},
								type: 'submit',
								class:
									'block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700',
							})
							const __VLS_121 = __VLS_pickFunctionalComponentCtx(
								__VLS_118,
								__VLS_120,
							)!
							let __VLS_122!: __VLS_NormalizeEmits<typeof __VLS_121.emit>
							__VLS_121.slots!.default
						}
						__VLS_86.slots!.default
					}
					{
						const __VLS_123 = (
							{} as 'VeeForm' extends keyof typeof __VLS_ctx
								? { VeeForm: typeof __VLS_ctx.VeeForm }
								: typeof __VLS_resolvedLocalAndGlobalComponents
						).VeeForm
						const __VLS_124 = __VLS_asFunctionalComponent(
							__VLS_123,
							new __VLS_123({ ...{}, validationSchema: __VLS_ctx.schema }),
						)
						;(({}) as { VeeForm: typeof __VLS_123 }).VeeForm
						;(({}) as { VeeForm: typeof __VLS_123 }).VeeForm
						const __VLS_125 = __VLS_124(
							{ ...{}, validationSchema: __VLS_ctx.schema },
							...__VLS_functionalComponentArgsRest(__VLS_124),
						)
						;(
							({}) as (
								props: __VLS_FunctionalComponentProps<
									typeof __VLS_123,
									typeof __VLS_125
								> &
									Record<string, unknown>,
							) => void
						)({ ...{}, validationSchema: __VLS_ctx.schema })
						const __VLS_126 = __VLS_pickFunctionalComponentCtx(
							__VLS_123,
							__VLS_125,
						)!
						let __VLS_127!: __VLS_NormalizeEmits<typeof __VLS_126.emit>
						__VLS_directiveFunction(__VLS_ctx.vShow)(
							__VLS_ctx.tab === 'register',
						)
						{
							const __VLS_128 = __VLS_intrinsicElements['div']
							const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128)
							const __VLS_130 = __VLS_129(
								{ ...{}, class: 'mb-3' },
								...__VLS_functionalComponentArgsRest(__VLS_129),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_128,
										typeof __VLS_130
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3' })
							const __VLS_131 = __VLS_pickFunctionalComponentCtx(
								__VLS_128,
								__VLS_130,
							)!
							let __VLS_132!: __VLS_NormalizeEmits<typeof __VLS_131.emit>
							{
								const __VLS_133 = __VLS_intrinsicElements['label']
								const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133)
								const __VLS_135 = __VLS_134(
									{ ...{}, class: 'inline-block mb-2' },
									...__VLS_functionalComponentArgsRest(__VLS_134),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_133,
											typeof __VLS_135
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block mb-2' })
								const __VLS_136 = __VLS_pickFunctionalComponentCtx(
									__VLS_133,
									__VLS_135,
								)!
								let __VLS_137!: __VLS_NormalizeEmits<typeof __VLS_136.emit>
								__VLS_136.slots!.default
							}
							{
								const __VLS_138 = (
									{} as 'VeeField' extends keyof typeof __VLS_ctx
										? { VeeField: typeof __VLS_ctx.VeeField }
										: typeof __VLS_resolvedLocalAndGlobalComponents
								).VeeField
								const __VLS_139 = __VLS_asFunctionalComponent(
									__VLS_138,
									new __VLS_138({
										...{},
										name: 'name',
										type: 'text',
										rules: 'required',
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
										placeholder: 'Enter Name',
									}),
								)
								;(({}) as { VeeField: typeof __VLS_138 }).VeeField
								const __VLS_140 = __VLS_139(
									{
										...{},
										name: 'name',
										type: 'text',
										rules: 'required',
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
										placeholder: 'Enter Name',
									},
									...__VLS_functionalComponentArgsRest(__VLS_139),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_138,
											typeof __VLS_140
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									name: 'name',
									type: 'text',
									rules: 'required',
									class:
										'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
									placeholder: 'Enter Name',
								})
								const __VLS_141 = __VLS_pickFunctionalComponentCtx(
									__VLS_138,
									__VLS_140,
								)!
								let __VLS_142!: __VLS_NormalizeEmits<typeof __VLS_141.emit>
							}
							{
								const __VLS_143 = (
									{} as 'VeeErrorMessage' extends keyof typeof __VLS_ctx
										? { VeeErrorMessage: typeof __VLS_ctx.VeeErrorMessage }
										: typeof __VLS_resolvedLocalAndGlobalComponents
								).VeeErrorMessage
								const __VLS_144 = __VLS_asFunctionalComponent(
									__VLS_143,
									new __VLS_143({ ...{}, name: 'name', class: 'text-red-600' }),
								)
								;(({}) as { VeeErrorMessage: typeof __VLS_143 }).VeeErrorMessage
								const __VLS_145 = __VLS_144(
									{ ...{}, name: 'name', class: 'text-red-600' },
									...__VLS_functionalComponentArgsRest(__VLS_144),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_143,
											typeof __VLS_145
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, name: 'name', class: 'text-red-600' })
								const __VLS_146 = __VLS_pickFunctionalComponentCtx(
									__VLS_143,
									__VLS_145,
								)!
								let __VLS_147!: __VLS_NormalizeEmits<typeof __VLS_146.emit>
							}
							__VLS_131.slots!.default
						}
						{
							const __VLS_148 = __VLS_intrinsicElements['div']
							const __VLS_149 = __VLS_elementAsFunctionalComponent(__VLS_148)
							const __VLS_150 = __VLS_149(
								{ ...{}, class: 'mb-3' },
								...__VLS_functionalComponentArgsRest(__VLS_149),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_148,
										typeof __VLS_150
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3' })
							const __VLS_151 = __VLS_pickFunctionalComponentCtx(
								__VLS_148,
								__VLS_150,
							)!
							let __VLS_152!: __VLS_NormalizeEmits<typeof __VLS_151.emit>
							{
								const __VLS_153 = __VLS_intrinsicElements['label']
								const __VLS_154 = __VLS_elementAsFunctionalComponent(__VLS_153)
								const __VLS_155 = __VLS_154(
									{ ...{}, class: 'inline-block mb-2' },
									...__VLS_functionalComponentArgsRest(__VLS_154),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_153,
											typeof __VLS_155
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block mb-2' })
								const __VLS_156 = __VLS_pickFunctionalComponentCtx(
									__VLS_153,
									__VLS_155,
								)!
								let __VLS_157!: __VLS_NormalizeEmits<typeof __VLS_156.emit>
								__VLS_156.slots!.default
							}
							{
								const __VLS_158 = __VLS_intrinsicElements['input']
								const __VLS_159 = __VLS_elementAsFunctionalComponent(__VLS_158)
								const __VLS_160 = __VLS_159(
									{
										...{},
										type: 'email',
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
										placeholder: 'Enter Email',
									},
									...__VLS_functionalComponentArgsRest(__VLS_159),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_158,
											typeof __VLS_160
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									type: 'email',
									class:
										'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
									placeholder: 'Enter Email',
								})
								const __VLS_161 = __VLS_pickFunctionalComponentCtx(
									__VLS_158,
									__VLS_160,
								)!
								let __VLS_162!: __VLS_NormalizeEmits<typeof __VLS_161.emit>
							}
							__VLS_151.slots!.default
						}
						{
							const __VLS_163 = __VLS_intrinsicElements['div']
							const __VLS_164 = __VLS_elementAsFunctionalComponent(__VLS_163)
							const __VLS_165 = __VLS_164(
								{ ...{}, class: 'mb-3' },
								...__VLS_functionalComponentArgsRest(__VLS_164),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_163,
										typeof __VLS_165
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3' })
							const __VLS_166 = __VLS_pickFunctionalComponentCtx(
								__VLS_163,
								__VLS_165,
							)!
							let __VLS_167!: __VLS_NormalizeEmits<typeof __VLS_166.emit>
							{
								const __VLS_168 = __VLS_intrinsicElements['label']
								const __VLS_169 = __VLS_elementAsFunctionalComponent(__VLS_168)
								const __VLS_170 = __VLS_169(
									{ ...{}, class: 'inline-block mb-2' },
									...__VLS_functionalComponentArgsRest(__VLS_169),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_168,
											typeof __VLS_170
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block mb-2' })
								const __VLS_171 = __VLS_pickFunctionalComponentCtx(
									__VLS_168,
									__VLS_170,
								)!
								let __VLS_172!: __VLS_NormalizeEmits<typeof __VLS_171.emit>
								__VLS_171.slots!.default
							}
							{
								const __VLS_173 = __VLS_intrinsicElements['input']
								const __VLS_174 = __VLS_elementAsFunctionalComponent(__VLS_173)
								const __VLS_175 = __VLS_174(
									{
										...{},
										type: 'number',
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
									},
									...__VLS_functionalComponentArgsRest(__VLS_174),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_173,
											typeof __VLS_175
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									type: 'number',
									class:
										'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
								})
								const __VLS_176 = __VLS_pickFunctionalComponentCtx(
									__VLS_173,
									__VLS_175,
								)!
								let __VLS_177!: __VLS_NormalizeEmits<typeof __VLS_176.emit>
							}
							__VLS_166.slots!.default
						}
						{
							const __VLS_178 = __VLS_intrinsicElements['div']
							const __VLS_179 = __VLS_elementAsFunctionalComponent(__VLS_178)
							const __VLS_180 = __VLS_179(
								{ ...{}, class: 'mb-3' },
								...__VLS_functionalComponentArgsRest(__VLS_179),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_178,
										typeof __VLS_180
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3' })
							const __VLS_181 = __VLS_pickFunctionalComponentCtx(
								__VLS_178,
								__VLS_180,
							)!
							let __VLS_182!: __VLS_NormalizeEmits<typeof __VLS_181.emit>
							{
								const __VLS_183 = __VLS_intrinsicElements['label']
								const __VLS_184 = __VLS_elementAsFunctionalComponent(__VLS_183)
								const __VLS_185 = __VLS_184(
									{ ...{}, class: 'inline-block mb-2' },
									...__VLS_functionalComponentArgsRest(__VLS_184),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_183,
											typeof __VLS_185
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block mb-2' })
								const __VLS_186 = __VLS_pickFunctionalComponentCtx(
									__VLS_183,
									__VLS_185,
								)!
								let __VLS_187!: __VLS_NormalizeEmits<typeof __VLS_186.emit>
								__VLS_186.slots!.default
							}
							{
								const __VLS_188 = __VLS_intrinsicElements['input']
								const __VLS_189 = __VLS_elementAsFunctionalComponent(__VLS_188)
								const __VLS_190 = __VLS_189(
									{
										...{},
										type: 'password',
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
										placeholder: 'Password',
									},
									...__VLS_functionalComponentArgsRest(__VLS_189),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_188,
											typeof __VLS_190
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									type: 'password',
									class:
										'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
									placeholder: 'Password',
								})
								const __VLS_191 = __VLS_pickFunctionalComponentCtx(
									__VLS_188,
									__VLS_190,
								)!
								let __VLS_192!: __VLS_NormalizeEmits<typeof __VLS_191.emit>
							}
							__VLS_181.slots!.default
						}
						{
							const __VLS_193 = __VLS_intrinsicElements['div']
							const __VLS_194 = __VLS_elementAsFunctionalComponent(__VLS_193)
							const __VLS_195 = __VLS_194(
								{ ...{}, class: 'mb-3' },
								...__VLS_functionalComponentArgsRest(__VLS_194),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_193,
										typeof __VLS_195
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3' })
							const __VLS_196 = __VLS_pickFunctionalComponentCtx(
								__VLS_193,
								__VLS_195,
							)!
							let __VLS_197!: __VLS_NormalizeEmits<typeof __VLS_196.emit>
							{
								const __VLS_198 = __VLS_intrinsicElements['label']
								const __VLS_199 = __VLS_elementAsFunctionalComponent(__VLS_198)
								const __VLS_200 = __VLS_199(
									{ ...{}, class: 'inline-block mb-2' },
									...__VLS_functionalComponentArgsRest(__VLS_199),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_198,
											typeof __VLS_200
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block mb-2' })
								const __VLS_201 = __VLS_pickFunctionalComponentCtx(
									__VLS_198,
									__VLS_200,
								)!
								let __VLS_202!: __VLS_NormalizeEmits<typeof __VLS_201.emit>
								__VLS_201.slots!.default
							}
							{
								const __VLS_203 = __VLS_intrinsicElements['input']
								const __VLS_204 = __VLS_elementAsFunctionalComponent(__VLS_203)
								const __VLS_205 = __VLS_204(
									{
										...{},
										type: 'password',
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
										placeholder: 'Confirm Password',
									},
									...__VLS_functionalComponentArgsRest(__VLS_204),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_203,
											typeof __VLS_205
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									type: 'password',
									class:
										'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
									placeholder: 'Confirm Password',
								})
								const __VLS_206 = __VLS_pickFunctionalComponentCtx(
									__VLS_203,
									__VLS_205,
								)!
								let __VLS_207!: __VLS_NormalizeEmits<typeof __VLS_206.emit>
							}
							__VLS_196.slots!.default
						}
						{
							const __VLS_208 = __VLS_intrinsicElements['div']
							const __VLS_209 = __VLS_elementAsFunctionalComponent(__VLS_208)
							const __VLS_210 = __VLS_209(
								{ ...{}, class: 'mb-3' },
								...__VLS_functionalComponentArgsRest(__VLS_209),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_208,
										typeof __VLS_210
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3' })
							const __VLS_211 = __VLS_pickFunctionalComponentCtx(
								__VLS_208,
								__VLS_210,
							)!
							let __VLS_212!: __VLS_NormalizeEmits<typeof __VLS_211.emit>
							{
								const __VLS_213 = __VLS_intrinsicElements['label']
								const __VLS_214 = __VLS_elementAsFunctionalComponent(__VLS_213)
								const __VLS_215 = __VLS_214(
									{ ...{}, class: 'inline-block mb-2' },
									...__VLS_functionalComponentArgsRest(__VLS_214),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_213,
											typeof __VLS_215
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block mb-2' })
								const __VLS_216 = __VLS_pickFunctionalComponentCtx(
									__VLS_213,
									__VLS_215,
								)!
								let __VLS_217!: __VLS_NormalizeEmits<typeof __VLS_216.emit>
								__VLS_216.slots!.default
							}
							{
								const __VLS_218 = __VLS_intrinsicElements['select']
								const __VLS_219 = __VLS_elementAsFunctionalComponent(__VLS_218)
								const __VLS_220 = __VLS_219(
									{
										...{},
										class:
											'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
									},
									...__VLS_functionalComponentArgsRest(__VLS_219),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_218,
											typeof __VLS_220
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									class:
										'block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded',
								})
								const __VLS_221 = __VLS_pickFunctionalComponentCtx(
									__VLS_218,
									__VLS_220,
								)!
								let __VLS_222!: __VLS_NormalizeEmits<typeof __VLS_221.emit>
								{
									const __VLS_223 = __VLS_intrinsicElements['option']
									const __VLS_224 =
										__VLS_elementAsFunctionalComponent(__VLS_223)
									const __VLS_225 = __VLS_224(
										{ ...{}, value: 'USA' },
										...__VLS_functionalComponentArgsRest(__VLS_224),
									)
									;(
										({}) as (
											props: __VLS_FunctionalComponentProps<
												typeof __VLS_223,
												typeof __VLS_225
											> &
												Record<string, unknown>,
										) => void
									)({ ...{}, value: 'USA' })
									const __VLS_226 = __VLS_pickFunctionalComponentCtx(
										__VLS_223,
										__VLS_225,
									)!
									let __VLS_227!: __VLS_NormalizeEmits<typeof __VLS_226.emit>
									__VLS_226.slots!.default
								}
								{
									const __VLS_228 = __VLS_intrinsicElements['option']
									const __VLS_229 =
										__VLS_elementAsFunctionalComponent(__VLS_228)
									const __VLS_230 = __VLS_229(
										{ ...{}, value: 'Mexico' },
										...__VLS_functionalComponentArgsRest(__VLS_229),
									)
									;(
										({}) as (
											props: __VLS_FunctionalComponentProps<
												typeof __VLS_228,
												typeof __VLS_230
											> &
												Record<string, unknown>,
										) => void
									)({ ...{}, value: 'Mexico' })
									const __VLS_231 = __VLS_pickFunctionalComponentCtx(
										__VLS_228,
										__VLS_230,
									)!
									let __VLS_232!: __VLS_NormalizeEmits<typeof __VLS_231.emit>
									__VLS_231.slots!.default
								}
								{
									const __VLS_233 = __VLS_intrinsicElements['option']
									const __VLS_234 =
										__VLS_elementAsFunctionalComponent(__VLS_233)
									const __VLS_235 = __VLS_234(
										{ ...{}, value: 'Germany' },
										...__VLS_functionalComponentArgsRest(__VLS_234),
									)
									;(
										({}) as (
											props: __VLS_FunctionalComponentProps<
												typeof __VLS_233,
												typeof __VLS_235
											> &
												Record<string, unknown>,
										) => void
									)({ ...{}, value: 'Germany' })
									const __VLS_236 = __VLS_pickFunctionalComponentCtx(
										__VLS_233,
										__VLS_235,
									)!
									let __VLS_237!: __VLS_NormalizeEmits<typeof __VLS_236.emit>
									__VLS_236.slots!.default
								}
								__VLS_221.slots!.default
							}
							__VLS_211.slots!.default
						}
						{
							const __VLS_238 = __VLS_intrinsicElements['div']
							const __VLS_239 = __VLS_elementAsFunctionalComponent(__VLS_238)
							const __VLS_240 = __VLS_239(
								{ ...{}, class: 'mb-3 pl-6' },
								...__VLS_functionalComponentArgsRest(__VLS_239),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_238,
										typeof __VLS_240
									> &
										Record<string, unknown>,
								) => void
							)({ ...{}, class: 'mb-3 pl-6' })
							const __VLS_241 = __VLS_pickFunctionalComponentCtx(
								__VLS_238,
								__VLS_240,
							)!
							let __VLS_242!: __VLS_NormalizeEmits<typeof __VLS_241.emit>
							{
								const __VLS_243 = __VLS_intrinsicElements['input']
								const __VLS_244 = __VLS_elementAsFunctionalComponent(__VLS_243)
								const __VLS_245 = __VLS_244(
									{
										...{},
										type: 'checkbox',
										class: 'w-4 h-4 float-left -ml-6 mt-1 rounded',
									},
									...__VLS_functionalComponentArgsRest(__VLS_244),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_243,
											typeof __VLS_245
										> &
											Record<string, unknown>,
									) => void
								)({
									...{},
									type: 'checkbox',
									class: 'w-4 h-4 float-left -ml-6 mt-1 rounded',
								})
								const __VLS_246 = __VLS_pickFunctionalComponentCtx(
									__VLS_243,
									__VLS_245,
								)!
								let __VLS_247!: __VLS_NormalizeEmits<typeof __VLS_246.emit>
							}
							{
								const __VLS_248 = __VLS_intrinsicElements['label']
								const __VLS_249 = __VLS_elementAsFunctionalComponent(__VLS_248)
								const __VLS_250 = __VLS_249(
									{ ...{}, class: 'inline-block' },
									...__VLS_functionalComponentArgsRest(__VLS_249),
								)
								;(
									({}) as (
										props: __VLS_FunctionalComponentProps<
											typeof __VLS_248,
											typeof __VLS_250
										> &
											Record<string, unknown>,
									) => void
								)({ ...{}, class: 'inline-block' })
								const __VLS_251 = __VLS_pickFunctionalComponentCtx(
									__VLS_248,
									__VLS_250,
								)!
								let __VLS_252!: __VLS_NormalizeEmits<typeof __VLS_251.emit>
								__VLS_251.slots!.default
							}
							__VLS_241.slots!.default
						}
						{
							const __VLS_253 = __VLS_intrinsicElements['button']
							const __VLS_254 = __VLS_elementAsFunctionalComponent(__VLS_253)
							const __VLS_255 = __VLS_254(
								{
									...{},
									type: 'submit',
									class:
										'block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700',
								},
								...__VLS_functionalComponentArgsRest(__VLS_254),
							)
							;(
								({}) as (
									props: __VLS_FunctionalComponentProps<
										typeof __VLS_253,
										typeof __VLS_255
									> &
										Record<string, unknown>,
								) => void
							)({
								...{},
								type: 'submit',
								class:
									'block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700',
							})
							const __VLS_256 = __VLS_pickFunctionalComponentCtx(
								__VLS_253,
								__VLS_255,
							)!
							let __VLS_257!: __VLS_NormalizeEmits<typeof __VLS_256.emit>
							__VLS_256.slots!.default
						}
						__VLS_126.slots!.default
					}
					__VLS_33.slots!.default
				}
				__VLS_28.slots!.default
			}
			__VLS_8.slots!.default
		}
		__VLS_3.slots!.default
	}
	if (
		typeof __VLS_styleScopedClasses === 'object' &&
		!Array.isArray(__VLS_styleScopedClasses)
	) {
	}
	var __VLS_slots!: {}
	// @ts-ignore
	;[tab, schema, schema, schema, tab]
	return __VLS_slots
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
	setup() {
		return {
			hiddenClass: hiddenClass as typeof hiddenClass,
			closeModal: closeModal as typeof closeModal,
			schema: schema as typeof schema,
			tab: tab as typeof tab,
		}
	},
})
export default (await import('vue')).defineComponent({
	setup() {
		return {}
	},
})
