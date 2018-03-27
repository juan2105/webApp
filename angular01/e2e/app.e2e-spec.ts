import { Actividad1Page } from './app.po';

describe('actividad1 App', function() {
  let page: Actividad1Page;

  beforeEach(() => {
    page = new Actividad1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
