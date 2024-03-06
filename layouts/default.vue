<template>
	<div>
		<AppHeader />
		<AppIntroduction />
		<div class="view">
			<slot />
		</div>
		<AppPlayer />
		<AppAuth />
	</div>
</template>

<script lang="ts" setup></script>

<style>
	.view {
		margin-bottom: 70px;
	}

	.fade-enter-from {
		opacity: 0;
	}

	.fade-enter-active {
		transition: all 0.5s linear;
	}

	.fade-leave-to {
		transition: all 0.5s linear;
		opacity: 0;
	}
</style>
