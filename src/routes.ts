import { lazy } from 'react';

const HomepageView = lazy(() =>
    import('./views/HomepageView').then((module) => ({
        default: module.HomepageView
    }))
);

const TaskManagerView = lazy(() =>
    import('./views/TaskManagerView').then((module) => ({
        default: module.TaskManagerView
    }))
);

export const routes = {
    homepage: {
        Component: HomepageView,
        pageTitle: 'Homepage',
        path: '/',
    },
    taskManagerView: {
        Component: TaskManagerView,
        pageTitle: 'Task Manager',
        path: '/task-manager'
    }
}