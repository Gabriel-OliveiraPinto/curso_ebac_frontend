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

//for(let i = 0; i < alunos.length; i++) {
  //  console.log(alunos[i].nome);
    //console.log(alunos[i].nota);
//}


const alunosQuePassaram = alunos.filter(function(aluno) {
    return aluno.nota >= 6;
})

console.log(alunosQuePassaram);