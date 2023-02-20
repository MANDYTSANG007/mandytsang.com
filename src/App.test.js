import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../src/components/Navbar/Navbar";


// Test for Navbar component
describe('components/Navbar/Navbar', () => {
  it('Should have more than one logo', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const imageElements = screen.getAllByRole('img');
    expect (imageElements.length).toBeGreaterThan(0);
  });

  it('Should have 6 links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(6);
  });

  // Use "getAllByRole" method to find all the link elements in the Navbar component. 
  // Then, I use the Jest expect function to verify that the contactLinks array 
  // has a length greater than 0 to ensure that at least one link element was found.
  // then use the `find` method to iterate through the `contactLinks` array and find the 
  // link element that has an `href` attribute that includes the string "/contact". We 
  // use the Jest expect function again to verify that the contactLink element is in 
  // the document.
  it('Should have a contact, a portfolio, and a home links in the Navbar component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const contactLinks = screen.getAllByRole('link', { name: /contact/i });
    const portfolioLinks = screen.getAllByRole('link', { name: /portfolio/i });
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    expect(contactLinks.length).toBeGreaterThan(0);
    expect(portfolioLinks.length).toBeGreaterThan(0);
    expect(homeLinks.length).toBeGreaterThan(0);
    const contactLink = contactLinks.find(link => link.href.includes('/contact'));
    const portfolioLink = portfolioLinks.find(link => link.href.includes('/portfolio'));
    const homeLink = homeLinks.find(link => link.href.includes('/'));
    expect(contactLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
})




// Test for form validation
// Test for dynamic content
// Test for User interactions
// Test for Accessibility


