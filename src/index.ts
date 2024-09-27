import { Interpreter } from "./interpreter"; // Importamos o interpretador

// Abaixo é o código com as declarações de variáveis e execução
const code = `
algoritmo teste_variaveis;   // Declaração do algoritmo
variaveis                    // Bloco de variáveis
x : inteiro;                 // Variável inteira
nome : literal;              // Variável string (literal)
fim-variaveis                // Fim do bloco de variáveis
inicio                       // Início do bloco principal
show "Variáveis declaradas"; // Exibe uma mensagem
fim                          // Fim do bloco principal
`;

// Criamos um interpretador e passamos o código como entrada
const interpreter = new Interpreter(code);

// Executando o código
interpreter.run();
