const puppeteer = require('puppeteer')
const URL = 'https://github.com/guanpengchn/awesome-books'

;(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  })
  const page = await browser.newPage()
  await page.goto(URL, { timeout: 50000 })
  await page.evaluate(() => {
    console.log(document.querySelectorAll('tr [align="center"]:last-child a:first-child'));
    [].forEach.call(document.querySelectorAll('tr [align="center"]:last-child a:first-child'), (el) => {
      console.log('我在下载')
      el.click()
    })
  })

  await browser.close()
})()
