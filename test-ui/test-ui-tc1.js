describe('UI-Test-Case-1', () => {
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
	it('3.Verify Automation displayed', () => {
		//Verify that Automation Screen is displayed
		expect(browser.getCurrentUrl()).toBe('https://www.sogeti.com/services/automation/');
		browser.waitForAngular();
		browser.sleep(1000);	

		//“Automation” text is visible in Page.
		var b = element(by.xpath('//*[@id="primary_content"]/div/div[2]/div/h1/span'));
		expect(b.getText()).toEqual("Automation");
	});
	it('4.Services and Automation are selected', () => {
		//the Services and Automation are selected
		var d = element(by.xpath('//*[@id="header"]/div[1]/nav/ul/li[3]'));
		expect(d.getAttribute('class')).toContain("selected");
		var e = element(by.xpath('//*[@id="header"]/div[1]/div[5]/ul/li[7]'));
		expect(e.getAttribute('class')).toContain("selected  current expanded");
		browser.sleep(3000);
	});
});