describe('Favorites', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('Favorites-tab')).tap();
  });

  it('should show favorites screen after tap', async () => {
    await expect(element(by.text('My favorite pairs'))).toBeVisible();
  });

  it('should favorite item by taping favorite button', async () => {
    await element(by.id('Search-tab')).tap();
    await element(by.id('ETHUSDT-test')).tap();
    await element(by.id('favorite-btn')).tap();

    await element(by.id('Favorites-tab')).tap();

    await expect(element(by.text('ETHUSDT'))).toBeVisible();
  });

  it('should render pair screen elements after tap on a favorited item', async () => {
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
