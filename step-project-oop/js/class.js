class Visit {
    /**
     * @desc Конструктор класу
     * @param visitType
     * @param visitDate
     * @param clientFullName
     */
    constructor({
                    visitType,
                    visitDate,
                    clientFullName
                }) {
        this.visitType = visitType;
        // this.visitDate = visitDate || new Date();
        this.visitDate = visitDate || new Date();
        this.clientFullName = clientFullName;
    }
}

class VisitCardiologist extends Visit {
    /**
     * @desc Конструктор класу
     * @param {String} id,
     * @param {String} clientFullName, Прізвище Ім'я та Побатькові пацієнта.
     * @param {String} visitType, тип візиту,
     * @param {Object} visitDate, Дата візиту до лікаря,
     * @param {String} cardiologistVisitPurpose, Мета візиту,
     * @param {String} normalPressure, Звичайний тиск,
     * @param {Number} bodyMassIndex, Індекс маси тіла,
     * @param {String} cardiovascularSystemPastDiseases, Перенесені захворювання серцево-судинної системи,
     * @param {Number} age, Вік,
     * @param {String} additionComments, Додатковий коментар.
     */
    constructor({
                    id = '',
                    clientFullName = '',
                    visitType = '',
                    visitDate = null,
                    cardiologistVisitPurpose = '',
                    normalPressure = '',
                    bodyMassIndex = null,
                    cardiovascularSystemPastDiseases = '',
                    age = 0,
                    additionComments = ''
                }) {
        super({visitType, visitDate, clientFullName});
        this.id = id;
        this.cardiologistVisitPurpose = cardiologistVisitPurpose;
        this.normalPressure = normalPressure;
        this.bodyMassIndex = bodyMassIndex;
        this.cardiovascularSystemPastDiseases = cardiovascularSystemPastDiseases;
        this.age = age;
        this.additionComments = additionComments;
    }

}

class VisitDentist extends Visit {
    /**
     * @desc Конструктор класу,
     * @param {String} id,
     * @param {String} clientFullName, Прізвище Ім'я та Побатькові пацієнта.
     * @param {String} visitType, тип візиту,
     * @param {Object} visitDate, Дата візиту до лікаря,
     * @param {String} dentistVisitPurpose, Мета візиту,
     * @param {Object} visitLastDate, Дата останього візиту до лікаря,
     * @param {String} additionComments, Додатковий коментар.
     */
    constructor({
                    id = '',
                    clientFullName = '',
                    visitType = '',
                    visitDate = null,
                    dentistVisitPurpose = '',
                    visitLastDate = null,
                    additionComments = ''
                }) {
        super({visitType, visitDate, clientFullName});
        this.id = id;
        this.dentistVisitPurpose = dentistVisitPurpose;
        this.visitLastDate = visitLastDate;
        this.additionComments = additionComments;
    }
}

class VisitTherapist extends Visit {
    /**
     * @desc Конструктор класу
     * @param {String} id,
     * @param {String} clientFullName, Прізвище Ім'я та Побатькові пацієнта,
     * @param {String} visitType, тип візиту,
     * @param {Object} visitDate, Дата візиту до лікаря,
     * @param {String} therapistVisitPurpose, Мета візиту,
     * @param {Number} age, Вік,
     * @param {String} additionComments, Додатковий коментар.
     */
    constructor({
                    id = '',
                    clientFullName = '',
                    visitType = '',
                    visitDate = null,
                    therapistVisitPurpose = '',
                    age = 0,
                    additionComments = ''
                }) {
        super({visitType, visitDate, clientFullName});
        this.id = id;
        this.therapistVisitPurpose = therapistVisitPurpose;
        this.age = age;
        this.additionComments = additionComments;
    }

}
