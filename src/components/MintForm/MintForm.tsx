import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import MintButton from '../MintButton/MintButton';
import './MintForm.scss';

type MintFormProps = {
	closeModal: React.EventHandler<any>,
};

const MintForm = ({ closeModal }: MintFormProps) => {
	const baseValueEl = useRef<HTMLDivElement>(null);
	const whitelistValueEl = useRef<HTMLDivElement>(null);
	const customValueEl = useRef<HTMLDivElement>(null);
	const mintOptions = [baseValueEl, whitelistValueEl, customValueEl];

	const [selectedOption, setSelectedOption] = useState(baseValueEl);
	const [customPrice, setCustomPrice] = useState(0);

	/**
	 * Changes the style of the selected option and updates the selected option
	 * value within the application.
	 * @param e Click event.
	 */
	const handleMintOptionChange = (e: any) => {
		// Get wrapper element
		let selectedOption = e.target;
		while (!selectedOption.classList.contains('mint-option')) {
			selectedOption = e.target.parentNode;
		}
		// Show border for selected option
		mintOptions.forEach(option => {
			if (option.current === selectedOption) {
				option.current?.classList.add('mint-option--selected');
				// Set state for selected option
				setSelectedOption(option);
			} else {
				option.current?.classList.remove('mint-option--selected');
			}
		});
	};

	/**
	 * Updates the value of the custom mint price.
	 * @param e Input change event.
	 */
	const handleCustomPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		// Check if input is empty
		if (e.target.value.length === 0) {
			setCustomPrice(0);
		} else {
			setCustomPrice(e.target.valueAsNumber);
		}
	};

	/**
	 * Handles input validation and requests the mint function on the smart
	 * contract.
	 * @param e A form submission event.
	 */
	const handleMintRequest = (e: FormEvent) => {
		e.preventDefault();
		// Check if custom pricing option is selected and if the price is more
		// than the minimum for custom pricing
		if (selectedOption === customValueEl && !validateCustomPrice()) {
			return;
		}
		const price = getMintPrice();
		closeModal(e);
	};

	/**
	 * Gets the mint price based on the mint pricing option the user has
	 * selected.
	 * @returns The selected mint price.
	 */
	const getMintPrice = (): number => {
		if (selectedOption === baseValueEl) {
			return 0;
		} else if (selectedOption === whitelistValueEl) {
			return 0.02;
		} else {
			return customPrice;
		}
	};

	/**
	 * Checks whether the custom price is more than the minimum (0.0001).
	 * @returns `true` if the custom price is valid and `false` if it is not.
	 */
	const validateCustomPrice = (): boolean => {
		return customPrice < 0.001;
	};

	return (
		<form onSubmit={handleMintRequest} className="mint-form">
			<div className="mint-form-row">
				<div 
						className="mint-option mint-option--selected" 
						ref={whitelistValueEl} 
						onClick={handleMintOptionChange}
				>
					<p className="mint-value">0.02 ETH</p>
				</div>
				<div className="mint-option" ref={baseValueEl} onClick={handleMintOptionChange}>
					<p className="mint-value">0.00 ETH</p>
				</div>
			</div>
			<div className="mint-form-row">
				<div className="mint-option" ref={customValueEl} onClick={handleMintOptionChange}>
					<input 
						type="number" 
						name="custom-mint-value" 
						id="custom-mint-value" 
						className="mint-input" 
						value={customPrice}
						step={0.01}
						onChange={handleCustomPriceChange}
					/>
					<span className="mint-input-eth">ETH</span>
				</div>
			</div>
			<div className="mint-form-row">
				<MintButton isModal={true} />
			</div>
		</form>
	);
};

export default MintForm;