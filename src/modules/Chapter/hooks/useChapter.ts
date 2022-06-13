import { useEffect, useState } from "react"
import { getChapter } from "../../../services"
import { IChapterFile } from "../../../types/chapter"

interface IUseChapterReturn {
  files: IChapterFile[]
}

export const useChapter = (): IUseChapterReturn => {
  const [ files, setFiles ] = useState<IChapterFile[]>([])

  useEffect(() => {
    (async() => {
      const response = await getChapter();
      if (response.filesMap) {
        setFiles(Object.values(response.filesMap))
      }
    })();
  }, [])

  return {
    files
  }
}