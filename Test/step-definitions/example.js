import {Given,Then, When} from '@wdio/cucumber-framework';  
const assert = require('assert');


// Step definition file
const { After, Status } = require('@cucumber/cucumber');
const fs = require('fs-extra');
const path = require('path');


Given('I open the Google homepage', async () => {
  await browser.url('https://www.google.com');
});

When('I search for {string}', async (searchTerm) => {
  const searchInput = await $('input[name="q"]');
  await searchInput.setValue(searchTerm);
  await searchInput.keys('Enter');
});

Then('I should see search results', async () => {
  const searchResults = await $('div#search');
  await searchResults.waitForDisplayed();
  assert.ok(await searchResults.isDisplayed(), 'Search results are not displayed');
});
