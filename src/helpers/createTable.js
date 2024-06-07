import * as ExcelJS from "exceljs";

export const createTable = (data) => {
    const workbook = new ExcelJS.Workbook();

    const sheet = workbook.addWorksheet("Практиканты");

    sheet.columns = [
        {
            header: "Id",
            key: "id",
            width: 10,
        },
        { header: "Имя", key: "name", width: 32 },
        {
            header: "Почта",
            key: "email",
            width: 20,
        },
        {
            header: "Телефон",
            key: "phone",
            width: 20,
        },
        {
            header: "Период",
            key: "period",
            width: 15,
        },
        {
            header: "Учебное заведение",
            key: "university",
            width: 10,
        },
        {
            header: "Курс",
            key: "course",
            width: 30,
        },
        {
            header: "Факультет",
            key: "faculty",
            width: 30,
        },
        {
            header: "Подразделение",
            key: "department",
            width: 30,
        },
        {
            header: "Завершил практику",
            key: "done",
            width: 30,
        },
        {
            header: "Дата начала практики",
            key: "date",
            width: 30,
        },
        {
            header: "Отзывы",
            key: "feedback",
            width: 30,
        },
        {
            header: "Количество регистраций",
            key: "count",
            width: 30,
        },
    ];

    for (let user of data) {
        sheet.addRow(user)
    }

    workbook.xlsx.writeBuffer().then(function (data) {
        const blob = new Blob([data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "practice.xlsx";
        anchor.click();
        window.URL.revokeObjectURL(url);
    });
}

export const createFeedbackTable = (data) => {
    const workbook = new ExcelJS.Workbook();

    const sheet = workbook.addWorksheet("Отзывы подразделений");

    sheet.columns = [
        {
            header: "Id",
            key: "id",
            width: 10,
        },
        { header: "Имя", key: "name", width: 32 },
        {
            header: "ФИО практиканта",
            key: "intern",
            width: 20,
        },
        {
            header: "Образовательное учреждение",
            key: "university",
            width: 20,
        },
        {
            header: "Закрепленный наставник (фио, должность)",
            key: "mentor",
            width: 15,
        },
        {
            header: "Задачи, которые выполнял практикант",
            key: "tasks",
            width: 10,
        },
        {
            header: "Могли бы рекомендовать студента для трудоустройства в Мэрию Казани",
            key: "recommendation",
            width: 30,
        },
        {
            header: "Дополнительная информация (пожелания, рекомендации по организации практики)",
            key: "additional",
            width: 30,
        },
    ];

    for (let feedback of data) {
        sheet.addRow(feedback)
    }

    workbook.xlsx.writeBuffer().then(function (data) {
        const blob = new Blob([data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "practice.xlsx";
        anchor.click();
        window.URL.revokeObjectURL(url);
    });
}

