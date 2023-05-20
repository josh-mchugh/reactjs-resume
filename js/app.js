
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
            sheet => <Sheet key={sheet.page} {...sheet} />
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
                  <MainContentList content={this.props.content} />
                </div>
	            </div>
            </section>
        );
    }
}

class SideContentList extends React.Component {
    render() {
        return this.props.sideContent.map((content, index) => {
            if(content.templateId === 'nameTemplate') {
                return <NameSection key={index} {...content.data} />;
            }
            if(content.templateId === 'headerTemplate') {
                return <HeaderSection key={index} {...content.data} />
            }
            if(content.templateId === 'objectiveTemplate') {
                return <ObjectiveSection key={index} {...content.data} />
            }
            if(content.templateId === 'contactTemplate') {
                return <ContactSection key={index} {...content.data} />
            }
            if(content.templateId === 'socialTemplate') {
                return <SocialSection key={index} data={content.data} />
            }
            return <div key={index}></div>;
        });
    }
}

class MainContentList extends React.Component {
    render() {
        return this.props.content.map((content, index) => {
            if(content.templateId === 'headerTemplate') {
                return <HeaderSection key={index} {...content.data} />;
            }
            return <div key={index}></div>;
        });
    }
}

class HeaderSection extends React.Component {
    render() {
        return (
            <div>
                <div className={this.props.margins}>
                <div className="flex">
	                <div className="flex-auto font-bold whitespace-nowrap">{this.props.title}</div>
	                <div className="flex-auto w-full ml-2">
	                  <div className="flex flex-col">
	                    <div className={`h-0 mt-3 border-b border-${this.props.color}`}></div>
	                  </div>
	                </div>
                </div>
              </div>
            </div>
        );
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

class ObjectiveSection extends React.Component {
    render() {
        return (
            <div>
              <div className="flex">
                <div className="mt-6 ml-4 pr-4 text-xs">{this.props.objective}</div>
              </div>
            </div>
        );
    }
}

class ContactSection extends React.Component {
    render() {
        return (
            <div>
              <div className="flex mt-4 ml-4">
                <ul className="list-none text-sm">
	                <li>
	                  <i className="fa-solid fa-phone text-accent"></i>
	                  <span className="ml-2">{this.props.phone}</span>
	                </li>
	                <li className="mt-2">
	                  <i className="fa-solid fa-envelope text-accent"></i>
	                  <a className="ml-2" href={`mailto:${this.props.email}`}>{this.props.email}</a>
	                </li>
	                <li className="mt-2">
	                  <i className="fa-solid fa-location-dot text-accent"></i>
	                  <span className="ml-2">{this.props.location}</span>
	                </li>
                </ul>
              </div>
            </div>
        );
    }
}

class SocialSection extends React.Component {
    render() {
        return (
            <div>
              <div className="flex mt-1 ml-4">
                <SocialList {...this.props} />
              </div>
            </div>
        );
    }
}

class SocialList extends React.Component {
    render() {
        const socialItems = this.props.data.map((item, index) => <SocialListItem key={index} {...item} />);
        return (
            <ul className="list-none text-sm">
              {socialItems}
            </ul>
        );
    }
}

class SocialListItem extends React.Component {
    render() {
        return (
            <li className="mt-3">
	            <div>
	              <i className={`${this.props.icon} text-accent`}></i>
	              <span className="ml-2">{this.props.name}:</span>
	            </div>
	            <div>
	              <a className="text-xs" href={this.props.url}>{this.props.url}</a>
	            </div>
	          </li>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(<Resume />);
