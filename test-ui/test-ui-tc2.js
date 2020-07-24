describe('UI-Test-Case-2', () => {
	var random;

	function getRandom() {
		random = Math.random().toString(36).substring(2);
		return random;
	}
	beforeEach(() => {
	});
	afterEach(() => {
	});
	it('1.Navigate to the URL', () => {
		//Navigate to the URL https://www.sogeti.com/
		browser.get('https://www.sogeti.com/');
		browser.waitForAngular();
	});
	it('2.Hover over Services and click Automation', () => {
		//Hover over Services Link
		var a = element(by.xpath('//*[@id="header"]/div[1]/nav/ul/li[3]/div/span'));
		browser.actions().mouseMove(a).perform();

		//Click Automation link
		var b = element(by.xpath('//*[@id="header"]/div[1]/div[5]/ul/li[7]/a'));
		b.click();
		browser.sleep(1000);
	});
	it('3.Scroll down to the Contact us Form.', () => {
		var a = element(by.xpath('//h2[@class="Form__Title"]'));
		browser.actions().mouseMove(a).perform();
		browser.sleep(3000);
	});
	it('4.Fill the First Name, Last Name, Email, Phone and Message fields', () => {
		var firstName = element(by.xpath('//*[@id="4ff2ed4d-4861-4914-86eb-87dfa65876d8"]'));
		firstName.sendKeys(getRandom());
		var lastName = element(by.xpath('//*[@id="11ce8b49-5298-491a-aebe-d0900d6f49a7"]'));
		lastName.sendKeys(getRandom());
		var email = element(by.xpath('//*[@id="056d8435-4d06-44f3-896a-d7b0bf4d37b2"]'));
		email.sendKeys(getRandom() + "@mail.com");
		var phone = element(by.xpath('//*[@id="755aa064-7be2-432b-b8a2-805b5f4f9384"]'));
		phone.sendKeys(Math.floor(Math.random() * 1000000000));
		var message = element(by.xpath('//*[@id="88459d00-b812-459a-99e4-5dc6eff2aa19"]'));
		message.sendKeys(getRandom());

	});
	it('5.Check the I agree checkbox', () => {
		var cb = element(by.xpath('//*[@id="863a18ee-d748-4591-bb64-ef6eae65910e"]/label/input'));
		cb.click();
	});
	it('6.Click SUBMIT button', () => {
		var sb = element(by.xpath('//*[@id="06838eea-8980-4305-83d0-42236fb4d528"]/img'));
		sb.click();
	});
	it('7.Assert the Thank you message', () => {
		var tm = element(by.xpath('//*[@id="99a12a58-3899-4fe1-a5c7-b9065fe635b0"]/div[1]/div/p'));
		expect(tm.getText()).toEqual("Thank you for contacting us.");
		browser.sleep(3000);
	});
});