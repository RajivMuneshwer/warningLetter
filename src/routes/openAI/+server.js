import { json } from '@sveltejs/kit'
import { Configuration, OpenAIApi } from 'openai'
import { OPENAI_API_KEY } from '$env/static/private'

export async function POST({ request }){

	const configuration = new Configuration({
		apiKey: OPENAI_API_KEY,
	})
	const openai = new OpenAIApi(configuration)

	const { info } = await request.json()
	const { employeeName, offence, penality } = info

	const res = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [{role: "user", content: `Write a warning letter for an employee named '${employeeName}'? The employee committed the offence of ${offence}. The employee's penality is ${penality}. Encourage the employee to do better. And keep the response within 150 words.`}]
	})

	const returns = res.data.choices[0].message?.content

	return json({returns}, {status: 201})
}
