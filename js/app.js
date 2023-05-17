class Resume extends React.Component {

    state = {
        resume: []
    };

    componentDidMount() {
        this.loadResume();
    }

    loadResume = () => {
        fetch("/demo-data.json")
            .then(response => response.json())
            .then(json => this.setState({ resume: json }));
    }

    render() {
        return (
            <SheetList sheets={this.state.resume} />
        );
    }
}

class SheetList extends React.Component {
    render() {
        return this.props.sheets.map(
            sheet => <Sheet key={sheet.page} sideContent={sheet.sideContent} />
        );
    }
}

class Sheet extends React.Component {
    render() {
        return (
            <section className="sheet h-297mm">
              <div className="flex h-full font-['Roboto'] text-gray-700">
	              <div className="flex-auto w-4 bg-primary-dark text-white">
	                <div className="mt-14 ml-8">
                    <SideContentList sideContent={this.props.sideContent} />
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

class SideContentList extends React.Component {
    render() {
        return this.props.sideContent.map(content => {
            if(content.templateId === 'nameTemplate') {
                return (<NameSection {...content.data} />);
            }
            return (<div></div>);
        });
    }
}

class NameSection extends React.Component {
    render() {
        return (
            <div>
              <div className="font-bold text-3xl">{this.props.name}</div>
              <div className="text-sm tracking-wider">{this.props.title}</div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(<Resume />);
