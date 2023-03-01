export default {
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
      },
    head: {
    title: 'my title',
    meta: [
      { charset: 'utf-8' },
    
        ]
    },
    loading: {
        color: '#fff'
      },
      css: ['~/assets/sass//app.scss'],
      modules: [],
      plugins: ['~/plugins/bootstrap-vue.js', '~/plugins/vue-modal.js']
}