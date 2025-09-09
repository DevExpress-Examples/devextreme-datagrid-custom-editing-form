import { positions } from './data.js';

export const positionEditorOptions = { items: positions, searchEnabled: true };
export const notesEditorOptions = { height: 90, maxLength: 200 };
export const phoneEditorOptions = { 
    mask: '+1 (X00) 000-0000', 
    maskRules: { X: /[02-9]/ },
    maskInvalidMessage: 'The phone must have a correct USA phone format',
};
