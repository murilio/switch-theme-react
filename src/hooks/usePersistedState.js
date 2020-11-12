import { useState, useEffect } from 'react'

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if(storageValue) {
      return storageValue
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}
