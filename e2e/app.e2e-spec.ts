import { NgCLiPage } from './app.po';

describe('ng-cli App', () => {
  let page: NgCLiPage;

  beforeEach(() => {
    page = new NgCLiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
