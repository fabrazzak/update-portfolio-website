'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const VersionContext = createContext({ version: 'v1', switchVersion: () => {} })

export function VersionProvider({ children }) {
  const [version, setVersion] = useState('v1')

  useEffect(() => {
    const saved = localStorage.getItem('portfolioVersion')
    if (saved === 'v1' || saved === 'v2') setVersion(saved)
  }, [])

  const switchVersion = (v) => {
    setVersion(v)
    localStorage.setItem('portfolioVersion', v)
  }

  return (
    <VersionContext.Provider value={{ version, switchVersion }}>
      {children}
    </VersionContext.Provider>
  )
}

export const useVersion = () => useContext(VersionContext)
