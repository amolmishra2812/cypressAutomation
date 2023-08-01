describe("Amazon Navigation Menu", () => {
    beforeEach(() => {
      cy.visit("https://www.amazon.com/");
    });
  
    it("should display the navigation menu", () => {
      cy.get("#nav-link-shopall").should("be.visible");
    });
  
    it("should display main categories with sub-categories", () => {
      cy.get("#nav-shop .nav-a").each((mainCategory) => {
        cy.wrap(mainCategory)
          .trigger("mouseover")
          .find(".nav-text")
          .should("exist");
      });
    });
  
    it("should display sub-categories for each main category", () => {
      cy.get("#nav-shop .nav-a").each((mainCategory) => {
        cy.wrap(mainCategory)
          .trigger("mouseover")
          .find(".nav-subcats a")
          .should("exist");
      });
    });
  
    it("should navigate to sub-category page", () => {
      cy.get("#nav-shop .nav-a:first").trigger("mouseover");
      cy.get("#nav-shop .nav-subcats a:first").click();
      cy.url().should("include", "subcategory-page-url");
    });
  
    it("should navigate to department page", () => {
      cy.get("#nav-shop .nav-a:first").click();
      cy.url().should("include", "department-page-url");
    });
  
    it("should navigate to sub-menu item page", () => {
      cy.get("#nav-shop .nav-a:first").trigger("mouseover");
      cy.get("#nav-shop .nav-subcats a:first").trigger("mouseover");
      cy.get("#nav-shop .nav-panel a:first").click();
      cy.url().should("include", "submenu-item-page-url");
    });
  
    it("should navigate back to the home page", () => {
      cy.get("#nav-logo-sprites").click();
      cy.url().should("equal", "https://www.amazon.com/");
    });
  });