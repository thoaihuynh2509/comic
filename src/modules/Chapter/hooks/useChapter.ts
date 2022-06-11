import { useEffect, useState } from "react"
import { getChapter } from "../../../services"
import { IChapterPage } from "../../../types/chapter"

export const useChapter = () => {
  const [ pages, setPages ] = useState<IChapterPage[]>([])

  useEffect(() => {
    (async() => {
      const response = await getChapter();
      if (response.filesMap) {
        setPages(Object.values(response.filesMap))
      }
    })();
  }, [])

  return {
    pages
  }
}