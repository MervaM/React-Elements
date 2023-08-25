const e = React.createElement;

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if(this.state.liked) {
            return 'This is my first React code.';
        }

        return e (
            'span',
            {onClick: () => this.setState({liked: true})},
            'Click here!'
        )
    }
}

const domContainer = document.querySelector('#react__block');
const root = ReactDOM.createRoot(domContainer);

root.render(e(Button));