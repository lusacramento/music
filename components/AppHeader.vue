<template>
	<header id="header" class="bg-gray-700">
		<nav class="container mx-auto flex justify-start items-center py-5 px-4">
			<!-- App Name -->
			<NuxtLink class="text-white font-bold uppercase text-2xl mr-4" to="/"
				>Music</NuxtLink
			>

			<div class="flex flex-grow items-center">
				<!-- Primary Navigation -->
				<ul class="flex flex-row mt-1">
					<!-- Navigation Links -->
					<li v-if="!useMyUserStore().isLoggedIn">
						<a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
							>Login / Register</a
						>
					</li>
					<template v-else>
						<li>
							<NuxtLink to="/manage" class="px-2 text-white">Manage</NuxtLink>
						</li>
						<li>
							<NuxtLink @click.prevent="logout" class="px-2 text-white" to="/"
								>Logout</NuxtLink
							>
						</li>
					</template>
				</ul>
				<ul class="ml-auto">
					<li>
						<a href="#" class="px-2 text-white" @click.prevent="changeLocale">
							{{ currentLocale }}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
	const toggleAuthModal = () => {
		useMyModalStore().toogleIsOpened()
	}

	const currentLocale = ref(useNuxtApp().$i18n.locale)

	function logout() {
		useMyUserStore().signOut()
	}

	function changeLocale() {
		useNuxtApp().$i18n.locale.value =
			useNuxtApp().$i18n.locale.value === 'en' ? 'pt' : 'en'
	}
</script>
