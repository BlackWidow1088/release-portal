// TODO: after uploading images data to server the extension of images is changed
export const GOOGLE_MAP_NOT_FOUND = 'GOOGLE_MAP_NOT_FOUND';

export const DEFAULT_MARKER_PATH = `${process.env.PUBLIC_URL}/data/fotos/App/journey.jpg`;
export const MARKER = `${process.env.PUBLIC_URL}/data/fotos/App/marker.png`;
export const APP_RESERVED_FEED_ID = 'APP_RESERVED_FEED_ID';
export const APP_RESERVED_USER_ID = 'APP_RESERVED_USER_ID';
export const APP_RESERVED_USER_NAME = 'App';
export const TOP_JOURNEY = 'top';
export const FOTO_CATEGORY = {
    FOOD: 'food',
    PLACE: 'place'
}

// ROUTES
export const journeyPathName = '/home/journey';


// MOOD
export const MOOD = {
    FOOD: 'FOOD',
    TRAVEL: 'TRAVEL',
    JOURNEY: 'JOURNEY',
    FEED: 'FEED',
    LIVE: 'LIVE'
};

export const WEATHER = {
    RAIN: 'RAIN'
}

export const EMOJI = {
    'LIVE': `${process.env.PUBLIC_URL}/live.PNG`,
    'FOOD': `${process.env.PUBLIC_URL}/hungry.PNG`,
    'TRAVEL': `${process.env.PUBLIC_URL}/travel.PNG`,
    'JOURNEY': `${process.env.PUBLIC_URL}/journey.PNG`,
    'FEED': `${process.env.PUBLIC_URL}/general.PNG`,
    'RAIN': `${process.env.PUBLIC_URL}/rain.PNG`,
};

export const TABLE_OPTIONS = {
    EDIT: 'EDIT',
    DELETE: 'DELETE',
    ADD: 'ADD'
}
//APPROVED UNAPPROVED ARE ACTIONS
export const flow = {

    newTC1: [
        //non-admin actions
        { PreviousWorkingStatus: 'CREATED', WorkingStatus: 'PENDING_FOR_APPROVAL', assignee: 'SELF', InitialWorkingStatus: 'CREATED' }, //(admin,non-admin) -> admin //1
        { PreviousWorkingStatus: 'CREATED', WorkingStatus: 'UNAPPROVED', assignee: 'SELF', InitialWorkingStatus: 'CREATED' }, //admin ->(admin, non-admin) (-) //3

        { PreviousWorkingStatus: 'FROM_MASTER/CREATED', WorkingStatus: 'UNASSIGNED', assignee: 'SELF', InitialWorkingStatus: 'FROM_MASTER/CREATED' }, //(admin,non-admin) -> admin //2

        //admin actions

        { PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'DELETED', assignee: 'any', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //admin  (-) //4
        // {PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'UNASSIGNED', assignee: 'ANY', InitialWorkingStatus: 'CREATED/FROM_MASTER'}, //admin->null (+) //5

        { PreviousWorkingStatus: 'APPROVED/UNAPPROVED', WorkingStatus: 'MANUAL_ASSIGNED', assignee: 'ANY', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //admin->qa (+) //6
        { PreviousWorkingStatus: 'APPROVED/UNAPPROVED', WorkingStatus: 'AUTO_ASSIGNED', assignee: 'ANY', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //admin ->qa (+) //7
        { PreviousWorkingStatus: 'APPROVED/UNAPPROVED', WorkingStatus: 'DEV_ASSIGNED', assignee: 'ANY', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //admin ->dev (+) //8


        { PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'DEV_APPROVED', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //admin->dev (-) //10
        { PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'MANUAL_COMPLETED', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //admin->dev (-) //11
        { PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'AUTO_COMPLETED', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //admin->dev (-) //12


        //non-admin actions
        // {PreviousWorkingStatus: 'DELETED', WorkingStatus: 'PENDING_FOR_APPROVAL', assignee: 'SELF,any',}, //non-admin  (-) //13

        // dev actions
        { PreviousWorkingStatus: 'DEV_APPROVED', WorkingStatus: 'PENDING_FOR_APPROVAL', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //dev->admin (+) //14

        // manual actions
        { PreviousWorkingStatus: 'MANUAL_COMPLETED', WorkingStatus: 'PENDING_FOR_APPROVAL', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //dev->admin (+) //16
        //admin actions


        // auto actions
        { PreviousWorkingStatus: 'AUTO_COMPLETED', WorkingStatus: 'PENDING_FOR_APPROVAL', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //dev->admin (+) //18
        //admin actions

        // ADD IN FUTURE
        { PreviousWorkingStatus: 'ANY', WorkingStatus: 'PENDING_FOR_APPROVAL', askForDelete: 'BOOLEAN', InitialWorkingStatus: 'CREATED/FROM_MASTER' }, //dev->admin (+) //19
    ]
}

export const operations = {
    onAdminCreate: 'onAdminCreate',
    onAdminMasterClone: 'onAdminMasterClone',
    onNonAdminCreate: 'onNonAdminCreate'
}
export const assigneeTypes = {
    SELF: 'SELF',
    ADMIN: 'ADMIN'
}

export const assigneeMissing = (request, method) => {
    if (request && request.assignee && request.assignee !== 'ADMIN') {
        return false;
    } else {
        return { error: `assignee required for ${method}` }
    }
}
export const autoAssigneeMissing = (request, method) => {
    if (request && request.autoAssignee && request.autoAssignee !== 'ADMIN') {
        return false;
    } else {
        return { error: `auto-assignee required for ${method}` }
    }
}
export const devAssigneeMissing = (request, method) => {
    if (request && request.devAssignee && request.devAssignee !== 'ADMIN') {
        return false;
    } else {
        return { error: `dev-assignee required for ${method}` }
    }
}

export const steps = {
    'onAdminCreate': () => ({ step: 'onAdminCreate', PreviousWorkingStatus: 'CREATED', WorkingStatus: 'UNASSIGNED', assignee: 'ADMIN', autoAssignee: 'ADMIN', devAssignee: null, InitialWorkingStatus: 'CREATED' }), //2.1
    'onAdminMasterClone': () => ({ step: 'onAdminMasterClone', PreviousWorkingStatus: 'FROM_MASTER', WorkingStatus: 'UNASSIGNED', assignee: 'ADMIN', autoAssignee: 'ADMIN', devAssignee: null, InitialWorkingStatus: 'FROM_MASTER' }), //2.2

    'onAdminInit': (request) => {
        return {
            step: 'onAdminInit',
            PreviousWorkingStatus: request && request.PreviousWorkingStatus ? request.PreviousWorkingStatus : 'APPROVED',
            WorkingStatus: request && request.assignee && request.assignee !== 'ADMIN' ? 'MANUAL_ASSIGNED' : 'UNASSIGNED',
            assignee: request && request.assignee ? request.assignee : 'ADMIN',
            autoAssignee: request && request.autoAssignee ? request.autoAssignee : 'ADMIN',
            devAssignee: request && request.devAssignee ? request.devAssignee : null,
            InitialWorkingStatus: request && request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
        }
    }, //2.5 

    'onNonAdminCreateRequest': (request) => {
        let missing = assigneeMissing(request, 'onNonAdminCreateRequest')
        if (!missing) {
            return { step: 'onNonAdminCreateRequest', PreviousWorkingStatus: 'CREATED', WorkingStatus: 'PENDING_FOR_APPROVAL', assignee: request.assignee, autoAssignee: 'ADMIN', devAssignee: null, InitialWorkingStatus: 'CREATED' }
        }
        return missing
    }, //1 //assignee compulsory

    'onAdminDelete': (request) => {
        let missing = assigneeMissing(request, 'onAdminDelete')
        if (!missing) {
            return {
                step: 'onAdminDelete',
                PreviousWorkingStatus: request.PreviousWorkingStatus ? request.PreviousWorkingStatus : 'APPROVED',
                WorkingStatus: 'DELETED',
                assignee: request.assignee,
                autoAssignee: request.autoAssignee ? request.autoAssignee : 'ADMIN',
                devAssignee: request.devAssignee ? request.devAssignee : null,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, //1 //assignee compulsory

    'onAdminCreateRequestUnApprove': (request) => {
        let missing = assigneeMissing(request, 'onAdminCreateRequestUnApprove')
        if (!missing) {
            return { step: 'onAdminCreateRequestUnApprove', PreviousWorkingStatus: 'CREATED', WorkingStatus: 'UNAPPROVED', assignee: request.assignee, autoAssignee: 'ADMIN', devAssignee: null, InitialWorkingStatus: 'CREATED' }
        }
        return missing
    }, //3 //assignee compulsory

    'onAdminCreateRequestApprove': (request) => ({
        step: 'onAdminCreateRequestApprove',
        PreviousWorkingStatus: 'CREATED',
        WorkingStatus: request && request.assignee && request.assignee !== 'ADMIN' ? 'MANUAL_ASSIGNED' : 'UNASSIGNED',
        assignee: request && request.assignee ? request.assignee : 'ADMIN',
        autoAssignee: 'ADMIN', devAssignee: null, InitialWorkingStatus: 'CREATED'
    }), //2.3



    'onAdminManualAssigned': (request) => {
        let missing = assigneeMissing(request, 'onAdminManualAssigned')
        if (!missing) {
            return {
                step: 'onAdminManualAssigned',
                PreviousWorkingStatus: request.PreviousWorkingStatus ? request.PreviousWorkingStatus : 'APPROVED',
                WorkingStatus: 'MANUAL_ASSIGNED',
                assignee: request.assignee,
                autoAssignee: request.autoAssignee ? request.autoAssignee : 'ADMIN',
                devAssignee: request.devAssignee ? request.devAssignee : null,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, //6 //assignee compulsory

    'onNonAdminManualCompleted': (request) => {
        let missing = assigneeMissing(request, 'onNonAdminManualCompleted')
        if (!missing) {
            return {
                step: 'onNonAdminManualCompleted',
                PreviousWorkingStatus: 'MANUAL_COMPLETED',
                WorkingStatus: 'PENDING_FOR_APPROVAL',
                assignee: request.assignee,
                autoAssignee: request.autoAssignee ? request.autoAssignee : 'ADMIN',
                devAssignee: request.devAssignee ? request.devAssignee : null,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, // 16 //assignee compulsory

    'onAdminManualCompleted': (request) => {
        let missing = assigneeMissing(request, 'onAdminManualCompleted')
        if (!missing) {
            return {
                step: 'onAdminManualCompleted',
                PreviousWorkingStatus: 'APPROVED',
                WorkingStatus: 'MANUAL_COMPLETED',
                assignee: request.assignee,
                autoAssignee: request.autoAssignee ? request.autoAssignee : 'ADMIN',
                devAssignee: request.devAssignee ? request.devAssignee : null,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, //11 //assignee compulsory


    'onAdminDevAssigned': (request) => {
        let missing = devAssigneeMissing(request, 'onAdminDevAssigned')
        if (!missing) {
            return {
                step: 'onAdminDevAssigned',
                PreviousWorkingStatus: request.PreviousWorkingStatus ? request.PreviousWorkingStatus : 'APPROVED',
                WorkingStatus: 'DEV_ASSIGNED',
                assignee: request.assignee ? request.assignee : 'ADMIN',
                autoAssignee: request.autoAssignee ? request.autoAssignee : 'ADMIN',
                devAssignee: request.devAssignee,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, //8 //dev-assignee compulsory

    'onNonAdminDevCompleted': (request) => {
        let missing = devAssigneeMissing(request, 'onNonAdminDevCompleted')
        if (!missing) {
            return {
                step: 'onNonAdminDevCompleted',
                PreviousWorkingStatus: 'DEV_APPROVED',
                WorkingStatus: 'PENDING_FOR_APPROVAL',
                assignee: request.assignee ? request.assignee : 'ADMIN',
                autoAssignee: request.autoAssignee ? request.autoAssignee : 'ADMIN',
                devAssignee: request.devAssignee,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, // 14 //dev-assignee compulsory

    'onAdminDevCompleted': (request) => {
        let missing = devAssigneeMissing(request, 'onAdminDevCompleted')
        if (!missing) {
            return {
                step: 'onAdminDevCompleted',
                PreviousWorkingStatus: 'APPROVED',
                WorkingStatus: 'DEV_APPROVED',
                assignee: request.assignee ? request.assignee : 'ADMIN',
                autoAssignee: request.autoAssignee ? request.autoAssignee : 'ADMIN',
                devAssignee: request.devAssignee,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, //10 //dev-assignee compulsory



    'onAdminAutoAssigned': (request) => {
        let missing = autoAssigneeMissing(request, 'onAdminAutoAssigned')
        if (!missing) {
            return {
                step: 'onAdminAutoAssigned',
                PreviousWorkingStatus: request.PreviousWorkingStatus ? request.PreviousWorkingStatus : 'APPROVED',
                WorkingStatus: 'AUTO_ASSIGNED',
                assignee: request.assignee ? request.assignee : 'ADMIN',
                autoAssignee: request.autoAssignee,
                devAssignee: request.devAssignee ? request.devAssignee : null,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, //7 //auto-assignee compulsory

    'onNonAdminAutoCompleted': (request) => {
        let missing = autoAssigneeMissing(request, 'onNonAdminAutoCompleted')
        if (!missing) {
            return {
                step: 'onNonAdminAutoCompleted',
                PreviousWorkingStatus: 'AUTO_COMPLETED',
                WorkingStatus: 'PENDING_FOR_APPROVAL',
                assignee: request.assignee ? request.assignee : 'ADMIN',
                autoAssignee: request.autoAssignee,
                devAssignee: request.devAssignee ? request.devAssignee : null,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, // 18 //auto-assignee compulsory

    'onAdminAutoCompleted': (request) => {
        let missing = autoAssigneeMissing(request, 'onAdminAutoCompleted')
        if (!missing) {
            return {
                step: 'onAdminAutoCompleted',
                PreviousWorkingStatus: 'APPROVED',
                WorkingStatus: 'AUTO_COMPLETED',
                assignee: request.assignee ? request.assignee : 'ADMIN',
                autoAssignee: request.autoAssignee,
                devAssignee: request.devAssignee ? request.devAssignee : null,
                InitialWorkingStatus: request.InitialWorkingStatus ? request.InitialWorkingStatus : 'FROM_MASTER'
            }
        }
        return missing
    }, //12 //auto-assignee compulsory
}

export const ws = [
    'CREATED', 'UNASSIGNED', 'DEV_ASSIGNED', 'DEV_APPROVED', 'APPROVED', 'UNAPPROVED', 'MANUAL_ASSIGNED',
    'MANUAL_COMPLETED', 'AUTO_ASSIGNED', 'AUTO_COMPLETED', 'DELETED'
]
export const workingStatuses = {
    FROM_MASTER: { title: 'FROM_MASTER' },
    CREATED: { title: 'CREATED' },
    MY_PENDING_FOR_APPROVAL: { title: 'MY_PENDING_FOR_APPROVAL' },
    PENDING_FOR_APPROVAL: { title: 'PENDING_FOR_APPROVAL' },
    PENDING_FOR_ASSIGNMENT: { title: 'PENDING_FOR_ASSIGNMENT' },
    UNASSIGNED: { title: 'UNASSIGNED' },
    DEV_ASSIGNED: { title: 'DEV_ASSIGNED' },
    DEV_APPROVED: { title: 'DEV_APPROVED' },
    APPROVED: { title: 'APPROVED' },
    UNAPPROVED: { title: 'UNAPPROVED' },
    MANUAL_ASSIGNED: { title: 'MANUAL_ASSIGNED' },
    MANUAL_COMPLETED: { title: 'MANUAL_COMPLETED' },
    AUTO_ASSIGNED: { title: 'AUTO_ASSIGNED' },
    AUTO_COMPLETED: { title: 'AUTO_COMPLETED' },
    UPDATED: { title: 'UPDATED' },
    DELETED: { title: 'DELETED' },
}
export const roles = {
    ADMIN: {
        title: 'ADMIN', allowedWS: [
            workingStatuses.CREATED.title,
            workingStatuses.UNASSIGNED.title,
            workingStatuses.DEV_ASSIGNED.title,
            workingStatuses.DEV_APPROVED.title,
            workingStatuses.APPROVED.title,
            workingStatuses.UNAPPROVED.title,
            workingStatuses.MANUAL_ASSIGNED.title,
            workingStatuses.MANUAL_COMPLETED.title,
            workingStatuses.AUTO_ASSIGNED.title,
            workingStatuses.AUTO_COMPLETED.title,
            workingStatuses.DELETED.title,
        ]
    },
    QA: { title: 'QA', allowedWS: [] },
    DEVELOPER: { title: 'DEVELOPER', allowedWS: [] },
};
export const tcTypes = {
    'PFAPPROVAL': {
        type: 'PFAPPROVAL', title: 'Pending for Approval',
        roles: [roles.ADMIN.title]
    },
    'PFASSIGN': { type: 'PFASSIGN', title: 'Pending for Assignment', roles: [roles.ADMIN.title] },
    'ASSIGNAUTO': { type: 'ASSIGNAUTO', title: 'Assign TCs for Automation', roles: [roles.ADMIN.title] },
    'ASSIGNREGRESSION': { type: 'ASSIGNREGRESSION', title: 'Assign TCs for Regression', roles: [roles.ADMIN.title] },
    'ASSIGNEDAUTO': { type: 'ASSIGNEDAUTO', title: 'My Assigned TCs for Automation', roles: [roles.ADMIN.title, roles.QA.title, roles.DEVELOPER.title] },
    'ASSIGNEDREGRESSION': { type: 'ASSIGNEDREGRESSION', title: 'My Assigned TCs for Regression', roles: [roles.ADMIN.title, roles.QA.title, roles.DEVELOPER.title] },
    'MPFAPPROVAL': { type: 'MPFAPPROVAL', title: 'My TCs Pending for Approval', roles: [roles.ADMIN.title, roles.QA.title, roles.DEVELOPER.title] },
}

