import type {
  RequiredRule, EmailRule, PatternRule, RangeRule,
} from 'devextreme-react/common';
import { positions } from './data';

export const validationRules = {
  firstName: [
    { type: 'required', message: 'First Name is required' } as RequiredRule,
  ],
  lastName: [
    { type: 'required', message: 'Last Name is required' } as RequiredRule,
  ],
  birthDate: [
    { type: 'required', message: 'Birth Date is required' } as RequiredRule,
    {
      type: 'range', min: '1900/01/01', max: new Date().toISOString().split('T')[0], message: 'Birth Date is out of range', invalidDateMessage: 'Invalid date',
    } as RangeRule,
  ],
  phone: [
    { type: 'required', message: 'Phone is required' } as RequiredRule,
    { type: 'pattern', pattern: /^\d{11}$/, message: 'Phone must be 11 digits' } as PatternRule,
  ],
  email: [
    { type: 'required', message: 'Email is required' } as RequiredRule,
    { type: 'email', message: 'Email is invalid' } as EmailRule,
  ],
};

export const positionEditorOptions = {
  items: positions,
  searchEnabled: true,
};

export const notesEditorOptions = {
  height: 90,
};

export const phoneEditorOptions = {
  mask: '+0 (000) 000-0000',
};
