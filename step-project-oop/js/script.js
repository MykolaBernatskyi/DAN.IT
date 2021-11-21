document.addEventListener('DOMContentLoaded', function () {

    // -----------------------------------------------------------------
    // DragManager.onDragCancel = function(dragObject) {
    //     dragObject.avatar.rollback();
    // };
    //DragManager.onDragEnd = function(dragObject, dropElem) {
    DragManager.onDragEnd = function (dragObject) {

        dragObject.elem.style.display = 'block';
    };
    //-------------------------------------------------------------------


    document.addEventListener('click', closeFormOnClickOutForm);

    renderAllForms()
});

/**
 * @desc  функція, яка забезпечує введення данних до модальної форми.
 * @returns  null та відповідне візуальне підключення.
 */

function getDoctors() {
    return [
        {
            id: 'doctorsList',
            title: 'Виберіть із списку',
            disabled: 'disabled'
        },
        {
            id: 'cardiologist',
            title: 'Кардиолог',
            fields: [
                {
                    title: 'Прізвище Ім\'я та Побатькові:',
                    name: 'clientFullName',
                    type: 'text',
                    value: '',
                    required: 'required'
                },
                {
                    title: 'Мета візиту:',
                    name: 'cardiologistVisitPurpose',
                    type: 'text',
                    value: '',
                    required: 'required'
                },
                {
                    title: 'Дата візиту до лікаря:',
                    name: 'visitDate',
                    type: 'date',
                    value: '',
                    required: 'required'
                },
                {title: 'Звичайний тиск:', name: 'normalPressure', type: 'text', value: '', required: 'required'},
                {title: 'Індекс маси тіла:', name: 'bodyMassIndex', type: 'text', value: '', required: 'required'},
                {
                    title: 'Перенесені захворювання серцево-судинної системи:',
                    name: 'cardiovascularSystemPastDiseases',
                    type: 'text',
                    value: '',
                    required: 'required'
                },
                {title: 'Вік:', name: 'age', type: 'text', value: '', required: 'required'}
            ]
        },
        {
            id: 'dentist',
            title: 'Стоматолог',
            fields: [
                {
                    title: 'Прізвище Ім\'я та Побатькові:',
                    name: 'clientFullName',
                    type: 'text',
                    value: '',
                    required: 'required'
                },
                {title: 'Мета візиту:', name: 'dentistVisitPurpose', type: 'text', value: '', required: 'required'},
                {
                    title: 'Дата візиту до лікаря:',
                    name: 'visitDate',
                    type: 'date',
                    value: '',
                    required: 'required'
                },
                {
                    title: 'Дата останнього візиту:',
                    name: 'visitLastDate',
                    type: 'date',
                    value: '',
                    required: 'required'
                }
            ]
        },
        {
            id: 'therapist',
            title: 'Терапевт',
            fields: [
                {
                    title: 'Прізвище Ім\'я та Побатькові:',
                    name: 'clientFullName',
                    type: 'text',
                    value: '',
                    required: 'required'
                },
                {title: 'Мета візиту:', name: 'therapistVisitPurpose', type: 'text', value: '', required: 'required'},
                {
                    title: 'Дата візиту до лікаря:',
                    name: 'visitDate',
                    type: 'date',
                    value: '',
                    required: 'required'
                },
                {title: 'Вік:', name: 'age', type: 'text', value: '', required: 'required'}
            ]
        }
    ];
}


/**
 * @desc  функція, яка забезпечує виведення полів у Модальній формі.
 * @returns  null та відповідне візуальне підключення.
 */

function onSelectChange(event) {

    const selectedItem = getDoctors().find(item => item.id === event.target.value);
    document.getElementsByTagName("textarea")[0].value = '';
    document.querySelector('.container').classList.remove('therapist', 'dentist', 'cardiologist');
    document.querySelector('.container').innerHTML = selectedItem.fields.map(field => {

        return `<label>${field.title}</label></label><input name="${field.name}" type="${field.type}"  value="${field.value}" required="${field.required}" maxLength="${field.maxLength}">`;
    }).join('');
    document.querySelector('.container').classList.add(`${event.target.value}`);
    // document.getElementsByTagName('option')[0].setAttribute("disabled", "disabled");
    // document.getElementsByTagName('option')[0].setAttribute("selected", "selected");
    document.getElementById('createBtn').removeAttribute('disabled');
}

/**
 * @desc  функція, яка забезпечує обробку введених даних до форми.
 *@param {Object} event - подія;
 *@param form
 * @returns  null та відповідне візуальне підключення.
 */

function onSubmitForm(event, form) {

    event.preventDefault();

    const obj = {};

    const checkID = document.querySelector('.container');

    for (let element of form) {
        if (element.type === 'text' || element.type === 'date') {
            obj[element.name] = element.value;
        }
        if (element.name === 'additionComments') {
            obj[element.name] = element.value;
        }
    }
    if (checkID.classList.contains('cardiologist')) {
        obj.id = `cardiologist_${Math.floor(Math.random() * 1000000)}`;
        obj.visitType = 'Кардиолог';
        const visit = new VisitCardiologist(obj);
        _renderVisitCardiologist(visit);
        addVisit(visit);
    }
    if (checkID.classList.contains('dentist')) {
        obj.id = `dentist_${Math.floor(Math.random() * 1000000)}`;
        obj.visitType = 'Стоматолог';
        const visit = new VisitDentist(obj);
        _renderVisitDentist(visit);
        addVisit(visit);
    }

    if (checkID.classList.contains('therapist')) {
        obj.id = `therapist_${Math.floor(Math.random() * 1000000)}`;
        obj.visitType = 'Терапевт';
        const visit = new VisitTherapist(obj);
        _renderVisitTherapist(visit);
        addVisit(visit);
    }
    onFormClose();
}

/**
 * @desc  функція, яка по 'Click' відкриває Модальну форму.
 * @returns  null та відповідне візуальне підключення.
 */


function onFormOpen() {

    const doctor = document.getElementById('doctorSelection');
    doctor.innerHTML = getDoctors()
        .map(item => `<option value="${item.id}">${item.title}</option>`).join('');

    document.getElementsByTagName('option')[0].setAttribute("disabled", "disabled");
    document.getElementsByTagName('option')[0].setAttribute("selected", "selected");

    let startForm = document.getElementById('modalWindow');
    startForm.style.display = "block";
    startForm.style.zIndex = '9999';
}

/**
 * @desc  функція, яка по 'Click' не на Модальній формі - закриває її.
 * @returns  null та відповідне візуальне підключення.
 */

function closeFormOnClickOutForm(event) {

    let elem = event.target.closest('#modalWindow');
    let btnCreate = event.target.closest('#createVisitBtn');
    let startForm = document.getElementById('modalWindow').style.display;

    if (!btnCreate && !elem && startForm === "block") {
        onFormClose();
    }
}

/**
 * @desc  функція, яка по 'Click' на Модальній формі - закриває її.
 * @returns  null та відповідне візуальне підключення.
 */

function onFormClose() {
    let startForm = document.getElementById('modalWindow');
    startForm.style.display = "none";
    document.querySelector('.container').innerHTML = '';
    document.getElementsByTagName("textarea")[0].value = '';

}

/**
 * @desc  функція, яка забезпечує виведення повного переліку даних.
 *@param {String} id для вибраного елементу (кнопки);
 * @returns  null та відповідне візуальне підключення.
 */

function onShowAllText(id) {
    let mainId = id.substr(8);
    let element = document.getElementById(`${mainId}`).getElementsByClassName("slice-text")[0];
    element.style.display = "block";
    document.getElementById(`${id}`).style.display = "none";
}


/**
 * @desc  функція, яка забезпечує скриваннячастини даних.
 *@param {String} id для вибраного елементу (кнопки);
 * @returns  null та відповідне візуальне підключення.
 */
function onSlicePartText(id) {
    let mainId = id.substr(9);
    let element = document.getElementById(`${mainId}`).getElementsByClassName("slice-text")[0];
    element.style.display = "none";
    let btnId = "showBtn_" + id.substr(9);
    document.getElementById(`${btnId}`).style.display = "block";
}

/**
 * @desc  функція, яка забезпечує виведення повідомлення про відсутність записів до лікарів.
 * @returns  null та відповідне візуальне повідомлення.
 */
function showMessageOnBoard() {
    let element = document.getElementById('visitDashboard');
    element.innerHTML = '<p id="messageNoVisits">' + 'Немає актуальних записів на відвідування лікарів!' + '</p>';

}

/**
 * @desc  функція, яка відмінняє виведення повідомлення про відсутність записів до лікарів.
 * @returns  null та відповідне візуальне повідомлення.
 */
function clearMessageOnBoard() {
    let element = document.getElementById('messageNoVisits');
    if (element) {
        element.style.display = "none";
    }

}

/**
 * @desc  функція, яка видаляє запис до лікарів.
 * @param {String} id - запису до лікаря,
 * @returns  зміна даних в localStorage та відповідне візуальне підтвердження.
 */

function onCloseVisit(id) {
    let mainId = id.substr(9);
    let element = document.getElementById(`${mainId}`);
    element.style.display = "none";
    deleteVisit(mainId);
}


/**
 * @desc  функція, яка візуалізує запис до відповідного лікаря в формі.
 * @param {Object} obj - запису до лікаря,
 * @returns  відповідне візуальне підтвердження.
 */

function _renderVisitCardiologist(obj) {
    let newCard = document.createElement('div');
    newCard.className = "visit draggable";
    newCard.setAttribute('id', `${obj.id}`);
    newCard.innerHTML = '';
    document.getElementById('visitDashboard').appendChild(newCard);

    let closeBtn = document.createElement('button');
    closeBtn.className = "close-btn";
    closeBtn.setAttribute('id', `closeBtn_${obj.id}`);
    closeBtn.setAttribute('onclick', 'onCloseVisit(id)');
    closeBtn.innerHTML = 'x';

    let mainText = document.createElement('div');
    mainText.className = "main-text";
    mainText.innerHTML = '<p>' + `${obj.clientFullName}` + '</p>' +
        '<p>' + `${obj.visitType}` + '</p>' +
        '<p>' + `${obj.visitDate}` + '</p>';

    let showBtn = document.createElement('button');
    showBtn.className = "show-text-btn";
    showBtn.setAttribute('id', `showBtn_${obj.id}`);
    showBtn.setAttribute('onclick', 'onShowAllText(id)');
    showBtn.innerHTML = 'Показати більше';

    let sliceText = document.createElement('div');
    sliceText.className = "slice-text";
    sliceText.innerHTML = '<p>' + `Мета візиту:` + '</p>' +
        '<p>' + `${obj.cardiologistVisitPurpose}` + '</p>' +
        '<p>' + `Звичайний тиск:` + '</p>' +
        '<p>' + `${obj.normalPressure}` + '</p>' +
        '<p>' + `Індекс маси тіла:` + '</p>' +
        '<p>' + `${obj.bodyMassIndex}` + '</p>' +
        '<p>' + `Перенесені захворювання серцево-судинної системи:` + '</p>' +
        '<p>' + `${obj.cardiovascularSystemPastDiseases}` + '</p>' +
        '<p>' + `Вік:` + '</p>' +
        '<p>' + `${obj.age}` + '</p>' +
        '<p>' + `Додатковий коментар:` + '</p>' +
        '<p>' + `${obj.additionComments}` + '</p>';
    console.log(`obj.additionComments---->${obj.additionComments}`);

    let sliceBtn = document.createElement('button');
    sliceBtn.className = "slice-text-btn";
    sliceBtn.setAttribute('id', `sliceBtn_${obj.id}`);
    sliceBtn.setAttribute('onclick', 'onSlicePartText(id)');
    sliceBtn.innerHTML = 'Сховати текст';

    document.getElementById(`${obj.id}`).appendChild(closeBtn);
    document.getElementById(`${obj.id}`).appendChild(mainText);
    document.getElementById(`${obj.id}`).getElementsByClassName('main-text')[0].appendChild(showBtn);
    document.getElementById(`${obj.id}`).appendChild(sliceText);
    document.getElementById(`${obj.id}`).getElementsByClassName('slice-text')[0].appendChild(sliceBtn);
}

/**
 * @desc  функція, яка візуалізує запис до відповідного лікаря в формі.
 * @param {Object} obj - запису до лікаря,
 * @returns  відповідне візуальне підтвердження.
 */

function _renderVisitDentist(obj) {
    let newCard = document.createElement('div');
    newCard.className = "visit draggable";
    newCard.setAttribute('id', `${obj.id}`);
    newCard.innerHTML = '';
    document.getElementById('visitDashboard').appendChild(newCard);

    let closeBtn = document.createElement('button');
    closeBtn.className = "close-btn";
    closeBtn.setAttribute('id', `closeBtn_${obj.id}`);
    closeBtn.setAttribute('onclick', 'onCloseVisit(id)');
    closeBtn.innerHTML = 'x';

    let mainText = document.createElement('div');
    mainText.className = "main-text";
    mainText.innerHTML = '<p>' + `${obj.clientFullName}` + '</p>' +
        '<p>' + `${obj.visitType}` + '</p>' +
        '<p>' + `${obj.visitDate}` + '</p>';

    let showBtn = document.createElement('button');
    showBtn.className = "show-text-btn";
    showBtn.setAttribute('id', `showBtn_${obj.id}`);
    showBtn.setAttribute('onclick', 'onShowAllText(id)');
    showBtn.innerHTML = 'Показати більше';

    let sliceText = document.createElement('div');
    sliceText.className = "slice-text";
    sliceText.innerHTML = '<p>' + `Мета візиту:` + '</p>' +
        '<p>' + `${obj.dentistVisitPurpose}` + '</p>' +
        '<p>' + `Дата останього візиту до лікаря:` + '</p>' +
        '<p>' + `${obj.visitLastDate}` + '</p>' +
        '<p>' + `Додатковий коментар:` + '</p>' +
        '<p>' + `${obj.additionComments}` + '</p>';
    console.log(`obj.additionComments---->${obj.additionComments}`);

    let sliceBtn = document.createElement('button');
    sliceBtn.className = "slice-text-btn";
    sliceBtn.setAttribute('id', `sliceBtn_${obj.id}`);
    sliceBtn.setAttribute('onclick', 'onSlicePartText(id)');
    sliceBtn.innerHTML = 'Сховати текст';

    document.getElementById(`${obj.id}`).appendChild(closeBtn);
    document.getElementById(`${obj.id}`).appendChild(mainText);
    document.getElementById(`${obj.id}`).getElementsByClassName('main-text')[0].appendChild(showBtn);
    document.getElementById(`${obj.id}`).appendChild(sliceText);
    document.getElementById(`${obj.id}`).getElementsByClassName('slice-text')[0].appendChild(sliceBtn);
}

/**
 * @desc  функція, яка візуалізує запис до відповідного лікаря в формі.
 * @param {Object} obj - запису до лікаря,
 * @returns  відповідне візуальне підтвердження.
 */

function _renderVisitTherapist(obj) {
    let newCard = document.createElement('div');
    newCard.className = "visit draggable";
    newCard.setAttribute('id', `${obj.id}`);
    newCard.innerHTML = '';
    document.getElementById('visitDashboard').appendChild(newCard);

    let closeBtn = document.createElement('button');
    closeBtn.className = "close-btn";
    closeBtn.setAttribute('id', `closeBtn_${obj.id}`);
    closeBtn.setAttribute('onclick', 'onCloseVisit(id)');
    closeBtn.innerHTML = 'x';

    let mainText = document.createElement('div');
    mainText.className = "main-text";
    mainText.innerHTML = '<p>' + `${obj.clientFullName}` + '</p>' +
        '<p>' + `${obj.visitType}` + '</p>' +
        '<p>' + `${obj.visitDate}` + '</p>';

    let showBtn = document.createElement('button');
    showBtn.className = "show-text-btn";
    showBtn.setAttribute('id', `showBtn_${obj.id}`);
    showBtn.setAttribute('onclick', 'onShowAllText(id)');
    showBtn.innerHTML = 'Показати більше';

    let sliceText = document.createElement('div');
    sliceText.className = "slice-text";
    //sliceText.innerHTML = '<p>22222</p>' + '<button class="slice-text-btn" id="sliceBtn_visitTherapist_02" onclick="onSlicePartText(id)">Сховати текст</button>';
    sliceText.innerHTML = '<p>' + `Мета візиту:` + '</p>' +
        '<p>' + `${obj.therapistVisitPurpose}` + '</p>' +
        '<p>' + `Вік:` + '</p>' +
        '<p>' + `${obj.age}` + '</p>' +
        '<p>' + `Додатковий коментар:` + '</p>' +
        '<p>' + `${obj.additionComments}` + '</p>';
    console.log(`obj.additionComments---->${obj.additionComments}`);

    let sliceBtn = document.createElement('button');
    sliceBtn.className = "slice-text-btn";
    sliceBtn.setAttribute('id', `sliceBtn_${obj.id}`);
    sliceBtn.setAttribute('onclick', 'onSlicePartText(id)');
    sliceBtn.innerHTML = 'Сховати текст';

    document.getElementById(`${obj.id}`).appendChild(closeBtn);
    document.getElementById(`${obj.id}`).appendChild(mainText);
    document.getElementById(`${obj.id}`).getElementsByClassName('main-text')[0].appendChild(showBtn);
    document.getElementById(`${obj.id}`).appendChild(sliceText);
    document.getElementById(`${obj.id}`).getElementsByClassName('slice-text')[0].appendChild(sliceBtn);
}


/**
 * @desc  функція, яка додає запис про візит до лікарів.
 * @param {Object} obj - відповідний клас - візиту до лікаря,
 * @returns  зміна даних в localStorage та відповідне візуальне підтвердження.
 */

function addVisit(obj) {
    let arrayOfVisits = JSON.parse(localStorage.getItem("listOfVisits"));
    if (!Array.isArray(arrayOfVisits)) {
        arrayOfVisits = []
    }

    arrayOfVisits.push(obj);
    if (arrayOfVisits.length !== 0) {
        clearMessageOnBoard();
    }
    return localStorage.setItem("listOfVisits", JSON.stringify(arrayOfVisits));
}


/**
 * @desc  функція, яка видаляє запис про візит до лікарів.
 * @param {String} id - відповідного візиту,
 * @returns [JSON] зміна даних в localStorage та відповідне візуальне підтвердження.
 */

function deleteVisit(id) {
    let newArrayOfVisits = [];
    let arrayOfVisits = JSON.parse(localStorage.getItem("listOfVisits"));


    for (let i = 0; i < arrayOfVisits.length; i++) {
        if (!(arrayOfVisits[i].id === id)) {
            newArrayOfVisits.push(arrayOfVisits[i]);
        }
    }
    if (arrayOfVisits.length === 1) {
        showMessageOnBoard();
    }

    return localStorage.setItem("listOfVisits", JSON.stringify(newArrayOfVisits));
}

/**
 * @desc  функція, яка відтворює інформацію про записи про візити до лікарів у формі.
 * @returns відповідне візуальне підтвердження.
 */

function renderAllForms() {

    let arrayOfVisits = JSON.parse(localStorage.getItem("listOfVisits"));

    if (!Array.isArray(arrayOfVisits) || arrayOfVisits.length === 0) {
        showMessageOnBoard();
        arrayOfVisits = [];
    }

    for (let i = 0; i < arrayOfVisits.length; i++) {
        if (arrayOfVisits[i].visitType === 'Кардиолог') {
            _renderVisitCardiologist(arrayOfVisits[i]);
        }
        if (arrayOfVisits[i].visitType === 'Стоматолог') {
            _renderVisitDentist(arrayOfVisits[i]);
        }
        if (arrayOfVisits[i].visitType === 'Терапевт') {
            _renderVisitTherapist(arrayOfVisits[i]);
        }
    }
}
