import { ProjectPage } from './app.po';

describe('project App', () => {
  let page: ProjectPage;

  beforeEach(() => {
    page = new ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
