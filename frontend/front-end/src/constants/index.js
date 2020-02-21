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
        {PreviousWorkingStatus: 'CREATED', WorkingStatus: 'PENDING_FOR_APPROVAL', assignee: 'SELF', InitialWorkingStatus: 'CREATED'}, //(admin,non-admin) -> admin
         

        //admin actions
        {PreviousWorkingStatus: 'CREATED', WorkingStatus: 'UNAPPROVED', assignee: 'SELF', InitialWorkingStatus: 'CREATED'}, //admin ->(admin, non-admin) (-) 
        {PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'DELETED', assignee: 'any', InitialWorkingStatus: 'CREATED'}, //admin  (-) 
        {PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'UNASSIGNED', assignee: 'ANY', InitialWorkingStatus: 'CREATED/FROM_MASTER'}, //admin->null (+)
        {PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'MANUAL_ASSIGNED', assignee: 'ANY'}, //admin->qa (+)
        {PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'AUTO_ASSIGNED', assignee: 'ANY'}, //admin ->qa (+)
        {PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'DEV_ASSIGNED', assignee: 'ANY'}, //admin ->dev (+)
        {PreviousWorkingStatus: 'APPROVED', WorkingStatus: 'MANUAL_COMPLETED'}, //admin->dev (-)


        //non-admin actions
        {PreviousWorkingStatus: 'UPDATED', WorkingStatus: 'PENDING_FOR_APPROVAL', assignee: 'SELF,any',}, //non-admin ->(admin) (+) 
        {PreviousWorkingStatus: 'DELETED', WorkingStatus: 'PENDING_FOR_APPROVAL', assignee: 'SELF,any',}, //non-admin  (-) 
        
        // dev actions
        {PreviousWorkingStatus: 'DEV_APPROVED', WorkingStatus: 'PENDING_FOR_APPROVAL'}, //dev->admin (+)
        //admin actions
        {PreviousWorkingStatus: 'UNAPPROVED', WorkingStatus: 'DEV_ASSIGNED'}, //admin->dev (-)

        // manual actions
        {PreviousWorkingStatus: 'MANUAL_COMPLETED', WorkingStatus: 'PENDING_FOR_APPROVAL'}, //dev->admin (+)
        //admin actions
        {PreviousWorkingStatus: 'UNAPPROVED', WorkingStatus: 'MANUAL_ASSIGNED'}, //admin->dev (-)
        
        // auto actions
        {PreviousWorkingStatus: 'AUTO_COMPLETED', WorkingStatus: 'PENDING_FOR_APPROVAL'}, //dev->admin (+)
        //admin actions
        {PreviousWorkingStatus: 'UNAPPROVED', WorkingStatus: 'AUTO_ASSIGNED'}, //admin->dev (-)
    ]
}
export const workingStatuses = {
    FROM_MASTER: {title: 'FROM_MASTER'},
    CREATED: {title: 'CREATED'},
    MY_PENDING_FOR_APPROVAL: {title: 'MY_PENDING_FOR_APPROVAL'},
    PENDING_FOR_APPROVAL: {title: 'PENDING_FOR_APPROVAL'},
    PENDING_FOR_ASSIGNMENT: {title: 'PENDING_FOR_ASSIGNMENT'},
    UNASSIGNED: {title: 'UNASSIGNED'},
    DEV_ASSIGNED: {title: 'DEV_ASSIGNED'},
    DEV_APPROVED: {title: 'DEV_APPROVED'},
    APPROVED: {title: 'APPROVED'},
    UNAPPROVED: {title: 'UNAPPROVED'},
    MANUAL_ASSIGNED: {title: 'MANUAL_ASSIGNED'},
    MANUAL_COMPLETED: {title: 'MANUAL_COMPLETED'},
    AUTO_ASSIGNED: {title: 'AUTO_ASSIGNED'},
    AUTO_COMPLETED: {title: 'AUTO_COMPLETED'},
    UPDATED: {title: 'UPDATED'},
    DELETED: {title: 'DELETED'},
}
export const roles= {
    ADMIN: {title: 'ADMIN', allowedWS: [
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
    ]},
    QA: {title: 'QA', allowedWS: []},
    DEVELOPER: {title: 'DEVELOPER', allowedWS: []},
};
export const tcTypes= {
    'PFAPPROVAL': {
        type: 'PFAPPROVAL', title: 'Pending for Approval', 
        roles: [roles.ADMIN.title]
    },
    'PFASSIGN': {type: 'PFASSIGN', title: 'Pending for Assignment', roles: [roles.ADMIN.title]},
    'ASSIGNAUTO': {type: 'ASSIGNAUTO', title: 'Assign TCs for Automation', roles: [roles.ADMIN.title]},
    'ASSIGNREGRESSION': {type: 'ASSIGNREGRESSION', title: 'Assign TCs for Regression', roles: [roles.ADMIN.title]},
    'ASSIGNEDAUTO': {type: 'ASSIGNEDAUTO', title: 'My Assigned TCs for Automation', roles: [roles.ADMIN.title, roles.QA.title, roles.DEVELOPER.title]},
    'ASSIGNEDREGRESSION': {type: 'ASSIGNEDREGRESSION', title: 'My Assigned TCs for Regression', roles: [roles.ADMIN.title, roles.QA.title, roles.DEVELOPER.title]},
    'MPFAPPROVAL': {type: 'MPFAPPROVAL', title: 'My TCs Pending for Approval', roles: [roles.ADMIN.title, roles.QA.title, roles.DEVELOPER.title]},
}

