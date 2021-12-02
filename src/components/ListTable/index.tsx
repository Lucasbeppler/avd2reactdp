import { Table } from "./styles";

interface IDisciplina {
	id: string,
	disciplina: string,
	cargahoraria: string,
	professor: string,
}

interface Props {
	disciplinas: IDisciplina[],
	handleDelete: (id: string) => void
}


export function ListTable({ disciplinas, handleDelete, }: Props) {
	return (
		<Table>
			<thread>
				<tr>
					<th>disciplina</th>
					<th>cargahoraria</th>
					<th>professor</th>
					<th></th>
				</tr>
			</thread>

			<tbody>
				{disciplinas.map(d => (
					<tr key={d.id} >
						<td> {d.disciplina} </td>
						<td> {d.cargahoraria} </td>
						<td> {d.professor} </td>
						<td>
							<button onClick={() => { handleDelete(d.id) }} className="delete">
								<svg viewBox="0 0 24 24"  >
									<path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
								</svg>
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}