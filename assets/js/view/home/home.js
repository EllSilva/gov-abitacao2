import get_template from '../../components/get_template.js'
 
export default {
    data: function () {
		return {
            user: null,
            senha: null,
            error: null
        }
    },
	methods: {
        async logar() {
           window.location.href = `/painel/index.html#/`
           //  window.location.href = `#/`
        },
  
    },
 

    template: await get_template('./assets/js/view/home/home')
}