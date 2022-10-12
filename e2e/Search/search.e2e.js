describe('Search', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('Search-tab')).tap();
  });

  it('should show search screen', async () => {
    await expect(element(by.text('All possible pairs'))).toBeVisible();
  });

  it('should render pair screen elements after tap on a item', async () => {
    await element(by.id('ETHUSDT-test')).tap();

    await expect(element(by.text('ETHUSDT'))).toBeVisible();
    await expect(element(by.id('pair'))).toBeVisible();
    await expect(element(by.id('price'))).toBeVisible();
    await expect(element(by.text('Daily change:'))).toBeVisible();
    await expect(element(by.text('Monthly change:'))).toBeVisible();

    await expect(element(by.id('signal-list'))).toBeVisible();

    await expect(element(by.text('Short Term'))).toBeVisible();
    await expect(element(by.text('Short Term Change:'))).toBeVisible();

    await element(by.id('signal-list')).swipe('left', 'slow', 0.75);
    await expect(element(by.text('Medium Term'))).toBeVisible();
    await expect(element(by.text('Medium Term Change:'))).toBeVisible();

    await element(by.id('signal-list')).swipe('left', 'fast', 0.75);
    await expect(element(by.text('Long Term'))).toBeVisible();
    await expect(element(by.text('Long Term Change:'))).toBeVisible();
  });
});
