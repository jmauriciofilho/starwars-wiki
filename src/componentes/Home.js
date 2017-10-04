import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-3">
                            Saga Star Wars
                        </h1>
                        <p className="lead">
                            Star Wars é o título de uma franquia do tipo ópera espacial 
                            estadunidense criada pelo cineasta George Lucas. 
                            Que conta com uma série de oito filmes de fantasia científica e 
                            um spin-off. 
                        </p>
                    </div>
                    <div className="col">
                        <figure className="figure">
                            <img src={require("../media/star-wars.jpg")} className="figure-img img-fluid rounded" alt="imagem da logo de star wars" />
                        </figure>
                    </div>
                </div>
                
            </div>
        </div> 
    );
  }
}

export default Home;