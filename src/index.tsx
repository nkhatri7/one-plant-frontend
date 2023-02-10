import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig, createClient } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import App from './App';
import './index.scss';

// Create the client using ConnectKit's `getDefaultClient`
const ALCHEMY_ID = import.meta.env.VITE_ALCHEMY_KEY;
const client = createClient(
    getDefaultClient({
        appName: 'One Plant',
        alchemyId: ALCHEMY_ID,
        chains: [mainnet, goerli],
    })
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<WagmiConfig client={client}>
            <ConnectKitProvider>
                <App />
            </ConnectKitProvider>
        </WagmiConfig>
	</React.StrictMode>
);
