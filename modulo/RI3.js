export class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }
    get obterNomeMaiusculo(){ return String(this.nome).toUpperCase() }
    get obterNomeMinusculo(){ return String(this.nome).toLowerCase() }
    get obterCpfMaiusculo(){ return String(this.#cpf).toUpperCase() }
    get obterCpfMinusculo(){ return String(this.#cpf).toLowerCase() }
    get obterEnderecoMaiusculo() { return this.endereco.getEnderecoCompleto.toUpperCase() }
    get obterEnderecoMinusculo() { return this.endereco.getEnderecoCompleto.toLowerCase() }
    get obterTelefonesMaiusculo() {
    return Array.from(this.telefones).map(t => t.getTelefone.toUpperCase())
    }
    get obterTelefonesMinusculo() {
    return Array.from(this.telefones).map(t => t.getTelefone.toLowerCase())
    }
}

export class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
    get obterDddMaiusculo(){ return String(this.ddd).toUpperCase() }
    get obterDddMinusculo(){ return String(this.ddd).toLowerCase() }
    get obterNumeroMaiusculo(){ return String(this.numero).toUpperCase() }
    get obterNumeroMinusculo(){ return String(this.numero).toLowerCase() }
    get obterTelefone() {
    return `(${this.ddd}) ${this.numero}`
    }
}

export class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
    get obterEstadoMaiusculo(){ return String(this.estado).toUpperCase() }
    get obterEstadoMinusculo(){ return String(this.estado).toLowerCase() }
    get obterCidadeMaiusculo(){ return String(this.cidade).toUpperCase() }
    get obterCidadeMinusculo(){ return String(this.cidade).toLowerCase() }
    get obterRuaMaiusculo(){ return String(this.rua).toUpperCase() }
    get obterRuaMinusculo(){ return String(this.rua).toLowerCase() }
    get obterNumeroMaiusculo(){ return String(this.numero).toUpperCase() }
    get obterNumeroMinusculo(){ return String(this.numero).toLowerCase() }
    get obterEnderecoCompleto() {
        return `${this.rua}, ${this.numero} - ${this.cidade} / ${this.estado}`
    }
}
export class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()

    }
    get obterRazaoSocialMaiusculo(){ return String(this.razaoSocial).toUpperCase() }
    get obterRazaoSocialMinusculo(){ return String(this.razaoSocial).toLowerCase() }
    get obterNomeFantasiaMaiusculo(){ return String(this.nomeFantasia).toUpperCase() }
    get obterNomeFantasiaMinusculo(){ return String(this.nomeFantasia).toLowerCase() }
    get obterCnpjMaiusculo(){ return String(this.#cnpj).toUpperCase() }
    get obterCnpjMinusculo(){ return String(this.#cnpj).toLowerCase() }
    // Conversão de objetos para string (endereços e telefones da empresa)
    // não funcionam corretamente porque endereco é um objeto, e String(obj) vira "[object Object]
    // get obterEnderecoMaiusculo(){ return String(this.endereco).toUpperCase() }
    // get obterEnderecoMinusculo(){ return String(this.endereco).toLowerCase() }
    get obterClientesMaiusculo(){ return Array.from(this.clientes).map(c => c.nome.toUpperCase()) }
    get obterClientesMinusculo(){ return Array.from(this.clientes).map(c => String(c.nome).toLowerCase()) }
    get obterTelefonesMaiusculo() { return Array.from(this.telefones).map(t => t.obterTelefone.toUpperCase()) }
    get obterTelefonesMinusculo() { return Array.from(this.telefones).map(t => t.obterTelefone.toLowerCase()) }

    /*
    Razão Social: ABC LTDA
    Nome fantasia: Mercado Online
    -----------------
    Nome: João
    Estado: SP cidade: São José dos Campos rua: Av Andrômeda numero: 987
    ddd: 999999999 numero: 999999999
    ddd: 999999999 numero: 999999999

    */
    descricao() {
    let textoClientes = ''

        for (const cliente of this.clientes) {
            const end = cliente.endereco;
            const tels = Array.from(cliente.telefones).map(t => `ddd: ${t.ddd} numero: ${t.numero}`).join('\n');
            textoClientes += (`----------------- \nNome: ${cliente.obterNomeMaiusculo} \nEstado: ${end.obterEstadoMaiusculo} cidade: ${end.obterCidadeMaiusculo} rua: ${end.obterRuaMaiusculo} numero: ${end.obterNumeroMaiusculo} \n${tels} \n`
            )
        }
        return (`Razão Social: ${this.razaoSocial} \nNome fantasia: ${this.nomeFantasia} \n${textoClientes}`
        )
    }
}