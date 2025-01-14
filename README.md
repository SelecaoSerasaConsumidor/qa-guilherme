# Serasa Consumidor - Teste Analista de Qualidade

Olá, obrigado pelo interesse em fazer parte da nossa equipe.  

O objetivo deste teste é verificar (até certo ponto) suas habilidades de qualidade e de automação. Para isso você receberá um case onde poderá mostrar suas técnicas de levantamento de cenários e automação de testes.

Nós encorajamos você a exagerar um pouco na solução para mostrar do que você é capaz.

# Case: Implementação de Funcionalidade de PIX

Você é o QA responsável por liderar a implementação de uma nova funcionalidade de pagamento por PIX em um aplicativo de pagamento de dívidas. A nova feature permitirá aos consumidores pagarem suas dívidas utilizando o PIX diretamente pelo aplicativo de forma rápida e segura, atualmente o único meio de pagamento é boleto bancário.

# História de Usuário:
- Como um consumidor do aplicativo Serasa,
- Quero ter a opção de realizar pagamento utilizando meio de pagamento PIX,
- Para que eu possa pagar minha dívida de forma rápida e segura.

# Critérios de Aceite:
1. Consumidor deve conseguir realizar o fechamento de um acordo com Pix.
2. Consumidor deve ser notificado após sistema receber o Hook de pagamento
3. Consumidor deve conseguir visualizar no histórico os acordos o andamento do acordo fechado em Pix.

# Regras de Negócio:
1. Na tela de meio de pagamento: deve exibir o Pix e o Boleto como forma de pagamento.
2. Na tela de parcelamento:  deve ser possível habilitar para o Pix parcelado ou somente a vista por parceiro/consumidor.
3. Na tela de datas vencimento: deve ser apresentada as datas de vencimento de acordo com os parâmetros de cada parceiro.
4. Na tela de fechamento de acordo: deve ser apresentado tudo que foi escolhido pelo consumidor.
5. Após realizar fechamento do acordo: deve exibir as informações do acordo e a chave PIX para ser copiada.
6. Após copiar a chave pix: deve fornecer instruções claras sobre como usar o PIX para realizar o pagamento. 
7. Após realizar o Pagamento do Pix:  ter um feedback ao consumidor onde o usuário deve receber uma confirmação imediata no site e por e-mail de que o pagamento foi recebido com sucesso. 
8. Histórico de acordos: O pagamento realizado via PIX deve ser registrado e o status da parcela atualizado como Pago.

# Jornada:
1.	O consumidor seleciona a dívida que deseja realizar a negociação e clica em negociar.
2.	Na página de checkout, o consumidor escolhe PIX como método de pagamento.
3.	Após selecionar o método de pagamento o consumidor e direcionado a tela de parcelamento onde pode escolher a quantidade de parcelas do acordo.
4.	Após selecionar o parcelamento o consumidor deve selecionar uma data para vencimento.
5.	Após selecionar a data de vencimento o consumidor e direcionado a tela de fechamento de acordo.
6.	Após fechamento do acordo o aplicativo exibe a chave Pix e instruções de pagamento.
7.	O consumidor utiliza o aplicativo do banco para inserir a chave PIX e completa a transação.
8.	O sistema recebe a confirmação do pagamento e atualiza o status da parcela para "Pago". O consumidor recebe uma confirmação na tela e um e-mail de confirmação do pagamento.

# Itens Necessários:
1. Integração com o Sistema PIX: Configurar a integração com a API do banco ou serviço de pagamento que oferece suporte ao PIX/ Implementar a geração e exibição da chave PIX.
2. Confirmação de Pagamento: Configurar webhook ou outra forma de notificação para confirmar o pagamento automaticamente/ Atualizar o status do pedido no sistema e enviar confirmação ao usuário.

# Informações Adicionais:
Dependências: A funcionalidade depende da integração com a API do provedor de serviços de pagamento que oferece suporte ao PIX
Restrições: Certifique-se de que o sistema de pagamento existente possa ser adaptado para incluir o 	PIX sem comprometer outra funcionalidade de pagamento já existente.

# Tarefas a serem feitas:
1.	Identificação de Cenários de Teste: Descreva em um excel os diferentes cenários de teste que precisam ser cobertos para garantir a qualidade da nova funcionalidade. 
2.	Priorização de Testes Automatizados: Identifique quais cenários de teste podem ser automatizados para garantir uma cobertura eficiente e rápida e justifique o motivo da escolha.
3.	Desenvolvimento de Casos de Teste: Elabore casos de teste detalhados para cada cenário identificado, incluindo passos de execução, dados de entrada necessários e critérios de aceitação.
4.	Implementação de Testes Automatizados: Escolha X cenários que você priorizaria.
5.	Automação de teste: Crie uma automação de no mínimo 5 cenários back-end/front. Sinta-se a vontade para ir além, explore para demonstrar seus conhecimentos. (Site ou app SERASA)

O arquivo em excel com a descrição dos cenários deverá ser carregado nesse repositório.

*** Caso tenha tenha um repositório no github, sinta a vontade em compartilhar conosco.

***Obs***: Para realizar esse case, não crie um repositório público! Esse desafio é compartilhado apenas com pessoas que estamos entrevistando e gostaríamos que permanecesse assim.  



---

Boa sorte!
