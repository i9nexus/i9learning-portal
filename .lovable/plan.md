

## Linha de Sequencia entre os Passos da Metodologia

### O que vai mudar

Substituir a linha conectora atual (um simples traço entre os cards) por uma linha de sequencia mais elegante e continua que liga visualmente os 4 passos da metodologia, sem ser intrusiva.

### Abordagem Visual

- **Desktop (4 colunas):** Uma linha horizontal tracejada (dashed) com opacidade reduzida que corre por detras dos cards, ao nivel dos icones. Nos pontos de conexao entre cada card, um pequeno circulo/ponto com gradiente marca a transicao.
- **Tablet (2 colunas):** A linha adapta-se ao layout de 2 colunas, conectando horizontalmente os pares e verticalmente entre as linhas.
- **Mobile (1 coluna):** Uma linha vertical tracejada subtil que liga os cards de cima para baixo, posicionada ao centro.

### Detalhes Tecnicos

**Ficheiro:** `src/components/HowWeWork.tsx`

1. **Remover** a linha conectora atual (div com `bg-border` na linha 68-70)
2. **Adicionar** uma linha de progresso horizontal (desktop) posicionada atras do grid usando `absolute`, com:
   - Cor: `border-primary/20` (tracejada, muito subtil)
   - Posicao: alinhada verticalmente com os icones dos cards
   - Visibilidade: apenas em `lg:` (desktop com 4 colunas)
3. **Adicionar** conectores verticais para mobile/tablet:
   - Linha vertical tracejada central entre os cards em `sm:` e abaixo
   - Cor consistente com a linha horizontal
4. **Adicionar** pequenos circulos nos pontos de conexao com gradiente `primary` e opacidade baixa, para marcar visualmente cada etapa
5. A linha e os pontos tambem terao a animacao de scroll reveal (fade-in com delay) para acompanhar o aparecimento dos cards

### Estilo

- Linha: `border-dashed border-primary/15` -- muito discreta
- Pontos de conexao: pequenos circulos (8px) com `bg-primary/30` e um leve `shadow`
- Tudo com `z-0` para ficar atras do conteudo dos cards (`z-10`/`z-20`)

