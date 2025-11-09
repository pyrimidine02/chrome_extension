import { expect, test } from '@playwright/test';

test('landing page renders core sections', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero')).toBeVisible();
  await expect(page.locator('#education')).toBeVisible();
  await expect(page.locator('#research')).toBeVisible();
  await expect(page.locator('#honors')).toBeVisible();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('#toy-projects')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();
});

test('project detail navigation', async ({ page }) => {
  await page.goto('/');
  await page.locator('#projects a', { hasText: '자세히 보기' }).first().click();
  await expect(page).toHaveURL(/\/projects\//);
  await expect(page.getByText('프로젝트 경험')).toBeVisible();
});

test('toy project detail navigation', async ({ page }) => {
  await page.goto('/');
  await page.locator('#toy-projects a', { hasText: '자세히 보기' }).first().click();
  await expect(page).toHaveURL(/\/toy-projects\//);
  await expect(page.getByText('토이 프로젝트')).toBeVisible();
});
