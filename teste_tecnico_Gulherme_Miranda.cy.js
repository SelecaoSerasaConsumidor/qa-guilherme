describe('Teste técnico - Validação de pagamento', () => {
    before(() => {
      Cypress.env('apiBaseUrl', 'https://serasa.com.br');
    });
  
    it('Deve realizar login no site', () => {
      cy.visit('https://www.serasa.com.br/entrar/senha?product=portal&redirectUrl=%2Farea-cliente%2F');
      cy.viewport(1200, 1000);
      cy.get('input[name="cpf"]').type('896.986.940-99');
      cy.contains('Continuar').click();
      cy.get('input[name="password"]').type('12345678911');
      cy.contains('Continuar').click();
      cy.url().should('include', '/area-cliente');
      cy.contains('Olá, Fulano').should('be.visible');
    });
  
    it('Deve obter o token após login bem-sucedido', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/entrar?product=portal&redirectUrl=%2Farea-cliente%2F`,
        body: {
          cpf: Cypress.env('userCpf'),
          password: Cypress.env('userPassword'),
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        const token = response.body.token;
        ///expect(token).to.exist;
        ///expect(token).to.be.a('string');
        cy.log(`Token obtido: ${token}`);
        Cypress.env('authToken', token);
      });
    });
    
  
    it('Cenário 1: Deve gerar uma chave PIX com sucesso', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/pix/generate`,
        headers: {
          Authorization: `Bearer ${Cypress.env('authToken')}`,
        },
        body: {
          acordoId: '12345',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('pixKey');
        expect(response.body).to.have.property('instructions');
      });
    });
  
    it('Cenário 2: Deve retornar erro ao gerar chave PIX com parâmetros inválidos', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/pix/generate`,
        headers: {
          Authorization: `Bearer ${Cypress.env('authToken')}`,
        },
        body: {
          acordoId: '',
        },
        failOnStatusCode: false, // Permite continuar mesmo com erro na resposta
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('errorMessage');
      });
    });
  
    it('Cenário 3: Deve confirmar pagamento via PIX com sucesso', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/pix/confirm`,
        headers: {
          Authorization: `Bearer ${Cypress.env('authToken')}`,
        },
        body: {
          pixKey: 'chavePixExemplo',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('confirmed', true);
        expect(response.body).to.have.property('message', 'Pagamento confirmado com sucesso!');
        cy.log('Pagamento confirmado com sucesso!');
      });
    });
  
    it('Cenário 4: Deve atualizar o status da parcela para "Pago"', () => {
      cy.request({
        method: 'PATCH',
        url: `${Cypress.env('apiBaseUrl')}/parcelas/12345/status`,
        headers: {
          Authorization: `Bearer ${Cypress.env('authToken')}`,
        },
        body: {
          status: 'Pago',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('status', 'Pago');
      });
    });
  
    it('Cenário 5: Deve exibir confirmação na tela e enviar e-mail após pagamento', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/pix/identify`,
        headers: {
          Authorization: `Bearer ${Cypress.env('authToken')}`,
        },
        body: {
          pixKey: 'chavePixExemplo',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Pagamento confirmado com sucesso!');
        expect(response.body).to.have.property('emailSent', true);
        cy.log('Pagamento confirmado com sucesso e e-mail enviado!');
      });
    });
    
 it('Cenário 6: Deve processar notificação de pagamento via webhook', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/pix/webhook`,
        headers: {
          Authorization: `Bearer ${Cypress.env('authToken')}`,
        },
        body: {
          pixKey: 'chavePixExemplo',
          status: 'confirmed',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('status', 'confirmed');
      });
    });
  });
