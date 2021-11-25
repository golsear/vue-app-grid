export const defaultData = [
    {
        filters: [
            {
                key: 'version',
                isChecked: true,
            },
            {
                key: 'creationDate',
                isChecked: true,
            },
            {
                key: 'status',
                isChecked: true
            },
            {
                key: 'statusChangeDate',
                isChecked: true
            }
        ],
        columns: [
            {
                name: 'Версія',
                key: 'version',
                isFiltered: true
            },
            {
                name: 'Дата створення',
                key: 'creationDate',
                isFiltered: true
            },
            {
                name: 'Статус',
                key: 'status',
                isFiltered: true
            },
            {
                name: 'Дата зміни статусу',
                key: 'statusChangeDate',
                isFiltered: true
            },
            {
                name: '',
                key: 'component',
                isFiltered: false
            }
        ],
        rows: [
            {
                version: {
                    value: 'v 1.02',
                    type: 'string'
                },
                creationDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date'
                },
                status: {
                    value: 'Не завершено',
                    statusCode: 1,
                    type: 'status'
                },
                statusChangeDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date'
                },
                component: {
                    value: 'button',
                    type: 'component'
                },
                extraField: {
                    value: 'extra field',
                    type: 'string'
                }
            },
            {
                version: {
                    value: 'v 1.01',
                    type: 'string'
                },
                creationDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date'
                },
                status: {
                    value: 'Не складено',
                    statusCode: 2,
                    type: 'status'
                },
                statusChangeDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date'
                },
                component: {
                    value: 'button',
                    type: 'component'
                }
            },
            {
                version: {
                    value: 'v 1.00',
                    type: 'string'
                },
                creationDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date'
                },
                status: {
                    value: 'Cкладено',
                    statusCode: 3,
                    type: 'status'
                },
                statusChangeDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date'
                },
                component: {
                    value: 'button',
                    type: 'component'
                }
            }
        ]
    }
];