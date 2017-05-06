import { AngelhackCarchainFrontendPage } from './app.po';

describe('angelhack-carchain-frontend App', () => {
  let page: AngelhackCarchainFrontendPage;

  beforeEach(() => {
    page = new AngelhackCarchainFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
