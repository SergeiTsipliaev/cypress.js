
describe('Покупка аватара', function () {

    it('Верный логин, верный пароль', function () {
        cy.visit('https://pokemonbattle.me/');//захожу на сайт
        cy.get(':nth-child(1) > .auth__input').type('serg-ciplaev@yandex.ru');
        cy.get('#password').type('Dfgaergw$6778');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555555555599');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Sergei Tsipliaev');
        cy.wait(5000);// Не дает сразу нажать на оплатить, выскакивает ошибка что неправильный номер карты
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
       
    })
    
})






