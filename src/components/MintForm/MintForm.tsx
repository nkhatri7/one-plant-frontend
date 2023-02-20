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

	const [selectedOption, setSelectedOption] = useState(baseValueEl.current);
	const [customValue, setCustomValue] = useState(0);

	/**
	 * Handles input validation and requests the mint function on the smart
	 * contract.
	 * @param e A form submission event.
	 */
	const handleMintRequest = (e: FormEvent) => {
		e.preventDefault();
		closeModal(e);
	};

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
				setSelectedOption(option.current);
			} else {
				option.current?.classList.remove('mint-option--selected');
			}
		});
	};

	/**
	 * Updates the value of the custom mint value.
	 * @param e Input change event.
	 */
	const handleCustomValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		// Check if input is empty
		if (e.target.value.length === 0) {
			setCustomValue(0);
		} else {
			setCustomValue(e.target.valueAsNumber);
		}
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
						value={customValue}
						onChange={handleCustomValueChange}
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