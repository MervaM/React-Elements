const el = React.createElement;

class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if(this.state.liked) {
            return 'This is paragraph.';
        }

        return (
            <p onClick={() => this.setState({liked: true})}
            className="react__paragraph">What is this?</p>
        )
    }
}

const domContainer = document.querySelector('#react__block2');
const root = ReactDOM.createRoot(domContainer);

root.render(el(Element));