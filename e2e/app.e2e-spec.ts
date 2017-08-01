import { SafeCommunityPage } from './app.po';

describe('safe-community App', () => {
  let page: SafeCommunityPage;

  beforeEach(() => {
    page = new SafeCommunityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
