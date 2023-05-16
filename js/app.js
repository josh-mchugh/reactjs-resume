class Resume extends React.Component {

    state = {
        resume: {}
    }

    componentDidMount() {
        this.loadResume();
    }

    loadResume = () => {
        fetch("/demo-data.json")
            .then(response => response.json())
            .then(json => this.setState({ resume: json }));
    }

    render() {
        return (<Sheet resume={this.state.resume} />);
    }
}

class Sheet extends React.Component {
    render() {
        console.log(this.props);
        return (
            <section className="sheet h-297mm">
              <div className="flex h-full font-['Roboto'] text-gray-700">
	              <div className="flex-auto w-4 bg-primary-dark text-white">
	                <div className="mt-14 ml-8">
	                  Side Conent
	                </div>
	              </div>
	              <div className="flex-auto w-64 my-16 px-7">
                  Main Content
                </div>
	            </div>
            </section>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(<Resume />);
