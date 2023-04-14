const formulario = document.querySelector('#formulario');
const tableCadastrosBody = document.querySelector('#table-body');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    // Verificar se todos os campos foram preenchidos
    const campoTexto = formulario.elements['campoTexto'].value;
    const campoSenha = formulario.elements['campoSenha'].value;
    const campoNumero = formulario.elements['campoNumero'].value;
    const campoTextoLongo = formulario.elements['campoTextoLongo'].value;
    const campoData = formulario.elements['campoData'].value;
    const campoHora = formulario.elements['campoHora'].value;
    const campoEmail = formulario.elements['campoEmail'].value;
    const campoUrl = formulario.elements['campoUrl'].value;

    if (
        campoTexto.trim() === '' || 
        campoSenha.trim() === '' || 
        campoNumero.trim() === '' || 
        campoTextoLongo.trim() === '' ||
        campoData.trim() === '' || 
        campoHora.trim() === '' || 
        campoEmail.trim() === '' || 
        campoUrl.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Exibir um alerta de confirmação
    if (confirm('Você preencheu tudo corretamente e é sua última resposta?')) {
        // Criar um novo elemento de lista com as informações do cadastro
        const novoCadastro = document.createElement('tr');
        novoCadastro.innerHTML = 
            `<td>${campoTexto}</td>
            <td>${campoSenha}</td>
            <td>${campoNumero}</td>
            <td>${campoTextoLongo}</td>
            <td>${campoData}</td>
            <td>${campoHora}</td>
            <td>${campoEmail}</td>
            <td>${campoUrl}</td>`;

        // Adicionar o novo elemento à lista de cadastros
        tableCadastrosBody.appendChild(novoCadastro);

        // Limpar o formulário
        formulario.reset();
    }
});