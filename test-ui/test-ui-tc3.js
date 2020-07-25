describe('UI-Test-Case-3', () => {
	beforeEach(() => {
	});
	afterEach(() => {
		browser.sleep(2000);
	});
	function checkURL(elm, url) {
		//waitForAngularEnabled(false);
		elm.click();
		browser.sleep(1000);
		//waitForAngularEnabled(true);
		browser.getAllWindowHandles().then(function (handles) {
			expect(handles.length).toEqual(2);
			browser.switchTo().window(handles[1]).then(function () {
				expect(browser.getCurrentUrl()).toBe(url);
				browser.driver.close();
				browser.switchTo().window(handles[0]);
			});
		});
	};
	it('0.Navigate to "sogeti.com"', () => {
		browser.get('https://www.sogeti.com/');
		var elm = element(by.xpath('//*[@id="header"]/div[1]/div[2]/div[2]/div[2]/div[1]'));
		elm.click();
	});
	it('1.Country specific Sogeti link: Belgium', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[1]/a'));
		checkURL(elm, 'https://www.sogeti.be/');
	});
	it('2.Country specific Sogeti link: Finland', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[2]/a'));
		checkURL(elm, 'https://www.sogeti.fi/');
	});
	it('3.Country specific Sogeti link: France', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[3]/a'));
		checkURL(elm, 'https://www.fr.sogeti.com/');
	});
	it('4.Country specific Sogeti link: Germany', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[4]/a'));
		checkURL(elm, 'https://www.sogeti.de/');
	});
	it('5.Country specific Sogeti link: Ireland', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[5]/a'));
		checkURL(elm, 'https://www.sogeti.ie/');
	});
	it('6.Country specific Sogeti link: Luxembourg', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[6]/a'));
		checkURL(elm, 'https://www.sogeti.lu/');
	});
	it('7.Country specific Sogeti link: Netherlands!!NOT WORKING!!', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[7]/a'));
		//checkURL(elm, 'https://www.sogeti.nl/');	
	});
	it('8.Country specific Sogeti link: Norway', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[8]/a'));
		checkURL(elm, 'https://www.sogeti.no/');
	});
	it('9.Country specific Sogeti link: Spain', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[9]/a'));
		checkURL(elm, 'https://www.sogeti.es/');
	});
	it('10.Country specific Sogeti link: Sweden', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[10]/a'));
		checkURL(elm, 'https://www.sogeti.se/');
	});
	it('11.Country specific Sogeti link: UK', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[11]/a'));
		checkURL(elm, 'https://www.uk.sogeti.com/');
	});
	it('12.Country specific Sogeti link: USA', () => {
		var elm = element(by.xpath('//*[@id="header"]/div[3]/ul/li[12]/a'));
		checkURL(elm, 'https://www.us.sogeti.com/');
	});
});