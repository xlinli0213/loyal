const puppeteer = require('puppeteer')
const URL = 'http://www.banshujiang.cn/e_books/'

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })
;(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  })
  const page = await browser.newPage()
  const navigationPromise = page.waitForNavigation()

  for (let i = 900; i <= 900; i++) {
    await page.goto(URL + i, { timeout: 50000 })

    await page.evaluate(() => {
      const pdf = document.querySelectorAll('.link-name.PDF')
      pdf[pdf.length - 1].click()
    })
    await navigationPromise
    await sleep(6000)
    const secret = await page.evaluate(() =>
      document.querySelector('#imbedWebStorage div').textContent.substr(-4)
    )
    const link = await page.evaluate(() => document.querySelector('iframe').src)

    await page.goto(link)
    await navigationPromise
    const err = await page.evaluate(
      () => document.querySelectorAll('.module-error').length
    )

    if (!err) {
      await page.waitForSelector('.input-area input')
      await page.type('.input-area input', secret)
      await page.click('.g-button-right')
      await page.waitForSelector('.g-button-blue')
      await page.click('.g-button-blue')
      await navigationPromise
      await page.waitForSelector('[data-title="qzone"]')
      await page.click('[data-title="qzone"]')
      await navigationPromise
      // await sleep(10000)
      // await page.screenshot({ path: `banshujiang${i}-1.png`, fullPage: true })
      // await console.log(page.frames().find(frame => frame.name() === 'ptlogin_iframe'))
      // await page.frames().find(frame => frame.name() === 'ptlogin_iframe').click('#switcher_plogin')
      // // await page.waitForSelector('iframe')
      // await page.screenshot({ path: `banshujiang${i}.png`, fullPage: true })
    }
    await page.screenshot({ path: `banshujiang${i}.png`, fullPage: true })
  }
  await browser.close()
})()
