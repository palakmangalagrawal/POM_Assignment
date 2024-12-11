import contentPage from "../../support/page_object/DynamicContentPage.cy";
describe('Checking scrolling', () => {
    const scrollPage = new contentPage();
it('Load new articles', () => {
    scrollPage.scroll();
    scrollPage.NewContentIsLoaded();
  });
});