from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000/admin/login")
    page.fill('input[id="email"]', "admin@example.com")
    page.fill('input[id="password"]', "password")
    page.click('button[type="submit"]')
    page.wait_for_url("http://localhost:3000/admin")
    page.screenshot(path="jules-scratch/verification/admin_dashboard.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
