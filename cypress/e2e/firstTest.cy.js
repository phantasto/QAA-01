describe("login", () => {
	it("Log in to the Instagram", () => {
		// przejście do strony logowania
		cy.visit("https://www.instagram.com");
		cy.wait(5000);
		cy.contains("Allow essential and optional cookies").click();
		cy.contains("Log In").click();
		cy.contains("Phone number, username, or email").type(
			"testowy.login.2022@gmail.com"
		);
		cy.contains("Password").type("k0nk0rd4t");
		cy.contains("Log in").click();
	});
});
