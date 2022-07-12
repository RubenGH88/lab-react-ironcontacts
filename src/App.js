import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const firstFiveActors = contacts.splice(0, 5)
function App() {
  const addRandomContact = () => {
	
		let randomContact = contacts[Math.floor(Math.random() * (contacts.length-5))+5 ];
		console.log(randomContact)
		let indexInContacts = contacts.indexOf(randomContact);
		

		if (randomContact) {
			copyArray.unshift(randomContact);
		}
	
		if (indexInContacts > -1) {
			contacts.splice(indexInContacts, 1);
		}

		setActors(copyArray);
	};


	const sortByPopularity = () => {
		copyArray.sort(function(a, b) {
			return b.popularity - a.popularity;
		});
		setActors(copyArray);
	};


	const sortByName = () => {
		copyArray.sort((a, b) => a.name.localeCompare(b.name));
		setActors(copyArray);
	};


	const deleteActor = (actorId) => {
	
		const remainActors = actors.filter((actor) => {
			return actor.id !== actorId;
		});
		setActors(remainActors);
	};




  const [ actors, setActors ] = useState(firstFiveActors);
	let copyArray = [ ...actors ];
 return(
    <div className="App">
      <div >
				<h1>Iron Celebrity Contacts</h1>
				<div>
					<Button variant="outline-success" onClick={addRandomContact} >
						Add contact
					</Button>
					<Button variant="outline-dark" onClick={sortByPopularity} >
						Sort by popularity
					</Button>
					<Button variant="outline-dark" onClick={sortByName} >
						Sort by name
					</Button>
				</div>
				<br></br>
				<br></br>
 <Table responsive>
					<thead>
						<tr>
							<th> Picture </th>
							<th> Name </th>
							<th> Popularity </th>
							<th> Won Oscar</th>
							<th> Won Emmy</th>
							<th> Don't like this one?</th>
						</tr>
					</thead>
					<tbody>
						{actors.map((actor) => {
							if(actor.name==="Ian McKellen"){actor.name="Sir Ian McKellen"}
							return (
								<tr key={actor.id}>
									<td>
										<img src={actor.pictureUrl} width="100px" height="120px" alt="Actor" />
									</td>
								
									<td> {actor.name} </td>
								
									<td> {Number(actor.popularity).toFixed(2)}</td>
									<td>{actor.wonOscar ? '🏆' : ''}</td>
									<td>{actor.wonEmmy ? '🏆' : ''}</td>
                  <td>
										<Button
											variant="outline-danger"
											onClick={() => {
												deleteActor(actor.id);
											}}
											id={actor.id}
										>
											Delete
										</Button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
        </div>
    </div>
  
  )
}

export default App;
