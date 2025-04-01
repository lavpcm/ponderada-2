# Instruções
- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

``` R: alternativa a) as variáveis 'x' e 'y' foram definidas após o 'console.log()', fazendo com que o código não funcione adequadamente: ```

```console.log(x); // undefined, uma vez que a variável x, apesar de ser puxada para o topo do escopo do código como 'var', ainda não possui valor e, portanto, não pode ser exibida (sua definição pode ser acessada pelo 'console.log(x)', mas o valor atribuido a ela não) ```

```var x = 5;```
```console.log(y); // erro, uma vez que a variável y não pôde ser acessada antes já que foi definida como 'let' (nem sua definição nem seu valor podem ser acessados pelo 'console.log(y)') ```

```let y = 10; ```


**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

```R: alternativa b) o erro na versão original se dá por conta da ordem de prioridade dos operadores lógicos, fazendo com que b === 0 seja avaliado primeiro e, assim, executando o código de forma diferente do esperado. Aplicando a substituição, ele passa a funcionar da maneira correta, somando os dois números caso ambos sejam diferentes de 0 ou  caso apenas um deles seja zero e exibindo a mensagem de erro caso ambos sejam 0.```

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.

```R: alternativa b) tendo em vista que não há um break após o case "eletrônico",  o código define preco como 100 mas avança para o case "vestuário" que, por sua vez, faz o preco ser definido como 200. Como há um break após o case "vestuário", o restante do código é impedido de ser executado e o console imrpime 200.``` 


______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);

a) 0

b) 6

c) 18

d) 24

```

```R: alternativa d) "let resultado = numeros.map(x => x * 2)" múltiplica cada número do array por 2. Em seguida, ".filter(x => x > 5)" filtra e armazena os valores maiores que 5. Por fim, ".reduce((a, b) => a + b, 0);" soma os valores maiores que 5 e "console.log(resultado);" imprime o resultado 24```


```
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

```R: alternativa c) ".splice" substitui os valores 1 e 2, ou seja, "maçã" e "uva" por "abacaxi" e "manga", respectivamente, mantendo os valores 0 e 3 como "banana" e "laranja". Em seguida, o "console.log(lista)" imprime a nova lista de frutas, atualizada com os valores substituidos.```
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

```R: alternativa a) "extends" é o mecanismo utilizado para implementar heranças em java script, permitindo que classes compartilhem métodos e propriedades.```
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

```R: alternativa a) I é verdadeira, tendo em vista que "class Funcionario extends Pessoa" faz com que "Funcionário" herde os atributos de "Pessoa" por meio do "extends". II é verdadeira, tendo em vista que "apresentar()" da classe "Funcionario" sobrepõe o da classe "Pessoa", mas ainda chama o método original da classe pai usando "super.apresentar()", antes de adicionar a nova informação sobre o salário. III é falsa, poir java script suporta heranças de classe por meio de "extends";```

______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

```R: alternativa b) a asserção é verdadeira, pois o polimorfismo significa que diferentes classes podem ter métodos com o mesmo nome, mas com implementações diferentes. já a razão é falsa, uma vez que em java script, apesar de suportar a sobrescrita (sendo possível redefinir o comportamento de um método), não suporta a sobrecarga de métodos. ```
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

```RESPOSTA:```
```javascript
// código original
function somaArray(numeros) { 

  for (i = 0; i < numeros.size; i++) { // numeros.size está incorreto
      soma = 2*numeros[i]; // soma está sendo redefinido a cada iteração
  }
  return soma; // retorna o valor de soma, que foi redefinido na última iteração do for
}
console.log(somaArray([1, 2, 3, 4])); // imprime o valor retornado pela função somaArray


// código corrigido
function somaArray(numeros) { //
    let soma = 0; // define a variável "soma" inicialmente como 0, antes do for começar a iterar sobre o array "numeros" 
    for (let i = 0; i < numeros.length; i++) { // correção de numeros.size para numeros.length; declaração da variável i com let
        soma += 2 * numeros[i]; // soma cada elemento do array multiplicado por 2, redefinindo "soma" a cada iteração
    }
    return soma;
}

console.log(somaArray([1, 2, 3, 4]));

```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

```RESPOSTA:```
```javascript
// A herança é um recurso de POO que permite que uma classe herde atributos e métodos de outra classe. No código em questão, a classe Livro herda os atributos nome e preco e o método calcularDesconto() da classe Produto. Em seguida, a classe Livro modifica o método calcularDesconto() para aplicar um desconto de 20% no preço dos livros, em vez de 10%.


// código
class Produto { // Construtor da classe Produto, que define nome e preço do produto
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularDesconto() { // calcular o desconto no preço do produto (10% de desconto)
    this.preco = this.preco * 0.9; // aplica o desconto de 10% no preço do produto
    console.log(`O preço de ${this.nome} com desconto de 10% é R$ ${this.preco}.`);
  }
}

class Livro extends Produto { // Classe Livro que herda de Produto
  constructor(nome, preco, editora) { // Construtor da classe Livro, que define nome, preço e editor
    super(nome, preco);
    this.editora = editora; // define a editora do livro
  }

  calcularDesconto() { // calcular o desconto no preço do livro (20% de desconto)
    this.preco = this.preco * 0.8; // aplica o desconto de 20% no preço do livro
    console.log(`O preço de ${this.nome} com desconto de 20% é R$ ${this.preco}.`);
  } 
} 

```
