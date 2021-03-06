import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
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
		current: null,
		filtered: null,
	};

	const [state, dispatch] = useReducer(ContactReduser, initialState);

	const addContact = (contact) => {
		contact.id = uuid();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	const filterContact = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				setCurrent,
				clearCurrent,
				clearFilter,
				filterContact,
				addContact,
				deleteContact,
				updateContact,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
