import React, { createContext, useContext, useRef, useState } from 'react';
import { IStylingObject } from '../types/object';

interface ISelectedObjectProviderProps {
  children: React.ReactNode
}

interface IProviderValue {
  stylingObject?: IStylingObject | null,
  setStylingObject?: (object: IStylingObject | null) => void,
  fabricObjects?: fabric.Canvas[],
  setFabricObjects?: (objects: fabric.Canvas[]) => void
}

export const SelectedObjectContext = createContext<IProviderValue>({});
export const useSelectedObjectContext = () => useContext<IProviderValue>(SelectedObjectContext)

export default function SelectedObjectProvider({ children }: ISelectedObjectProviderProps) {
  const [ fabricObjects, setFabricObjects ] = useState<fabric.Canvas[]>([])
  const [ stylingObject, setStylingObject ] = useState<IStylingObject | null>();

  const providerValue: IProviderValue = ({
    stylingObject,
    setStylingObject,
    fabricObjects,
    setFabricObjects
  })

  return (
    <SelectedObjectContext.Provider value={providerValue}>
      {children}
    </SelectedObjectContext.Provider>
  )
}
