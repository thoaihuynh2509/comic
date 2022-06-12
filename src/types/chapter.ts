export interface IChapter {
  title: string;
  name: string;
  fileOIDs: string[];
  filesMap: Record<string, IChapterFile>;
  collaborators: string[];
}

export interface IChapterFile {
  oid: string;
  name: string;
  objectOIDs: string[];
  objectsMap: Record<string, IFileObject>;
  bubbleIDs: string[];
  bubblesMap: Record<string, IFileBubble>;
  translateImage: TranslateImage;
  typesetImage: TypesetImage;
  size: ISizeClass;
  originalImageS3Key: null;
  storageFileUUID: null;
}

export interface IFileObject {
  oid: string;
  type: ObjectType;
  order: number;
  version: string;
  visible: boolean;
  transform: ITransform;
  translation: {
    value: IPurpleValue;
  };
  transcription: ITranscription;
  opacity?: number;
  bubbleMaskID?: BubbleMaskID;
}

export interface IFileBubble {
  id: string;
  url: string;
  frame: IFrame;
  type: BubbleType;
}

export interface IFrame {
  x: number;
  y: number;
  width: number;
  height: number;
}


export interface ITranscription {
  box: ICenter[];
  value: string;
}

export interface ICenter {
  x: number;
  y: number;
}

export interface ITransform {
  size: ISizeClass;
  center: ICenter;
  rotation: number;
  scale?: ICenter;
}

export interface ISizeClass {
  width: number;
  height: number;
}

export interface IPurpleValue {
  style: ITentacledStyle;
  children: IPurpleChild[];
}

export interface IPurpleChild {
  style: IFluffyStyle;
  children: IFluffyChild[];
}

export interface IFluffyStyle {
  align: Align;
}

export interface IFluffyChild {
  style: IPurpleStyle;
  children: string;
}

export interface IPurpleStyle {
  font: IPurpleFont;
  color: PurpleColor;
  shadow: BubblesMap;
  stroke: PurpleStroke;
  lineSpacing: number;
}

export interface IPurpleFont {
  size: number;
  style: StyleEnum;
  family: Family;
  weight: Weight;
}


export interface TranslateImage {
  url: string;
}

export interface TypesetImage {
  url: string;
  size: ISizeClass;
}

// Types

export enum BubbleType {
  Bubble = "bubble",
}

export enum BubbleMaskID {
  Empty = "",
  PrepMasksSourceNEWChapter1Page00005Jpg4MaskPNG = "/prep/masks/source/NEW Chapter 1/page_00005.jpg/4.mask.png",
  PrepMasksSourceNEWChapter1Page00012Jpg3MaskPNG = "/prep/masks/source/NEW Chapter 1/page_00012.jpg/3.mask.png",
  PrepMasksSourceNEWChapter1Page00017Jpg5MaskPNG = "/prep/masks/source/NEW Chapter 1/page_00017.jpg/5.mask.png",
}

export enum PurpleColor {
  Fafafa = "#fafafa",
  Ffffff = "#ffffff",
  The000000 = "#000000",
  The101010 = "#101010",
  The1C1C1C = "#1c1c1c",
  The1F1F1F = "#1f1f1f",
  The7F7A7A = "#7f7a7a",
}

export enum Family {
  AlexCoverWorld = "Alex Cover World",
  AlexJapWorld = "Alex Jap World",
  AlexMildWorld = "Alex Mild World",
  AlexVinahouseWorld = "Alex Vinahouse World",
  AlitaBrush = "Alita Brush",
  ArchitectsDaughter = "Architects Daughter",
  Atma = "Atma",
  BaksoSapi = "Bakso Sapi",
  CoveredByYourGrace = "Covered By Your Grace",
  DenkOne = "Denk One",
  GregHand = "Greg Hand",
  KomikaTextKaps = "Komika Text Kaps",
}

export enum StyleEnum {
  Italic = "italic",
  Normal = "normal",
}

export enum Weight {
  Bold = "bold",
  Normal = "normal",
}

export interface BubblesMap {}

export interface PurpleStroke {
  color: FluffyColor;
  width: number;
  enabled: boolean;
}

export enum FluffyColor {
  C2C2C2 = "#c2c2c2",
  Fe70AE = "#fe70ae",
  Ffffff = "#ffffff",
  The030303 = "#030303",
}


export enum Align {
  Center = "center",
  Left = "left",
}

export interface ITentacledStyle {
  autoSizing: AutoSizing;
  verticalAlign: VerticalAlign;
}

export interface AutoSizing {
  width: boolean;
  height: boolean;
}

export enum VerticalAlign {
  Middle = "middle",
  Top = "top",
}

export enum ObjectType {
  Text = "text",
}

