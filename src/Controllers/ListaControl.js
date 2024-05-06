const ListaServices = require('../services/ListaServices')

module.exports={
    buscarTodos: async (req, res)=>{
        let json = {error:'',result:[]};

        let lista = await ListaServices.buscarTodos();

        for(let i in lista){
            json.result.push({
                codigo: lista[i].codigo,
                descricao: lista[i].nome
            });
        }
        res.json(json);
    }
}