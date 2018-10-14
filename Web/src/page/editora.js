import React, { PureComponent } from 'react';
import EditoraService from '../services/editora.service';


class Editora extends PureComponent {

    constructor() {
        super();
        this.state = {
            editoras: []
        };
    };

    componentDidMount() {
        let service = new EditoraService();
        service.getEditoras(editoras => this.setState({ ...this.state, editoras: editoras }));
    }

    render() {
        return (
            <div>
                <h1>Listagem das editoras</h1>
                <div>
                    {this.state.editoras.map(editora =>
                        <p key={editora.id}>{editora.Name}</p>
                    )}
                </div>
            </div>
        );
    };
}

export default Editora;