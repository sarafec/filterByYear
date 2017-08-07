import { ByyearPage } from './app.po';

describe('byyear App', () => {
  let page: ByyearPage;

  beforeEach(() => {
    page = new ByyearPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
