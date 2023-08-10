import get_template from './get_template.js'
 

export default {
    data: function () {
        return {
            title: "aside",
            lista: [],
            permisao: [],
            permisao2: ['inicio', 'configuracao', 'planos'],
            selecionado: ''
 
        }
    },

 

    template: await get_template('./assets/js/components/c-aside')
}