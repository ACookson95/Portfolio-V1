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
      sidebarOpen: !this.state.sidebarOpen
     });
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
                <HashLink to="/portfolio/#home">
                  <HouseFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Home</Style.Label>
                </HashLink>
                <HashLink to="/portfolio/#about">
                  <FilePersonFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>About</Style.Label>
                </HashLink>
                <HashLink to="/portfolio/#skills">
                  <FileCodeFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Skills</Style.Label>
                </HashLink>
                <HashLink to="/portfolio/#projects">
                  <FolderFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Projects</Style.Label>
                </HashLink>
                <HashLink to="/portfolio/#hobbies">
                  <ImageAlt />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Hobbies</Style.Label>
                </HashLink>
                <Link to="/portfolio/resume">
                  <FileTextFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>My Resume</Style.Label>
                </Link>
                <Link to="/portfolio/contact">
                  <EnvelopeFill />
                  <Style.Label sidebarOpen={this.state.sidebarOpen}>Contact Me</Style.Label>
                </Link>
                { !this.state.sidebarOpen ? 
                <>
                  <Style.CollapsedSocial sidebarOpen={this.state.sidebarOpen} onClick={() => this.toggleSidebar()}>
                    <At/>
                  </Style.CollapsedSocial>
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
