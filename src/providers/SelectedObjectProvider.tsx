import React, { createContext, useContext, useRef, useState } from 'react';
import { IStylingObject } from '../types/object';

interface ISelectedObjectProviderProps {
  children: React.ReactNode
}

interface IProviderValue {
  stylingObject?: IStylingObject | null,
  setStylingObject?: (object: IStylingObject | null) => void,
  fabricObject?: fabric.Canvas,
  setFabricObject?: (objects: fabric.Canvas) => void
}

export const SelectedObjectContext = createContext<IProviderValue>({});
export const useSelectedObjectContext = () => useContext<IProviderValue>(SelectedObjectContext)

export default function SelectedObjectProvider({ children }: ISelectedObjectProviderProps) {
  const [ fabricObject, setFabricObject ] = useState<fabric.Canvas>()
  const [ stylingObject, setStylingObject ] = useState<IStylingObject | null>();

  const providerValue: IProviderValue = ({
    stylingObject,
    setStylingObject,
    fabricObject,
    setFabricObject
  })

  return (
    <SelectedObjectContext.Provider value={providerValue}>
      {children}
    </SelectedObjectContext.Provider>
  )
}
