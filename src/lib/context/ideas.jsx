import { createContext, useContext, useEffect, useState } from "react";
import { tablesDB } from "../appwrite";
import { ID, Query } from "appwrite";

export const IDEAS_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID; // Replace with your database ID
export const IDEAS_TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID; // Replace with your table ID

const IdeasContext = createContext();

export function useIdeas() {
  return useContext(IdeasContext);
}

export function IdeasProvider(props) {
  const [ideas, setIdeas] = useState([]);

  async function add(idea) {
    try {
      const response = await tablesDB.createRow({
        databaseId: IDEAS_DATABASE_ID,
        tableId: IDEAS_TABLE_ID,
        rowId: ID.unique(),
        data: idea
      });
      setIdeas((ideas) => [response, ...ideas].slice(0, 10));
    } catch (err) {
      console.log(err) // handle error or show user a message
    }
  }

  async function remove(id) {
    try {
      await tablesDB.deleteRow({
        databaseId: IDEAS_DATABASE_ID,
        tableId: IDEAS_TABLE_ID,
        rowId: id
      });
      setIdeas((ideas) => ideas.filter((idea) => idea.$id !== id));
      await init();
    } catch (err) {
      console.log(err)
    }
  }

  async function init() {
    try {
      const response = await tablesDB.listRows({
        databaseId: IDEAS_DATABASE_ID,
        tableId: IDEAS_TABLE_ID,
        queries: [Query.orderDesc("$createdAt"), Query.limit(10)]
      });
      setIdeas(response.rows);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <IdeasContext.Provider value={{ current: ideas, add, remove }}>
      {props.children}
    </IdeasContext.Provider>
  );
}
