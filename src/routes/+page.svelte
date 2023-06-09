<script>
	import Banner from "./Banner/Banner.svelte";
	import Body from "./Body/Body.svelte";
</script>

<div class="base">
	<div class="layer-1">
		<Banner/>	
		<Body/>
	</div>
</div>


<style>
	*{
		padding: 0;
		margin: 0;
	}
	.base{
		padding: 0;
		margin: 0;
		background-color: rgb(255, 255, 255);
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		min-height: 100%;
		min-width: 100%;
	}
	.layer-1{
		width:80%;
		height: 100%;
		min-height: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
		background-color: rgb(255,255,255);
	}

</style>
