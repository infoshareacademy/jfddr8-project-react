describe('login is valid', () => {
	let user;
	before(() => {
		cy.fixture('user.json').then((data) => {
			user = data;
		});
	});

	it('login and password are valid', () => {
		const { login, password } = user;
		cy.visit('http://localhost:3000/login');
		cy.contains('label', 'Login').type(login);
		cy.contains('label', 'Password').type(password);
		cy.contains('Zapisz').click();
		cy.url().should('include', '/home');
		cy.getAllLocalStorage().then((data) => {
			expect(data, 'Admin');
		});
	});
});
