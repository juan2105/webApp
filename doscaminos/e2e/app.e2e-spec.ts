import { DoscaminosPage } from './app.po';

describe('doscaminos App', function() {
  let page: DoscaminosPage;

  beforeEach(() => {
    page = new DoscaminosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
