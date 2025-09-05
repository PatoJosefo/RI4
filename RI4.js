const meuModulo = require('modulo');

// Clientes
let cliente1 = new meuModulo.Cliente('Antônio Mendes', '76533488932', new meuModulo.Endereco('SP', 'Sorocaba', 'Rua das Rosas', '412'));
let cliente2 = new meuModulo.Cliente('Maria Carmendes', '09812365411', new meuModulo.Endereco('SP', 'Campinas', 'Nova Iguáçu', '315'));
let cliente3 = new meuModulo.Cliente('José Bonifácio', '413968276065', new meuModulo.Endereco('RJ', 'Caxias', 'Avenida Rio Branco', '92'));
let cliente4 = new meuModulo.Cliente('Carlos Drummond', '03284761738', new meuModulo.Endereco('PA', 'Belém', 'Mar das Olivéiras', '15'));
let cliente5 = new meuModulo.Cliente('Julia Silva', '83274881639', new meuModulo.Endereco('MG', 'Juíz de Fora', 'Av Otacílio Negrão', '52'));

// Adicionar telefones aos clientes
cliente1.telefones.add(new meuModulo.Telefone('11', '987654321'))
cliente1.telefones.add(new meuModulo.Telefone('11', '912345678'))

cliente2.telefones.add(new meuModulo.Telefone('21', '998877665'))
cliente2.telefones.add(new meuModulo.Telefone('21', '996633221'))

cliente3.telefones.add(new meuModulo.Telefone("31", "96666-4444"))
cliente3.telefones.add(new meuModulo.Telefone("31", "95555-5555"))

cliente4.telefones.add(new meuModulo.Telefone("51", "94444-6666"))
cliente4.telefones.add(new meuModulo.Telefone("51", "94564-8888"))

cliente5.telefones.add(new meuModulo.Telefone("41", "93333-7777"))
cliente5.telefones.add(new meuModulo.Telefone("41", "92222-8888"))

// Endereço da empresa
let enderecoEmpresa = new meuModulo.Endereco('São Paulo', 'São Paulo', 'Av Paulista', '1000');
let empresa = new meuModulo.Empresa('Romagnole LTDA', 'Romagnole', '1254567890001', enderecoEmpresa);

// Telefones da empresa
empresa.telefones.add(new meuModulo.Telefone('11', '999999999'));
empresa.telefones.add(new meuModulo.Telefone('11', '888888888'));

// Adicionar clientes à empresa
empresa.clientes.add(cliente1);
empresa.clientes.add(cliente2);
empresa.clientes.add(cliente3);
empresa.clientes.add(cliente4);
empresa.clientes.add(cliente5);

//print descricao
console.log('\n'+empresa.descricao())
