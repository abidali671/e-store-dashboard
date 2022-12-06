import React from 'react';
import validationSchema from './login.schema';
import * as yup from 'yup';

export type ComponentT = React.FC;

export type FormValues = yup.Asserts<typeof validationSchema>;
