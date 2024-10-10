function handle() {
    alert('Форма Отправлена')
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
    input_values.push(inputs[i].value);
    }

    alert("Ваш Логин: " + input_values[0] + "\n" + "Ваш Пароль: " + input_values[1]);
}