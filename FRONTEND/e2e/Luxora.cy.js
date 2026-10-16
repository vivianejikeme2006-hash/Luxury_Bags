const baseUrl = "localhost 3001";
const apiUrl = "http://localhost:5173";

describe("LUXORA Assignment Tests", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it("Login - signs in with valid credentials", () => {
    cy.visit("/login");

    cy.window().then((win) => {
      win.localStorage.setItem(
        "luxoraUsers",
        JSON.stringify([
          {
            fullName: "Test Customer",
            email: "test@luxora.com",
            password: "Luxury123",
          },
        ])
      );
    });

    cy.reload();

    cy.get('input[name="email"]').type("test@luxora.com");
    cy.get('input[name="password"]').type("Luxury123");

    cy.on("window:alert", (message) => {
      expect(message).to.equal("Welcome back to LUXORA!");
    });

    cy.get('button[type="submit"]').click();

    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);

    cy.window().then((win) => {
      const user = JSON.parse(win.localStorage.getItem("luxoraUser"));
      expect(user.email).to.equal("test@luxora.com");
    });
  });

  it("Signup - creates a new account", () => {
    cy.visit("/signup");

    cy.contains("button", "CREATE ACCOUNT").click();

    cy.get('input[name="fullName"]').type("New Test Customer");
    cy.get('input[name="email"]').type("newcustomer@luxora.com");
    cy.get('input[name="password"]').type("Luxury123");
    cy.get('input[name="confirmPassword"]').type("Luxury123");

    cy.on("window:alert", (message) => {
      expect(message).to.equal(
        "Your LUXORA account has been created!"
      );
    });

    cy.get('button[type="submit"]').click();

    cy.window().then((win) => {
      const users = JSON.parse(win.localStorage.getItem("luxoraUsers"));
      expect(users).to.have.length(1);
      expect(users[0].email).to.equal("newcustomer@luxora.com");
    });
  });

  it("Products - displays bags and supports searching", () => {
    cy.visit("/products");

    cy.contains("h1", "Discover Your Signature Bag").should("be.visible");
    cy.contains("Élan Handbag").should("be.visible");
    cy.contains("Étoile Shoulder Bag").should("be.visible");
    cy.contains("8 products").should("be.visible");

    cy.get('input[type="search"]').type("Élan");

    cy.contains("Élan Handbag").should("be.visible");
    cy.contains("Étoile Shoulder Bag").should("not.exist");
    cy.contains("1 products").should("be.visible");
  });

  it("Add to Cart - adds a bag and saves it", () => {
    cy.visit("/products/1");

    cy.contains("h1", "Élan Handbag").should("be.visible");
    cy.contains("button", "ADD TO CART").click();
    cy.contains("Added to your bag!").should("be.visible");

    cy.window().then((win) => {
      const cart = JSON.parse(win.localStorage.getItem("luxoraCart"));

      expect(cart).to.have.length(1);
      expect(cart[0].name).to.equal("Élan Handbag");
      expect(cart[0].price).to.equal(1899);
      expect(cart[0].quantity).to.equal(1);
    });

    cy.contains("a", "View cart").click();
    cy.url().should("include", "/cart");
    cy.contains("Shopping Bag").should("be.visible");
    cy.contains("Élan Handbag").should("be.visible");
  });
});