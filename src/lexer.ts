// O Lexer vai transformar o código de texto em tokens, que são pedaços menores e mais fáceis de processar
export class Lexer {
  private readonly input: string;  // Aqui guardamos o código que vai ser analisado
  private pos: number = 0;         // 'pos' guarda a posição atual de leitura no código

  constructor(input: string) {
    this.input = input; // Quando criamos um Lexer, passamos o código de entrada pra ele
  }

  // Método que retorna o próximo token (a próxima "palavra" ou símbolo)
  public nextToken(): string {
    // Quebra o código em tokens usando espaços em branco como delimitadores
    const tokens = this.input.split(/\s+/);
    // Retorna o próximo token baseado na posição atual. Se acabar o código, retorna "EOF"
    return tokens[this.pos++] || "EOF";
  }
}
