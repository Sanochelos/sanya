let data = [
    {id: 0, text: 'Ожидаете поставки майнеров и теряете драгоценное время.'},
    {id: 1, text: 'Тратите время на подготовку оборудования к работе.'},
    {id: 2, text: 'Отсутствие достаточного охлаждения снижает эффективность оборудования. Велик риск перегревания и поломки. Результат – дополнительные затраты и потеря времени.'},
    {id: 3, text: 'Высокая стоимость электроэнергии.'},
    {id: 4, text: 'Необходимость уделять много времени обслуживанию оборудование. Результат поломок – потеря времени и упущенная прибыль.'},
    {id: 5, text: 'Шум от оборудования и избыточное тепло.'},
    {id: 6, text: 'Дополнительные расходы на обеспечение безопасности майнеров.'},
    {id: 7, text: 'Возможны дополнительные траты на оплату таможенных пошлин при поставке оборудования.'},
    {id: 8, text: 'Необходимость в специальных знаниях для настройки и поддержания работоспособности майнеров.'},
]

let left = document.getElementById('left')
let right = document.getElementById('right')
let text = document.getElementById('text')

text.value = 0

left.addEventListener('click', function() {
    if (text.value < 1) {
        text.value = data.length - 1
    } else {
        text.value = text.value - 1
    }
    text.textContent = data[text.value].text
})


right.addEventListener('click', function() {
    if (text.value >= data.length - 1) {
        text.value = 0
    } else {
        text.value = text.value + 1
    }
    text.textContent = data[text.value].text
})



let data1 = [
    {id: 0, text: 'Оборудование всегда готово к работе.Просто выбирайте кнтракт и начинайте зарабатывать.'},
    {id: 1, text: 'Просто и удобно.Не нужно ничего настраивать и иметь IT-навыки.'},
    {id: 2, text: 'Оптимальные промышленные условия обеспечивают максимальную производительность майнеров.'},
    {id: 3, text: 'Низкая стоимость электроэнергии, значит отличные цены на всех контрактах.'},
    {id: 4, text: 'Бесперебойна работа.Высочайшие стандарты безопасности'},
    {id: 5, text: 'Тишина и спокойствие.'},
    {id: 6, text: 'Гарантия безопасности майнеров.'},
    {id: 7, text: 'Отсутствие непредвиденных расходов.'},
    {id: 8, text: 'Квалифицированные специалисты.'},
]

let left1 = document.getElementById('left1')
let right1 = document.getElementById('right1')
let text1 = document.getElementById('text1')

text1.value1 = 0

left1.addEventListener('click', function() {
    if (text1.value1 < 1) {
        text1.value1 = data1.length - 1
    } else {
        text1.value1 = text1.value1 - 1
    }
    text1.textContent = data[text1.value1].text
})


right1.addEventListener('click', function() {
    if (text1.value1 >= data1.length - 1) {
        text1.value1 = 0
    } else {
        text1.value1 = text1.value1 + 1
    }
    text1.textContent = data[text1.value1].text
})



let powerRange = document.getElementById('power-range')
let powerInput = document.getElementById('power-input')
let daysRange = document.getElementById('days-range')
let daysInput = document.getElementById('days-input')
let kInput = document.getElementById('k-input')
let kRange = document.getElementById('k-range')

let price = document.getElementById('price')
price.textContent = powerInput.value * daysInput.value*kInput.value

powerRange.addEventListener('input', function () {
    powerInput.value = powerRange.value
    price.textContent = powerInput.value * daysInput.value *kInput.value
})

daysRange.addEventListener('input', function () {
    daysInput.value = daysRange.value
    price.textContent = powerInput.value * daysInput.value*kInput.value
})

kRange.addEventListener('input', function () {
    kInput.value = kRange.value
    price.textContent = powerInput.value * daysInput.value*kInput.value
})

