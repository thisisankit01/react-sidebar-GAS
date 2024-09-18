export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('My Sample React Project') // edit me!
    .addItem('Home', 'openSidebar');

  menu.addToUi();
};

export const openSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-page');
  SpreadsheetApp.getUi().showSidebar(html);
};
