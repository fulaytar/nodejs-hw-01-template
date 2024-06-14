import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  const data = await getAllContacts();
  const newData = data.filter((contact) => Math.random() > 0.5 && contact);
  await fs.writeFile(PATH_DB, JSON.stringify(newData));
};

await thanos();
