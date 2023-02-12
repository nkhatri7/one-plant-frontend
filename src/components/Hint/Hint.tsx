import './Hint.scss';

type HintProps = {
	isPortrait: boolean,
};

const Hint = ({ isPortrait }: HintProps) => {
	return (
		<p className={`hint-text hint-text--${isPortrait ? 'portrait' : 'landscape'}`}>
			<span className="hint-text--icon">?</span>
			The <span className="hint-text--highlighted">Plant is renewed</span>&nbsp;with each mint. The lower the
			timer, the <span className="hint-text--highlighted">rarer the NFT</span>. When the Plant&nbsp;
			<span className="hint-text--highlighted">dies</span>, so does the game.
		</p>
	);
};

export default Hint;