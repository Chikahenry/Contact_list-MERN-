import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReduser from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'chika ehr',
				phone: '3456709876',
				email: 'chika@me.co',
				type: 'professional',
			},
			{
				id: 2,
				name: 'Augustus',
				phone: '2345698098',
				email: 'augustys@me.co',
				type: 'personal',
			},
			{
				id: 3,
				name: 'hassan Hassan',
				phone: '123456098',
				email: 'hassan@me.co',
				type: 'professional',
			},
		],
	};

	const [state, dispatch] = useReducer(ContactReduser, initialState);

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
