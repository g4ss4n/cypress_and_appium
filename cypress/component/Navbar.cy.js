import { mount } from 'cypress/react';
import Navbar from '../../../Makerspace/src/components/navbar/Navbar';
import { ImChrome } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

describe('Navbar Component', () => {
  it('renders correctly', () => {
    mount(<Navbar user={{ name: 'John Doe' }} openModal={() => {}} handleSignOut={() => {}} />);
    
    // Check if the navbar exists
    cy.get('.navbar').should('exist');

    // Check if "MakerSpace" title is present
    cy.get('.navbar-title').should('contain', 'MakerSpace');

    // Check if logout button with icon exists
    cy.get('.action-button').first().find(BiLogOut).should('exist');

    // Check if Chrome icon exists
    cy.get('.action-button').last().find(ImChrome).should('exist');
  });

  it('triggers handleSignOut when logout button is clicked', () => {
    const handleSignOut = cy.stub().as('handleSignOut');
    mount(<Navbar user={{ name: 'John Doe' }} openModal={() => {}} handleSignOut={handleSignOut} />);

    // Click the logout button
    cy.get('.action-button').first().click();

    // Verify that handleSignOut was called
    cy.get('@handleSignOut').should('have.been.calledOnce');
  });
});
