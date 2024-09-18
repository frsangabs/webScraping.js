Web Scraping: Manipulação da Tabela do Brasileirão - Série A

Este projeto contém um script de manipulação de dados da tabela de classificação do Campeonato Brasileiro - Série A, encontrado no site ge.globo.com. O script, desenvolvido para ser executado no console do navegador, faz algumas modificações na tabela original.

Funcionalidades
Incremento nas posições de cada time: Todas as posições das equipes são incrementadas em 1.

Inserção do time "Santos" como líder: O script insere uma nova linha no topo da tabela com o time "Santos" na primeira posição.

Modificação na tabela de pontuação:

Jogos, vitórias, empates e derrotas são adicionados para o time "Santos".
Pontos calculados automaticamente com base nas vitórias e empates.
Diferença de gols (saldo de gols) calculada e exibida.
Aproveitamento do time em percentual, calculado com base nos pontos obtidos e possíveis.
Últimos 5 jogos adicionados, todos como vitórias.
Limitação de exibição da tabela: Apenas os primeiros 20 times da classificação são exibidos. Caso mais de 20 times sejam listados, o último time é ocultado.

Como usar
Abra o navegador e acesse a página da classificação do Brasileirão:
https://ge.globo.com/futebol/brasileirao-serie-a/.

Abra o console do navegador:

No Google Chrome, pressione F12 ou Ctrl+Shift+I e selecione a aba "Console".
Copie o código JavaScript, cole no console e chame a função mundoJusto()

OBSERVAÇÃO
Esse código foi criado para um projeto da faculdade no dia 15/09/2024 e provavelmente deixará de funcionar posteriormente devido as atualizações da tabela.
