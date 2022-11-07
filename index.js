const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]
const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n")
}
ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else {
        console.log(answers)
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
        Bacana Murilo!

        O que você aprendeu hoje foi: ${answers[0]}
        
        O que te deixou aborrecido e O que poderia melhorar foi: ${answers[1]}

        O que te deixou feliz hoje foi: ${answers[2]}

        Quantas pessoas você ajudou hoje foi: ${answers[3]}

        Volte amanhã para mais reflexões
    `)
})