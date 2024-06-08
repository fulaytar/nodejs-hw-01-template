import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  const data = await getAllContacts();
  data.length = 0;
  console.log(data);
  await fs.writeFile(PATH_DB, JSON.stringify(data));
};

await removeAllContacts();
