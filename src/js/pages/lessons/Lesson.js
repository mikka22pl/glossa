import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as structuresActions from '../../actions/structures';
import * as sentenceActions from '../../actions/sentence';

class Lesson extends React.Component {

  constructor(props) {
    super(props);
    const { languageId, lessonId } = this.props.params;
    this.props.fetchStructures(languageId, lessonId);
    this.onStart = this.onStart.bind(this);
  }

  componentWillMount() {
    // const { languageId, lessonId } = this.props.params;
    // const i = this.props.language.courses.findIndex((item) => item.id == id);
    // this.course = this.props.language.courses[i];
  }

  onStart() {
    const { lessonId } = this.props.params;
    console.log('start learning');
    this.props.fetchSentence(lessonId);
  }

  render() {

    const items = this.props.structures.list.map(function(item) {
      return (
        <div key={item.id}>
          {item.ordering} {item.group.name} {item.type}
        </div>
      );
    });
    const words = this.props.sentence.words || [];
    //console.log(sentence.words.map((item) => {item.word.name}));
    const sentence = words.map(function(item) {
      return (
        <div key={item.id}>
          {item.ordering} {item.word.name} ({item.word.id})
        </div>
      );
    });
    return (
      <div class="lesson">
        {items}
        <button class="btn btn-primary" onClick={this.onStart}>Start</button>
        {sentence}
      </div>
    );
  }
}

function mapStateToProps(state) {
  /*const languages = $.map(state.languages, (value, index) => {
    return [value];
  });
  const language = languages.filter((item) => {
    return item.id === state.language.id;
  })[0];*/
	return ({
    language: state.language,
		structures: state.structures,
    sentence: state.sentence
	});
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSentence: (structureId) => {
      dispatch(sentenceActions.fetchSentence(structureId));
    },
    fetchStructures: (languageId, lessonId) => {
      dispatch(structuresActions.fetchStructures(languageId, lessonId));
    }
  }
}
/*function mapDispatchToProps(dispatch) {
	return bindActionCreators({structuresActions, sentenceActions}, dispatch);
}*/
export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
