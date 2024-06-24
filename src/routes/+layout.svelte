<script lang="ts">
	import { AI_ASSISTANT, AI_AVATAR_PATH } from '$lib/config';
	import '../app.postcss';
</script>

<main class="h-screen w-full">
	<div class="grid h-full w-full grid-rows-12">
		<div class="row-span-1 flex w-full items-center bg-primary p-2">
			<div class="flex-1">
				<img
					class="inline-block h-8 w-8 rounded-full ring-2 ring-white xl:h-12 xl:w-12"
					src={AI_AVATAR_PATH}
					alt=""
				/>
			</div>
			<div class="relative right-12 flex-1 text-lg font-bold text-white md:text-xl xl:text-3xl">
				{AI_ASSISTANT}
			</div>
		</div>
		<slot />
	</div>
</main>
