import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig, createClient } from 'wagmi';
import { Chain, goerli, mainnet } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import App from './App';
import './index.scss';

// Create the client using ConnectKit's `getDefaultClient`
const ALCHEMY_ID = import.meta.env.VITE_ALCHEMY_KEY;
const ENV = import.meta.env.VITE_ENV;
let chains: Chain[];
// Dev environment will allow goerli ETH whilst prod will only allow mainnet
if (ENV === 'dev') {
    chains = [goerli, mainnet];
} else {
    chains = [mainnet];
}
const client = createClient(
    getDefaultClient({
        appName: 'One Plant',
        alchemyId: ALCHEMY_ID,
        chains: chains,
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
