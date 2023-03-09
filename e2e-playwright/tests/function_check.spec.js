const { test, expect } = require("@playwright/test");

test("Can deactivate a shopping list.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `New List: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.getByTestId("add").click();
  await page.getByRole("listitem").filter({hasText:`${listName}`}).getByTestId("deAList").click();
  await expect(page.getByRole("listitem").filter({hasText:`${listName}`})).toHaveCount(0); 
});

test("Can add a shopping list.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `New List: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.getByTestId("add").click();
  await expect(page.locator(`a >> text='${listName}'`)).toHaveText(listName); 
});

test("Can open a list page.", async ({page}) => {
  await page.goto("/lists");
  const listName = `New List: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.getByTestId("add").click();
  await page.locator(`a >> text='${listName}'`).click(); 
  await expect(page.locator("h1")).toHaveText(`Existing items in: ${listName}`);
});

test("Can add an item to the shopping list", async({page}) => {
  await page.goto("/lists");
  const listName = `New List: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.getByTestId("add").click();
  await page.locator(`a >> text='${listName}'`).click(); 
  const itemName = `New item: ${Math.random()}`;
  await page.locator("input[type=text]").type(itemName);
  await page.getByTestId("addItem").click();
  await expect(page.locator(`h4 >> text='[ ${itemName} ]'`)).toHaveText(`[ ${itemName} ]`);
});

test("Can mark an item as collected", async({page}) => {
  await page.goto("/lists");
  const listName = `New List: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.getByTestId("add").click();
  await page.locator(`a >> text='${listName}'`).click(); 
  const itemName = `New item: ${Math.random()}`;
  await page.locator("input[type=text]").type(itemName);
  await page.getByTestId("addItem").click();
  await page.getByTestId("mark").click();
  await expect(page.locator(`h5 >> text='[ ${itemName} ]'`)).toHaveText(`[ ${itemName} ]`);
});


