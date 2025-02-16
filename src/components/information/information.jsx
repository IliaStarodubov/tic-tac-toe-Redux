import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';
import { useState } from 'react';
import { store } from '../../store';
import { useEffect } from 'react';

export const Information = () => {
	const [, forceUpdate] = useState(store.getState());
	const { status, currentPlayer } = store.getState();

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceUpdate(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};
