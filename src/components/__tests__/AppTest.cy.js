import App from '../../App.vue';
import CarList from '../../ListaCoches.vue';
import CarForm from '../../FormularioCoches.vue';

describe('App', () => {
    it('mounts properly', () => {
        cy.mount(App);
    });

    it('toggles car details', () => {
        cy.mount(App);
        cy.get('.car-item').first().find('.car-details').click();
        cy.get('.car-item').first().find('ul').should('be.visible');
    });

    it('removes a car', () => {
        cy.mount(App);
        cy.get('.car-item').should('have.length', 3);
        cy.get('.car-item').first().find('.remove-btn').click();
        cy.get('.car-item').should('have.length', 2);
    });

    it('toggles car details', () => {
        cy.mount(App);
        cy.get('.car-item').first().find('.car-details').click();
        cy.get('.car-item').first().find('ul').should('be.visible');
    });

    it('removes a car', () => {
        cy.mount(App);
        cy.get('.car-item').should('have.length', 3);
        cy.get('.car-item').first().find('.remove-btn').click();
        cy.get('.car-item').should('have.length', 2);
    });
});