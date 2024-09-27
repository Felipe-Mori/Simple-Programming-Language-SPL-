import { Lexer } from "./lexer";       // Importamos o Lexer

// A classe Parser vai processar os tokens e transformar em uma estrutura que dá pra executar
export class Parser {
  private lexer: Lexer;             // Armazenamos o Lexer que vai gerar os tokens
  private currentToken: string;     // Esse vai ser o token que estamos processando agora

  constructor(input: string) {
    // Quando o parser é criado, ele cria um Lexer com o código de entrada
    this.lexer = new Lexer(input);
    // Pega o primeiro token para começar o processo
    this.currentToken = this.lexer.nextToken();
  }

  // Esse método é o responsável por começar a interpretar os tokens
  public parse(): any {
    // Verifica se o token atual é o 'check' (nosso equivalente de if)
    if (this.currentToken === "check") {
      // Se for, chamamos o método que trata um 'check'
      return this.parseIfStatement();
    }
    // Se não for 'check', não temos mais nada pra fazer por enquanto
    return null;
  }

  // Aqui é onde tratamos a estrutura de um 'check' (nosso if)
  private parseIfStatement(): any {
    // 'come' o token 'check' (avança pro próximo token)
    this.eat("check");
    // Guarda o token que representa a condição (ex: 'true' ou 'x > 10')
    const condition = this.currentToken;
    // Avança mais um token depois da condição
    this.eat(condition);
    // Se o próximo token for 'otherwise' (equivalente a 'else')
    if (this.currentToken === "otherwise") {
      // Avança o token 'otherwise' e retorna um objeto com a estrutura de 'if' e 'else'
      this.eat("otherwise");
      return {
        type: "IfStatement",     // Tipo de estrutura, no caso, 'if'
        condition,               // A condição que foi passada
        otherwise: true,         // Diz que existe um 'else' no código
      };
    }
    // Se não houver 'otherwise', só retorna a estrutura do 'if' com a condição
    return { type: "IfStatement", condition };
  }

  // O método 'eat' basicamente verifica se o token atual é o esperado e avança para o próximo
  private eat(token: string): void {
    // Se o token atual for igual ao esperado, avança pro próximo
    if (this.currentToken === token) {
      this.currentToken = this.lexer.nextToken();
    } else {
      // Se não for o esperado, lança um erro
      throw new Error(`Token esperado: ${token}, mas encontrado: ${this.currentToken}`);
    }
  }
}
