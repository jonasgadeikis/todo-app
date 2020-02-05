export default {
    tasks: [],
    draggedTask: null,
    columns: [
        {
            name: 'toDo',
            available: [
                'inProgress',
            ],
        },
        {
            name: 'inProgress',
            available: [
                'toDo',
                'completed',
                'blocked',
            ],
        },
        {
            name: 'completed',
            available: [
                'toDo',
            ],
        },
        {
            name: 'blocked',
            available: [
                'inProgress',
            ],
        },
    ],
    allColumns: [
        'toDo',
        'inProgress',
        'completed',
        'blocked',
    ],
};