function evaluateSimpleExpressionWithMatrix(expression: string): number {
  // Remover espaços em branco
  const cleanExpression = expression.replace(/\s/g, '');

  // Dividir a expressão em tokens (números e operadores)
  const tokens = cleanExpression.match(/\d+|\+|\-|\*|\//g) || [];

  // Criar a matriz de validação (2 linhas: números e operadores)
  const matrix: (number | string)[][] = [[], []];  // matriz[0] para números e matriz[1] para operadores

  // Iterar sobre os tokens
  for (const token of tokens) {
      if (!isNaN(Number(token))) {
          // Se for um número, adicionar na linha 0 (números)
          matrix[0].push(Number(token));
      } else {
          // Se for um operador, adicionar na linha 1 (operadores)
          matrix[1].push(token);
      }
  }

  // Validar que o número de operadores seja sempre um a menos que o número de números
  if (matrix[0].length - matrix[1].length !== 1) {
      throw new Error("Expressão inválida: o número de operadores e operandos não corresponde.");
  }

  // Executar as operações seguindo a ordem da matriz
  while (matrix[1].length > 0) {
      const a = matrix[0].shift() as number; // Pegar o primeiro número
      const b = matrix[0].shift() as number; // Pegar o próximo número
      const operator = matrix[1].shift() as string; // Pegar o primeiro operador

      let result: number = 0;
      switch (operator) {
          case '+':
              result = a + b;
              break;
          case '-':
              result = a - b;
              break;
          case '*':
              result = a * b;
              break;
          case '/':
              result = a / b;
              break;
      }

      // Colocar o resultado de volta na matriz de números
      matrix[0].unshift(result);
  }

  // O resultado final estará no topo da matriz de números
  return matrix[0][0] as number;
}

const expressionMatriz = '12+4*5/2';
const resultMatriz = evaluateSimpleExpressionWithMatrix(expression);
console.log(result);
