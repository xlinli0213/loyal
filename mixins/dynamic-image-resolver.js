const requireContext = require.context(
  '~/assets/',
  true,
  /\.(png|jpg|gif|jpeg|tiff|svg)$/
)

export default {
  methods: {
    resolve(url) {
      if (url == null) {
        return
      }

      if (!url.startsWith('./')) {
        if (!url.startsWith('https') || !url.startsWith('http')) {
          url = `./${url}`
        } else {
          url = `${url}`
        }
      }
      try {
        const resolved = requireContext(url, true)
        return resolved
      } catch (e) {
        // console.warn('app-image: resolve failed')
        return url
      }
    },
    srcsetImage(image, ratioType) {
      const imageType = ratioType || 'tablet'
      const srcsetfilter = this.$options.filters.asSrcset
      const imageSrcset = srcsetfilter(image)
      return imageSrcset[imageType]
    },
    metaOgImage(image, isScret, ratioType) {
      const logoUrl = this.resolve('images/logo.svg')
      const metaImage = {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: logoUrl
      }
      if (image) {
        const imageUrl = isScret ? this.srcsetImage(image, ratioType) : image
        metaImage.content = imageUrl
      }
      return metaImage
    }
  }
}
