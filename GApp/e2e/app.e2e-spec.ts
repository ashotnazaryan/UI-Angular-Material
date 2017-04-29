import { GAppPage } from './app.po';

describe('gapp App', () => {
  let page: GAppPage;

  beforeEach(() => {
    page = new GAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
