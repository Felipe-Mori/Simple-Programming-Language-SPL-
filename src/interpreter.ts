import { Parser } from "./parser";     // Importamos o parser
import { keywords } from "./keywords"; // Importamos as keywords

// A classe Interpreter vai executar o código baseado na estrutura gerada pelo Parser
export class Interpreter {
  private parser: Parser;   // Aqui armazenamos o parser que vamos usar

  constructor(input: string) {
    // Quando criamos o interpretador, criamos o parser e passamos o código para ele
    this.parser = new Parser(input);
  }

  // Método que inicia a execução do código
  public run(): void {
    // Usa o parser para criar a árvore de sintaxe do código
    const ast = this.parser.parse();
    // Agora vai avaliar a árvore e executar o código
    this.evaluate(ast);
  }

  // Método que vai avaliar os nós da árvore e executar os comandos
  private evaluate(node: any): void {
    // Verifica se o nó é do tipo 'IfStatement' (que a gente criou lá no parser)
    if (node.type === "IfStatement") {
      // Se a condição for 'true', executa o código associado ao 'check' (que seria o 'if')
      if (node.condition === "true") {
        // Usa o 'show' (que mapeamos para 'console.log') para mostrar a mensagem
        eval(`${keywords.show}('Condição verdadeira')`);
      // Se houver um 'otherwise' (que seria o 'else'), executa o código associado a ele
      } else if (node.otherwise) {
        eval(`${keywords.show}('Condição falsa')`);
      }
    }
  }
}
