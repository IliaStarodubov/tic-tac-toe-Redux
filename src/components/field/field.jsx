import { FieldLayout } from './field-layout';
import { useEffect, useState } from 'react';
import { store } from '../../store';
import { handleCellClick } from '../../handlers/handle-cell-click';

export const Field = () => {
	const [, forceUpdate] = useState(store.getState());
	const { field } = store.getState();

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceUpdate(store.getState());
		});

		return () => unsubscribe();
	}, []);

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
