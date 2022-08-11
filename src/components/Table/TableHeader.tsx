import { ITableHeaders } from '../../types/types';

export const TableHeader: React.FC<ITableHeaders> = ({ headers }) => {
	return (
		<thead>
			<tr>
				{headers.map((header: string) => (
					<th key={header}>{header}</th>
				))}
			</tr>
		</thead>
	);
};
