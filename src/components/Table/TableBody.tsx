import { ITableBody } from '../../types/types';

export const TableBody: React.FC<ITableBody> = ({ data }) => {
	return (
		<tbody>
			{data.map((row: any, i) => (
				<tr key={i}>
					{Object.keys(row).map((key: string, i) =>
						key === 'id' ? null : <td key={i}>{row[key]}</td>,
					)}
				</tr>
			))}
		</tbody>
	);
};
