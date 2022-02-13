import { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  HouseFill,
  FilePersonFill,
  FileCodeFill,
  FolderFill,
  FileTextFill,
  EnvelopeFill,
  ImageAlt,
  At
} from "react-bootstrap-icons";
import * as Style from "./styles";
import SocialLinks from './SocialLinks';
import { HashLink } from 'react-router-hash-link';



class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      width: 0,
      mobile: false,
      socialPopout: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let mobile = window.innerWidth < 768 ? true : false;
    this.setState({
      width: window.innerWidth,
      sidebarOpen: !this.state.sidebarOpen ? (mobile === this.state.mobile ? false : true) : (mobile ? false : true),
      mobile: mobile,
    });
  }

  toggleSidebar() {
    this.setState({ 
      sidebarOpen: !this.state.sidebarOpen,
      socialPopout: false
     });
  }

  toggleSocialPopout() {
    this.setState({ socialPopout: !this.state.socialPopout });
  }

  render() {
    return (
      <>
        <Style.Container>
          <Style.SidebarWrapper sidebarOpen={this.state.sidebarOpen}>
          <Style.MenuButton
            onClick={() => this.toggleSidebar()}
            cursor="pointer"
            mobile={this.state.mobile}
          >
        { 
          this.state.sidebarOpen ? 
          <ChevronLeft /> 
          : 
          <ChevronRight />
        }    
          </Style.MenuButton>
            <Style.LinkWrapper flexGrow={1}>
                <HashLink to="/#home">
                  <HouseFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Home</Style.Label>
                </HashLink>
                <HashLink to="/#about">
                  <FilePersonFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>About</Style.Label>
                </HashLink>
                <HashLink to="/#skills">
                  <FileCodeFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Skills</Style.Label>
                </HashLink>
                <HashLink to="/#projects">
                  <FolderFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Projects</Style.Label>
                </HashLink>
                <HashLink to="/#hobbies">
                  <ImageAlt />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Hobbies</Style.Label>
                </HashLink>
                <Link to="/resume">
                  <FileTextFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>My Resume</Style.Label>
                </Link>
                <Link to="/contact">
                  <EnvelopeFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Contact Me</Style.Label>
                </Link>
                { !this.state.sidebarOpen ? 
                <>
                  <Style.CollapsedSocial sidebarOpen={this.state.sidebarOpen} onClick={() => this.toggleSocialPopout()}>
                    <At/>
                  </Style.CollapsedSocial>
                  <Style.Popout show={this.state.socialPopout}>
                    <SocialLinks />
                  </Style.Popout>
                </>
                :
                <>
                </>
                }
            </Style.LinkWrapper>
          { this.state.sidebarOpen ? 
            <SocialLinks />
            :
            <>
            </>
          }
          </Style.SidebarWrapper>
        </Style.Container>
      </>
    );
  }
}

export default Sidebar;
