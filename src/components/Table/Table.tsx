import React from 'react';
import { ITable } from '../../types/types';
import * as S from './Table.styles';

export const Table: React.FC<ITable> = ({ children }) => {
	return <S.Table className="table table-striped">{children}</S.Table>;
};
