import { EventmakerPage } from './app.po';

describe('eventmaker App', function() {
  let page: EventmakerPage;

  beforeEach(() => {
    page = new EventmakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
