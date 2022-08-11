import SearchInput from "./component/SearchInput";
import Suggestion from "./component/Suggestion";
import SelectedLanguage from "./component/SelectedLanguage";

import { fetchDemoData } from "./api/api";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
    });
    selectedLanguage.setState(this.state.selectedLanguages);
  };

  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({ fetchedLanguages: [] });
      } else {
        const languages = await fetchDemoData(keyword);
        this.setState({
          fetchedLanguages: languages,
        });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      items: [],
    },
    onSelect: (languague) => {
      alert(languague);

      const nextSelectedLanguages = [...this.state.selectedLanguages];
      const index = nextSelectedLanguages.findIndex(
        (selectedLanguage) => selectedLanguage == languague
      );

      if (index > -1) {
        nextSelectedLanguages.splice(index, 1);
      }

      nextSelectedLanguages.push(languague);

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages,
      });
    },
  });

  const selectedLanguage = new SelectedLanguage({
    $target,
    initialState: [],
  });
}
