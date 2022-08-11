import { ITableHeaders } from '../../types/types';

const TableHeader: React.FC<ITableHeaders> = ({ headers }) => {
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
export default TableHeader;
