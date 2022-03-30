import { Given, Then } from "cypress-cucumber-preprocessor/steps";


const url = `https://amazon.com`;

Given(`I open Amazon page`, () => {
    cy.visit(url);
});

Then(`I see "Amazon" in the logo`, () => {
    cy.get(`#logo-ext`).should(`be.visible`);
});