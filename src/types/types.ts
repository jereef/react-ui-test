//==============================================================================
// Cards
//==============================================================================

export interface ICard {
	title?: string;
	backgroundColor?: string;
	fontColor?: string;
	children: React.ReactNode;
	isCredit?: boolean;
	titleSize?: 'small' | 'large';
	dropdown?: ICardDropdownItem[];
}

export interface ICardDropdownItem {
	text: string;
	onClick: () => void;
}
//==============================================================================
// Tables
//==============================================================================

export interface ITable {
	children: React.ReactNode;
}

export interface IGeneralTable {
	data: any[];
	headers: string[];
}

export interface ITableBody {
	data: any;
}

export interface ITableHeaders {
	headers: any[];
}

export interface IButtonsTable {
	text: string;
	onClick: () => void;
}

export interface IPaymentsTable {
	data: any[];
	headers: string[];
	onShowDetails: (payment: any) => void;
}

//==============================================================================
// Modal
//==============================================================================

export interface IModal {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	confirmButton?: IModalButton;
	cancelButton?: IModalButton;
}

export interface IModalButton {
	text: string;
	onClick: () => void;
}
