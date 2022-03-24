import { Header} from '../../shared/styles'
import * as Style from './styles';

const Resume = () => {
  return(
    <Style.Wrap>
      <Header>My Resume</Header>
      <Style.Resume 
        src="https://docs.google.com/document/d/e/2PACX-1vQhM_QxKf175emAGXznPrAkMWZlsge7Qjwbgk8CIYS16NRFAC4YPaEyphlUYSJBP9Ef5jWUd8FYKac7/pub?embedded=true"
      />
    </Style.Wrap>
  )
};

export default Resume;