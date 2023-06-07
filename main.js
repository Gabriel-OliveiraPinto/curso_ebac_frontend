let alunos = [
    {
    nome: "Julia",
    nota:  6
    },
    {
    nome: "Amanda",
    nota:  9
    },
    {
    nome: "Joel",
    nota:  3
    },
    {
    nome: "Carlos",
    nota: 10
    },
    {
    nome: "Joao",
    nota:  4
    }
]

const alunosQuePassaram = alunos.filter(function(aluno) {
    return aluno.nota >= 6;
})

console.log(alunosQuePassaram);