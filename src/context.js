import React, {
  useContext, useState, useMemo, useEffect,
} from 'react'
import Client from "./Contentful";

const UsersContext = React.createContext()

// eslint-disable-next-line react/prop-types
function UsersContextProvider({ children }) {
  const [state, setState] = useState({})

  const formatData = (items) => items.map((item) => {
    const { id } = item.sys;
    const image = item.fields.image.fields.file.url
    return { ...item.fields, id, image }
  })

  const getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "projects",
        order: "sys.createdAt",
      })
      // console.log("response.items==>", response.items)
      const projects = formatData(response.items)
      setState(projects)
      // console.log("state=>>", state)
    } catch (error) {
      console.log(error)
    }
  }

  const resultOfFunction = useMemo(() => ({
    state, setState, getData,
  }), [state])

  useEffect(() => {
    (async function resolve() { await getData(); }());
  }, []);

  return (
    <UsersContext.Provider value={resultOfFunction}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUsersContext = () => useContext(UsersContext)

export default UsersContextProvider
