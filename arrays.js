const aluno = [
  { nome: "maria", nota: "9" },
  { nome: "jorge", nota: "2" },
  { nome: "matheus", nota: "3" },
  { nome: "luan", nota: "6" },
  { nome: "eduardo", nota: "10" },
];

function avaliarNota(aluno) {
  return aluno.filter((aluno) => aluno.nota >= 6);
}

const alunosAprovados = avaliarNota(aluno);
console.log(alunosAprovados);
