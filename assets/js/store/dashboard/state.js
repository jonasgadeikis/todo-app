export default {
    tasks: [],
    dashboardLoadingState: false,
    draggedTask: null,
    columns: [
        {
            name: 'toDo',
            available: [
                'inProgress',
            ],
            unavailable: [
                'completed',
                'blocked',
            ],
        },
        {
            name: 'inProgress',
            available: [
                'completed',
                'blocked',
            ],
            unavailable: [],
        },
        {
            name: 'completed',
            available: [],
            unavailable: [],
        },
        {
            name: 'blocked',
            available: [
                'inProgress',
            ],
            unavailable: [
                'toDo',
                'completed',
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