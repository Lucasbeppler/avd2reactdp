import { ListTable } from "../ListTable";
import { Container, Form } from "./styles";
import axios from 'axios';
import { useEffect, useState } from "react";

interface IDisciplina {
	id: string,
	disciplina: string,
	cargahoraria: string,
	professor: string,
}

export function Dashboard() {
	const [disciplinas, setDisciplinas] = useState<IDisciplina[]>([]);

	const [disciplina, setDisciplina] = useState("");
	const [cargahoraria, setCargahoraria] = useState("");
	const [professor, setProfessor] = useState("");

	function listDisciplinas() {
		axios({
			method: 'get',
			url: 'http://localhost:3333/faculdade',
		})
			.then(response => {
				setDisciplinas(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}
	
	useEffect(() => {
		listDisciplinas();
	}, []);


	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		axios({
			method: 'post',
			url: 'http://localhost:3333/faculdade',
			data: {
				disciplina,
				cargahoraria,
				professor
			}
		})
			.then(response => {
				console.log(response.data);

				setDisciplinas([...disciplinas, response.data]);
				setDisciplina("");
				setCargahoraria("");
				setProfessor("");
			})
			.catch(error => {
				console.log(error);
			})
	}

	function handeDelete(id: string) {
		axios({
			method: 'delete',
			url: 'http://localhost:3333/faculdade/' + id
		})
			.then(response => {
				const newDisciplinas = disciplinas.filter(e => e.id !== id);

				setDisciplinas(newDisciplinas);
			})
			.catch(error => {
				console.log(error);
			});
	}




	return (
		<Container>

			<Form onSubmit={handleSubmit} >
				<h2>Faça o Cadastro das suas disciplinas</h2>

				<input placeholder="disciplina" value={disciplina} onChange={(event) => { setDisciplina(event.target.value) }} />
				<input placeholder="cargahoraria" value={cargahoraria} onChange={(event) => { setCargahoraria(event.target.value) }} />
				<input placeholder="professor" value={professor} onChange={(event) => { setProfessor(event.target.value) }} />

				<input type="submit" value="Cadastrar" ></input>
			</Form>

			<ListTable 
				disciplinas={disciplinas}
				handleDelete={handeDelete}

			/>

		</Container>
	);
}
