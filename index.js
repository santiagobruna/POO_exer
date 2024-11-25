// abstracao
class Aluno {
    constructor (nome, matricula, curso, notas){
        // atributos
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.notas = notas;
    }
    // métodos
    calcularMedia(){
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return (soma / this.notas.length).toFixed(2);
    }
}
// 2 classes que extends Aluno
class AlunoDeGraduacao extends Aluno{
    constructor (nome, matricula, curso, notas, cargaHorariaObrigatoria){
        super(nome, matricula, curso, notas);
        this.cargaHorariaObrigatoria = cargaHorariaObrigatoria;
    }
    // métodos
    verificarConclusao(cargaHorariaCompleta) {
        return cargaHorariaCompleta >= this.cargaHorariaObrigatoria 
            ? 'Conclusão atendida' 
            : 'Conclusão pendente';
    }
}

class AlunoPosGraduacao extends Aluno{
    constructor (nome, matricula, curso, notas, atividadesComplementares){
        super(nome, matricula, curso, notas);
        this.atividadesComplementares = atividadesComplementares;
    }
    // métodos
    verificarAtividadesComplementares(atividades){
        return atividades >= this.atividadesComplementares
        ? 'Atividades concluídas' 
        : 'Atividades pendentes';
    }
}

// instâncias
const aluno1 = new Aluno('Zayan', '234456', 'Gamer', [10, 10, 10, 9]);
const alunoGraduacao1 = new AlunoDeGraduacao('Julio', '235536', 'Programador', [7, 8, 6, 9], 3500);
const alunoPosGraduacao1 = new AlunoPosGraduacao('Luiz', '231247', 'Engenheiro', [4, 6, 5, 9], 20);

// Testes
console.log(alunoGraduacao1.verificarConclusao(4000));
console.log(alunoPosGraduacao1.verificarAtividadesComplementares(10));
console.log(`Média do ${aluno1.nome} é: ${aluno1.calcularMedia()}`);
console.log(`Média do ${alunoGraduacao1.nome} é: ${alunoGraduacao1.calcularMedia()}`);