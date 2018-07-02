import React,{Component} from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
constructor(props) {
    super(props);

    this.state = {
        items: []
    };

this.addItems = this.addItems.bind(this);
}

addItems(e){
if(this._inputElement.value !== '') {
    let newItem = {
      text: this._inputElement.value,
        key: Date.now()
    };
        this.setState((prevState) =>{
           return {
             items: prevState.items.concat(newItem)
           };
        });
}
    this._inputElement.value = '';
console.log(this.state.items);
    e.preventDefault();

}

    render() {
        return (
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItems}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder='enter task'/>
                        <button type='submit'>add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}

export default TodoList;