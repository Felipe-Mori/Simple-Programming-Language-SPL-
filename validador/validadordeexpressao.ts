function evaluateSimpleExpression(expression: string): number {
    // Remover espaços em branco
    const cleanExpression = expression.replace(/\s/g, '');

    // Dividir a expressão em tokens (números e operadores)
    const tokens = cleanExpression.match(/\d+|\+|\-|\*|\//g) || [];

    // Pilha para armazenar números
    const numbers: number[] = [];

    // Iterar sobre os tokens
    for (const token of tokens) {
        if (!isNaN(Number(token))) {
            // Se for um número, adicionar à pilha
            numbers.push(Number(token));
        } else {
            // Se for um operador, realizar a operação nos dois últimos números da pilha
            const b = numbers.pop()!;
            // O "!" a cima é utilizado para que o compilador entenda que o valor retornado não será 'null' ou 'undefined'
            const a = numbers.pop()!;
            switch (token) {
                case '+':
                    numbers.push(a + b);
                    break;
                case '-':
                    numbers.push(a - b);
                    break;
                case '*':
                    numbers.push(a * b);
                    break;
                case '/':
                    numbers.push(a / b);
                    break;
            }
        }
    }

    // O resultado final estará no topo da pilha
    return numbers.pop()!;
}

const expression = '12+4*5/2';
const result = evaluateSimpleExpression(expression);
console.log(result);