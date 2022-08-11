import { useState } from 'react';
import React from 'react';
import { ICard } from '../../types/types';
import * as S from './Card.styles';

const Card: React.FC<ICard> = ({
	title,
	children,
	isCredit,
	backgroundColor,
	fontColor,
	titleSize,
	dropdown,
}) => {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

	return (
		<S.CardContainer
			fontColor={fontColor}
			backgroundColor={backgroundColor}
			titleSize={titleSize}
		>
			<S.CardHeader>
				{title && <h3 className="card-title">{title}</h3>}
				{dropdown && (
					<>
						<S.CardDropdownButton
							onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
						>
							<i className="las la-pencil-alt"></i>
						</S.CardDropdownButton>
						{dropdownIsOpen && (
							<S.CardDropdown>
								{dropdown.map((item: any, i) => (
									<S.CardDropdownItem key={i}>
										<button onClick={() => item.onClick()}>{item.text}</button>
									</S.CardDropdownItem>
								))}
							</S.CardDropdown>
						)}
					</>
				)}
			</S.CardHeader>

			{children && <S.CardBody>{children}</S.CardBody>}
		</S.CardContainer>
	);
};

export default Card;
