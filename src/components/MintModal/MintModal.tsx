import CloseButton from '../CloseButton/CloseButton';
import MintForm from '../MintForm/MintForm';
import ScrollBg from '../../assets/scroll.png';
import './MintModal.scss';

type MintModalProps = {
	closeModal: () => void,
};

const MintModal = ({ closeModal }: MintModalProps) => {
    return (
        <div className="modal-backdrop">
			<article className="modal mint-modal">
				<img src={ScrollBg} alt="Scroll" className="mint-modal-bg" />
				<CloseButton modal='mint' onClick={closeModal} />
				<div className="mint-modal-content">
					<p className="mint-modal-title">Message</p>
					<p className="modal-text">
						This NFT uses a pay-what-you-want model.&nbsp;
						<span className="modal-text--red">You don't need to pay anything to mint!</span>
						&nbsp;However, any Gardeners who choose to mint over 0.02 ETH will be granted a spot on a 
						special whitelist for future projects.
					</p>
					<p className="mint-modal-heading">Name your price</p>
					<MintForm closeModal={closeModal} />
				</div>
			</article>
		</div>
    );
};

export default MintModal;