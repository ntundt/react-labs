function Welcome(props) {
    return <h1>Привет, {props.name}!</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Сара" />
            <Welcome name="Халиф" />
            <Welcome name="Эдуард" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);