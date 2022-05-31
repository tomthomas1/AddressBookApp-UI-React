import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import addIcon from '../../assets/icons/add-24px (1).svg';
import Display from '../display/display';
import AddressBookService from '../../services/address-book-service';
import './home.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactArray: []
    };
    this.addressBookService = new AddressBookService();    
  }
  componentDidMount() {
    this.getContactList();

  }
  getContactList = () => {
    this.addressBookService.getAllContacts()
    .then(responseDTO => {
      let responseText = responseDTO.data;
      this.setState({contactArray: responseText.data});
      console.log(this.state.contactArray)
    }).catch(errror => {
      alert("Error while fetching Contact List\nError : " + JSON.stringify(errror));
    });
    console.log(this.state.contactArray)
  }

  render () {
    return(
      <div className="body">
        <header className="header-content header">
            <div className="logo-content">
                <img src={logo} alt="" />
                <div>
                    <span className="address-text">ADDRESS</span><br />
                    <span className="address-text book-text">BOOK</span>
                </div>
            </div>
        </header>
        <div className="main-content">
            <div className="header-content">
                <div className="heading">
                    Person Details
                    <div className="person-count">
                        {this.state.contactArray.length}
                    </div>
                </div>
                <Link to="/addressbook-form" className="add-button">
                    <img src={addIcon} alt="" />Add Person</Link>
            </div>
            <div className="table-main">
              <Display contactArray = {this.state.contactArray} />
            </div>
        </div>
      </div>
    );
  }
}

export default HomePage;