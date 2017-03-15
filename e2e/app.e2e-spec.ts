import { RefreshableChartsPage } from './app.po';

describe('refreshable-charts App', function() {
  let page: RefreshableChartsPage;

  beforeEach(() => {
    page = new RefreshableChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
