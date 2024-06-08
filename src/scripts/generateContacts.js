import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  const data = await getAllContacts();
  for (let i = 0; i < number; i++) {
    data.push(createFakeContact());
  }
  await fs.writeFile(PATH_DB, JSON.stringify(data));
};

await generateContacts(5);
