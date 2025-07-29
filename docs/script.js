document.addEventListener('DOMContentLoaded', () => {
  // Selecionando os elementos do primeiro formulário
  const form1 = document.getElementById('form1');
  const emailInput1 = form1.querySelector('input[type="email"]');
  const errorMsg1 = document.getElementById('error1');

  // Selecionando os elementos do segundo formulário
  const form2 = document.getElementById('form2');
  const emailInput2 = form2.querySelector('input[type="email"]');
  const errorMsg2 = form2.querySelector('span');

  // Função de validação de e-mail
  const validateEmail = (email) => {
    // Regex para validar o formato do email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Função para lidar com a validação do formulário
  const handleFormValidation = (event, emailInput, errorMsg) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = emailInput.value.trim(); // Obtém o valor do email e remove espaços em branco

    if (!validateEmail(email)) {
      // Email inválido:
      emailInput.classList.add('border-red-500'); // Adiciona borda vermelha
      emailInput.classList.remove('border-very-dark-blue'); // Remove borda original (do primeiro form)
      errorMsg.classList.remove('hidden'); // Exibe a mensagem de erro
    } else {
      // Email válido:
      emailInput.classList.remove('border-red-500'); // Remove borda vermelha
      // Adiciona a borda original de volta dependendo do formulário
      if (emailInput === emailInput1) {
        emailInput.classList.add('border-very-dark-blue');
      }
      emailInput.classList.add('border-[1px]'); // Garante que a borda padrão seja visível
      errorMsg.classList.add('hidden'); // Oculta a mensagem de erro
      
      // event.target.submit();
      alert('Email válido! Formulário pronto para ser enviado.'); // Apenas para demonstração
    }
  };

  // Adiciona os event listeners aos formulários
  form1.addEventListener('submit', (event) => handleFormValidation(event, emailInput1, errorMsg1));
  form2.addEventListener('submit', (event) => handleFormValidation(event, emailInput2, errorMsg2));
});

