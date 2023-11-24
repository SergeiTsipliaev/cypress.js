
describe('Проверка аторизации', function () {

    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');//захожу на сайт
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#mail').type('german@dolnikov.ru');//логин
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1');//пароль
        cy.get('#loginButton').should('be.enabled');//кнопка незадизейблена
        cy.get('#loginButton').click();//клик войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.get('#loginButton').should('be.disabled'); //не проходит тест
    })

    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');//захожу на сайт
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#mail').type('german@dolnikov.ru');//логин
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio');//пароль
        cy.get('#loginButton').should('be.enabled');//кнопка незадизейблена
        cy.get('#loginButton').click();//клик войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.get('#loginButton').should('be.disabled'); //не проходит тест
    })

    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');//захожу на сайт
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#mail').type('germandolnikov.ru');//логин
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1');//пароль
        cy.get('#loginButton').should('be.enabled');//кнопка незадизейблена
        cy.get('#loginButton').click();//клик войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// содержит текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// крестик с закрытием окна виден
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.get('#loginButton').should('be.disabled'); //ТЕСТ ПРОХОДИТ!!! 
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');//захожу на сайт
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#mailForgot').type('serg-ciplaev@yandex.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();//ТЕСТ ПРОХОДИТ!!!

    })

    it('Неверный логин, верный пароль. Проверка регистра', function () {
        cy.visit('https://login.qa.studio/');//захожу на сайт
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru');//логин
        cy.get('#loginButton').should('be.disabled');//кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1');//пароль
        cy.get('#loginButton').should('be.enabled');//кнопка незадизейблена
        cy.get('#loginButton').click();//клик войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// содержит текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// крестик с закрытием окна виден
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.get('#loginButton').should('be.disabled'); //ТЕСТ ПРОХОДИТ!!! 
    })
    
})




//german@dolnikov.ru    iLoveqastudio1

