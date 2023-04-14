export interface IBodyList {
  parent: string;
  children: string[];
}

export class SlideData {
  title: string = 'New Title';
  bodyHTML: string = '<p>New Body</p>';
  imgs: string[] = [];

  bodyIsHTML: boolean = true;

  bodyText: string | null = null;
  bodyList: IBodyList[] = [];

  constructor(slide?: Partial<SlideData>) {
    Object.assign(this, slide);
  }
}