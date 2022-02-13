import { Container, Header } from "../../../shared/styles";
import ReactIcon from '../../../../assets/icons/react.svg';
import HtmlIcon from '../../../../assets/icons/html.svg';
import JsIcon from '../../../../assets/icons/js.svg';
import CssIcon from '../../../../assets/icons/css.svg';
import SqlIcon from '../../../../assets/icons/database.svg';
import RubyIcon from '../../../../assets/icons/rails.svg';
import AppsScriptIcon from '../../../../assets/icons/appsscript.svg';
import JiraIcon from '../../../../assets/icons/jira.svg';
import * as Style from './styles';

const Skills = () => {
  return(
    <Container id="skills">
      <Header>Skills</Header>
      <Style.SkillsWrapper>
        <Style.SkillsRow>
          <Style.Skill>
            <div><img src={ReactIcon} alt='icon' /></div>
            <p>React</p>
          </Style.Skill>
          <Style.Skill>
            <div><img src={HtmlIcon} alt='icon' /></div>
            <p>HTML</p>
          </Style.Skill>
          <Style.Skill>
            <div><img src={JsIcon} alt='icon' /></div>
            <p>Javascript</p>
          </Style.Skill>
          <Style.Skill>
            <div><img src={CssIcon} alt='icon' /></div>
            <p>CSS</p>
          </Style.Skill>
        </Style.SkillsRow>
        <Style.SkillsRow>
          <Style.Skill>
            <div><img src={JiraIcon} alt='icon' /></div>
            <p>Jira</p>
          </Style.Skill>
          <Style.Skill>
            <div><img src={RubyIcon} alt='icon' /></div>
            <p>Ruby on Rails</p>
          </Style.Skill>
          <Style.Skill>
            <div><img src={SqlIcon} alt='icon' /></div>
            <p>SQL</p>
          </Style.Skill>
          <Style.Skill>
            <div><img src={AppsScriptIcon} alt='icon' /></div>
            <p>Google Apps Script</p>
          </Style.Skill>
        </Style.SkillsRow>
      </Style.SkillsWrapper>
    </Container>
  )
};

export default Skills;