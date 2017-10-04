import axios from 'axios';
import React, { Component } from 'react';

class TabelaNaves extends Component {

    constructor(props){
        super(props);
        this.state = {planetas : []};
    }

    componentDidMount(){
        let self = this;
        axios.get("https://swapi.co/api/planets/")
            .then(function (response) {
                self.setState({planetas: response.data.results})
            }).catch (function (error) {
            console.log(error)
        });
    }


    render() {

        let planetas = this.state.planetas.map(function (planeta, index) {
            return(
                <tr>
                    <td>{planeta.name}</td>
                    <td>{planeta.diameter}</td>
                    <td>{planeta.gravity}</td>
                    <td>{planeta.population}</td>
                    <td>{planeta.climate}</td>
                </tr>
            )

        });

        return (
            <div  className="p-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Planetas:</h3>
                    </div>
                    <div>
                        <blockquote className="blockquote mb-0">
                            <div>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Diametro</th>
                                        <th>Gravidade</th>
                                        <th>População</th>
                                        <th>Clima</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {planetas}
                                    </tbody>
                                </table>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabelaNaves;