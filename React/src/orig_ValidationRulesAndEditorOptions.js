import { positions } from './data.js';

export const validationRules = {
    firstName: [{ type: 'required', message: 'First Name is required.' }],
    lastName: [{ type: 'required', message: 'Last Name is required.' }],
    phone: [{ type: 'required', message: 'Phone number is required.' }],
    email: [{ type: 'email', message: 'Email is incorrect.' }],
    birthDate: [
        { 
            type: 'required', 
            message: 'Birth Date is required.', 
            invalidDateMessage: 'The date must have the following format: mm/dd/yyyy', 
        },
    ],
};

export const positionEditorOptions = { items: positions, searchEnabled: true };
export const notesEditorOptions = { height: 90, maxLength: 200 };
export const phoneEditorOptions = { 
    mask: '+1 (X00) 000-0000', 
    maskRules: { X: /[02-9]/ },
    maskInvalidMessage: 'The phone must have a correct USA phone format',
};
