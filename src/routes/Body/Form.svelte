<script>
	let isDisabled = false

	let employeeName = ""
	let offence = ""
	let penality = ""

	const clearValues = () => {
		employeeName = ""
		offence = ""
		penality = ""
	}

	let textInput = ""

	const copyText = () => {
		navigator.clipboard.writeText(textInput)
	}

	const submitInfo = async () => {
		isDisabled = true

		textInput = ""

		const info = {
			"employeeName":employeeName,
			"offence":offence,
			"penality":penality
		}
		const response = await fetch('/openAI', {
			method: 'POST',
			body: JSON.stringify({ info }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.status !== 201){
			await submitInfo()
			return
		}
		const {returns} = await response.json()
		textInput = returns
		isDisabled = false
		return
	}

</script>

<div class="form">
	<form on:submit|preventDefault={submitInfo}>
		<div class="form-item">
			<label for="employee-name"> 
				Employee Name 
			</label>
			<input type="text" id="employee-name" bind:value={employeeName}>
		</div>
		<br>
		<div class="form-item">
			<label for="offence">
				Offence
			</label>
			<input type="text" id="offence" bind:value={offence}>
		</div>
		<br>
		<div class="form-item">
			<label for="penalty">
				Penalty
			</label>
			<input type="text" id="penalty" bind:value={penality}>
		</div>
		<br>
		<div class="button-container">
			<button type="submit" disabled={isDisabled}>
				Submit
			</button>
			<button type="button" on:click="{clearValues}">
				Clear
			</button>
		</div>

		<textarea bind:value={textInput} />
		<button type="button" class="copy-button" on:click|preventDefault={copyText}>
			Copy
		</button>

	</form>
</div>

<style>
	.form{
		display: flex;
		flex-direction: column;
	}
	.form-item{
		display: flex;
		justify-content: space-between;
		width: 40vw;
	}
	label{
		font-size: 2.5vh;
		font-family: "Lucida Console", Monaco, monospace;
	}
	input[type=text]{
		border: 2px solid rgb(0, 0, 0);
		padding: 5px;
		width: 15vw;
		outline:none;
		font-family: "Lucida Console", Monaco, monospace;
	}
	input[type=text]:focus{
		border: 2px solid rgb(0, 123, 255);
	}
	.button-container{
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 2vh;
	}
	button{
		margin: 30px 60px 30px 60px;
		padding: 3px;
		font-family: "lucida console", monaco, monospace;
		border: 1px solid rgb(0,0,0);
		font-size: 2vh;
	}
	textarea{
		width: 100%;
		height: 30vh;
		border: 1px solid rgb(0,0,0);
		outline: none;
	}
	textarea:focus{
		border: 2px solid rgb(0, 123, 255);
	}
	.copy-button{
		margin-left: 0px;
		margin-top: 15px;
	}
</style>
