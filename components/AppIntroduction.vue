<template>
	<section class="mb-8 py-20 text-white text-center relative">
		<div
			class="absolute inset-0 w-full h-full bg-contain introduction-bg"
			style="background-image: url(/imgs/header.png)"
		></div>
		<div class="container mx-auto">
			<div class="text-white main-header-content">
				<h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1>
				<h2 class="w-full md:w-8/12 mx-auto">
					Discover new music, connect with artists and fans worldwide!
				</h2>
				<p>
					This app is based on
					<a
						href="https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/"
						>Complete Vue Developer Bootcamp (Pinia, Vitest)</a
					>
					course hosted on <span>Udemy</span>. <br />In case, the original code
					was rewrited on <a href="https://nuxt.com/">Nuxt 3</a> framework.
				</p>
			</div>
		</div>

		<img
			class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
			src="/assets/img/introduction-music.png"
		/>
	</section>
</template>

<style scoped>
	h1 {
		margin-bottom: 10px !important;
	}
	h2 {
		font-size: larger;
		margin-bottom: 20px;
	}

	p {
		font-size: smaller;
		color: rgba(255, 255, 255, 0.5);
	}

	a,
	span {
		color: rgba(255, 255, 255, 0.7);
	}
</style>
