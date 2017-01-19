import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { fetchTemplates } from '../../actions/template/fetchTemplates';
import { fetchSentence } from '../../actions/sentence';
import { saveSentenceTranslation } from '../../actions/translation/saveSentenceTranslation';
import { fetchSentenceTranslation } from '../../actions/translation/fetchSentenceTranslation';
import TranslationAdd from '../../components/translation/TranslationAdd';

class Lesson extends React.Component {

  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.addTranslationCallback = this.addTranslationCallback.bind(this);
    this.onTemplate = this.onTemplate.bind(this);
  }

  componentWillMount() {
    const { languageId, lessonId } = this.props.params;
    this.props.fetchTemplates(lessonId);
    // const { languageId, lessonId } = this.props.params;
    // const i = this.props.language.courses.findIndex((item) => item.id == id);
    // this.course = this.props.language.courses[i];
    //this.props.saveSentenceTranslation(1, [], 'translations');
  }

  onStart() {
    const { lessonId } = this.props.params;
    console.log('start learning', this.props.templates.list[0]);
    this.props.fetchSentence(this.props.templates.list[0]).then(() => {
      this.props.fetchSentenceTranslation(this.props.templates.list[0].id, this.props.sentence.words);
    });
  }

  onTemplate() {
    console.log('template handle');
    const { lessonId } = this.props.params;
    this.props.router.push("/template/" + lessonId);
  }

  addTranslationCallback(templateId, words, translation) {
    console.log('addTranslationCallback()', templateId);
    //this.props.template.id, this.props.words, ''
    this.props.saveSentenceTranslation(templateId, words, translation);
  }

  render() {
    const list = this.props.templates.list || [];
    const items = list.map(function(item) {
      return (
        <div key={item.id}>
          {item.name}
        </div>
      );
    });
    const words = this.props.sentence.words || [];
    //console.log(sentence.words.map((item) => {item.word.name}));
    //{item.word.name}
    const sentence = words.map(function(item) {
      let transls = item.word.translations.map((t) => <p key={t.id}>{t.name}</p>);
      return (
        <div class="gl-tcell" key={item.word.id}>
          <p class="gl-mainsnt">{item.choosen.word ? item.choosen.word : item.word.name}</p>
          {transls}
        </div>
      );
    });
    const { translation } = this.props.sentenceTranslation;
    const transl = translation.translation || '';
    return (
      <div class="lesson">
        {items}
        <button class="btn btn-primary" onClick={this.onTemplate}>Template</button>
        <button class="btn btn-primary" onClick={this.onStart}>Start</button>
        {sentence}

        <div class="sentence-translation">
          {transl}
        </div>
        <TranslationAdd
            template={this.props.templates.list[0]}
            words={this.props.sentence.words}
            addTranslationCallback={this.addTranslationCallback} />

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  /*const languages = $.map(state.languages, (value, index) => {
    return [value];
  });
  const language = languages.filter((item) => {
    return item.id === state.language.id;
  })[0];*/
	return ({
    language: state.language,
		templates: state.templates,
    sentence: state.sentence,
    sentenceTranslation: state.sentenceTranslation,
    router: ownProps.router
	});
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSentence: bindActionCreators(fetchSentence, dispatch),
    fetchTemplates: bindActionCreators(fetchTemplates, dispatch),
    saveSentenceTranslation: bindActionCreators(saveSentenceTranslation, dispatch),
    fetchSentenceTranslation: bindActionCreators(fetchSentenceTranslation, dispatch)
  }
}
/*function mapDispatchToProps(dispatch) {
	return bindActionCreators({structuresActions, sentenceActions}, dispatch);
}*/
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lesson));
