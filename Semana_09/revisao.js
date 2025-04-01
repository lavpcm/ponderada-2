// Classe base
class Animal {
    constructor(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
    }
    exibirInformacoes() {
    return `Nome: ${this.nome}, Espécie: ${this.especie}, Idade: ${this.idade}`;
    }
    }
    // Classe derivada
    class AnimalSelvagem extends Animal {
    constructor(nome, especie, idade, habitat) {
    super(nome, especie, idade);
    this.habitat = habitat;
    }
    exibirHabitat() {
    return `Habitat natural: ${this.habitat}`;
    }
    }
    // Instâncias e retornos
    const animal1 = new Animal("Tico", "Macaco", 4);
    const animal2 = new AnimalSelvagem("Nala", "Leoa", 5, "Savana Africana");
    console.log(animal1.exibirInformacoes());
    console.log(animal2.exibirInformacoes());
    console.log(animal2.exibirHabitat());

    // CLasse Derivada
    class AnimalDomestico extends Animal {
        constructor(nome, especie, idade, nomeDono) {
        super(nome, especie, idade);
        this.nomeDono = nomeDono;
        }
        exibirDono() {
            return `Dono de ${this.nome}: ${this.nomeDono}`
        }
    }

    // teste: 
    const animal3 = new AnimalDomestico("Cida", "Gato", 2, "Carla");
    console.log(animal3.exibirInformacoes());
    console.log(animal3.exibirDono());
    
```
QUESTÕES:
1A) atributos definidos na classe Animal: Nome, Espécie, Idade

1B) AnimalSelvagem amplia a estrutura de Animal com o atributo Habitat: Nome, Espécie, Idade, Habitat


2C) class AnimalSelvagem extends Animal: AnimalSelvagem herda os atributos e métodos da classe base Animal

2D) o comando super(nome, especie, idade) chama (puxa) o construtor da classe base Animal para inicializar os 
atributos herdados (puxa esses atrbutos e executa seus métodos)


3E) É criado um novo objeto a partir da classe AnimalSelvagem (por meio do recurso new do constructor)

3F) Enquanto animal1 pertence à classe Animal, animal2 pertence à classe AnimalSelvagem. 

4G) Como foi criado na classe mãe Animal, o método exibirInformacoes() pode ser utilizado por ambas as 
classes e por todas as outras classes que vierem a herdar a classe Animal.

4H) o método exibirHabitat() não está disponível em animal1, tendo em vista que esse foi criado como objeto 
da classe mãe Animal, que não possui o método exibirHabitat() que foi criado na classe filha AnimalSelvagem


5I) Nesse exemplo, a herança evita duplicação de código ao puxar os atributos e métodos de Animal para 
AnimalSelvagem, que também precisa deles, evitando que os atributos fossem escritos novamente. 

5J) Para implementar um atributo a todos os animais, ele deve ser implementado na classe mãe Animal, tendo em 
vista que todos os atributos dessa classe podem ser herdados por classes filhas


6K) 
Nome: Tico, Espécie: Macaco, Idade: 4
Nome: Nala, Espécie: Leoa , Idade: 5
Habitat natural: Savana Africana

6L) Caso fosse removida a linha super(nome, especie, idade), o código não funcionaria, pois a classe 
AnimalSelvagem não teria acesso aos atributos da classe mãe Animal

7M) Em baixo do código

```
