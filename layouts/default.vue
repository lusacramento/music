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
</style>
