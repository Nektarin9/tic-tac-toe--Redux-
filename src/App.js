import { GameLayout } from './components/GameLayout';
import { useState } from 'react';
import { store } from './store';
export const App = () => {
	const [render, setRender] = useState(true);
	store.subscribe(() => setRender(!render));

	return <GameLayout />;
};
