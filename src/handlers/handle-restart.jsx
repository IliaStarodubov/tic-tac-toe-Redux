import { store } from '../store';

export const handleRestart = () => {
	store.dispatch({ type: 'RESTART_GAME' });
};
