import React from 'react';
import MainContentList from './MainContentList';
import SideContentList from './SideContentList';

class App extends React.Component {

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

const SheetList = (props) => {
    return props.sheets.map(
        sheet => <Sheet key={sheet.page} {...sheet} />
    );
};

const Sheet = (props) => {
    return (
        <section className="sheet h-296mm">
          <div className="flex h-full font-['Roboto'] text-gray-700">
            <div className="flex-auto w-4 bg-primary-dark text-white">
              <div className="mt-14 ml-8">
                <SideContentList sideContent={props.sideContent} />
              </div>
            </div>
            <div className="flex-auto w-64 my-16 px-7">
              <MainContentList content={props.content} />
            </div>
          </div>
        </section>
    );
};

export default App;
