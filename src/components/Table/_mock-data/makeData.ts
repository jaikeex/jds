import type { User } from './types';
import { uniqueNamesGenerator, adjectives, names, animals } from 'unique-names-generator';

const range = (len: number) => {
  const arr = [];
  for (let i = 1; i <= len; i++) {
    arr.push(i);
  }
  return arr;
};

const newUser = (id: number): User => {
  const statusChance = Math.random();
  const name = uniqueNamesGenerator({ dictionaries: [names] });
  const alias = uniqueNamesGenerator({ dictionaries: [adjectives, animals] });
  const email = `${alias}@jds.com`;

  return {
    id,
    name,
    alias,
    email,
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? 'active' : statusChance > 0.33 ? 'inactive' : 'banned'
  };
};

export const makeData = (length: number): User[] => {
  const makeDataLevel = () =>
    range(length).map((d) => ({
      ...newUser(d)
    }));

  return makeDataLevel();
};
