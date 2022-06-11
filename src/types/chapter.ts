export interface IChapter {
  collaborators?: string[],
  fileOIDs?: string[],
  filesMap?: Record<string, IChapterPage>,
  name?: string,
  title?: string
}

export interface IChapterPage {
  bubbleIDs?: any,
  bubblesMap?: any,
  name?: string,
  objectOIDs?: any,
  objectsMap?: any,
  oid: string,
  originalImageS3Key?: string | null,
  size?: {
    width: number,
    height: number
  },
  storageFileUUID?: string | null,
  translateImage?: {
    url: string
  },
  typesetImage?: {
    size?: {
      width: number,
      height: number
    },
    url: string
  }
}