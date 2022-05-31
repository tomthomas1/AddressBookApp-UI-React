import config from '../config/config';
import AxiosService from './axios-service';

const URL = config.baseUrl;

export default class AddressBookService {

  addContact(contactData) {
    return AxiosService.postService(`${URL}/create`, contactData);
  }
  getAllContacts() {
    return AxiosService.getService(`${URL}/list`);
  }
  getContactById(id) {
    return AxiosService.getService(`${URL}/list/${id}`);
  }
  updateContact(contactData) {
    return AxiosService.putService(`${URL}/update/${contactData.id}`, contactData);
  }
  deleteContact(id) {
    return AxiosService.deleteService(`${URL}/delete/${id}`);
  }
}