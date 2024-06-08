import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  const data = await getAllContacts();
  data.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(data));
};

await addOneContact();
