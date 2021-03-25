class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Вам понравился: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Выберите понравившийся фрукт:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Грейпфрут">Грейпфрут</option>
                        <option value="Лайм">Лайм</option>
                        <option value="Апельсин">Апельсин</option>
                        <option value="Манго">Манго</option>
                    </select>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root2')
);