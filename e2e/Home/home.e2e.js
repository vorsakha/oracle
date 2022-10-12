describe('Home', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render base pair screen elements', async () => {
    await element(by.id('Home-tab')).tap();

    await expect(element(by.id('pair'))).toBeVisible();
    await expect(element(by.id('price'))).toBeVisible();
    await expect(element(by.text('Daily change:'))).toBeVisible();
    await expect(element(by.text('Monthly change:'))).toBeVisible();
  });

  it('should render signal card list', async () => {
    await element(by.id('Home-tab')).tap();

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

  it('should show search screen after tap', async () => {
    await element(by.id('Search-tab')).tap();

    await expect(element(by.text('All possible pairs'))).toBeVisible();
  });

  it('should show favorites screen after tap', async () => {
    await element(by.id('Favorites-tab')).tap();

    await expect(element(by.text('My favorite pairs'))).toBeVisible();
  });
});
