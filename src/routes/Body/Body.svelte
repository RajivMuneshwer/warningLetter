<script>
	import Form from "./Form.svelte";
</script>
<div class="body-container">
	<div class="warning-letter-container">
		Warning Letter
	</div>
	<div class="form-container">
		<Form/>
	</div>
</div>

<style>
	.body-container{
		min-height: 80%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5vh;
	}
	.warning-letter-container{
		display: flex;
		justify-content: left;
		color: rgb(0,0,0);
		font-size: 4vh;
		height: 20%;
		width: 100%;
		font-family: "Lucida Console", Monaco, monospace;
	}
	.form-container{
		height: 80%;
		width: 100%;
		display: flex;
		justify-content: left;
		padding: 2.5vh;
		padding-left: 10vw;
	}
</style>
